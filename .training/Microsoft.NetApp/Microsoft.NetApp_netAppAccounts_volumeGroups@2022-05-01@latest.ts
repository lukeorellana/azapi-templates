import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsVolumegroupsProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccountsVolumegroups resource
 */
export class NetappNetappaccountsVolumegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsVolumegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/volumeGroups@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsVolumegroupsProps): string {
    return JSON.stringify(
        {properties: {groupMetaData: {applicationIdentifier: "string", applicationType: "SAP-HANA", deploymentSpecId: "string", globalPlacementRules: [{key: "string", value: "string"}], groupDescription: "string"}, volumes: [{name: "string", properties: {avsDataStore: "string", backupId: "string", capacityPoolResourceId: "string", coolAccess: "${bool}", coolnessPeriod: "${int}", creationToken: "string", dataProtection: {backup: {backupEnabled: "${bool}", backupPolicyId: "string", policyEnforced: "${bool}", vaultId: "string"}, replication: {endpointType: "string", remoteVolumeRegion: "string", remoteVolumeResourceId: "string", replicationId: "string", replicationSchedule: "string"}, snapshot: {snapshotPolicyId: "string"}}, defaultGroupQuotaInKiBs: "${int}", defaultUserQuotaInKiBs: "${int}", deleteBaseSnapshot: "${bool}", enableSubvolumes: "string", encryptionKeySource: "string", exportPolicy: {rules: [{allowedClients: "string", chownMode: "string", cifs: "${bool}", hasRootAccess: "${bool}", kerberos5iReadWrite: "${bool}", kerberos5pReadWrite: "${bool}", kerberos5ReadWrite: "${bool}", nfsv3: "${bool}", nfsv41: "${bool}", ruleIndex: "${int}", unixReadWrite: "${bool}"}]}, isDefaultQuotaEnabled: "${bool}", isRestoring: "${bool}", kerberosEnabled: "${bool}", keyVaultPrivateEndpointResourceId: "string", ldapEnabled: "${bool}", networkFeatures: "string", placementRules: [{key: "string", value: "string"}], protocolTypes: ["string"], proximityPlacementGroup: "string", securityStyle: "string", serviceLevel: "string", smbAccessBasedEnumeration: "string", smbContinuouslyAvailable: "${bool}", smbEncryption: "${bool}", smbNonBrowsable: "string", snapshotDirectoryVisible: "${bool}", snapshotId: "string", subnetId: "string", throughputMibps: "${int}", unixPermissions: "string", usageThreshold: "${int}", volumeSpecName: "string", volumeType: "string"}, tags: {}}]}}
    );
  }
}
