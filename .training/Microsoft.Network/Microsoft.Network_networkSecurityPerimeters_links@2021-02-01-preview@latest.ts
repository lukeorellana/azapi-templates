import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersLinksProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworksecurityperimetersLinks resource
 */
export class NetworkNetworksecurityperimetersLinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersLinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersLinksProps): string {
    return JSON.stringify(
        {properties: {autoApprovedRemotePerimeterResourceId: "string", description: "string", localInboundProfiles: ["string"], remoteInboundProfiles: ["string"]}}
    );
  }
}
