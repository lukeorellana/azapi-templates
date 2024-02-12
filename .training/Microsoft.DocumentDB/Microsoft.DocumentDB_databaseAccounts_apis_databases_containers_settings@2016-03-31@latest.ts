import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesContainersSettingsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsApisDatabasesContainersSettings resource
 */
export class DocumentdbDatabaseaccountsApisDatabasesContainersSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisDatabasesContainersSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisDatabasesContainersSettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {throughput: "${int}"}}}
    );
  }
}
