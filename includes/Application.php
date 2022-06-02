<?php
namespace NewfoldLabs\WP\Module\Onboarding;
use NewfoldLabs\WP\ModuleLoader\Container;
use function NewfoldLabs\WP\ModuleLoader\container;

/**
 * Primary instantiation of Onboarding Application.
 */
final class Application {
    /**
     * Setup module container and register functionality using WordPress Action Hooks.
     * 
     * @param Container $container - Newfold Labs Module Container
     */
    // public function __construct( Container $container ) {
    public function __construct() {
        // $this->container = $container;

        // $defaults = array(
        //     'option_name'       => 'nfd_onboarding',
        //     'admin_screen_id'   => container()->plugin()->id,
        //     'admin_app_url'     => \admin_url( 'admin.php?page=nfd-onboarding' ),
        // );
        
        // $this->args = \wp_parse_args( 
        //     $container->has('onboarding') ? $container['onboarding'] : array(), 
        //     $defaults 
        // );
        if ( is_readable( NFD_ONBOARDING_DIR . '/vendor/autoload.php' ) ) {
            require_once NFD_ONBOARDING_DIR . '/vendor/autoload.php';
        } else {
            return;
        }

        \do_action( 'nfd_module_onboarding_pre_init' );

        new WP_API();

        if ( defined('\\WP_CLI') && \WP_CLI ) {
            new WP_CLI();
        }

        if ( Permissions::is_authorized_admin() ) {
            new WP_Admin();
        }

        \do_action( 'nfd_module_onboarding_post_init' );
    }
} // END \NewfoldLabs\WP\Module\Onboarding\Application