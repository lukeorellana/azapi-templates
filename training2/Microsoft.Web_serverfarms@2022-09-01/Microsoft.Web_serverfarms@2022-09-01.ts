import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebServerfarmsProps extends IAzAPIBaseProps {
/**
   * Description of a SKU for a scalable resource.
   */
readonly sku?: SkuDescription;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Extended Location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku
   */
readonly elasticScaleEnabled?: bool;

/**
   * The time when the server farm free offer expires.
   */
readonly freeOfferExpirationTime?: string;

/**
   * Specification for the App Service Environment to use for the App Service plan.
   */
readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;

/**
   * If Hyper-V container app service plantrue,falseotherwise.
   */
readonly hyperV?: bool;

/**
   * Iftrue, this App Service Plan owns spot instances.
   */
readonly isSpot?: bool;

/**
   * Obsolete: If Hyper-V container app service plantrue,falseotherwise.
   */
readonly isXenon?: bool;

/**
   * Specification for the Kubernetes Environment to use for the App Service plan.
   */
readonly kubeEnvironmentProfile?: KubeEnvironmentProfile;

/**
   * Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
   */
readonly maximumElasticWorkerCount?: number;

/**
   * Iftrue, apps assigned to this App Service plan can be scaled independently.Iffalse, apps assigned to this App Service plan will scale to all instances of the plan.
   */
readonly perSiteScaling?: bool;

/**
   * If Linux app service plantrue,falseotherwise.
   */
readonly reserved?: bool;

/**
   * The time when the server farm expires. Valid only if it is a spot server farm.
   */
readonly spotExpirationTime?: string;

/**
   * Scaling worker count.
   */
readonly targetWorkerCount?: number;

/**
   * Scaling worker size ID.
   */
readonly targetWorkerSizeId?: number;

/**
   * Target worker tier assigned to the App Service plan.
   */
readonly workerTierName?: string;

/**
   * Iftrue, this App Service Plan will perform availability zone balancing.Iffalse, this App Service Plan will not perform availability zone balancing.
   */
readonly zoneRedundant?: bool;

/**
   * Resource ID of the App Service Environment.
   */
readonly id?: string;

/**
   * Resource ID of the Kubernetes Environment.
   */
readonly id?: string;

/**
   * Capabilities of the SKU, e.g., is traffic manager enabled?
   */
readonly capabilities?: Capability[];

/**
   * Current number of instances assigned to the resource.
   */
readonly capacity?: number;

/**
   * Family code of the resource SKU.
   */
readonly family?: string;

/**
   * Locations of the SKU.
   */
readonly locations?: string[];

/**
   * Size specifier of the resource SKU.
   */
readonly size?: string;

/**
   * Min, max, and default scale values of the SKU.
   */
readonly skuCapacity?: SkuCapacity;

/**
   * Service tier of the resource SKU.
   */
readonly tier?: string;

/**
   * Reason of the SKU capability.
   */
readonly reason?: string;

/**
   * Value of the SKU capability.
   */
readonly value?: string;

/**
   * Default number of workers for this App Service plan SKU.
   */
readonly default?: number;

/**
   * Maximum number of Elastic workers for this App Service plan SKU.
   */
readonly elasticMaximum?: number;

/**
   * Maximum number of workers for this App Service plan SKU.
   */
readonly maximum?: number;

/**
   * Minimum number of workers for this App Service plan SKU.
   */
readonly minimum?: number;

/**
   * Available scale configurations for an App Service plan.
   */
readonly scaleType?: string;
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
