import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * AppconfigurationConfigurationstoresPrivateendpointconnections resource
 */
export class AppconfigurationConfigurationstoresPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppconfigurationConfigurationstoresPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2023-03-01";
  }

  protected getResourceBody(props: AppconfigurationConfigurationstoresPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
