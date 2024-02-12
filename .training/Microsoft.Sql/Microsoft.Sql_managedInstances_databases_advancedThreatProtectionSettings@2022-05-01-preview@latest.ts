import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDatabasesAdvancedthreatprotectionsettings resource
 */
export class SqlManagedinstancesDatabasesAdvancedthreatprotectionsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesAdvancedthreatprotectionsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesAdvancedthreatprotectionsettingsProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
