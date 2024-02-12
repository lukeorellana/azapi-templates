import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRules resource
 */
export class NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRulesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
