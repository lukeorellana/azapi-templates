import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceWebpubsub resource
 */
export class SignalrserviceWebpubsub extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubProps): string {
    return JSON.stringify(
        {properties: {disableAadAuth: "${bool}", disableLocalAuth: "${bool}", liveTraceConfiguration: {categories: [{enabled: "string", name: "string"}], enabled: "string"}, networkACLs: {defaultAction: "string", ipRules: [{action: "string", value: "string"}], privateEndpoints: [{allow: ["string"], deny: ["string"], name: "string"}], publicNetwork: {allow: ["string"], deny: ["string"]}}, publicNetworkAccess: "string", regionEndpointEnabled: "string", resourceLogConfiguration: {categories: [{enabled: "string", name: "string"}]}, resourceStopped: "string", tls: {clientCertEnabled: "${bool}"}}, sku: {capacity: "${int}", name: "string", tier: "string"}, kind: "string"}
    );
  }
}
