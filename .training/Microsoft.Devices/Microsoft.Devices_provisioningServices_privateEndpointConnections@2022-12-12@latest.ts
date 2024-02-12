import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesProvisioningservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DevicesProvisioningservicesPrivateendpointconnections resource
 */
export class DevicesProvisioningservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesProvisioningservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12";
  }

  protected getResourceBody(props: DevicesProvisioningservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
