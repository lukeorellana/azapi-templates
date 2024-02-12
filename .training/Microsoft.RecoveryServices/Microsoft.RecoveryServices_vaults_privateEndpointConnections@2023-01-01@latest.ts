import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsPrivateendpointconnections resource
 */
export class RecoveryservicesVaultsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionRequired: "string", description: "string", status: "string"}, provisioningState: "string"}, eTag: "string"}
    );
  }
}
