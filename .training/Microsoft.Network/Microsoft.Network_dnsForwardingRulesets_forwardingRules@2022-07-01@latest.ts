import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsforwardingrulesetsForwardingrulesProps extends IAzAPIBaseProps {

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
