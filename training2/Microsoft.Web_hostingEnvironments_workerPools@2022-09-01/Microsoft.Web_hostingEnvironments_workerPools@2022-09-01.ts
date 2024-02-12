import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsWorkerpoolsProps extends IAzAPIBaseProps {
/**
   * Description of a SKU for a scalable resource.
   */
readonly sku?: SkuDescription;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostingEnvironments;

/**
   * Shared or dedicated app hosting.
   */
readonly computeMode?: 'Dedicated''Dynamic''Shared';

/**
   * Number of instances in the worker pool.
   */
readonly workerCount?: number;

/**
   * VM size of the worker pool instances.
   */
readonly workerSize?: string;

/**
   * Worker size ID for referencing this worker pool.
   */
readonly workerSizeId?: number;

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
 * WebHostingenvironmentsWorkerpools resource
 */
export class WebHostingenvironmentsWorkerpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsWorkerpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments/workerPools@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsWorkerpoolsProps): string {
    return JSON.stringify(
        {properties: {computeMode: "string", workerCount: "${int}", workerSize: "string", workerSizeId: "${int}"}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: "${int}", family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: "${int}", elasticMaximum: "${int}", maximum: "${int}", minimum: "${int}", scaleType: "string"}, tier: "string"}, kind: "string"}
    );
  }
}
