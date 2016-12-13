'use strict';

System.register(['aurelia-framework', 'encapsulated-mdl'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, DOM, componentHandler, _dec, _dec2, _class, mdlTypes, MDLCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function manageRipple(element) {
    if (element.classList.contains('mdl-js-ripple-effect')) {
      componentHandler.upgradeElement(element, 'MaterialRipple');
    }

    if (element.MaterialIconToggle || element.MaterialCheckbox || element.MaterialRadio) {
      var children = element.children;
      if (children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (child.classList.contains('mdl-js-ripple-effect')) {
            componentHandler.upgradeElement(child, 'MaterialRipple');
          }
        }
      }
    }
  }

  function upgradeElement(element, type) {
    var _ref = mdlTypes[type] || {},
        html = _ref.html,
        fct = _ref.fct,
        js = _ref.js;

    if (html) {
      for (var _iterator = html, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var h = _ref2;

        element.classList.add(h);
      }
    }
    for (var _iterator2 = js, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var t = _ref3;
      componentHandler.upgradeElement(element, t);
    }for (var _iterator3 = fct, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref4 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref4 = _i3.value;
      }

      var f = _ref4;
      f(element);
    }
  }

  function downgradeElement(element) {
    componentHandler.downgradeElements(element);
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      DOM = _aureliaFramework.DOM;
    }, function (_encapsulatedMdl) {
      componentHandler = _encapsulatedMdl.componentHandler;
    }],
    execute: function () {
      mdlTypes = {
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

      _export('MDLCustomAttribute', MDLCustomAttribute = (_dec = inject(DOM.Element), _dec2 = customAttribute('mdl'), _dec(_class = _dec2(_class = function () {
        function MDLCustomAttribute(element) {
          _classCallCheck(this, MDLCustomAttribute);

          this.element = element;
        }

        MDLCustomAttribute.prototype.attached = function attached() {
          upgradeElement(this.element, this.value);
        };

        MDLCustomAttribute.prototype.detached = function detached() {
          downgradeElement(this.element);
        };

        return MDLCustomAttribute;
      }()) || _class) || _class));

      _export('MDLCustomAttribute', MDLCustomAttribute);
    }
  };
});