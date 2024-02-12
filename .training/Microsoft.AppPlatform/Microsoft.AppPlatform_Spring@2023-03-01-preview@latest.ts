import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpring resource
 */
export class AppplatformSpring extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringProps): string {
    return JSON.stringify(
        {properties: {infraResourceGroup: "string", managedEnvironmentId: "string", marketplaceResource: {plan: "string", product: "string", publisher: "string"}, networkProfile: {appNetworkResourceGroup: "string", appSubnetId: "string", ingressConfig: {readTimeoutInSeconds: "${int}"}, outboundType: "string", serviceCidr: "string", serviceRuntimeNetworkResourceGroup: "string", serviceRuntimeSubnetId: "string"}, vnetAddons: {dataPlanePublicEndpoint: "${bool}", logStreamPublicEndpoint: "${bool}"}, zoneRedundant: "${bool}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
