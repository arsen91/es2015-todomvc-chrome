let Model = require('../../src/model.js');
let Store = require('../../src/store.js');
Store = new Store();
Model = new Model(Store);

describe('Model component', () => {
    it('should init storage for model', () => {
        expect(Model.storage).toBe(Store);
    });

    it('should create new item in storage when Model.save is called', () => {
        let title = 'Test title';
        let spyCb = jasmine.createSpy('spyCb');
        spyOn(Store, 'save');

        Model.create(title, spyCb);

        expect(Store.save).toHaveBeenCalledWith(jasmine.objectContaining({
            title: title
        }), spyCb);
    });

    it('should query storage with callback if Model.read is called with function', () => {
        let spyCb = jasmine.createSpy();
        spyOn(Store, 'findAll');

        Model.read(spyCb);

        expect(Store.findAll).toHaveBeenCalledWith(spyCb);
    });

    it('should query storage with id if Model.read is called with string or number', () => {
        let spyCb = jasmine.createSpy();
    });
});