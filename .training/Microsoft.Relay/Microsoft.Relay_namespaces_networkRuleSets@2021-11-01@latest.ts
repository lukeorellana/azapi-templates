import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesNetworkrulesetsProps extends IAzAPIBaseProps {

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
