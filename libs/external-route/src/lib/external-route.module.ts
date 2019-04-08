import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { externalRouteProvider } from './external-route-provider';
import { ExternalUrlDirective } from './external-url.directive';
import { ExternalRouteMockComponent } from './external-route-mock/external-route-mock.component';
import { ExternalRedirectComponent } from './external-redirect/external-redirect.component';
import { openExternalUrl } from './open-external-url';

export const routes: Route[] = [
  {
    path: 'external-route',
    component: ExternalRouteMockComponent,
    canActivate: [externalRouteProvider]
  },
  {
    /**
     * TODO: This does not work yet
     */
    path: 'external-redirect',
    component: ExternalRedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    {
      provide: externalRouteProvider,
      useValue: openExternalUrl
    }
  ],
  declarations: [
    ExternalUrlDirective,
    ExternalRouteMockComponent,
    ExternalRedirectComponent
  ],
  exports: [ExternalUrlDirective]
})
export class ExternalRouteModule {
  constructor() {}
}
