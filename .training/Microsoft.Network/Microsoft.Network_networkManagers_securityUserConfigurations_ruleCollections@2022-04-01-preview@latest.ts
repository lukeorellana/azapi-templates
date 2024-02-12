import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersSecurityuserconfigurationsRulecollections resource
 */
export class NetworkNetworkmanagersSecurityuserconfigurationsRulecollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsProps): string {
    return JSON.stringify(
        {properties: {appliesToGroups: [{networkGroupId: "string"}], description: "string"}}
    );
  }
}
