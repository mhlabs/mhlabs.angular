import { ExternalRouteConfig } from './external-route-config.interface';
import { ExternalRouteTarget } from './external-route-target.enum';
import { ExternalRouteRelationship } from './external-route-relationship.enum';

export const defaultConfig: ExternalRouteConfig = {
  documentTarget: ExternalRouteTarget.blank,
  documentRelationship: ExternalRouteRelationship.external,
  urlParamKey: 'externalUrl',
  targetParamKey: 'target'
};
