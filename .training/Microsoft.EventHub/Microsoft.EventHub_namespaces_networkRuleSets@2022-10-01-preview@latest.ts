import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesNetworkrulesetsProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesNetworkrulesets resource
 */
export class EventhubNamespacesNetworkrulesets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesNetworkrulesetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/networkRuleSets@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesNetworkrulesetsProps): string {
    return JSON.stringify(
        {properties: {defaultAction: "string", ipRules: [{action: "Allow", ipMask: "string"}], publicNetworkAccess: "string", trustedServiceAccessEnabled: "${bool}", virtualNetworkRules: [{ignoreMissingVnetServiceEndpoint: "${bool}", subnet: {id: "string"}}]}}
    );
  }
}
