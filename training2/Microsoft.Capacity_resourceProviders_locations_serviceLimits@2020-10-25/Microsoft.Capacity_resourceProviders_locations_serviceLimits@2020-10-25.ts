import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CapacityResourceprovidersLocationsServicelimitsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: locations;

/**
   * Quota properties.
   */
readonly limit?: number;

/**
   * The name of the resource type.
   */
readonly resourceType?: 'dedicated''lowPriority''serviceSpecific''shared''standard';

/**
   * The limit units, such ascountandbytes. Use the unit field provided in the response of the GET quota operation.
   */
readonly unit?: string;

/**
   * Resource name.
   */
readonly value?: string;
}

/**
 * CapacityResourceprovidersLocationsServicelimits resource
 */
export class CapacityResourceprovidersLocationsServicelimits extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CapacityResourceprovidersLocationsServicelimitsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25";
  }

  protected getResourceBody(props: CapacityResourceprovidersLocationsServicelimitsProps): string {
    return JSON.stringify(
        {properties: {limit: "${int}", name: {value: "string"}, resourceType: "string", unit: "string"}}
    );
  }
}
