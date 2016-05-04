let Store = require('./store.js');
let Model = require('./model.js');
let Template = require('./template.js');
let View = require('./view.js');
let Controller = require('./controller.js');
let Helpers = require('./helpers.js');

'use strict';

module.exports = class Todo {
	/**
	 * Init new Todo List
	 * @param  {string} The name of your list
	 */
	constructor(name) {
		this.storage = new Store(name);
		this.model = new Model(this.storage);

		this.template = new Template();
		this.view = new View(this.template);

		this.controller = new Controller(this.model, this.view);
	}
};