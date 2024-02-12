import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsforwardingrulesetsForwardingrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dnsForwardingRulesets;

/**
   * The domain name for the forwarding rule.
   */
readonly domainName: string;

/**
   * The state of forwarding rule.
   */
readonly forwardingRuleState?: 'Disabled''Enabled';

/**
   * Metadata attached to the forwarding rule.
   */
readonly metadata?: object;

/**
   * DNS servers to forward the DNS query to.
   */
readonly targetDnsServers: TargetDnsServer[];

/**
   * DNS server IP address.
   */
readonly ipAddress: string;

/**
   * DNS server port.
   */
readonly port?: number;
}

/**
 * NetworkDnsforwardingrulesetsForwardingrules resource
 */
export class NetworkDnsforwardingrulesetsForwardingrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsforwardingrulesetsForwardingrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsforwardingrulesetsForwardingrulesProps): string {
    return JSON.stringify(
        {properties: {domainName: "string", forwardingRuleState: "string", metadata: {}, targetDnsServers: [{ipAddress: "string", port: "${int}"}]}}
    );
  }
}
