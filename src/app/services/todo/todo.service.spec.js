'use strict';

import todoService from '../service/todo.service';

describe('Service: todoService', function () {

	let localStorageServiceMock = {
		get: () => {},
		put: todos => {}
	};

	let service = todoService(localStorageServiceMock);

	describe('method: getAll', function () {

		it('should call get method from localStorageService', function () {
			spyOn(localStorageServiceMock, 'get');

			service.getAll();

			expect(localStorageServiceMock.get).toHaveBeenCalled();
		});

	});

});
