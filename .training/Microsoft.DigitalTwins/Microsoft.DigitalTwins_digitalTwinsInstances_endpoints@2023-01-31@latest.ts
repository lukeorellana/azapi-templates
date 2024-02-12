import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesEndpointsProps extends IAzAPIBaseProps {

}

/**
 * DigitaltwinsDigitaltwinsinstancesEndpoints resource
 */
export class DigitaltwinsDigitaltwinsinstancesEndpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesEndpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesEndpointsProps): string {
    return JSON.stringify(
        {properties: {authenticationType: "string", deadLetterSecret: "string", deadLetterUri: "string", identity: {type: "string", userAssignedIdentity: "string"}, endpointType: "string"}}
    );
  }
}
