import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesNetworkrulesetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Default Action for Network Rule Set
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * List of IpRules
   */
readonly ipRules?: NWRuleSetIpRules[];

/**
   * This determines if traffic is allowed over public network. By default it is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Value that indicates whether Trusted Service Access is Enabled or not.
   */
readonly trustedServiceAccessEnabled?: bool;

/**
   * List VirtualNetwork Rules
   */
readonly virtualNetworkRules?: NWRuleSetVirtualNetworkRules[];

/**
   * The IP Filter Action
   */
readonly action?: 'Allow';

/**
   * IP Mask
   */
readonly ipMask?: string;

/**
   * Value that indicates whether to ignore missing VNet Service Endpoint
   */
readonly ignoreMissingVnetServiceEndpoint?: bool;

/**
   * Subnet properties
   */
readonly subnet?: Subnet;

/**
   * Resource ID of Virtual Network Subnet
   */
readonly id: string;
}

/**
 * ServicebusNamespacesNetworkrulesets resource
 */
export class ServicebusNamespacesNetworkrulesets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesNetworkrulesetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/networkRuleSets@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesNetworkrulesetsProps): string {
    return JSON.stringify(
        {properties: {defaultAction: "string", ipRules: [{action: "Allow", ipMask: "string"}], publicNetworkAccess: "string", trustedServiceAccessEnabled: "${bool}", virtualNetworkRules: [{ignoreMissingVnetServiceEndpoint: "${bool}", subnet: {id: "string"}}]}}
    );
  }
}
