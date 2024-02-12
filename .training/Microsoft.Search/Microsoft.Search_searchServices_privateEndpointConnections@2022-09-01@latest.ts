import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SearchSearchservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * SearchSearchservicesPrivateendpointconnections resource
 */
export class SearchSearchservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SearchSearchservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: SearchSearchservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
