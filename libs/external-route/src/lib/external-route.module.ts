import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ExternalUrlDirective } from './external-url.directive';
import { ExternalRouteMockComponent } from './external-route-mock/external-route-mock.component';
import { ExternalRouteResolver } from './external-route.resolver';
import { ExternalRouteConfig } from './external-route-config.interface';
import { externalRouteConfigProvider } from './external-route-config.provider';
import { defaultConfig } from './default-config';

export const routes: Route[] = [
  {
    path: 'external-route',
    component: ExternalRouteMockComponent,
    resolve: { url: ExternalRouteResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ExternalUrlDirective, ExternalRouteMockComponent],
  providers: [ExternalRouteResolver],
  exports: [ExternalUrlDirective]
})
export class ExternalRouteModule {
  static forRoot(config?: ExternalRouteConfig): ModuleWithProviders {
    return {
      ngModule: ExternalRouteModule,
      providers: [
        {
          provide: externalRouteConfigProvider,
          useValue: config || defaultConfig
        }
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ExternalRouteModule
    };
  }
}
