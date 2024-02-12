import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsActivitylogalertsProps extends IAzAPIBaseProps {
/**
   * The actions that will activate when the condition is met.
   */
readonly actions: ActionList;

/**
   * The condition that will cause this alert to activate.
   */
readonly condition: AlertRuleAllOfCondition;

/**
   * A description of this Activity Log Alert rule.
   */
readonly description?: string;

/**
   * Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated.
   */
readonly enabled?: bool;

/**
   * A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.
   */
readonly scopes?: string[];

/**
   * The tenant GUID. Must be provided for tenant-level and management group events rules.
   */
readonly tenantScope?: string;

/**
   * The list of the Action Groups.
   */
readonly actionGroups?: ActionGroup[];

/**
   * The resource ID of the Action Group. This cannot be null or empty.
   */
readonly actionGroupId: string;

/**
   * Predefined list of properties and configuration items for the action group.
   */
readonly actionProperties?: object;

/**
   * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
   */
readonly webhookProperties?: object;

/**
   * The list of Activity Log Alert rule conditions.
   */
readonly allOf: AlertRuleAnyOfOrLeafCondition[];

/**
   * An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
   */
readonly anyOf?: AlertRuleLeafCondition[];

/**
   * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
   */
readonly containsAny?: string[];

/**
   * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
   */
readonly equals?: string;

/**
   * The name of the Activity Log event's field that this condition will examine.The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
   */
readonly field?: string;

/**
   * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
   */
readonly containsAny?: string[];

/**
   * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
   */
readonly equals?: string;

/**
   * The name of the Activity Log event's field that this condition will examine.The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
   */
readonly field?: string;
}

/**
 * InsightsActivitylogalerts resource
 */
export class InsightsActivitylogalerts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsActivitylogalertsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/activityLogAlerts@2023-01-01-preview";
  }

  protected getResourceBody(props: InsightsActivitylogalertsProps): string {
    return JSON.stringify(
        {properties: {actions: {actionGroups: [{actionGroupId: "string", actionProperties: {}, webhookProperties: {}}]}, condition: {allOf: [{anyOf: [{containsAny: ["string"], equals: "string", field: "string"}], containsAny: ["string"], equals: "string", field: "string"}]}, description: "string", enabled: "${bool}", scopes: ["string"], tenantScope: "string"}}
    );
  }
}
