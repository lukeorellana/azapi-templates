import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpools resource
 */
export class SynapseWorkspacesSqlpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsProps): string {
    return JSON.stringify(
        {properties: {collation: "string", createMode: "string", maxSizeBytes: "${int}", provisioningState: "string", recoverableDatabaseId: "string", restorePointInTime: "string", sourceDatabaseDeletionDate: "string", sourceDatabaseId: "string", storageAccountType: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
