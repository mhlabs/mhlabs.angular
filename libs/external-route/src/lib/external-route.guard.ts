import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  UrlTree,
  RouterStateSnapshot
} from '@angular/router';
import { externalRouteConfigProvider } from './external-route-config.provider';
import { defaultConfig } from './default-config';
import { ExternalRouteConfig } from './external-route-config.interface';
import { ExternalRouteTarget } from './external-route-target.enum';
import { CanActivate } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ExternalRouteGuard implements CanActivate {
  private urlKey: string;
  private targetKey: string;
  private target: ExternalRouteTarget;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Optional()
    @Inject(externalRouteConfigProvider)
    private config: ExternalRouteConfig
  ) {
    if (!config) {
      this.config = defaultConfig;
      this.urlKey = this.config.urlParamKey;
      this.targetKey = this.config.targetParamKey;
      this.target = this.config.documentTarget;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const externalUrl = this.getExternalUrlFromParams(route);
    this.target = this.getUrlTargetFromParams(route) as ExternalRouteTarget;

    if (externalUrl) {
      this.openWindow(externalUrl, this.target);
    }

    return this.target === ExternalRouteTarget.self ? true : false;
  }

  getUrlTargetFromParams(route: ActivatedRouteSnapshot): string | null {
    if (route.paramMap.has(this.targetKey)) {
      return route.paramMap.get(this.targetKey);
    }
    return route.queryParamMap.get(this.targetKey);
  }

  getExternalUrlFromParams(route: ActivatedRouteSnapshot): string | null {
    if (route.paramMap.has(this.urlKey)) {
      return route.paramMap.get(this.urlKey);
    }
    return route.queryParamMap.get(this.urlKey);
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
