import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesProps extends IAzAPIBaseProps {
/**
   * The etag of the workspace.
   */
readonly etag?: string;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * Type of managed service identity.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}.
   */
readonly defaultDataCollectionRuleResourceId?: string;

/**
   * Workspace features.
   */
readonly features?: WorkspaceFeatures;

/**
   * Indicates whether customer managed storage is mandatory for query management.
   */
readonly forceCmkForQuery?: bool;

/**
   * The network access type for accessing Log Analytics ingestion.
   */
readonly publicNetworkAccessForIngestion?: 'Disabled''Enabled';

/**
   * The network access type for accessing Log Analytics query.
   */
readonly publicNetworkAccessForQuery?: 'Disabled''Enabled';

/**
   * The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
   */
readonly retentionInDays?: number;

/**
   * The SKU of the workspace.
   */
readonly sku?: WorkspaceSku;

/**
   * The daily volume cap for ingestion.
   */
readonly workspaceCapping?: WorkspaceCapping;

/**
   * Dedicated LA cluster resourceId that is linked to the workspaces.
   */
readonly clusterResourceId?: string;

/**
   * Disable Non-AAD based Auth.
   */
readonly disableLocalAuth?: bool;

/**
   * Flag that indicate if data should be exported.
   */
readonly enableDataExport?: bool;

/**
   * Flag that indicate which permission to use - resource or workspace or both.
   */
readonly enableLogAccessUsingOnlyResourcePermissions?: bool;

/**
   * Flag that describes if we want to remove the data after 30 days.
   */
readonly immediatePurgeDataOn30Days?: bool;

/**
   * The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
   */
readonly capacityReservationLevel?: number;

/**
   * The workspace daily quota for ingestion.
   */
readonly dailyQuotaGb?: number;
}

/**
 * OperationalinsightsWorkspaces resource
 */
export class OperationalinsightsWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces@2022-10-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesProps): string {
    return JSON.stringify(
        {properties: {defaultDataCollectionRuleResourceId: "string", features: {clusterResourceId: "string", disableLocalAuth: "${bool}", enableDataExport: "${bool}", enableLogAccessUsingOnlyResourcePermissions: "${bool}", immediatePurgeDataOn30Days: "${bool}"}, forceCmkForQuery: "${bool}", publicNetworkAccessForIngestion: "string", publicNetworkAccessForQuery: "string", retentionInDays: "${int}", sku: {capacityReservationLevel: "${int}", name: "string"}, workspaceCapping: {dailyQuotaGb: "${int}"}}, etag: "string"}
    );
  }
}
