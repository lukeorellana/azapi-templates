import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementScheduledactionsProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementScheduledactions resource
 */
export class CostmanagementScheduledactions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementScheduledactionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/scheduledActions@2022-10-01";
  }

  protected getResourceBody(props: CostmanagementScheduledactionsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", fileDestination: {fileFormats: "Csv"}, notification: {language: "string", message: "string", regionalFormat: "string", subject: "string", to: ["string"]}, notificationEmail: "string", schedule: {dayOfMonth: "${int}", daysOfWeek: ["string"], endDate: "string", frequency: "string", hourOfDay: "${int}", startDate: "string", weeksOfMonth: ["string"]}, scope: "string", status: "string", viewId: "string"}, kind: "string", eTag: "string"}
    );
  }
}
