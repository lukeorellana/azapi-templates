import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesBackuplongtermretentionpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The monthly retention policy for an LTR backup in an ISO 8601 format.
   */
readonly monthlyRetention?: string;

/**
   * The weekly retention policy for an LTR backup in an ISO 8601 format.
   */
readonly weeklyRetention?: string;

/**
   * The week of year to take the yearly backup in an ISO 8601 format.
   */
readonly weekOfYear?: number;

/**
   * The yearly retention policy for an LTR backup in an ISO 8601 format.
   */
readonly yearlyRetention?: string;
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
