import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DigitaltwinsDigitaltwinsinstancesPrivateendpointconnections resource
 */
export class DigitaltwinsDigitaltwinsinstancesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
