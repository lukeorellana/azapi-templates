import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFirewallpoliciesSignatureoverridesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:firewallPolicies;

/**
   * Dictionary of {string}
   */
readonly signatures?: object;
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
