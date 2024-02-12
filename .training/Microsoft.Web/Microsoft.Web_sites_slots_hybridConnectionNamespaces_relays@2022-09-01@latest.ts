import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsHybridconnectionnamespacesRelaysProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsHybridconnectionnamespacesRelays resource
 */
export class WebSitesSlotsHybridconnectionnamespacesRelays extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsHybridconnectionnamespacesRelaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsHybridconnectionnamespacesRelaysProps): string {
    return JSON.stringify(
        {properties: {hostname: "string", port: "${int}", relayArmUri: "string", relayName: "string", sendKeyName: "string", sendKeyValue: "string", serviceBusNamespace: "string", serviceBusSuffix: "string"}, kind: "string"}
    );
  }
}
