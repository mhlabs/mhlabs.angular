import { Injectable, Inject, Optional, PLATFORM_ID } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ExternalRouteTarget } from './external-route-target.enum';
import { externalRouteConfigProvider } from './external-route-config.provider';
import { ExternalRouteConfig } from './external-route-config.interface';
import { defaultConfig } from './default-config';

@Injectable()
export class ExternalRouteResolver implements Resolve<void> {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Optional()
    @Inject(externalRouteConfigProvider)
    private config: ExternalRouteConfig
  ) {
    if (!config) {
      this.config = defaultConfig;
    }
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): void | Observable<void> | Promise<void> {
    const externalUrl = this.getExternalUrlFromParams(route);
    const target = this.getUrlTargetFromParams(route) as ExternalRouteTarget;

    if (externalUrl) {
      this.openWindow(externalUrl, target);
    }

    return;
  }

  getUrlTargetFromParams(route: ActivatedRouteSnapshot): string | null {
    if (route.paramMap.has(this.config.targetParamKey)) {
      return route.paramMap.get(this.config.targetParamKey);
    }
    return route.queryParamMap.get(this.config.targetParamKey);
  }

  getExternalUrlFromParams(route: ActivatedRouteSnapshot): string | null {
    if (route.paramMap.has(this.config.urlParamKey)) {
      return route.paramMap.get(this.config.urlParamKey);
    }
    return route.queryParamMap.get(this.config.urlParamKey);
  }

  private openWindow(url: string, target: string): void {
    if (!url) {
      throw Error(
        'A url is required when trying to open a external url in a new window'
      );
    }

    if (isPlatformBrowser(this.platformId)) {
      window.open(url, target);
    }
  }
}
