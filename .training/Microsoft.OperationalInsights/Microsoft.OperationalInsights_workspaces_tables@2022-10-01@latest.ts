import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesTablesProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspacesTables resource
 */
export class OperationalinsightsWorkspacesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/tables@2022-10-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesTablesProps): string {
    return JSON.stringify(
        {properties: {plan: "string", restoredLogs: {endRestoreTime: "string", sourceTable: "string", startRestoreTime: "string"}, retentionInDays: "${int}", schema: {columns: [{dataTypeHint: "string", description: "string", displayName: "string", name: "string", type: "string"}], description: "string", displayName: "string", name: "string"}, searchResults: {description: "string", endSearchTime: "string", limit: "${int}", query: "string", startSearchTime: "string"}, totalRetentionInDays: "${int}"}}
    );
  }
}
