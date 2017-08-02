'use strict';

import todoEscape from './todoEscape';
import todoFocus from './todoFocus';

export default angular.module('directives', [])
	.directive('todoEscape', todoEscape)
	.directive('todoFocus', todoFocus)
	.name;
