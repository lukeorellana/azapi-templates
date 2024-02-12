import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDiskaccessesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * ComputeDiskaccessesPrivateendpointconnections resource
 */
export class ComputeDiskaccessesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeDiskaccessesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/diskAccesses/privateEndpointConnections@2023-01-02";
  }

  protected getResourceBody(props: ComputeDiskaccessesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
