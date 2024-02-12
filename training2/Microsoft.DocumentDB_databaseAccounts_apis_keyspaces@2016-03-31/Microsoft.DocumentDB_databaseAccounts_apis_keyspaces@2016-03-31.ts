import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisKeyspacesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: apis;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options: object;

/**
   * The standard JSON format of a Cassandra keyspace
   */
readonly resource: CassandraKeyspaceResource;

/**
   * Name of the Cosmos DB Cassandra keyspace
   */
readonly id: string;
}

/**
 * DocumentdbDatabaseaccountsApisKeyspaces resource
 */
export class DocumentdbDatabaseaccountsApisKeyspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisKeyspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisKeyspacesProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {id: "string"}}}
    );
  }
}
