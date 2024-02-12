import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesHybridconnectionnamespacesRelaysProps extends IAzAPIBaseProps {

}

/**
 * WebSitesHybridconnectionnamespacesRelays resource
 */
export class WebSitesHybridconnectionnamespacesRelays extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesHybridconnectionnamespacesRelaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/hybridConnectionNamespaces/relays@2022-09-01";
  }

  protected getResourceBody(props: WebSitesHybridconnectionnamespacesRelaysProps): string {
    return JSON.stringify(
        {properties: {hostname: "string", port: "${int}", relayArmUri: "string", relayName: "string", sendKeyName: "string", sendKeyValue: "string", serviceBusNamespace: "string", serviceBusSuffix: "string"}, kind: "string"}
    );
  }
}
