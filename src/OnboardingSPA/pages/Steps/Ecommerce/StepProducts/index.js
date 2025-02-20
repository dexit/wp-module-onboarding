import { CheckboxControl, RadioControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SIDEBAR_LEARN_MORE, VIEW_NAV_ECOMMERCE_STORE_INFO } from '../../../../../constants';
import NavCardButton from '../../../../components/Button/NavCardButton';
import CardHeader from '../../../../components/CardHeader';
import CommonLayout from '../../../../components/Layouts/Common';
import NeedHelpTag from '../../../../components/NeedHelpTag';
import NewfoldLargeCard from '../../../../components/NewfoldLargeCard';
import { EcommerceStateHandler } from '../../../../components/StateHandlers';
import { store as nfdOnboardingStore } from '../../../../store';
import content from '../content.json';

const StepProducts = () => {
	const {
		setDrawerActiveView,
		setSidebarActiveView,
		setCurrentOnboardingData,
	} = useDispatch(nfdOnboardingStore);

	let currentData = useSelect((select) =>
		select(nfdOnboardingStore).getCurrentOnboardingData()
	);
	let productInfo = currentData.storeDetails.productInfo;
	useEffect(() => {
		setSidebarActiveView( SIDEBAR_LEARN_MORE );
		setDrawerActiveView(VIEW_NAV_ECOMMERCE_STORE_INFO);
	}, []);

	const handleCheckbox = (value, checked) =>
		setCurrentOnboardingData({
			storeDetails: {
				...currentData.storeDetails,
				productInfo: {
					...productInfo,
					product_types: checked
						? [...productInfo?.product_types, value]
						: productInfo?.product_types.filter((product) => product !== value),
				},
			},
		});

	const handleProductCount = (count) =>
		setCurrentOnboardingData({
			storeDetails: {
				...currentData.storeDetails,
				productInfo: { ...productInfo, product_count: count },
			},
		});


	return (
        <EcommerceStateHandler>
		<CommonLayout isBgPrimary isCentered>
			<NewfoldLargeCard className='ecommerce-step' >
				<div className='nfd-onboarding-experience-step onboarding-product-step onboarding-ecommerce-step'>
					<div className='nfd-card-heading center'>
						<CardHeader
							heading={__(content.stepProductsHeading, 'wp-module-onboarding')}
							subHeading={__(content.stepProductsSubHeading, 'wp-module-onboarding')}
						/>
					</div>
					<div className='nfd-product-step-options'>
						{content.productOptions.map((product) => (
							<CheckboxControl
								key={product.value}
								checked={productInfo.product_types.includes(
									product.value
								)}
								label={product.content}
								onChange={(e) => handleCheckbox(product.value, e)}
							/>
						))}
					</div>
					<div className='step-product-numbers'>
						<span style={{ fontSize: '16px' }}>
							{__(content.stepProductsQuestion, 'wp-module-onboarding')}
						</span>
						<RadioControl
							className='components-radio-control__input'
							selected={productInfo?.product_count}
							options={content.stepProductNumbers.map((option) => {
								return {
									label: __(option.content, 'wp-module-onboarding'),
									value: __(option.value, 'wp-module-onboarding'),
								};
							})}
							onChange={handleProductCount}
						/>
					</div>
					<NavCardButton text={__(content.buttonText, 'wp-module-onboarding')} />
					<NeedHelpTag />
				</div>
			</NewfoldLargeCard>
		</CommonLayout>
        </EcommerceStateHandler>
	);
};

export default StepProducts;
