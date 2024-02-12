import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersLinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkSecurityPerimeters;

/**
   * Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource.
   */
readonly autoApprovedRemotePerimeterResourceId?: string;

/**
   * A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars.
   */
readonly description?: string;

/**
   * Local Inbound profile names to which Inbound is allowed. Use [''] to allow inbound to all profiles. It's default value is [''].
   */
readonly localInboundProfiles?: string[];

/**
   * Remote Inbound profile names to which Inbound is allowed. Use [''] to allow inbound to all profiles. This property can only be updated in auto-approval mode. It's default value is [''].
   */
readonly remoteInboundProfiles?: string[];
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
