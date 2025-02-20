import Animate from '../../../../Animate';

/** Skeleton Structure for the SideBar */
const SidebarSkeleton = () => {
	return (
		<div className="sidebar-skeleton">
			<div className="sidebar-skeleton-header">
				<div className="sidebar-skeleton-header-top">
					<Animate
						type={ 'shine-placeholder' }
						className="shimmer sidebar-skeleton-header-top-profile"
					/>
					<Animate
						type={ 'shine-placeholder' }
						className="shimmer sidebar-skeleton-header-top-header"
					/>
				</div>
				<div className="sidebar-skeleton-header-below">
					<Animate
						type={ 'shine-placeholder' }
						className="shimmer sidebar-skeleton-header-below-subheading-1"
					/>
					<Animate
						type={ 'shine-placeholder' }
						className="shimmer sidebar-skeleton-header-below-subheading-2"
					/>
				</div>
			</div>
			<div className="sidebar-skeleton-divider" />
			<div className="sidebar-skeleton-body">
				<Animate
					type={ 'shine-placeholder' }
					className="shimmer sidebar-skeleton-body-image"
				/>
			</div>
			<div className="sidebar-skeleton-divider" />
			<div className="sidebar-skeleton-footer">
				<Animate
					type={ 'shine-placeholder' }
					className="shimmer sidebar-skeleton-footer-line-1"
				/>
				<Animate
					type={ 'shine-placeholder' }
					className="shimmer sidebar-skeleton-footer-line-2"
				/>
				<Animate
					type={ 'shine-placeholder' }
					className="shimmer sidebar-skeleton-footer-line-3"
				/>
				<Animate
					type={ 'shine-placeholder' }
					className="shimmer sidebar-skeleton-footer-line-4"
				/>
				<Animate
					type={ 'shine-placeholder' }
					className="shimmer sidebar-skeleton-footer-line-5"
				/>

				<div className="sidebar-skeleton-footer-buttons">
					<div className="sidebar-skeleton-footer-buttons-button-1">
						<Animate
							type={ 'shine-placeholder' }
							className="shimmer-1 sidebar-skeleton-footer-buttons-button-2"
						/>
					</div>
					<Animate
						type={ 'shine-placeholder' }
						className="shimmer-1 sidebar-skeleton-footer-buttons-button-3"
					/>
				</div>
			</div>
		</div>
	);
};

export default SidebarSkeleton;
