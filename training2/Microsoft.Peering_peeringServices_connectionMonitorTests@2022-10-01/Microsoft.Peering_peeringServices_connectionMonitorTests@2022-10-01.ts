import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringservicesConnectionmonitortestsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:peeringServices;

/**
   * The Connection Monitor test destination
   */
readonly destination?: string;

/**
   * The Connection Monitor test destination port
   */
readonly destinationPort?: number;

/**
   * The Connection Monitor test source agent
   */
readonly sourceAgent?: string;

/**
   * The Connection Monitor test frequency in seconds
   */
readonly testFrequencyInSec?: number;
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
