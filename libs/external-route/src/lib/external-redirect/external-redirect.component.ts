import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { openExternalUrl } from '../open-external-url';

@Component({
  selector: 'mhlabs-external-redirect',
  template: ''
})
export class ExternalRedirectComponent {
  constructor(route: ActivatedRoute) {
    openExternalUrl(route.snapshot);
  }
}
