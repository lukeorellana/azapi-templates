import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisTablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: apis;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options: object;

/**
   * The standard JSON format of a Table
   */
readonly resource: TableResource;

/**
   * Name of the Cosmos DB table
   */
readonly id: string;
}

/**
 * DocumentdbDatabaseaccountsApisTables resource
 */
export class DocumentdbDatabaseaccountsApisTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/tables@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisTablesProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {id: "string"}}}
    );
  }
}
