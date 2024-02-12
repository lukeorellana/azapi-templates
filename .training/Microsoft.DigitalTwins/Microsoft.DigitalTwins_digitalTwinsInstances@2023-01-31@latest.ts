import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesProps extends IAzAPIBaseProps {

}

/**
 * DigitaltwinsDigitaltwinsinstances resource
 */
export class DigitaltwinsDigitaltwinsinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesProps): string {
    return JSON.stringify(
        {properties: {privateEndpointConnections: [{properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}], publicNetworkAccess: "string"}}
    );
  }
}
