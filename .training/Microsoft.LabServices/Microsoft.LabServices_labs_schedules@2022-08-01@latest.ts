import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabsSchedulesProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabsSchedules resource
 */
export class LabservicesLabsSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabsSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labs/schedules@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabsSchedulesProps): string {
    return JSON.stringify(
        {properties: {notes: "string", recurrencePattern: {expirationDate: "string", frequency: "string", interval: "${int}", weekDays: ["string"]}, startAt: "string", stopAt: "string", timeZoneId: "string"}}
    );
  }
}
