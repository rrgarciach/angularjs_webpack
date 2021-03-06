'use strict';
 
export default function ($timeout) {

	return function (scope, elem, attrs) {

		scope.$watch(attrs.todoFocus, function (newval) {
			if (newval) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
		});
		
	};

}
