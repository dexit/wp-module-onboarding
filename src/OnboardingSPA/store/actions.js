import { constrols, dispatch } from '@wordpress/data';

import { STORE_NAME } from './constants';
import { store as interfaceStore } from '@wordpress/interface';
import { store as noticesStore } from '@wordpress/notices';

/**
 * Receives `window.nfdOnboarding` and sets migrated: true.
 *
 * `url` is left to keep __webpack_public_path__ decoupled from store.
 *
 * @param {*} runtime
 * @returns
 */
export function setRuntime(runtime) {
	window.nfdOnboarding = { url: runtime.url, migrated: true };
	return {
		type: 'SET_RUNTIME',
		runtime: runtime,
	};
}

/**
 * Sets the active view within the Drawer render slot.
 *
 * @param {*} view
 * @returns
 */
export function setDrawerActiveView(view) {
	return {
		type: 'SET_DRAWER_ACTIVE_VIEW',
		view,
	};
}

/**
 * Opens the off-canvas drawer on left of viewport.
 * @param {*} isOpen
 * @returns
 */
export function setIsDrawerOpened(isOpen) {
	return {
		type: 'SET_DRAWER_OPENED',
		isOpen,
	};
}

/**
 * Accepts a string path to set the active step.
 *
 * NOTE: does not have any navigation side-effect.
 *
 * @param {*} path
 * @returns
 */
export function setActiveStep(path) {
	return {
		type: 'SET_ACTIVE_STEP',
		path,
	};
}

/**
 * Updates general settings.
 *
 * @param {*} settings
 * @returns
 */
export function updateSettings(settings) {
	return {
		type: 'UPDATE_SETTINGS',
		settings,
	};
}