import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlavailabilitygroupsDatabasesProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlavailabilitygroupsDatabases resource
 */
export class AzurearcdataSqlavailabilitygroupsDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlavailabilitygroupsDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlavailabilitygroupsDatabasesProps): string {
    return JSON.stringify(
        {properties: {groupDatabaseId: "string", value: [{databaseStateDesc: "string", isCommitParticipant: "${bool}", isLocal: "${bool}", isPrimaryReplica: "${bool}", isSuspended: "${bool}", replicaName: "string", suspendReasonDesc: "string", synchronizationHealthDesc: "string", synchronizationStateDesc: "string"}]}}
    );
  }
}
