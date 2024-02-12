import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccounts resource
 */
export class StorageStorageaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsProps): string {
    return JSON.stringify(
        {properties: {accessTier: "string", allowBlobPublicAccess: "${bool}", allowCrossTenantReplication: "${bool}", allowedCopyScope: "string", allowSharedKeyAccess: "${bool}", azureFilesIdentityBasedAuthentication: {activeDirectoryProperties: {accountType: "string", azureStorageSid: "string", domainGuid: "string", domainName: "string", domainSid: "string", forestName: "string", netBiosDomainName: "string", samAccountName: "string"}, defaultSharePermission: "string", directoryServiceOptions: "string"}, customDomain: {name: "string", useSubDomainName: "${bool}"}, defaultToOAuthAuthentication: "${bool}", dnsEndpointType: "string", encryption: {identity: {federatedIdentityClientId: "string", userAssignedIdentity: "string"}, keySource: "string", keyvaultproperties: {keyname: "string", keyvaulturi: "string", keyversion: "string"}, requireInfrastructureEncryption: "${bool}", services: {blob: {enabled: "${bool}", keyType: "string"}, file: {enabled: "${bool}", keyType: "string"}, queue: {enabled: "${bool}", keyType: "string"}, table: {enabled: "${bool}", keyType: "string"}}}, immutableStorageWithVersioning: {enabled: "${bool}", immutabilityPolicy: {allowProtectedAppendWrites: "${bool}", immutabilityPeriodSinceCreationInDays: "${int}", state: "string"}}, isHnsEnabled: "${bool}", isLocalUserEnabled: "${bool}", isNfsV3Enabled: "${bool}", isSftpEnabled: "${bool}", keyPolicy: {keyExpirationPeriodInDays: "${int}"}, largeFileSharesState: "string", minimumTlsVersion: "string", networkAcls: {bypass: "string", defaultAction: "string", ipRules: [{action: "Allow", value: "string"}], resourceAccessRules: [{resourceId: "string", tenantId: "string"}], virtualNetworkRules: [{action: "Allow", id: "string", state: "string"}]}, publicNetworkAccess: "string", routingPreference: {publishInternetEndpoints: "${bool}", publishMicrosoftEndpoints: "${bool}", routingChoice: "string"}, sasPolicy: {expirationAction: "Log", sasExpirationPeriod: "string"}, supportsHttpsTrafficOnly: "${bool}"}, sku: {name: "string"}, kind: "string", extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
