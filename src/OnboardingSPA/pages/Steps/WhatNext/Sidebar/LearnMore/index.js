import { useSelect } from '@wordpress/data';
import { lazy } from '@wordpress/element';

import { store as nfdOnboardingStore } from '../../../../../store';
import getContents from './contents';

const IllustrationPanel = lazy( () =>
	import(
		'../../../../../components/Sidebar/components/LearnMore/IllustrationPanel'
	)
);
const InfoPanel = lazy( () =>
	import( '../../../../../components/Sidebar/components/LearnMore/InfoPanel' )
);
const HelpPanel = lazy( () =>
	import( '../../../../../components/Sidebar/components/LearnMore/HelpPanel' )
);
const ButtonWhite = lazy( () =>
	import( '../../../../../components/Button/ButtonWhite' )
);
const SupportLink = lazy( () =>
	import(
		'../../../../../components/Sidebar/components/LearnMore/SupportLink'
	)
);
const StepIntroPanel = lazy( () =>
	import(
		'../../../../../components/Sidebar/components/LearnMore/StepIntroPanel'
	)
);

const LearnMore = () => {

	const { brandName, techSupportLink, fullServiceCreativeTeamLink } = useSelect( ( select ) => {
		return {
			brandName: select( nfdOnboardingStore ).getNewfoldBrandName(),
			techSupportLink: select( nfdOnboardingStore ).getTechSupportUrl(),
			fullServiceCreativeTeamLink: select( nfdOnboardingStore ).getfullServiceCreativeTeamUrl(),
		};
	} );

	const content = getContents( brandName, techSupportLink, fullServiceCreativeTeamLink );

	return (
		<div className="nfd-onboarding-sidebar-learn-more__what-next">
			<StepIntroPanel
				heading={ content.introduction.heading }
				subheading={ content.introduction.subheading }
				icon={ content.introduction.icon }
			/>
			<IllustrationPanel
				cssIcon={ content.illustration.icon }
				baseClassName={ 'nfd-onboarding-sidebar-learn-more__what-next' }
				backgroundPosition = { 'right bottom' }
			/>
			<InfoPanel
				headingWithDescriptions={
					content.information.headingWithDescriptions
				}
			/>
			<HelpPanel>
				<ButtonWhite
					text={ content.help.fullService.text }
					onClick={ () =>
						( window.open( content.help.fullService.link, '_blank' ) )
					}
				/>
				<SupportLink
					text={ content.help.support.text }
					link={ content.help.support.link }
				/>
			</HelpPanel>
		</div>
	);
};

export default LearnMore;
