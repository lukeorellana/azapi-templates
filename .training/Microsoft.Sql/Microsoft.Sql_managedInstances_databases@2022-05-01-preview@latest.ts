import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDatabases resource
 */
export class SqlManagedinstancesDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesProps): string {
    return JSON.stringify(
        {properties: {autoCompleteRestore: "${bool}", catalogCollation: "string", collation: "string", createMode: "string", crossSubscriptionRestorableDroppedDatabaseId: "string", crossSubscriptionSourceDatabaseId: "string", crossSubscriptionTargetManagedInstanceId: "string", lastBackupName: "string", longTermRetentionBackupResourceId: "string", recoverableDatabaseId: "string", restorableDroppedDatabaseId: "string", restorePointInTime: "string", sourceDatabaseId: "string", storageContainerIdentity: "string", storageContainerSasToken: "string", storageContainerUri: "string"}}
    );
  }
}
