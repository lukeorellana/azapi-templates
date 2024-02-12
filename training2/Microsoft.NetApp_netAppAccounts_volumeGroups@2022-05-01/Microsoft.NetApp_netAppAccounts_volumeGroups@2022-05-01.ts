import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsVolumegroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:netAppAccounts;

/**
   * Volume group details
   */
readonly groupMetaData?: VolumeGroupMetaData;

/**
   * List of volumes from group
   */
readonly volumes?: VolumeGroupVolumeProperties[];

/**
   * Application specific identifier
   */
readonly applicationIdentifier?: string;

/**
   * Application Type
   */
readonly applicationType?: 'SAP-HANA';

/**
   * Application specific identifier of deployment rules for the volume group
   */
readonly deploymentSpecId?: string;

/**
   * Application specific placement rules for the volume group
   */
readonly globalPlacementRules?: PlacementKeyValuePairs[];

/**
   * Group Description
   */
readonly groupDescription?: string;

/**
   * Key for an application specific parameter for the placement of volumes in the volume group
   */
readonly key: string;

/**
   * Value for an application specific parameter for the placement of volumes in the volume group
   */
readonly value: string;

/**
   * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
   */
readonly avsDataStore?: 'Disabled''Enabled';

/**
   * UUID v4 or resource identifier used to identify the Backup.
   */
readonly backupId?: string;

/**
   * Pool Resource Id used in case of creating a volume through volume group
   */
readonly capacityPoolResourceId?: string;

/**
   * Specifies whether Cool Access(tiering) is enabled for the volume.
   */
readonly coolAccess?: bool;

/**
   * Specifies the number of days after which data that is not accessed by clients will be tiered.
   */
readonly coolnessPeriod?: number;

/**
   * A unique file path for the volume. Used when creating mount targets
   */
readonly creationToken: string;

/**
   * DataProtection type volumes include an object containing details of the replication
   */
readonly dataProtection?: VolumePropertiesDataProtection;

/**
   * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
   */
readonly defaultGroupQuotaInKiBs?: number;

/**
   * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
   */
readonly defaultUserQuotaInKiBs?: number;

/**
   * If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
   */
readonly deleteBaseSnapshot?: bool;

/**
   * Flag indicating whether subvolume operations are enabled on the volume
   */
readonly enableSubvolumes?: 'Disabled''Enabled';

/**
   * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
   */
readonly encryptionKeySource?: 'Microsoft.KeyVault''Microsoft.NetApp';

/**
   * Set of export policy rules
   */
readonly exportPolicy?: VolumePropertiesExportPolicy;

/**
   * Specifies if default quota is enabled for the volume.
   */
readonly isDefaultQuotaEnabled?: bool;

/**
   * Restoring
   */
readonly isRestoring?: bool;

/**
   * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
   */
readonly kerberosEnabled?: bool;

/**
   * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
   */
readonly keyVaultPrivateEndpointResourceId?: string;

/**
   * Specifies whether LDAP is enabled or not for a given NFS volume.
   */
readonly ldapEnabled?: bool;

/**
   * Basic network, or Standard features available to the volume.
   */
readonly networkFeatures?: 'Basic''Standard';

/**
   * Application specific placement rules for the particular volume
   */
readonly placementRules?: PlacementKeyValuePairs[];

/**
   * Set of protocol types, default NFSv3, CIFS for SMB protocol
   */
readonly protocolTypes?: string[];

/**
   * Proximity placement group associated with the volume
   */
readonly proximityPlacementGroup?: string;

/**
   * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
   */
readonly securityStyle?: 'ntfs''unix';

/**
   * The service level of the file system
   */
readonly serviceLevel?: 'Premium''Standard''StandardZRS''Ultra';

/**
   * Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
   */
readonly smbAccessBasedEnumeration?: 'Disabled''Enabled';

/**
   * Enables continuously available share property for smb volume. Only applicable for SMB volume
   */
readonly smbContinuouslyAvailable?: bool;

/**
   * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
   */
readonly smbEncryption?: bool;

/**
   * Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
   */
readonly smbNonBrowsable?: 'Disabled''Enabled';

/**
   * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (default to true).
   */
readonly snapshotDirectoryVisible?: bool;

/**
   * UUID v4 or resource identifier used to identify the Snapshot.
   */
readonly snapshotId?: string;

/**
   * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
   */
readonly subnetId: string;

/**
   * Maximum throughput in MiB/s that can be achieved by this volume and this will be accepted as input only for manual qosType volume
   */
readonly throughputMibps?: number;

/**
   * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
   */
readonly unixPermissions?: string;

/**
   * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 500 GiB. Upper limit is 100TiB, 500Tib for LargeVolume. Specified in bytes.
   */
readonly usageThreshold: number;

/**
   * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
   */
readonly volumeSpecName?: string;

/**
   * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
   */
readonly volumeType?: string;

/**
   * Backup Properties
   */
readonly backup?: VolumeBackupProperties;

/**
   * Replication properties
   */
readonly replication?: ReplicationObject;

/**
   * Snapshot properties.
   */
readonly snapshot?: VolumeSnapshotProperties;

/**
   * Backup Enabled
   */
readonly backupEnabled?: bool;

/**
   * Backup Policy Resource ID
   */
readonly backupPolicyId?: string;

/**
   * Policy Enforced
   */
readonly policyEnforced?: bool;

/**
   * Vault Resource ID
   */
readonly vaultId?: string;

/**
   * Indicates whether the local volume is the source or destination for the Volume Replication
   */
readonly endpointType?: 'dst''src';

/**
   * The remote region for the other end of the Volume Replication.
   */
readonly remoteVolumeRegion?: string;

/**
   * The resource ID of the remote volume.
   */
readonly remoteVolumeResourceId: string;

/**
   * Id
   */
readonly replicationId?: string;

/**
   * Schedule
   */
readonly replicationSchedule?: '_10minutely''daily''hourly';

/**
   * Snapshot Policy ResourceId
   */
readonly snapshotPolicyId?: string;

/**
   * Export policy rule
   */
readonly rules?: ExportPolicyRule[];

/**
   * Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
   */
readonly allowedClients?: string;

/**
   * This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
   */
readonly chownMode?: 'Restricted''Unrestricted';

/**
   * Allows CIFS protocol
   */
readonly cifs?: bool;

/**
   * Has root access to volume
   */
readonly hasRootAccess?: bool;

/**
   * Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
   */
readonly kerberos5iReadWrite?: bool;

/**
   * Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
   */
readonly kerberos5pReadWrite?: bool;

/**
   * Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later
   */
readonly kerberos5ReadWrite?: bool;

/**
   * Allows NFSv3 protocol. Enable only for NFSv3 type volumes
   */
readonly nfsv3?: bool;

/**
   * Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes
   */
readonly nfsv41?: bool;

/**
   * Order index
   */
readonly ruleIndex?: number;

/**
   * Read and write access
   */
readonly unixReadWrite?: bool;
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
