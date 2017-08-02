'use strict';

export default function localStorageService(localStorage) {

	const STORAGE_ID = 'todos-angularjs-requirejs';

	return {
		get,
		put
	};

	function get() {
		return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
	}

	function put(todos) {
		localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
	}

}
