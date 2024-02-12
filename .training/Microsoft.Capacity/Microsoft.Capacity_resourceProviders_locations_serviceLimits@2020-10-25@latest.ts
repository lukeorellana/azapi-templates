import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CapacityResourceprovidersLocationsServicelimitsProps extends IAzAPIBaseProps {

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
