import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * MediaMediaservicesPrivateendpointconnections resource
 */
export class MediaMediaservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaservices/privateEndpointConnections@2021-11-01";
  }

  protected getResourceBody(props: MediaMediaservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
