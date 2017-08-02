'use strict';

import todoService from '../services/todo.service';

export default {

	templateUrl: './todo.html',

	controllerAs: 'vm',

	controller: function ($scope, $location, filterFilter, todoService) {

		let vm = this;

		let todos = vm.todos = todoService.getAll();

		vm.newTodo = '';
		vm.editedTodo = null;

		$scope.$watch('todos', function () {
			vm.remainingCount = filterFilter(todos, { completed: false }).length;
			vm.doneCount = todos.length - vm.remainingCount;
			vm.allChecked = !vm.remainingCount;
			todoService.save(todos);
		}, true);

		if ($location.path() === '') {
			$location.path('/');
		}

		vm.location = $location;

		$scope.$watch('vm.location.path()', function (path) {
			vm.statusFilter = (path === '/active') ?
				{ completed: false } : (path === '/completed') ?
				{ completed: true } : null;
		});

		vm.addTodo = function () {
			const newTodo = vm.newTodo.trim();

			if (!newTodo.length) {
				return;
			}

			todos.push({
				title: newTodo,
				completed: false
			});

			vm.newTodo = '';
		};


		vm.editTodo = function (todo) {
			vm.editedTodo = todo;
			// Clone the original todo to restore it on demand.
			vm.originalTodo = angular.copy(todo);
		};


		vm.doneEditing = function (todo) {
			vm.editedTodo = null;
			todo.title = todo.title.trim();

			if (!todo.title) {
				vm.removeTodo(todo);
			}
		};

		vm.revertEditing = function (todo) {
			vm.todos[vm.todos.indexOf(todo)] = vm.originalTodo;
			vm.doneEditing(vm.originalTodo);
		};

		vm.removeTodo = function (todo) {
			vm.todos.splice(todos.indexOf(todo), 1);
		};


		vm.clearDoneTodos = function () {
			vm.todos = todos = vm.todos.filter(function (val) {
				return !val.completed;
			});
		};


		vm.markAll = function (done) {
			vm.todos.forEach(function (todo) {
				todo.completed = done;
			});
		};

	}

}
