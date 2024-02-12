import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringservicesConnectionmonitortestsProps extends IAzAPIBaseProps {

}

/**
 * PeeringPeeringservicesConnectionmonitortests resource
 */
export class PeeringPeeringservicesConnectionmonitortests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeeringservicesConnectionmonitortestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peeringServices/connectionMonitorTests@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeeringservicesConnectionmonitortestsProps): string {
    return JSON.stringify(
        {properties: {destination: "string", destinationPort: "${int}", sourceAgent: "string", testFrequencyInSec: "${int}"}}
    );
  }
}
