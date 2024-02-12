import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlserverinstancesDatabasesProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlserverinstancesDatabases resource
 */
export class AzurearcdataSqlserverinstancesDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlserverinstancesDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlserverinstancesDatabasesProps): string {
    return JSON.stringify(
        {properties: {backupInformation: {lastFullBackup: "string", lastLogBackup: "string"}, collationName: "string", compatibilityLevel: "${int}", databaseCreationDate: "string", databaseOptions: {isAutoCloseOn: "${bool}", isAutoCreateStatsOn: "${bool}", isAutoShrinkOn: "${bool}", isAutoUpdateStatsOn: "${bool}", isEncrypted: "${bool}", isMemoryOptimizationEnabled: "${bool}", isRemoteDataArchiveEnabled: "${bool}", isTrustworthyOn: "${bool}"}, recoveryMode: "string", sizeMB: "${int}", spaceAvailableMB: "${int}", state: "string"}}
    );
  }
}
