import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesPrivateendpointconnections resource
 */
export class ContainerregistryRegistriesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
