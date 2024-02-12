import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesBackuplongtermretentionpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDatabasesBackuplongtermretentionpolicies resource
 */
export class SqlManagedinstancesDatabasesBackuplongtermretentionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesBackuplongtermretentionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesBackuplongtermretentionpoliciesProps): string {
    return JSON.stringify(
        {properties: {monthlyRetention: "string", weeklyRetention: "string", weekOfYear: "${int}", yearlyRetention: "string"}}
    );
  }
}
