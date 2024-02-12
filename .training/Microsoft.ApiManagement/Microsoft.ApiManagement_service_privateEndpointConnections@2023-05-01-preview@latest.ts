import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePrivateendpointconnections resource
 */
export class ApimanagementServicePrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/privateEndpointConnections@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
