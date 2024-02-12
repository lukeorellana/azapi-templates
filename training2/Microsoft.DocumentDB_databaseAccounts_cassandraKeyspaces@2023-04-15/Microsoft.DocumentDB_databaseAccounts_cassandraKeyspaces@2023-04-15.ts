import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options?: CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesO...;

/**
   * The standard JSON format of a Cassandra keyspace
   */
readonly resource: CassandraKeyspaceResourceOrCassandraKeyspaceGetPrope...;

/**
   * Specifies the Autoscale settings.
   */
readonly autoscaleSettings?: AutoscaleSettings;

/**
   * Request Units per second. For example, "throughput": 10000.
   */
readonly throughput?: number;

/**
   * Represents maximum throughput, the resource can scale up to.
   */
readonly maxThroughput?: number;

/**
   * Name of the Cosmos DB Cassandra keyspace
   */
readonly id: string;
}

/**
 * DocumentdbDatabaseaccountsCassandrakeyspaces resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string"}}}
    );
  }
}
