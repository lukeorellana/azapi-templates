import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server.
   */
readonly state: 'Disabled''Enabled''New';
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
