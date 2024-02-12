import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesNetworkrulesetsProps extends IAzAPIBaseProps {
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
   * This determines if traffic is allowed over public network. By default it is enabled
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * The IP Filter Action
   */
readonly action?: 'Allow';

/**
   * IP Mask
   */
readonly ipMask?: string;
}

/**
 * RelayNamespacesNetworkrulesets resource
 */
export class RelayNamespacesNetworkrulesets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesNetworkrulesetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/networkRuleSets@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesNetworkrulesetsProps): string {
    return JSON.stringify(
        {properties: {defaultAction: "string", ipRules: [{action: "Allow", ipMask: "string"}], publicNetworkAccess: "string"}}
    );
  }
}
