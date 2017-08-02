'use strict';

export default class Todo {

	// ES6 setters and getters are helpful for encapsulation
	set title(str) {
		this.title = str || 'no title was given';
	}

	get title(str) {
		return this.title;
	}
	
}
