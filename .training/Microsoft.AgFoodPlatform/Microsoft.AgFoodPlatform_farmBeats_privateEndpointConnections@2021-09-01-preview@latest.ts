import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * AgfoodplatformFarmbeatsPrivateendpointconnections resource
 */
export class AgfoodplatformFarmbeatsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AgfoodplatformFarmbeatsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview";
  }

  protected getResourceBody(props: AgfoodplatformFarmbeatsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
