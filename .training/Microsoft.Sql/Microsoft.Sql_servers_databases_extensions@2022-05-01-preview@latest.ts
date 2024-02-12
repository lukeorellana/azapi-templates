import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesExtensionsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesExtensions resource
 */
export class SqlServersDatabasesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/extensions@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesExtensionsProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", authenticationType: "string", databaseEdition: "string", maxSizeBytes: "string", networkIsolation: {sqlServerResourceId: "string", storageAccountResourceId: "string"}, operationMode: "string", serviceObjectiveName: "string", storageKey: "string", storageKeyType: "string", storageUri: "string"}}
    );
  }
}
