import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeAvailabilitysetsProps extends IAzAPIBaseProps {

}

/**
 * ComputeAvailabilitysets resource
 */
export class ComputeAvailabilitysets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeAvailabilitysetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/availabilitySets@2023-03-01";
  }

  protected getResourceBody(props: ComputeAvailabilitysetsProps): string {
    return JSON.stringify(
        {properties: {platformFaultDomainCount: "${int}", platformUpdateDomainCount: "${int}", proximityPlacementGroup: {id: "string"}, virtualMachines: [{id: "string"}]}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
