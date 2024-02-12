import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsBackupinstancesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:backupVaults;

/**
   * Credentials to use to authenticate with data source provider.
   */
readonly datasourceAuthCredentials?: AuthCredentials;

/**
   * Gets or sets the data source information.
   */
readonly dataSourceInfo: Datasource;

/**
   * Gets or sets the data source set information.
   */
readonly dataSourceSetInfo?: DatasourceSet;

/**
   * Gets or sets the Backup Instance friendly name.
   */
readonly friendlyName?: string;

/**
   * 
   */
readonly objectType: string;

/**
   * Gets or sets the policy information.
   */
readonly policyInfo: PolicyInfo;

/**
   * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
   */
readonly validationType?: 'DeepValidation''ShallowValidation';

/**
   * Set the object type
   */
readonly objectType: SecretStoreBasedAuthCredentials;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'SecretStoreBasedAuthCredentials';

/**
   * Secret store resource
   */
readonly secretStoreResource?: SecretStoreResource;

/**
   * Gets or sets the type of secret store
   */
readonly secretStoreType: 'AzureKeyVault''Invalid';

/**
   * Uri to get to the resource
   */
readonly uri?: string;

/**
   * Gets or sets value stored in secret store resource
   */
readonly value?: string;

/**
   * DatasourceType of the resource.
   */
readonly datasourceType?: string;

/**
   * Type of Datasource object, used to initialize the right inherited type
   */
readonly objectType?: string;

/**
   * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
   */
readonly resourceID: string;

/**
   * Location of datasource.
   */
readonly resourceLocation?: string;

/**
   * Unique identifier of the resource in the context of parent.
   */
readonly resourceName?: string;

/**
   * Resource Type of Datasource.
   */
readonly resourceType?: string;

/**
   * Uri of the resource.
   */
readonly resourceUri?: string;

/**
   * DatasourceType of the resource.
   */
readonly datasourceType?: string;

/**
   * Type of Datasource object, used to initialize the right inherited type
   */
readonly objectType?: string;

/**
   * Full ARM ID of the resource. For azure resources, this is ARM ID. For non azure resources, this will be the ID created by backup service via Fabric/Vault.
   */
readonly resourceID: string;

/**
   * Location of datasource.
   */
readonly resourceLocation?: string;

/**
   * Unique identifier of the resource in the context of parent.
   */
readonly resourceName?: string;

/**
   * Resource Type of Datasource.
   */
readonly resourceType?: string;

/**
   * Uri of the resource.
   */
readonly resourceUri?: string;

/**
   * 
   */
readonly policyId: string;

/**
   * Policy parameters for the backup instance
   */
readonly policyParameters?: PolicyParameters;

/**
   * Gets or sets the Backup Data Source Parameters
   */
readonly backupDatasourceParametersList?: BackupDatasourceParameters[];

/**
   * Gets or sets the DataStore Parameters
   */
readonly dataStoreParametersList?: DataStoreParameters[];

/**
   * Set the object type
   */
readonly objectType: BlobBackupDatasourceParametersKubernetesClusterBackupDatasourceParameters;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'BlobBackupDatasourceParameters';

/**
   * List of containers to be backed up during configuration of backup of blobs
   */
readonly containersList: string[];

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'KubernetesClusterBackupDatasourceParameters';

/**
   * Gets or sets the exclude namespaces property. This property sets the namespaces to be excluded during restore.
   */
readonly excludedNamespaces?: string[];

/**
   * Gets or sets the exclude resource types property. This property sets the resource types to be excluded during restore.
   */
readonly excludedResourceTypes?: string[];

/**
   * Gets or sets the include cluster resources property. This property if enabled will include cluster scope resources during restore.
   */
readonly includeClusterScopeResources: bool;

/**
   * Gets or sets the include namespaces property. This property sets the namespaces to be included during restore.
   */
readonly includedNamespaces?: string[];

/**
   * Gets or sets the include resource types property. This property sets the resource types to be included during restore.
   */
readonly includedResourceTypes?: string[];

/**
   * Gets or sets the LabelSelectors property. This property sets the resource with such label selectors to be included during restore.
   */
readonly labelSelectors?: string[];

/**
   * Gets or sets the volume snapshot property. This property if enabled will take volume snapshots during restore.
   */
readonly snapshotVolumes: bool;

/**
   * type of datastore; Operational/Vault/Archive
   */
readonly dataStoreType: 'ArchiveStore''OperationalStore''VaultStore';

/**
   * Set the object type
   */
readonly objectType: AzureOperationalStoreParameters;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'AzureOperationalStoreParameters';

/**
   * Gets or sets the Snapshot Resource Group Uri.
   */
readonly resourceGroupId?: string;
}

/**
 * DataprotectionBackupvaultsBackupinstances resource
 */
export class DataprotectionBackupvaultsBackupinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsBackupinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults/backupInstances@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsBackupinstancesProps): string {
    return JSON.stringify(
        {properties: {datasourceAuthCredentials: {objectType: "string"}, dataSourceInfo: {datasourceType: "string", objectType: "string", resourceID: "string", resourceLocation: "string", resourceName: "string", resourceType: "string", resourceUri: "string"}, dataSourceSetInfo: {datasourceType: "string", objectType: "string", resourceID: "string", resourceLocation: "string", resourceName: "string", resourceType: "string", resourceUri: "string"}, friendlyName: "string", objectType: "string", policyInfo: {policyId: "string", policyParameters: {backupDatasourceParametersList: [{objectType: "string"}], dataStoreParametersList: [{dataStoreType: "string", objectType: "string"}]}}, validationType: "string"}}
    );
  }
}
