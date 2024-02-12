import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesCollectionsSettingsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsApisDatabasesCollectionsSettings resource
 */
export class DocumentdbDatabaseaccountsApisDatabasesCollectionsSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisDatabasesCollectionsSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisDatabasesCollectionsSettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {throughput: "${int}"}}}
    );
  }
}
