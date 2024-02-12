import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsSchedulesProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsSchedules resource
 */
export class AutomationAutomationaccountsSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/schedules@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsSchedulesProps): string {
    return JSON.stringify(
        {properties: {advancedSchedule: {monthDays: ["${int}"], monthlyOccurrences: [{day: "string", occurrence: "${int}"}], weekDays: ["string"]}, description: "string", expiryTime: "string", frequency: "string", startTime: "string", timeZone: "string"}}
    );
  }
}
