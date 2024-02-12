import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebServerfarmsProps extends IAzAPIBaseProps {

}

/**
 * WebServerfarms resource
 */
export class WebServerfarms extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebServerfarmsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/serverfarms@2022-09-01";
  }

  protected getResourceBody(props: WebServerfarmsProps): string {
    return JSON.stringify(
        {properties: {elasticScaleEnabled: "${bool}", freeOfferExpirationTime: "string", hostingEnvironmentProfile: {id: "string"}, hyperV: "${bool}", isSpot: "${bool}", isXenon: "${bool}", kubeEnvironmentProfile: {id: "string"}, maximumElasticWorkerCount: "${int}", perSiteScaling: "${bool}", reserved: "${bool}", spotExpirationTime: "string", targetWorkerCount: "${int}", targetWorkerSizeId: "${int}", workerTierName: "string", zoneRedundant: "${bool}"}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: "${int}", family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: "${int}", elasticMaximum: "${int}", maximum: "${int}", minimum: "${int}", scaleType: "string"}, tier: "string"}, kind: "string", extendedLocation: {name: "string"}}
    );
  }
}
