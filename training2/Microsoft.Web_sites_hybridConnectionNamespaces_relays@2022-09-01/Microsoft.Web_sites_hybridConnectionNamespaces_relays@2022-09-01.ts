import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesHybridconnectionnamespacesRelaysProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: hybridConnectionNamespaces;

/**
   * The hostname of the endpoint.
   */
readonly hostname?: string;

/**
   * The port of the endpoint.
   */
readonly port?: number;

/**
   * The ARM URI to the Service Bus relay.
   */
readonly relayArmUri?: string;

/**
   * The name of the Service Bus relay.
   */
readonly relayName?: string;

/**
   * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
   */
readonly sendKeyName?: string;

/**
   * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returnednormally, use the POST /listKeys API instead.
   */
readonly sendKeyValue?: string;

/**
   * The name of the Service Bus namespace.
   */
readonly serviceBusNamespace?: string;

/**
   * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
   */
readonly serviceBusSuffix?: string;
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
