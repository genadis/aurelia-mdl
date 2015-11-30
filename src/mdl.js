import {inject, customAttribute} from 'aurelia-framework';
import {componentHandler} from 'encapsulated-mdl';
import {EventAggregator} from 'aurelia-event-aggregator';

let mdlTypes = {
  button: {
    html: ['mdl-button', 'mdl-js-button'],
    js: ['MaterialButton'],
    fct: [manageRipple]
  },
  textfield: {
    js: ['MaterialTextfield'],
    html: ['mdl-textfield', 'mdl-js-textfield'],
    fct: []
  },
  layout: {
    js: ['MaterialLayout'],
    html: ['mdl-layout', 'mdl-js-layout'],
    fct: [manageRipple]
  },
  menu: {
    js: ['MaterialMenu'],
    html: ['mdl-menu', 'mdl-js-menu'],
    fct: [manageRipple]
  },
  'data-table': {
    js: ['MaterialDataTable'],
    html: ['mdl-data-table', 'mdl-js-data-table'],
    fct: [manageRipple]
  },
  tabs: {
    js: ['MaterialTabs'],
    html: ['mdl-tabs', 'mdl-js-tabs'],
    fct: [manageRipple]
  },
  slider: {
    js: ['MaterialSlider'],
    html: ['mdl-slider', 'mdl-js-slider'],
    fct: []
  },
  tooltip: {
    js: ['MaterialTooltip'],
    html: ['mdl-tooltip'],
    fct: []
  },
  progress: {
    js: ['MaterialProgress'],
    html: ['mdl-progress', 'mdl-js-progress'],
    fct: []
  },
  spinner: {
    js: ['MaterialSpinner'],
    html: ['mdl-spinner', 'mdl-js-spinner'],
    fct: []
  },
  badge: {
    js: [],
    html: ['mdl-badge'],
    fct: []
  },
  switch: {
    js: ['MaterialSwitch'],
    html: ['mdl-switch', 'mdl-js-switch'],
    fct: [manageRipple]
  },
  radio: {
    js: ['MaterialRadio'],
    html: ['mdl-radio', 'mdl-js-radio'],
    fct: [manageRipple]
  },
  'icon-toggle': {
    js: ['MaterialIconToggle'],
    html: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],
    fct: [manageRipple]
  },
  checkbox: {
    js: ['MaterialCheckbox'],
    html: ['mdl-checkbox', 'mdl-js-checkbox'],
    fct: [manageRipple]
  },
  dialog: {
    js: ['MaterialDialog'],
    html: ['mdl-dialog', 'mdl-js-dialog'],
    fct: []
  },
  'mega-footer': {
    js: [],
    html: ['mdl-mega-footer'],
    fct: []
  },
  'mini-footer': {
    js: [],
    html: ['mdl-mini-footer'],
    fct: []
  },
  grid: {
    js: [],
    html: ['mdl-grid'],
    fct: []
  },
  snackbar: {
    js: ['MaterialSnackbar'],
    html: ['mdl-snackbar'],
    fct: []
  }

};

function manageRipple(element) {
  if (element.classList.contains('mdl-js-ripple-effect')) {
    componentHandler.upgradeElement(element, 'MaterialRipple');
  }
  /**
   * Causes issues: upgrades nested elements that has mdl-js-ripple-effect class before the nested elements upgraded, marking them as
   * MaterialRipple upgraded, when the nested elements upgraded, and ripple upgrade tries to take place, it doesn't because it is already
   * marked as upgraded.
   * eventually causing rippleElement to be null on MaterialRipple.
   * NOTE: "mdl-js-ripple-effect" should be only on upgradable material elements, not on non material nested elements.
  let elements = element.querySelectorAll('.mdl-js-ripple-effect');
  for (let el of elements) {
    componentHandler.upgradeElement(el, 'MaterialRipple');
  }*/
}

function upgradeElement(element, type) {
  let {html, fct, js} = (mdlTypes[type] || {});
  if (html) {
    for (let h of html) {
      element.classList.add(h);
    }
  }
  for (let t of js) componentHandler.upgradeElement(element, t);
  for (let f of fct) f(element);
}

@inject(Element, EventAggregator)
@customAttribute('mdl')
export class MDLCustomAttribute {

  constructor(element, eventAggregator) {
    this.element = element;
    this.eventAggregator = eventAggregator;
  }

  attached() {
    //console.log("mdl attached: " + this.value);
    upgradeElement(this.element, this.value);
    let payload = {publisher: this, data: this.element};
    this.eventAggregator.publish('mdl:component:upgrade', payload);
  }
}
