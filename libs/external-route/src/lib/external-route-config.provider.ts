import { InjectionToken } from '@angular/core';
import { ExternalRouteConfig } from './external-route-config.interface';

export const externalRouteConfigProvider = new InjectionToken<
  ExternalRouteConfig
>('externalRouteConfigProvider');
