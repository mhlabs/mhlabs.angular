import { ActivatedRouteSnapshot } from '@angular/router';

export function openExternalUrl(route: ActivatedRouteSnapshot) {
  const externalUrl = route.paramMap.get('externalUrl');
  const target = route.paramMap.get('target') || '_blank';

  if (!externalUrl) {
    return;
  }

  if (window) {
    window.open(externalUrl, target);
  }
}
