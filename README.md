# aurelia-mdl

Aurelia wrapper for [Material Design Lite](http://www.getmdl.io).
Base Source forked from [Thanood/aurelia-material](https://github.com/Thanood/aurelia-material).
with lots of credit to [redpelicans/aurelia-material](https://github.com/redpelicans/aurelia-material).

Merged into [aurelia/skeleton-plugin](https://github.com/aurelia/skeleton-plugin)

Depends on [genadis/encapsulated-mdl](https://github.com/genadis/encapsulated-mdl).

Has support for [mdl-selectfield](https://github.com/genadis/encapsulated-mdl-selectfield)

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
[ 'badge',
  'button',
  'card',
  'checkbox',
  'chip',
  'data-table',
  'dialog',
  'grid',
  'icon-toggle',
  'layout',
  'list',
  'menu',
  'mega-footer',
  'mini-footer',
  'progress',
  'radio',
  'slider',
  'snackbar',
  'spinner',
  'switch',
  'tabs',
  'textfield',
  'tooltip',
  
   // // Third party not MDL official
  'selectfield' 
]
```
>Third party components such as `selectfield` are not hard dependencies, meaning they need to be added manualy as explained in below.

## Install

### Aurelia CLI

Install the package:
```shell
npm install aurelia-mdl --save
```
Add package configuration to `aurelia.json`:
```
 "dependencies": [
          {
            "name": "encapsulated-mdl",
            "path": "../node_modules/encapsulated-mdl/dist",
            "main": "material.min",
            "resources": [
              "material.blue_grey-red.min.css"
            ]
          },
          {
            "name": "aurelia-mdl",
            "path": "../node_modules/aurelia-mdl/dist/amd",
            "main": "index",
            "deps": ["encapsulated-mdl"]
          }
        ]
```
Notice the resources in encapsulated-mdl, add your favorite style.

In your app.hml (or wherever):
```html
<require from="encapsulated-mdl/material.blue_grey-red.min.css"></require>
```
And in [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4):
```js
aurelia.use.plugin('aurelia-mdl');
```

#### Adding [mdl-selectfield](https://github.com/genadis/encapsulated-mdl-selectfield)
Install the package:
```shell
npm install encapsulated-mdl-selectfield --save
```
Add package configuration to `aurelia.json`:
```
 "dependencies": [
          {
            "name": "encapsulated-mdl-selectfield",
            "path": "../node_modules/encapsulated-mdl-selectfield/dist",
            "main": "mdl-selectfield.min",
            "resources": [
              "mdl-selectfield.min.css"
            ],
            "deps": ["encapsulated-mdl"]
          }
        ]
```
And Add `encapsulated-mdl-selectfield` to `deps` of `aurelia-mdl` package configuration.

In your app.hml (or wherever):
```html
<require from="encapsulated-mdl-selectfield/mdl-selectfield.min.css"></require>
```
> [mdl-selectfield](https://github.com/mebibou/mdl-selectfield) does not respect styling it always uses the default...

In your app.js or main.js (must be js before usage of the component so it registers with mdl)
```js
import 'encapsulated-mdl-selectfield';
```

### JSPM

In your project install the plugin via `jspm` with following command

```
  $ jspm install npm:aurelia-mdl
```
or better yet add to your package.json jspm dependencies:
```
  "jspm": {
    "dependencies": {
      ...
      "encapsulated-mdl": "^1.2.0"
      "aurelia-mdl": "^0.4.0",
      ...
    }
  }
```

And in [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4):
```js
aurelia.use.plugin('aurelia-mdl');
```

Include material design css:
```html
  <require from="encapsulated-mdl/material.amber-pink.min.css"></require>
```

#### Adding [mdl-selectfield](https://github.com/genadis/encapsulated-mdl-selectfield)
Install the package:
```shell
jspm install npm:encapsulated-mdl-selectfield
```
or better yet add to your package.json jspm dependencies:
```
  "jspm": {
    "dependencies": {
      ...
      "encapsulated-mdl-selectfield": "^1.0.0"
      ...
    }
  }
```
In your app.hml (or wherever):
```html
<require from="encapsulated-mdl-selectfield/mdl-selectfield.min.css"></require>
```
> [mdl-selectfield](https://github.com/mebibou/mdl-selectfield) does not respect styling it always uses the default...

In your app.js or main.js (must be js before usage of the component so it registers with mdl)
```js
import 'encapsulated-mdl-selectfield';
```

### Events
> Deprecated!
Used to depend on `aurelia-event-aggregator` and publish `mdl:component:upgrade` for each upgraded element.

If you need a hook for upgrade done, you could use `TaskQueue` something like:

In your custom Element View
```
<template>
  <button mdl="button" ref="buttonElement"></button>
<template>
```

In your custom Element View-Model
```js
import {customElement, inject, TaskQueue} from 'aurelia-framework';

@customElement('my-element')
@inject(TaskQueue)
export class MyElement {
  buttonElement;
  constructor(element, taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      // this.buttonElement.MaterialButton is upgraded
    });
  }
}
```

# Based on aurelia-skeleton-plugin

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This skeleton is part of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard aurelia plugin using gulp to build your ES6 code with the Babel compiler. Karma/Jasmine testing is also configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.aurelia.io/) and [our email list](http://eepurl.com/ces50j). We also invite you to [follow us on twitter](https://twitter.com/aureliaeffect). If you have questions, please [join our community on Gitter](https://gitter.im/aurelia/discuss) or use [stack overflow](http://stackoverflow.com/search?q=aurelia). Documentation can be found [in our developer hub](http://aurelia.io/hub.html). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome or Firefox Extension and visit any of our repository's boards.

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
