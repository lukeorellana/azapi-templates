import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespaces resource
 */
export class ServicebusNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesProps): string {
    return JSON.stringify(
        {properties: {alternateName: "string", disableLocalAuth: "${bool}", encryption: {keySource: "Microsoft.KeyVault", keyVaultProperties: [{identity: {userAssignedIdentity: "string"}, keyName: "string", keyVaultUri: "string", keyVersion: "string"}], requireInfrastructureEncryption: "${bool}"}, minimumTlsVersion: "string", premiumMessagingPartitions: "${int}", privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
