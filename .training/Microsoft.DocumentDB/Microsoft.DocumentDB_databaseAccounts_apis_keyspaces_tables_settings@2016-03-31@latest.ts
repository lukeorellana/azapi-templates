import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisKeyspacesTablesSettingsProps extends IAzAPIBaseProps {

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
