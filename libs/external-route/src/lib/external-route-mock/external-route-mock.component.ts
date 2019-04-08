import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mhlabs-external-route-mock',
  template: ''
})
export class ExternalRouteMockComponent {
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(p => console.log(p));
  }
}
