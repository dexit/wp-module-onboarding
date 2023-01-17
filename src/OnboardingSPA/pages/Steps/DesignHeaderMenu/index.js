import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

import CommonLayout from '../../../components/Layouts/Common';
import { DesignStateHandler } from '../../../components/StateHandlers';
import {
	LivePreview,
	GlobalStylesProvider,
} from '../../../components/LivePreview';

import {
	SIDEBAR_LEARN_MORE,
	VIEW_DESIGN_HEADER_MENU,
} from '../../../../constants';
import { store as nfdOnboardingStore } from '../../../store';

const StepDesignHeaderMenu = () => {
	const { headerMenu } = useSelect( ( select ) => {
		return {
			headerMenu: select( nfdOnboardingStore ).getHeaderMenuData(),
		};
	}, [] );

	const [ pattern, setPattern ] = useState();

	const { setDrawerActiveView, setSidebarActiveView } =
		useDispatch( nfdOnboardingStore );

	useEffect( () => {
		setPattern( headerMenu );
	}, [ headerMenu ] );

	useEffect( () => {
		setSidebarActiveView( SIDEBAR_LEARN_MORE );
		setDrawerActiveView( VIEW_DESIGN_HEADER_MENU );
	}, [] );

	return (
		<DesignStateHandler>
			<GlobalStylesProvider>
				<CommonLayout className="theme-header-menu-preview">
					<div className="theme-header-menu-preview__title-bar">
						<div className="theme-header-menu-preview__title-bar__browser">
							<span className="theme-header-menu-preview__title-bar__browser__dot"></span>
							<span className="theme-header-menu-preview__title-bar__browser__dot"></span>
							<span className="theme-header-menu-preview__title-bar__browser__dot"></span>
						</div>
					</div>
					<div className="theme-header-menu-preview__live-preview-container">
						{ pattern && (
							<LivePreview
								blockGrammer={ pattern }
								styling={ 'custom' }
								viewportWidth={ 1300 }
							/>
						) }
					</div>
				</CommonLayout>
			</GlobalStylesProvider>
		</DesignStateHandler>
	);
};

export default StepDesignHeaderMenu;
