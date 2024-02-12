import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface IotcentralIotappsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * IotcentralIotappsPrivateendpointconnections resource
 */
export class IotcentralIotappsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: IotcentralIotappsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.IoTCentral/iotApps/privateEndpointConnections@2021-11-01-preview";
  }

  protected getResourceBody(props: IotcentralIotappsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
