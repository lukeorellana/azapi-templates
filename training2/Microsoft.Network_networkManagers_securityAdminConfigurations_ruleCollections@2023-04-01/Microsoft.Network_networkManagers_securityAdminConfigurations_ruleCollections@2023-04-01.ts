import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:securityAdminConfigurations;

/**
   * Groups for configuration
   */
readonly appliesToGroups: NetworkManagerSecurityGroupItem[];

/**
   * A description of the admin rule collection.
   */
readonly description?: string;

/**
   * Network manager group Id.
   */
readonly networkGroupId: string;
}

/**
 * NetworkNetworkmanagersSecurityadminconfigurationsRulecollections resource
 */
export class NetworkNetworkmanagersSecurityadminconfigurationsRulecollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsProps): string {
    return JSON.stringify(
        {properties: {appliesToGroups: [{networkGroupId: "string"}], description: "string"}}
    );
  }
}
