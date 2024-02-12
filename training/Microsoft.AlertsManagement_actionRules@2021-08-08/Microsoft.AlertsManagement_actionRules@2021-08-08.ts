import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface AlertsmanagementActionrulesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | properties | Alert processing rule properties. | AlertProcessingRuleProperties |

// | Name | Description | Value |
// |-|-|-|
// | actions | Actions to be applied. | Action[] (required) |
// | conditions | Conditions on which alerts will be filtered. | Condition[] |
// | description | Description of alert processing rule. | string |
// | enabled | Indicates if the given alert processing rule is enabled or disabled. | bool |
// | schedule | Scheduling for alert processing rule. | Schedule |
// | scopes | Scopes on which alert processing rule will apply. | string[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | actionType | Set the object type | AddActionGroupsRemoveAllActionGroups(required) |

// | Name | Description | Value |
// |-|-|-|
// | actionType | Action that should be applied. | 'AddActionGroups' (required) |
// | actionGroupIds | List of action group Ids to add to alert processing rule. | string[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | actionType | Action that should be applied. | 'RemoveAllActionGroups' (required) |

// | Name | Description | Value |
// |-|-|-|
// | field | Field for a given condition. | 'AlertContext''AlertRuleId''AlertRuleName''Description''MonitorCondition''MonitorService''Severity''SignalType''TargetResource''TargetResourceGroup''TargetResourceType' |
// | operator | Operator for a given condition. | 'Contains''DoesNotContain''Equals''NotEquals' |
// | values | List of values to match for a given condition. | string[] |

// | Name | Description | Value |
// |-|-|-|
// | effectiveFrom | Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix. | string |
// | effectiveUntil | Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix. | string |
// | recurrences | List of recurrences. | Recurrence[] |
// | timeZone | Scheduling time zone. | string |

// | Name | Description | Value |
// |-|-|-|
// | endTime | End time for recurrence. | string |
// | startTime | Start time for recurrence. | string |
// | recurrenceType | Set the object type | DailyMonthlyWeekly(required) |

// | Name | Description | Value |
// |-|-|-|
// | recurrenceType | Specifies when the recurrence should be applied. | 'Daily' (required) |

// | Name | Description | Value |
// |-|-|-|
// | recurrenceType | Specifies when the recurrence should be applied. | 'Monthly' (required) |
// | daysOfMonth | Specifies the values for monthly recurrence pattern. | int[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | recurrenceType | Specifies when the recurrence should be applied. | 'Weekly' (required) |
// | daysOfWeek | Specifies the values for weekly recurrence pattern. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
