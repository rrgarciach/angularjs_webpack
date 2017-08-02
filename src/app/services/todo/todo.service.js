'use strict';

import Todo from '../models/todo.model';

export default function todoService(localStorageService) {

	return {
		getAll,
		save
	};

	function getAll() {
		return localStorageService.get();
	}

	function save(todos) {
		return localStorageService.put(todos);
	}

}
