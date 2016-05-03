var Todo = require('./app.js');
var Helpers = require('./helpers.js');

let todo;
const setView = () => todo.controller.setView(document.location.hash);

Helpers.$on(window, 'load', () => {
    todo = new Todo('todos-vanillajs');
    setView();
});

Helpers.$on(window, 'hashchange', setView);