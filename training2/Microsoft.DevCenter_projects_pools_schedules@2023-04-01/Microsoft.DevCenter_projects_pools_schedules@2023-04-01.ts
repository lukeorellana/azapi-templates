import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsPoolsSchedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:pools;

/**
   * The frequency of this scheduled task.
   */
readonly frequency?: 'Daily';

/**
   * Indicates whether or not this scheduled task is enabled.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The target time to trigger the action. The format is HH:MM.
   */
readonly time?: string;

/**
   * The IANA timezone id at which the schedule should execute.
   */
readonly timeZone?: string;

/**
   * Supported type this scheduled task represents.
   */
readonly type?: 'StopDevBox';
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
