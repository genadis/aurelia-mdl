import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('ButtonComponent', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('mdl')
      .inView('<button mdl="button">Button</button>')
      .boundTo({});
  });

  it('should upgrade the button with MaterialButton', done => {
    component.create(bootstrap).then(() => {
      expect(component.element.MaterialButton).toBeDefined();
      done();
    }).catch(e => console.log(e.toString()));
  });

  afterEach(() => {
    component.dispose();
  });
});
