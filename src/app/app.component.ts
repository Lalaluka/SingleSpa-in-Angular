import { Component } from '@angular/core';
//Since System.js is in the global scope we need to define it here to prevent TS errors. This might be unsexy but works
declare var System: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single-spa-in-Angular';
}
//Import single-spa Assets functions
import { registerApplication, start } from "single-spa";

//Register Application in single-spa Context. SystemJS.import from importmap in Assets
//In Custom Pros there could be additional Properties
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "@single-spa/welcome"
    ),
  activeWhen: ["/"],
});

//In Custom Pros there could be additional Properties
registerApplication({
  name: "@lalaluka/examplemfe2",
  app: () =>
    System.import("@lalaluka/examplemfe2"),
  activeWhen: ["/"],
  customProps: () => ({
    somevalue: 'Here is a Value from the RootApp',
  }),
})
//Start single-spa
start({
  urlRerouteOnly: true,
});