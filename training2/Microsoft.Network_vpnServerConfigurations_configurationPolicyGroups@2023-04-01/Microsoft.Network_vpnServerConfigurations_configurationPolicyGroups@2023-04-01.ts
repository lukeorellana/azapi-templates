import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpnserverconfigurationsConfigurationpolicygroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vpnServerConfigurations;

/**
   * Shows if this is a Default VpnServerConfigurationPolicyGroup or not.
   */
readonly isDefault?: bool;

/**
   * Multiple PolicyMembers for VpnServerConfigurationPolicyGroup.
   */
readonly policyMembers?: VpnServerConfigurationPolicyGroupMember[];

/**
   * Priority for VpnServerConfigurationPolicyGroup.
   */
readonly priority?: number;

/**
   * The Vpn Policy member attribute type.
   */
readonly attributeType?: 'AADGroupId''CertificateGroupId''RadiusAzureGroupId';

/**
   * The value of Attribute used for this VpnServerConfigurationPolicyGroupMember.
   */
readonly attributeValue?: string;
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
