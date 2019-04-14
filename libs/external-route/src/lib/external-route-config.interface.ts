import { ExternalRouteTarget } from './external-route-target.enum';
import { ExternalRouteRelationship } from './external-route-relationship.enum';

export interface ExternalRouteConfig {
  /**
   * The target attribute specifies where to open the linked document.
   * defaults: _blank
   */
  documentTarget?: ExternalRouteTarget;

  /**
   * Specifies the relationship between the current document and the linked document.
   * defaults: external
   */
  documentRelationship?: ExternalRouteRelationship;

  /**
   * The url param key used when doing a the external call.
   * default: externalUrl
   * example:
   * this.router.navigate(['/external-route', { externalUrl: 'https://google.se' }]);
   */
  urlParamKey?: string;

  /**
   * The url param key used when doing a the external call.
   * default: target
   * example:
   * this.router.navigate(['/external-route', { externalUrl: 'https://google.se', target: '_self' }]);
   */
  targetParamKey?: string;
}
