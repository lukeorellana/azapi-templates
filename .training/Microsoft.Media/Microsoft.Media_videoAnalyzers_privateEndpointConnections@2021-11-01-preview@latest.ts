import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * MediaVideoanalyzersPrivateendpointconnections resource
 */
export class MediaVideoanalyzersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
