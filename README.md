# TagApp
This is a test project for find hashtags on twitter. I have limited 10 tweets result from the API to return. The backend is done on .Net core web api. I have tested both API and angular projects on a local machine. To accept requests from cross platforms I have updated the .Net API to cors enable for any site. Though I could have mentioned the site url and port too. This may not be a complete solution and may need enhancement. I have shown tweet text, user name, user profile image, location and date posted. There are a lot of information available in the response but I am using just a few of those just to display in a single page.

State management and routing not done. I planned to use NGXS, but was not able to apply that in limited time. So Store is not created and the objects are not dispatched. I have used localstorage for a short and temporary workaround.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
