import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesRestorabledroppeddatabasesBackupshorttermretentionpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesRestorabledroppeddatabasesBackupshorttermretentionpolicies resource
 */
export class SqlManagedinstancesRestorabledroppeddatabasesBackupshorttermretentionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesRestorabledroppeddatabasesBackupshorttermretentionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesRestorabledroppeddatabasesBackupshorttermretentionpoliciesProps): string {
    return JSON.stringify(
        {properties: {retentionDays: "${int}"}}
    );
  }
}
