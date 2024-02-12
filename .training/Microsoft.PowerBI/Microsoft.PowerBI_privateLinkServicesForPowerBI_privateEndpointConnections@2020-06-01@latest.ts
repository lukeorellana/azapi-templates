import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnections resource
 */
export class PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01";
  }

  protected getResourceBody(props: PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
