import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { externalRouteConfigProvider } from './external-route-config.provider';
import { defaultConfig } from './default-config';
import { ExternalRouteConfig } from './external-route-config.interface';

@Injectable()
export class ExternalRouteResolver implements Resolve<string> {
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

  resolve(route: ActivatedRouteSnapshot): Promise<string> {
    const externalUrlKey = this.config.urlParamKey;
    const externalUrlTargetKey = this.config.targetParamKey;

    return new Promise(resolve => {
      let externalUrl: string;
      let target = this.config.documentTarget.toString();

      const paramMap = route.paramMap;
      const queryParamMap = route.queryParamMap;

      if (paramMap.has(externalUrlKey)) {
        externalUrl = paramMap.get(externalUrlKey);
        target = paramMap.get(externalUrlTargetKey);
      } else if (queryParamMap.has(externalUrlKey)) {
        externalUrl = queryParamMap.get(externalUrlKey);
        target = queryParamMap.get(externalUrlTargetKey);
      }

      if (externalUrl) {
        this.openWindow(externalUrl, target);
      }

      return resolve(externalUrl);
    });
  }

  private openWindow(url: string, target: string) {
    if (isPlatformBrowser(this.platformId) && url) {
      window.open(url, target);
    }
  }
}
