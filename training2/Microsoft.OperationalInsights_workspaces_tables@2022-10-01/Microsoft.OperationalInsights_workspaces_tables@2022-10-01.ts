import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesTablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Instruct the system how to handle and charge the logs ingested to this table.
   */
readonly plan?: 'Analytics''Basic';

/**
   * Parameters of the restore operation that initiated this table.
   */
readonly restoredLogs?: RestoredLogs;

/**
   * The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
   */
readonly retentionInDays?: number;

/**
   * Table schema.
   */
readonly schema?: Schema;

/**
   * Parameters of the search job that initiated this table.
   */
readonly searchResults?: SearchResults;

/**
   * The table total retention in days, between 4 and 2555. Setting this property to -1 will default to table retention.
   */
readonly totalRetentionInDays?: number;

/**
   * The timestamp to end the restore by (UTC).
   */
readonly endRestoreTime?: string;

/**
   * The table to restore data from.
   */
readonly sourceTable?: string;

/**
   * The timestamp to start the restore from (UTC).
   */
readonly startRestoreTime?: string;

/**
   * A list of table custom columns.
   */
readonly columns?: Column[];

/**
   * Table description.
   */
readonly description?: string;

/**
   * Table display name.
   */
readonly displayName?: string;

/**
   * Column data type logical hint.
   */
readonly dataTypeHint?: 'armPath''guid''ip''uri';

/**
   * Column description.
   */
readonly description?: string;

/**
   * Column display name.
   */
readonly displayName?: string;

/**
   * Column data type.
   */
readonly type?: 'boolean''dateTime''dynamic''guid''number''long''real''string';

/**
   * Search job Description.
   */
readonly description?: string;

/**
   * The timestamp to end the search by (UTC)
   */
readonly endSearchTime?: string;

/**
   * Limit the search job to return up to specified number of rows.
   */
readonly limit?: number;

/**
   * Search job query.
   */
readonly query?: string;

/**
   * The timestamp to start the search from (UTC)
   */
readonly startSearchTime?: string;
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
