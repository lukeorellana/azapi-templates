import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccounts resource
 */
export class NetappNetappaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsProps): string {
    return JSON.stringify(
        {properties: {activeDirectories: [{activeDirectoryId: "string", administrators: ["string"], adName: "string", aesEncryption: "${bool}", allowLocalNfsUsersWithLdap: "${bool}", backupOperators: ["string"], dns: "string", domain: "string", encryptDCConnections: "${bool}", kdcIP: "string", ldapOverTLS: "${bool}", ldapSearchScope: {groupDN: "string", groupMembershipFilter: "string", userDN: "string"}, ldapSigning: "${bool}", organizationalUnit: "string", password: "string", securityOperators: ["string"], serverRootCACertificate: "string", site: "string", smbServerName: "string", username: "string"}], encryption: {identity: {userAssignedIdentity: "string"}, keySource: "string", keyVaultProperties: {keyName: "string", keyVaultResourceId: "string", keyVaultUri: "string"}}}}
    );
  }
}
