import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AlertsmanagementActionrulesProps extends IAzAPIBaseProps {
/**
   * Actions to be applied.
   */
readonly actions: Action[];

/**
   * Conditions on which alerts will be filtered.
   */
readonly conditions?: Condition[];

/**
   * Description of alert processing rule.
   */
readonly description?: string;

/**
   * Indicates if the given alert processing rule is enabled or disabled.
   */
readonly enabled?: bool;

/**
   * Scheduling for alert processing rule.
   */
readonly schedule?: Schedule;

/**
   * Scopes on which alert processing rule will apply.
   */
readonly scopes: string[];

/**
   * Set the object type
   */
readonly actionType: AddActionGroupsRemoveAllActionGroups;

/**
   * Action that should be applied.
   */
readonly actionType: 'AddActionGroups';

/**
   * List of action group Ids to add to alert processing rule.
   */
readonly actionGroupIds: string[];

/**
   * Action that should be applied.
   */
readonly actionType: 'RemoveAllActionGroups';

/**
   * Field for a given condition.
   */
readonly field?: 'AlertContext''AlertRuleId''AlertRuleName''Description''MonitorCondition''MonitorService''Severity''SignalType''TargetResource''TargetResourceGroup''TargetResourceType';

/**
   * Operator for a given condition.
   */
readonly operator?: 'Contains''DoesNotContain''Equals''NotEquals';

/**
   * List of values to match for a given condition.
   */
readonly values?: string[];

/**
   * Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
   */
readonly effectiveFrom?: string;

/**
   * Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
   */
readonly effectiveUntil?: string;

/**
   * List of recurrences.
   */
readonly recurrences?: Recurrence[];

/**
   * Scheduling time zone.
   */
readonly timeZone?: string;

/**
   * End time for recurrence.
   */
readonly endTime?: string;

/**
   * Start time for recurrence.
   */
readonly startTime?: string;

/**
   * Set the object type
   */
readonly recurrenceType: DailyMonthlyWeekly;

/**
   * Specifies when the recurrence should be applied.
   */
readonly recurrenceType: 'Daily';

/**
   * Specifies when the recurrence should be applied.
   */
readonly recurrenceType: 'Monthly';

/**
   * Specifies the values for monthly recurrence pattern.
   */
readonly daysOfMonth: number[];

/**
   * Specifies when the recurrence should be applied.
   */
readonly recurrenceType: 'Weekly';

/**
   * Specifies the values for weekly recurrence pattern.
   */
readonly daysOfWeek: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';
}

/**
 * AlertsmanagementActionrules resource
 */
export class AlertsmanagementActionrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AlertsmanagementActionrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AlertsManagement/actionRules@2021-08-08";
  }

  protected getResourceBody(props: AlertsmanagementActionrulesProps): string {
    return JSON.stringify(
        {properties: {actions: [{actionType: "string"}], conditions: [{field: "string", operator: "string", values: ["string"]}], description: "string", enabled: "${bool}", schedule: {effectiveFrom: "string", effectiveUntil: "string", recurrences: [{endTime: "string", startTime: "string", recurrenceType: "string"}], timeZone: "string"}, scopes: ["string"]}}
    );
  }
}
