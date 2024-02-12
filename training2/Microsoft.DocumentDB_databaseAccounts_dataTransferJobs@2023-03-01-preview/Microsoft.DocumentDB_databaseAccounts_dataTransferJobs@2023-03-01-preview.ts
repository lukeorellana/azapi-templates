import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsDatatransferjobsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * Destination DataStore details
   */
readonly destination: DataTransferDataSourceSink;

/**
   * Source DataStore details
   */
readonly source: DataTransferDataSourceSink;

/**
   * Worker count
   */
readonly workerCount?: number;

/**
   * Set the object type
   */
readonly component: AzureBlobStorageCosmosDBCassandraCosmosDBMongoCosmosDBSql;

/**
   * 
   */
readonly component: 'AzureBlobStorage';

/**
   * 
   */
readonly containerName: string;

/**
   * 
   */
readonly endpointUrl?: string;

/**
   * 
   */
readonly component: 'CosmosDBCassandra';

/**
   * 
   */
readonly keyspaceName: string;

/**
   * 
   */
readonly tableName: string;

/**
   * 
   */
readonly component: 'CosmosDBMongo';

/**
   * 
   */
readonly collectionName: string;

/**
   * 
   */
readonly databaseName: string;

/**
   * 
   */
readonly component: 'CosmosDBSql';

/**
   * 
   */
readonly containerName: string;

/**
   * 
   */
readonly databaseName: string;
}

/**
 * DocumentdbDatabaseaccountsDatatransferjobs resource
 */
export class DocumentdbDatabaseaccountsDatatransferjobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsDatatransferjobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsDatatransferjobsProps): string {
    return JSON.stringify(
        {properties: {destination: {component: "string"}, source: {component: "string"}, workerCount: "${int}"}}
    );
  }
}
