import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesBackupshorttermretentionpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDatabasesBackupshorttermretentionpolicies resource
 */
export class SqlManagedinstancesDatabasesBackupshorttermretentionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesBackupshorttermretentionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesBackupshorttermretentionpoliciesProps): string {
    return JSON.stringify(
        {properties: {retentionDays: "${int}"}}
    );
  }
}
