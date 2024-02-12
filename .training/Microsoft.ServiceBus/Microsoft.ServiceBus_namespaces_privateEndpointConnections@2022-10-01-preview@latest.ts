import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesPrivateendpointconnections resource
 */
export class ServicebusNamespacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/privateEndpointConnections@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
