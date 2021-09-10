# SingleSPA integrated into Angular

This is an example of SingleSPA working inside a Angular Application. The Angular Application takes the role of the Root App in this case.

**PLEASE NOTE THAT THIS IS NOT A RECOMMENDED SETUP**
As explained in the [FAQs of SingleSPA](https://single-spa.js.org/docs/faq/#should-i-have-a-parentroot-app-and-children-apps) this approach will lead to a lot of Problems in the long run. But I discovered that such approaches could help people with existing scaled Angular Applications to deliver features to a "legacy" System while migrating to Single-SPA without the need to build features two times.

## What does this contain
1. An Angular Application which is configured to support the mounting of SingleSPA Components.
2. One example Vue3 based Microfrontend to show how you can pass props from the Angular Application to a Microfrontend (Sorry for the different PackageManager (yarn/npm) was to lazy to fix it for such a small example).

## How to get started
To see what you would need to change in your Angular Application take a look at this files:
```
package.json
src/index.html
src/assets/importmap.json
src/app/app.component.html
src/app/app.component.ts
```