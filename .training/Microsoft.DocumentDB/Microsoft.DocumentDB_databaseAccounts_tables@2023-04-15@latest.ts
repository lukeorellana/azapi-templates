import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsTablesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsTables resource
 */
export class DocumentdbDatabaseaccountsTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/tables@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsTablesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string"}}}
    );
  }
}
