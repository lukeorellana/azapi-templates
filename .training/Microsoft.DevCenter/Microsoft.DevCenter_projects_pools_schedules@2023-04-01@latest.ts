import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsPoolsSchedulesProps extends IAzAPIBaseProps {

}

/**
 * DevcenterProjectsPoolsSchedules resource
 */
export class DevcenterProjectsPoolsSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterProjectsPoolsSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/projects/pools/schedules@2023-04-01";
  }

  protected getResourceBody(props: DevcenterProjectsPoolsSchedulesProps): string {
    return JSON.stringify(
        {properties: {frequency: "Daily", state: "string", time: "string", timeZone: "string", type: "StopDevBox"}}
    );
  }
}
