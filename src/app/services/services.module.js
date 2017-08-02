'use strict';

import localStorageService from './data-source/local-storage.service';
import todoService from './todo/todo.service';

export default angular.module('services', [])
  .service('localStorageService', localStorageService)
  .service('todoService', todoService)
  .name;
