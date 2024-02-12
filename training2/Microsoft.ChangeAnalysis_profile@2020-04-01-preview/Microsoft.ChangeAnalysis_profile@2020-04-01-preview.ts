import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChangeanalysisProfileProps extends IAzAPIBaseProps {
/**
   * The identity block returned by ARM resource that supports managed identity.
   */
readonly identity?: ResourceIdentity;

/**
   * Top level metadatahttps://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
   */
readonly systemData?: SystemData;

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
   */
readonly type?: 'None''SystemAssigned';

/**
   * Settings of change notification configuration for a subscription.
   */
readonly notifications?: NotificationSettings;

/**
   * The state of notifications feature.
   */
readonly activationState?: 'Disabled''Enabled''None';

/**
   * Configuration properties of an Azure Monitor workspace that receives change notifications.
   */
readonly azureMonitorWorkspaceProperties?: AzureMonitorWorkspaceProperties;

/**
   * The mode of includeChangeDetails feature. The flag configures whether to include or exclude content of the change before and after values.
   */
readonly includeChangeDetails?: 'Exclude''Include''None';

/**
   * The Azure Monitor workspace ID - the unique identifier for the Log Analytics workspace.
   */
readonly workspaceId?: string;

/**
   * The Azure Monitor workspace ARM Resource ID. The resource ID should be in the following format: /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}
   */
readonly workspaceResourceId?: string;
}

/**
 * ChangeanalysisProfile resource
 */
export class ChangeanalysisProfile extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChangeanalysisProfileProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ChangeAnalysis/profile@2020-04-01-preview";
  }

  protected getResourceBody(props: ChangeanalysisProfileProps): string {
    return JSON.stringify(
        {properties: {notifications: {activationState: "string", azureMonitorWorkspaceProperties: {includeChangeDetails: "string", workspaceId: "string", workspaceResourceId: "string"}}}, systemData: {}}
    );
  }
}
