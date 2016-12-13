var _dec, _dec2, _class;

import { inject, customAttribute, DOM } from 'aurelia-framework';
import { componentHandler } from 'encapsulated-mdl';

let mdlTypes = {
  badge: {
    js: [],
    html: ['mdl-badge'],
    fct: []
  },
  button: {
    html: ['mdl-button', 'mdl-js-button'],
    js: ['MaterialButton'],
    fct: [manageRipple]
  },
  card: {
    js: [],
    html: ['mdl-card'],
    fct: []
  },
  checkbox: {
    js: ['MaterialCheckbox'],
    html: ['mdl-checkbox', 'mdl-js-checkbox'],
    fct: [manageRipple]
  },
  chip: {
    js: [],
    html: ['mdl-chip'],
    fct: []
  },
  'data-table': {
    js: ['MaterialDataTable'],
    html: ['mdl-data-table', 'mdl-js-data-table'],
    fct: [manageRipple]
  },
  dialog: {
    js: [],
    html: ['mdl-dialog'],
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
  'icon-toggle': {
    js: ['MaterialIconToggle'],
    html: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],
    fct: [manageRipple]
  },
  layout: {
    js: ['MaterialLayout'],
    html: ['mdl-layout', 'mdl-js-layout'],
    fct: [manageRipple]
  },
  list: {
    js: [],
    html: ['mdl-list'],
    fct: []
  },
  menu: {
    js: ['MaterialMenu'],
    html: ['mdl-menu', 'mdl-js-menu'],
    fct: [manageRipple]
  },
  progress: {
    js: ['MaterialProgress'],
    html: ['mdl-progress', 'mdl-js-progress'],
    fct: []
  },
  radio: {
    js: ['MaterialRadio'],
    html: ['mdl-radio', 'mdl-js-radio'],
    fct: [manageRipple]
  },
  slider: {
    js: ['MaterialSlider'],
    html: ['mdl-slider', 'mdl-js-slider'],
    fct: []
  },
  snackbar: {
    js: ['MaterialSnackbar'],
    html: ['mdl-snackbar'],
    fct: []
  },
  spinner: {
    js: ['MaterialSpinner'],
    html: ['mdl-spinner', 'mdl-js-spinner'],
    fct: []
  },
  switch: {
    js: ['MaterialSwitch'],
    html: ['mdl-switch', 'mdl-js-switch'],
    fct: [manageRipple]
  },
  tabs: {
    js: ['MaterialTabs'],
    html: ['mdl-tabs', 'mdl-js-tabs'],
    fct: [manageRipple]
  },
  textfield: {
    js: ['MaterialTextfield'],
    html: ['mdl-textfield', 'mdl-js-textfield'],
    fct: []
  },
  tooltip: {
    js: ['MaterialTooltip'],
    html: ['mdl-tooltip'],
    fct: []
  },

  selectfield: {
    js: ['MaterialSelectfield'],
    html: ['mdl-selectfield'],
    fct: []
  }
};

function manageRipple(element) {
  if (element.classList.contains('mdl-js-ripple-effect')) {
    componentHandler.upgradeElement(element, 'MaterialRipple');
  }

  if (element.MaterialIconToggle || element.MaterialCheckbox || element.MaterialRadio) {
    let children = element.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.classList.contains('mdl-js-ripple-effect')) {
          componentHandler.upgradeElement(child, 'MaterialRipple');
        }
      }
    }
  }
}

function upgradeElement(element, type) {
  let { html, fct, js } = mdlTypes[type] || {};
  if (html) {
    for (let h of html) {
      element.classList.add(h);
    }
  }
  for (let t of js) componentHandler.upgradeElement(element, t);
  for (let f of fct) f(element);
}

function downgradeElement(element) {
  componentHandler.downgradeElements(element);
}

export let MDLCustomAttribute = (_dec = inject(DOM.Element), _dec2 = customAttribute('mdl'), _dec(_class = _dec2(_class = class MDLCustomAttribute {

  constructor(element) {
    this.element = element;
  }

  attached() {
    upgradeElement(this.element, this.value);
  }

  detached() {
    downgradeElement(this.element);
  }
}) || _class) || _class);