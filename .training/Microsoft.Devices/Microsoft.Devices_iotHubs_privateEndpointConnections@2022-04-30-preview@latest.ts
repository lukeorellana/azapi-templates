import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DevicesIothubsPrivateendpointconnections resource
 */
export class DevicesIothubsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesIothubsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/iotHubs/privateEndpointConnections@2022-04-30-preview";
  }

  protected getResourceBody(props: DevicesIothubsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
