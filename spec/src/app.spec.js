let Todo = require('../../src/app.js');
let Helpers = require('../../src/helpers.js');

describe('something', function() {
    let todo;

    beforeEach(() => {
        spyOn(Helpers, '$on');
        spyOn(Helpers, '$delegate');
        todo = new Todo('This is test name');
    });

    it('should initialize the app properly', function() {
        expect(todo.storage).toBeDefined();
        expect(todo.model).toBeDefined();
        expect(todo.template).toBeDefined();
        expect(todo.view).toBeDefined();
        expect(todo.controller).toBeDefined();
    });
});