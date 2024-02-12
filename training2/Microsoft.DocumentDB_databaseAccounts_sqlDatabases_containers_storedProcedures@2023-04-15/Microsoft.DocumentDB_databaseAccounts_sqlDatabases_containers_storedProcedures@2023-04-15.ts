import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesContainersStoredproceduresProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:containers;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options?: CreateUpdateOptions;

/**
   * The standard JSON format of a storedProcedure
   */
readonly resource: SqlStoredProcedureResourceOrSqlStoredProcedureGetPro...;

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
   * Body of the Stored Procedure
   */
readonly body?: string;

/**
   * Name of the Cosmos DB SQL storedProcedure
   */
readonly id: string;
}

/**
 * DocumentdbDatabaseaccountsSqldatabasesContainersStoredprocedures resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesContainersStoredprocedures extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesContainersStoredproceduresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesContainersStoredproceduresProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {body: "string", id: "string"}}}
    );
  }
}
