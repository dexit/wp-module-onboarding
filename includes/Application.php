<?php
namespace NewfoldLabs\WP\Module\Onboarding;

use NewfoldLabs\WP\Module\Onboarding\RestApi\RestApi;
use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\Module\Onboarding\Data\Options;
use NewfoldLabs\WP\Module\Onboarding\TaskManagers\PluginInstallTaskManager;
use function NewfoldLabs\WP\ModuleLoader\container;

/**
 * Primary instantiation of Onboarding Application.
 */
final class Application {
	
	/**
	 * @var Container
	 */
	protected $container;

	protected $args;

	/**
	 * Setup module container and register functionality using WordPress Action Hooks.
	 *
	 * @param Container $container - Newfold Labs Module Container
	 */
	public function __construct( Container $container ) {
		$this->container = $container;

		$defaults = array(
			'option_name'       => 'nfd_onboarding',
			'admin_screen_id'   => container()->plugin()->id,
			'admin_app_url'     => \admin_url( 'admin.php?page=nfd-onboarding' ),
		);

		$this->args = \wp_parse_args(
			$container->has('onboarding') ? $container['onboarding'] : array(),
			$defaults
		);
		
		if ( is_readable( NFD_ONBOARDING_DIR . '/vendor/autoload.php' ) ) {
			require_once NFD_ONBOARDING_DIR . '/vendor/autoload.php';
		} else {
			return;
		}

		\do_action( 'nfd_module_onboarding_pre_init' );

		\add_action( 'login_redirect', array( LoginRedirect::class, 'handle_redirect' ), 10, 3 );
		\add_filter(
			Options::get_option_name( 'redirect' ) . '_disable',
			array( LoginRedirect::class, 'remove_handle_redirect_action' )
		);

		new RestAPI();

		// The manager (WP_Cron) comes to life only when there are plugins to be installed.
		if ( ! empty( get_option( Options::get_option_name( 'plugin_install_queue' ), array() ) ) ) {
			 new PluginInstallTaskManager();
		}

		if ( defined( '\\WP_CLI' ) && \WP_CLI ) {
			new WP_CLI();
		}

		if ( Permissions::is_authorized_admin() ) {
			new WP_Admin();
		}

		\do_action( 'nfd_module_onboarding_post_init' );
	}
} 
// END \NewfoldLabs\WP\Module\Onboarding\Application
