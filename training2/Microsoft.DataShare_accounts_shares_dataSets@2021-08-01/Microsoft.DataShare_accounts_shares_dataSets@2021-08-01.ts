import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesDatasetsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: AdlsGen1FileAdlsGen1FolderAdlsGen2FileAdlsGen2FileSystemAdlsGen2FolderBlobBlobFolderContainerKustoClusterKustoDatabaseKustoTableSqlDBTableSqlDWTableSynapseWorkspaceSqlPoolTable;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:shares;

/**
   * Kind of data set.
   */
readonly kind: 'AdlsGen1File';

/**
   * The ADLS account name.
   */
readonly accountName: string;

/**
   * The file name in the ADLS account.
   */
readonly fileName: string;

/**
   * The folder path within the ADLS account.
   */
readonly folderPath: string;

/**
   * Resource group of ADLS account.
   */
readonly resourceGroup: string;

/**
   * Subscription id of ADLS account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'AdlsGen1Folder';

/**
   * The ADLS account name.
   */
readonly accountName: string;

/**
   * The folder path within the ADLS account.
   */
readonly folderPath: string;

/**
   * Resource group of ADLS account.
   */
readonly resourceGroup: string;

/**
   * Subscription id of ADLS account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'AdlsGen2File';

/**
   * File path within the file system.
   */
readonly filePath: string;

/**
   * File system to which the file belongs.
   */
readonly fileSystem: string;

/**
   * Resource group of storage account
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'AdlsGen2FileSystem';

/**
   * The file system name.
   */
readonly fileSystem: string;

/**
   * Resource group of storage account
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'AdlsGen2Folder';

/**
   * File system to which the folder belongs.
   */
readonly fileSystem: string;

/**
   * Folder path within the file system.
   */
readonly folderPath: string;

/**
   * Resource group of storage account
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'Blob';

/**
   * Container that has the file path.
   */
readonly containerName: string;

/**
   * File path within the source data set
   */
readonly filePath: string;

/**
   * Resource group of storage account
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'BlobFolder';

/**
   * Container that has the file path.
   */
readonly containerName: string;

/**
   * Prefix for blob folder
   */
readonly prefix: string;

/**
   * Resource group of storage account
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'Container';

/**
   * BLOB Container name.
   */
readonly containerName: string;

/**
   * Resource group of storage account
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account
   */
readonly subscriptionId: string;

/**
   * Kind of data set.
   */
readonly kind: 'KustoCluster';

/**
   * Resource id of the kusto cluster.
   */
readonly kustoClusterResourceId: string;

/**
   * Kind of data set.
   */
readonly kind: 'KustoDatabase';

/**
   * Resource id of the kusto database.
   */
readonly kustoDatabaseResourceId: string;

/**
   * Kind of data set.
   */
readonly kind: 'KustoTable';

/**
   * Resource id of the kusto database.
   */
readonly kustoDatabaseResourceId: string;

/**
   * Table level sharing properties for kusto database
   */
readonly tableLevelSharingProperties: TableLevelSharingProperties;

/**
   * External tables to be excluded in the data set
   */
readonly externalTablesToExclude?: string[];

/**
   * External tables to be included in the data set
   */
readonly externalTablesToInclude?: string[];

/**
   * Materialized views to be excluded in the data set
   */
readonly materializedViewsToExclude?: string[];

/**
   * Materialized views to be included in the data set
   */
readonly materializedViewsToInclude?: string[];

/**
   * Tables to be excluded in the data set
   */
readonly tablesToExclude?: string[];

/**
   * Tables to be included in the data set
   */
readonly tablesToInclude?: string[];

/**
   * Kind of data set.
   */
readonly kind: 'SqlDBTable';

/**
   * Database name of the source data set
   */
readonly databaseName: string;

/**
   * Schema of the table. Default value is dbo.
   */
readonly schemaName: string;

/**
   * Resource id of SQL server
   */
readonly sqlServerResourceId: string;

/**
   * SQL DB table name.
   */
readonly tableName: string;

/**
   * Kind of data set.
   */
readonly kind: 'SqlDWTable';

/**
   * DataWarehouse name of the source data set
   */
readonly dataWarehouseName: string;

/**
   * Schema of the table. Default value is dbo.
   */
readonly schemaName: string;

/**
   * Resource id of SQL server
   */
readonly sqlServerResourceId: string;

/**
   * SQL DW table name.
   */
readonly tableName: string;

/**
   * Kind of data set.
   */
readonly kind: 'SynapseWorkspaceSqlPoolTable';

/**
   * Resource id of the Synapse Workspace SQL Pool Table
   */
readonly synapseWorkspaceSqlPoolTableResourceId: string;
}

/**
 * DatashareAccountsSharesDatasets resource
 */
export class DatashareAccountsSharesDatasets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesDatasetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shares/dataSets@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesDatasetsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
