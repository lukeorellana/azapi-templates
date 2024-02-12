import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AadDomainservicesProps extends IAzAPIBaseProps {

}

/**
 * AadDomainservices resource
 */
export class AadDomainservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AadDomainservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AAD/domainServices@2022-12-01";
  }

  protected getResourceBody(props: AadDomainservicesProps): string {
    return JSON.stringify(
        {properties: {configDiagnostics: {lastExecuted: "string", validatorResults: [{issues: [{descriptionParams: ["string"], id: "string"}], replicaSetSubnetDisplayName: "string", status: "string", validatorId: "string"}]}, domainConfigurationType: "string", domainName: "string", domainSecuritySettings: {channelBinding: "string", kerberosArmoring: "string", kerberosRc4Encryption: "string", ldapSigning: "string", ntlmV1: "string", syncKerberosPasswords: "string", syncNtlmPasswords: "string", syncOnPremPasswords: "string", tlsV1: "string"}, filteredSync: "string", ldapsSettings: {externalAccess: "string", ldaps: "string", pfxCertificate: "string", pfxCertificatePassword: "string"}, notificationSettings: {additionalRecipients: ["string"], notifyDcAdmins: "string", notifyGlobalAdmins: "string"}, replicaSets: [{location: "string", subnetId: "string"}], resourceForestSettings: {resourceForest: "string", settings: [{friendlyName: "string", remoteDnsIps: "string", trustDirection: "string", trustedDomainFqdn: "string", trustPassword: "string"}]}, sku: "string", syncScope: "string"}, etag: "string"}
    );
  }
}
