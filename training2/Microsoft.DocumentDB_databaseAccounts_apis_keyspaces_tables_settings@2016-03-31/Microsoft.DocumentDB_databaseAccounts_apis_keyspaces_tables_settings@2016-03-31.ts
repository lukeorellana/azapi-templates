import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisKeyspacesTablesSettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:tables;

/**
   * The standard JSON format of a resource throughput
   */
readonly resource: ThroughputResource;

/**
   * Value of the Cosmos DB resource throughput
   */
readonly throughput: number;
}

/**
 * DocumentdbDatabaseaccountsApisKeyspacesTablesSettings resource
 */
export class DocumentdbDatabaseaccountsApisKeyspacesTablesSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisKeyspacesTablesSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisKeyspacesTablesSettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {throughput: "${int}"}}}
    );
  }
}
