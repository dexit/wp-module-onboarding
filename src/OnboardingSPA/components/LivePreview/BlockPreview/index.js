import { useSelect } from '@wordpress/data';
import { BlockEditorProvider } from '@wordpress/block-editor';
import { parse } from '@wordpress/blocks';
import { useEffect, useState, memo } from '@wordpress/element';

import AutoHeightBlockPreview from './auto';
import { useGlobalStylesOutput } from '../../../utils/global-styles/use-global-styles-output';
import { store as nfdOnboardingStore } from '../../../store';
import Animate from '../../Animate';

/**
 * Renders themed WordPress block grammer.
 * [Note] Please do not remove any commented code, this will be used later to update our preview
 *
 * @param             root0
 * @param             root0.blockGrammer
 * @param             root0.viewportWidth
 * @param             root0.styling
 * @param             root0.previewSettings
 * @param             root0.setIsLoadingParent
 * @param             root0.skeletonLoadingTime
 * @property {string} blockGrammer              WordPress block grammer.
 * @property {number} viewportWidth             Set viewport width for the AutoHeightBlockPreview component.
 * @property {string} styling                   The type of styling to be applied (small, large, custom).
 */
const BlockPreview = ( {
	blockGrammer,
	viewportWidth = 1300,
	styling = 'large',
	setIsLoadingParent = false,
	previewSettings = false,
	skeletonLoadingTime = 2500,
} ) => {
	const [ blocks, setBlocks ] = useState();
	const [ settings, setSettings ] = useState();
	const [ loading, setIsLoading ] = useState( true );

	useEffect( () => {
		if ( skeletonLoadingTime ) {
			const timer = setTimeout( () => {
				setIsLoading( false );
				if ( setIsLoadingParent ) {
					setIsLoadingParent( false );
				}
			}, skeletonLoadingTime );
			return () => clearTimeout( timer );
		}
		setIsLoading( false );
		if ( setIsLoadingParent ) {
			setIsLoadingParent( false );
		}
	}, [ skeletonLoadingTime ] );

	const { currentData, storedPreviewSettings } = useSelect( ( select ) => {
		return {
			currentData:
				select( nfdOnboardingStore ).getCurrentOnboardingData(),
			storedPreviewSettings:
				select( nfdOnboardingStore ).getPreviewSettings(),
		};
	}, [] );

	useEffect( () => {
		if ( previewSettings ) {
			setSettings(
				useGlobalStylesOutput( previewSettings, storedPreviewSettings )
			);
		} else {
			setSettings( storedPreviewSettings );
		}
	}, [] );

	useEffect( () => {
		setBlocks( parse( blockGrammer ) );
	}, [ blockGrammer ] );

	useEffect( () => {
		if ( ! previewSettings ) {
			setSettings( storedPreviewSettings );
		}
	}, [ storedPreviewSettings, currentData ] );

	const SkeletonLivePreview = memo( () => {
		return (
			<div className="live-preview__container--is-skeleton">
				<div className="live-preview__container--is-skeleton--box live-preview__container--is-skeleton--box-header">
					<Animate
						type={ 'shine' }
						className="live-preview__container--is-skeleton--shimmer"
					></Animate>
				</div>
				<div className="live-preview__container--is-skeleton--box live-preview__container--is-skeleton--box-body-1" />
				<div className="live-preview__container--is-skeleton--box live-preview__container--is-skeleton--box-body-2" />
				<div className="live-preview__container--is-skeleton--box live-preview__container--is-skeleton--box-footer" />
			</div>
		);
	} );

	return (
		<div className={ `live-preview__container-${ styling }` }>
			{ loading && <SkeletonLivePreview /> }
			{ settings && (
				<BlockEditorProvider
					value={ blocks }
					settings={ settings.settings }
				>
					<AutoHeightBlockPreview
						viewportWidth={ viewportWidth }
						settings={ settings.settings }
					/>
				</BlockEditorProvider>
			) }
		</div>
	);
};

const BlockPreviewMemo = memo( BlockPreview );
export default BlockPreviewMemo;
