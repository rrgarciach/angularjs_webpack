'use strict';

export default function todoGroupService(todoService) {

	return {
		addTodo
	};

	function addTodo(group, todo) {
		return group.push(todo);
	}

	function factory(todos) {
		return todos || []
	}

}
