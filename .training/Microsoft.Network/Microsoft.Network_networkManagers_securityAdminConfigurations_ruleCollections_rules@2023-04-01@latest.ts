import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRules resource
 */
export class NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRulesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
