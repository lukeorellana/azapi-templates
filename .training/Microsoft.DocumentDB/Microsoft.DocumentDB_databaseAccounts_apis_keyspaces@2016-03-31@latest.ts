import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisKeyspacesProps extends IAzAPIBaseProps {

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
