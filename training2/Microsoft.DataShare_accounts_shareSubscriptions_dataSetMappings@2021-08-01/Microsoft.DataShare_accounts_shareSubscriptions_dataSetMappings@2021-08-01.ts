import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatashareAccountsSharesubscriptionsDatasetmappingsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: AdlsGen2FileAdlsGen2FileSystemAdlsGen2FolderBlobBlobFolderContainerKustoClusterKustoDatabaseKustoTableSqlDBTableSqlDWTableSynapseWorkspaceSqlPoolTable;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:shareSubscriptions;

/**
   * Kind of data set mapping.
   */
readonly kind: 'AdlsGen2File';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * File path within the file system.
   */
readonly filePath: string;

/**
   * File system to which the file belongs.
   */
readonly fileSystem: string;

/**
   * Type of output file
   */
readonly outputType?: 'Csv''Parquet';

/**
   * Resource group of storage account.
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set.
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'AdlsGen2FileSystem';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * The file system name.
   */
readonly fileSystem: string;

/**
   * Resource group of storage account.
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set.
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'AdlsGen2Folder';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * File system to which the folder belongs.
   */
readonly fileSystem: string;

/**
   * Folder path within the file system.
   */
readonly folderPath: string;

/**
   * Resource group of storage account.
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set.
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'Blob';

/**
   * Container that has the file path.
   */
readonly containerName: string;

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * File path within the source data set
   */
readonly filePath: string;

/**
   * File output type
   */
readonly outputType?: 'Csv''Parquet';

/**
   * Resource group of storage account.
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set.
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'BlobFolder';

/**
   * Container that has the file path.
   */
readonly containerName: string;

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * Prefix for blob folder
   */
readonly prefix: string;

/**
   * Resource group of storage account.
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set.
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'Container';

/**
   * BLOB Container name.
   */
readonly containerName: string;

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * Resource group of storage account.
   */
readonly resourceGroup: string;

/**
   * Storage account name of the source data set.
   */
readonly storageAccountName: string;

/**
   * Subscription id of storage account.
   */
readonly subscriptionId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'KustoCluster';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * Resource id of the sink kusto cluster.
   */
readonly kustoClusterResourceId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'KustoDatabase';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * Resource id of the sink kusto cluster.
   */
readonly kustoClusterResourceId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'KustoTable';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * Resource id of the sink kusto cluster.
   */
readonly kustoClusterResourceId: string;

/**
   * Kind of data set mapping.
   */
readonly kind: 'SqlDBTable';

/**
   * DatabaseName name of the sink data set
   */
readonly databaseName: string;

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

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
   * Kind of data set mapping.
   */
readonly kind: 'SqlDWTable';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

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
   * Kind of data set mapping.
   */
readonly kind: 'SynapseWorkspaceSqlPoolTable';

/**
   * The id of the source data set.
   */
readonly dataSetId: string;

/**
   * Resource id of the Synapse Workspace SQL Pool Table
   */
readonly synapseWorkspaceSqlPoolTableResourceId: string;
}

/**
 * DatashareAccountsSharesubscriptionsDatasetmappings resource
 */
export class DatashareAccountsSharesubscriptionsDatasetmappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatashareAccountsSharesubscriptionsDatasetmappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01";
  }

  protected getResourceBody(props: DatashareAccountsSharesubscriptionsDatasetmappingsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
