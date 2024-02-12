import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsProps extends IAzAPIBaseProps {

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
