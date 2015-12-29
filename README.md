# aurelia-mdl

Aurelia wrapper for [Material Design Lite](http://www.getmdl.io).
Base Source forked from [Thanood/aurelia-material](https://github.com/Thanood/aurelia-material)
Merged into [aurelia/skeleton-plugin](https://github.com/aurelia/skeleton-plugin)

Best to be used with [genadis/encapsulated-mdl](https://github.com/genadis/encapsulated-mdl) which is configured as jspm dependency. But should work with original mdl as well (will use global mdl), just change the jspm dependency.

[Material Design Lite](http://www.getmdl.io) has been designed for static html sites. To use it on dynamic ones, we have to register explictly new DOM elements (see [MDL](http://www.getmdl.io/started/index.html#dynamic))

`Aurelia MDL` will do that for you transparently while keeping MDL flexibility.

##Usage

### Principles

We created the `CustomAttribute` `mdl` in charge of the registration of dynamic elements.

So instead of writing:

```
<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
```

You will write in your views:

```
<button mdl="button" class="mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
```

`mdl` values are :

```
[ 'button',
  'textfield',
  'layout',
  'menu',
  'data-table',
  'tabs',
  'slider',
  'tooltip',
  'progress',
  'spinner',
  'badge',
  'switch',
  'radio',
  'icon-toggle',
  'checkbox',
  'dialog',
  'mega-footer',
  'mini-footer',
  'grid',
  'snackbar' ]
```
### Events

Aurelia MDL makes use of `aurelia-event-aggregator`.
`mdl:component:upgrade` is published for each upgraded element.
payload:
```
let payload = {
  publisher: this,      // Object of MDLCustomAttribute
  data: this.element    // upgraded DOM element
};
```

So for example in your app you could use something like:
```
  constructor(eventAggregator) {
    /* ... */
    this.eventAggregator = eventAggregator;
    this.eventAggregator.subscribe('mdl:component:upgrade', this.mdlUpgradeHandler.bind(this));
    $(window).resize(this.windowResizeHandler.bind(this));
  }

  mdlUpgradeHandler(payload) {
    if(payload.data.MaterialLayout) {
      this.mdlLayout = payload.data.MaterialLayout;
      this.isSmallScreenUpdate();
    }
  }
  
  isSmallScreenUpdate() {
    this.isSmallScreen = $(this.mdlLayout.element_).hasClass('is-small-screen');
  }
  
  windowResizeHandler(ev) {
    this.isSmallScreenUpdate();
  }  
```
Now `isSmallScreen` property will hold boolean of whether MDL layout is for small screens or desktop (for dynamic websites). 

## Install

In your project install the plugin via `jspm` with following command

```
  $ jspm install github:genadis/aurelia-mdl@^0.1.0
```
or better yet add to your package.json jspm dependencies:
```
  "jspm": {
    "dependencies": {
      ...
      "aurelia-mdl": "github:genadis/aurelia-mdl@^0.1.0",
      ...
    }
  }
```

Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). 

Update  your bootstrapping:

  ```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin('aurelia-mdl');    // Add the plugin registration somewhere in your bootstrapping code

  aurelia.start().then(a => a.setRoot());
}
   ```

Include material design css:
```html
      <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css">
```
or
```html
      <link rel="stylesheet" href="../jspm_packages/github/genadis/encapsulated-mdl@2.0.0/material.amber-pink.min.css">
```
or
```html
  <require from="encapsulated-mdl/material.amber-pink.min.css"></require>
```

Use wrapped MDL components in your model views as explained above.


# Based on aurelia-skeleton-plugin

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The skeleton is part of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard aurelia plugin using gulp to build your ES6 code with the Babel compiler. Karma/Jasmine testing is also configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
