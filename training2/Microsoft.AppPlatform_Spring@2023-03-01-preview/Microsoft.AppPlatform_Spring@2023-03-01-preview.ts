import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringProps extends IAzAPIBaseProps {
/**
   * Sku of the Service resource
   */
readonly sku?: Sku;

/**
   * The name of the resource group that contains the infrastructure resources
   */
readonly infraResourceGroup?: string;

/**
   * The resource Id of the Managed Environment that the Spring Apps instance builds on
   */
readonly managedEnvironmentId?: string;

/**
   * Purchasing 3rd party product of the Service resource.
   */
readonly marketplaceResource?: MarketplaceResource;

/**
   * Network profile of the Service
   */
readonly networkProfile?: NetworkProfile;

/**
   * Additional Service settings in vnet injection instance
   */
readonly vnetAddons?: ServiceVNetAddons;

/**
   * 
   */
readonly zoneRedundant?: bool;

/**
   * The plan id of the 3rd Party Artifact that is being procured.
   */
readonly plan?: string;

/**
   * The 3rd Party artifact that is being procured.
   */
readonly product?: string;

/**
   * The publisher id of the 3rd Party Artifact that is being bought.
   */
readonly publisher?: string;

/**
   * Name of the resource group containing network resources for customer apps in Azure Spring Apps
   */
readonly appNetworkResourceGroup?: string;

/**
   * Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps
   */
readonly appSubnetId?: string;

/**
   * Ingress configuration payload for Azure Spring Apps resource.
   */
readonly ingressConfig?: IngressConfig;

/**
   * The egress traffic type of Azure Spring Apps VNet instances.
   */
readonly outboundType?: string;

/**
   * Azure Spring Apps service reserved CIDR
   */
readonly serviceCidr?: string;

/**
   * Name of the resource group containing network resources of Azure Spring Apps Service Runtime
   */
readonly serviceRuntimeNetworkResourceGroup?: string;

/**
   * Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime
   */
readonly serviceRuntimeSubnetId?: string;

/**
   * Ingress read time out in seconds.
   */
readonly readTimeoutInSeconds?: number;

/**
   * Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet.
   */
readonly dataPlanePublicEndpoint?: bool;

/**
   * Indicates whether the log stream in vnet injection instance could be accessed from internet.
   */
readonly logStreamPublicEndpoint?: bool;

/**
   * Current capacity of the target resource
   */
readonly capacity?: number;

/**
   * Tier of the Sku
   */
readonly tier?: string;
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
