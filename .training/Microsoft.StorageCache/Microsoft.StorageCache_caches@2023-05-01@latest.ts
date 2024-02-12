import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragecacheCachesProps extends IAzAPIBaseProps {

}

/**
 * StoragecacheCaches resource
 */
export class StoragecacheCaches extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragecacheCachesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageCache/caches@2023-05-01";
  }

  protected getResourceBody(props: StoragecacheCachesProps): string {
    return JSON.stringify(
        {properties: {cacheSizeGB: "${int}", directoryServicesSettings: {activeDirectory: {cacheNetBiosName: "string", credentials: {password: "string", username: "string"}, domainName: "string", domainNetBiosName: "string", primaryDnsIpAddress: "string", secondaryDnsIpAddress: "string"}, usernameDownload: {autoDownloadCertificate: "${bool}", caCertificateURI: "string", credentials: {bindDn: "string", bindPassword: "string"}, encryptLdapConnection: "${bool}", extendedGroups: "${bool}", groupFileURI: "string", ldapBaseDN: "string", ldapServer: "string", requireValidCertificate: "${bool}", userFileURI: "string", usernameSource: "string"}}, encryptionSettings: {keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}, rotationToLatestKeyVersionEnabled: "${bool}"}, networkSettings: {dnsSearchDomain: "string", dnsServers: ["string"], mtu: "${int}", ntpServer: "string"}, securitySettings: {accessPolicies: [{accessRules: [{access: "string", anonymousGID: "string", anonymousUID: "string", filter: "string", rootSquash: "${bool}", scope: "string", submountAccess: "${bool}", suid: "${bool}"}], name: "string"}]}, subnet: "string", upgradeSettings: {scheduledTime: "string", upgradeScheduleEnabled: "${bool}"}, zones: ["string"]}, sku: {name: "string"}}
    );
  }
}
