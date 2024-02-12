import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpnserverconfigurationsConfigurationpolicygroupsProps extends IAzAPIBaseProps {

}

/**
 * NetworkVpnserverconfigurationsConfigurationpolicygroups resource
 */
export class NetworkVpnserverconfigurationsConfigurationpolicygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpnserverconfigurationsConfigurationpolicygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpnserverconfigurationsConfigurationpolicygroupsProps): string {
    return JSON.stringify(
        {properties: {isDefault: "${bool}", policyMembers: [{attributeType: "string", attributeValue: "string", name: "string"}], priority: "${int}"}}
    );
  }
}
