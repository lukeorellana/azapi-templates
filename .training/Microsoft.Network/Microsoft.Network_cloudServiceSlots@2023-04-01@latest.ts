import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkCloudserviceslotsProps extends IAzAPIBaseProps {

}

/**
 * NetworkCloudserviceslots resource
 */
export class NetworkCloudserviceslots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkCloudserviceslotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/cloudServiceSlots@2023-04-01";
  }

  protected getResourceBody(props: NetworkCloudserviceslotsProps): string {
    return JSON.stringify(
        {properties: {slotType: "string"}}
    );
  }
}
