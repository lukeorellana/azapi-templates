import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesAdvancedthreatprotectionsettings resource
 */
export class SqlManagedinstancesAdvancedthreatprotectionsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesAdvancedthreatprotectionsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/advancedThreatProtectionSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesAdvancedthreatprotectionsettingsProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
