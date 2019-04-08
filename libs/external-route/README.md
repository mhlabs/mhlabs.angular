# ExternalRoute

## Getting started

## Usages

When using the router you have the possibility to pass a externalUrl and target.

```typescript
this.router.navigate([
  '/external-route',
  { externalUrl: 'https://google.se', target: '_self' }
]);
```

The directive is active when no routerLink attributes exist on you a tag:

```html
<a href="https://www.google.com/" target="_self" , rel="nofollow"
  >Go to google in same window</a
>
```
