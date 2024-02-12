import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesBackupshorttermretentionpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases.
   */
readonly diffBackupIntervalInHours?: number;

/**
   * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
   */
readonly retentionDays?: number;
}

/**
 * SqlServersDatabasesBackupshorttermretentionpolicies resource
 */
export class SqlServersDatabasesBackupshorttermretentionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesBackupshorttermretentionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesBackupshorttermretentionpoliciesProps): string {
    return JSON.stringify(
        {properties: {diffBackupIntervalInHours: "${int}", retentionDays: "${int}"}}
    );
  }
}
