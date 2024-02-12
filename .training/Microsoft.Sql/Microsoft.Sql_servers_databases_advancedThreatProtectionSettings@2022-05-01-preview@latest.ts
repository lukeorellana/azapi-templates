import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesAdvancedthreatprotectionsettings resource
 */
export class SqlServersDatabasesAdvancedthreatprotectionsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesAdvancedthreatprotectionsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesAdvancedthreatprotectionsettingsProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
