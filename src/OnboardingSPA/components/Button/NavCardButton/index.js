import { useLocation, useNavigate } from 'react-router-dom';
import { useSelect } from '@wordpress/data';
import { store as nfdOnboardingStore } from '../../../store';
import Button from '../../Button';

import { setFlow } from '../../../utils/api/flow';
import { wpAdminPage, bluehostDashboardPage } from '../../../../constants';

/**
 * Navigation Button Component on Card
 *
 * @return
 */

const NavCardButton = ( { text, disabled } ) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { nextStep, currentData } = useSelect(
		( select ) => {
			return {
				nextStep: select( nfdOnboardingStore ).getNextStep(),
				currentData:
					select( nfdOnboardingStore ).getCurrentOnboardingData(),
			};
		},
		[ location.path ]
	);

	const isLastStep = null === nextStep || false === nextStep;

	async function saveDataAndExit() {
		if ( currentData ) {
			currentData.isComplete = new Date().getTime();
			setFlow( currentData );
		}
		//Redirect to Admin Page for normal customers
		// and Bluehost Dashboard for ecommerce customers
		const exitLink = exitToWordpressForEcommerce()
			? bluehostDashboardPage
			: wpAdminPage;
		window.location.replace( exitLink );
	}

	const exitToWordpressForEcommerce = () => {
		if ( window.nfdOnboarding.currentFlow === 'ecommerce' ) {
			return true;
		}
		return false;
	};

	const handleBtnClick = () => {
		return isLastStep ? saveDataAndExit() : navigate( nextStep.path );
	};

	return (
		<Button
			className="nfd-nav-card-button"
			text={ text }
			handleClick={ handleBtnClick }
			disabled={ disabled }
		/>
	);
};

export default NavCardButton;
