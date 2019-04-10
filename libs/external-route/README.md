# ExternalRoute

!! Documentation needs to be updated !!

## Getting started

```typescript
import { NgModule } from '@angular/core';
import { ExternalRouteModule } from '@mhlabs/external-route';
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

### Configuration

## Usages

When using the router you have the possibility to pass a externalUrl and target.

```typescript
this.router.navigate([
  '/external-route',
  { externalUrl: 'https://google.se', target: '_self' }
]);
```

Route to external url from module:

```typescript
 {
    path: 'google',
    pathMatch: 'full',
    redirectTo: '/external-route?externalUrl=https://www.google.se'
  }
```

The directive is active when no routerLink attributes exist on you a tag and you have set the href attribute:

```html
<a href="https://www.google.com/" target="_self" , rel="nofollow"
  >Go to google in same window</a
>
```
