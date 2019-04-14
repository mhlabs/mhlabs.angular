# ExternalRoute

Navigating to an external url from an Angular application using `
window.location` or an anchor tag is straight forward, but it has a disadvantage, it bypasses the Angular Router.

This means that if we have something like route guards, they will not be called. For example we might have a guard that notifies the user of any unsaved changes and can stop the navigation if the user wishes.

## Getting started

`npm install @mhlabs/external-route --save` or `yarn add @mhlabs/external-route`

### Setup using default values

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExternalRouteModule } from '@mhlabs/external-route';
import { AppComponent } from './app.component';
import { ExternalRouteComponent } from './external-route/external-route.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'google',
    pathMatch: 'full',
    redirectTo:
      '/external-route?externalUrl=https://www.google.se&target=_blank'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ExternalRouteModule]
})
export class AppModule {}
```

### Configure module

You also have the option to pass a optional configuration object using the `.forRoot()` method.

```typescript
import {
  ExternalRouteModule,
  ExternalRouteRelationship,
  ExternalRouteTarget
} from '@mhlabs/external-route';

ExternalRouteModule.forRoot({
      documentRelationship: ExternalRouteRelationship.external,
      documentTarget: ExternalRouteTarget.blank,

      targetParamKey: 'target',

      urlParamKey: 'externalUrl'
    })
```

### Configuration

| Option                 | Default     | Description                                                                                             |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `documentRelationship` | external    | The rel attribute of the external link, [read more](https://www.w3schools.com/TAGS/att_a_rel.asp)       |
| `documentTarget`       | _self       | The target attribute of the external link, [read more](https://www.w3schools.com/tags/att_a_target.asp) |
| `targetParamKey`       | target      | the name of the query string parameter for target                                                       |
| `urlParamKey`          | externalUrl | The name of the query string parameter for url/destination                                              |

## Usage

### Router

When using the router you have the possibility to pass a `externalUrl` and `target` to the route `/external-route`.

**Route to external url from module:**

```typescript
 {
    path: 'google',
    pathMatch: 'full',
    redirectTo: '/external-route?externalUrl=https://www.google.se'
  }
```

```typescript
this.router.navigate([
  '/external-route',
  { externalUrl: 'https://google.se', target: '_self' }
]);
```

### Directive

This library also includes a directive that will make all your anchor `<a>` tags use the `/external-route` path, if:

- The anchor tag don't have the `routerLink` attribute.
- The anchor tag has a `href` value.

```html
<a href="https://www.google.com/" target="_self" rel="nofollow">Google</a>
```
