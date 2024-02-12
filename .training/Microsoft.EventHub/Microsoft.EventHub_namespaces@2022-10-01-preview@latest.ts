import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespaces resource
 */
export class EventhubNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesProps): string {
    return JSON.stringify(
        {properties: {alternateName: "string", clusterArmId: "string", disableLocalAuth: "${bool}", encryption: {keySource: "Microsoft.KeyVault", keyVaultProperties: [{identity: {userAssignedIdentity: "string"}, keyName: "string", keyVaultUri: "string", keyVersion: "string"}], requireInfrastructureEncryption: "${bool}"}, isAutoInflateEnabled: "${bool}", kafkaEnabled: "${bool}", maximumThroughputUnits: "${int}", minimumTlsVersion: "string", privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
