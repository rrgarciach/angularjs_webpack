'use strict';

import todoGroupService from '../service/todoGroup.data.service';

describe('Service: todoGroupService', function () {

	let todoServiceMock = {
		getAll: () => {},
		save: todos => {}
	};

	let service = todoGroupService(todoServiceMock);

	describe('method: addTodo', function () {

		it('should add a todo to group', function () {
			const todoTitle = 'dummy todo';
			const todo = {title: todoTitle};
			let group = [];

			const newGroup = service.addTodo(group, todo);

			expect(newGroup.length).toBe(1);
			expect(newGroup[0].title).toBe(todoTitle);
		});

	});

});
