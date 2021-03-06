import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('TextFieldComponent', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('mdl')
      .inView('<div mdl="textfield"><input class="mdl-textfield__input" type="text" id="sample1"><label class="mdl-textfield__label" for="sample1">Text...</label></div>')
      .boundTo({});
  });

  it('should upgrade the button with MaterialTextfield', done => {
    component.create(bootstrap).then(() => {
      expect(component.element.MaterialTextfield).toBeDefined();
      done();
    }).catch(e => console.log(e.toString()));
  });

  afterEach(() => {
    component.dispose();
  });
});
