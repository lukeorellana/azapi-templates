import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFirewallpoliciesSignatureoverridesProps extends IAzAPIBaseProps {

}

/**
 * NetworkFirewallpoliciesSignatureoverrides resource
 */
export class NetworkFirewallpoliciesSignatureoverrides extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkFirewallpoliciesSignatureoverridesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01";
  }

  protected getResourceBody(props: NetworkFirewallpoliciesSignatureoverridesProps): string {
    return JSON.stringify(
        {properties: {signatures: {}}}
    );
  }
}
