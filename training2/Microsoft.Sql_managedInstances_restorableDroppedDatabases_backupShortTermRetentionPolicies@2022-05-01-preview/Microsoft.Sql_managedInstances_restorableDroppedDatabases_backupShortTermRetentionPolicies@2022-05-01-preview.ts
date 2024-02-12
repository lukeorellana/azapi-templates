import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesRestorabledroppeddatabasesBackupshorttermretentionpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: restorableDroppedDatabases;

/**
   * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
   */
readonly retentionDays?: number;
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
