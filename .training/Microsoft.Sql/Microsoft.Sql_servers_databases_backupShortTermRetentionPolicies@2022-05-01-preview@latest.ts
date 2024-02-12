import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesBackupshorttermretentionpoliciesProps extends IAzAPIBaseProps {

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
