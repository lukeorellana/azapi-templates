import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesBackuplongtermretentionpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesBackuplongtermretentionpolicies resource
 */
export class SqlServersDatabasesBackuplongtermretentionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesBackuplongtermretentionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesBackuplongtermretentionpoliciesProps): string {
    return JSON.stringify(
        {properties: {monthlyRetention: "string", weeklyRetention: "string", weekOfYear: "${int}", yearlyRetention: "string"}}
    );
  }
}
