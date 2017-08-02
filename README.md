# AngularJS todoMVC App with ES6 modules

A strategy to refactor AngularJS implementation from requireJS to ES6 modules with Webpack.

(This exercise is taking [requireJS example code](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs_require) from [todomvc repo](https://github.com/tastejs/todomvc) as the base code to be refactored.)

## Description

In order to achieve a more mantainable source code it's important to follow practices like decoupling and separation of concern through modular distribution.

As a first step of refactor, the next enhancements were added:

- Webpack implementation to handle application build and distribution.
- ES6 module implementation.
- Angular Components distribution.
- Service layer to centralize and handle model/entities API.
- Use of style guides ([Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)) by implementing pattern and practices like:
  - Controller as
  - Application modular scaffolding/distribution

Components approach stands for being a "piece" of code and view (or template) that has its own state and life cycle and it's communicated with other components. In order to avoid spreading bussiness logic through many different components (and turning maintenance into a complex task), a service layer is added to hold and handle bussiness logic rules by exposing an API that components can be consuming.

If a new feature on TODOs wants to be added, business logic it's centralized. Change or add a new behavior on TODOs entities will be just matter of changing the corresponding TODO service (and class model) and its integrity kept by its unit test.

## Next steps on refactor process

- Break down todo.component.js into smaller components.

NOTE: This is a non working app; Required/mandatory configurations and setups are missing.
