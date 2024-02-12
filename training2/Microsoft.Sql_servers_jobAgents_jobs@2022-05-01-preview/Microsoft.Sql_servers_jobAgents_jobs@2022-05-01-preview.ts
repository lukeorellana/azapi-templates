import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsJobsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:jobAgents;

/**
   * User-defined description of the job.
   */
readonly description?: string;

/**
   * Schedule properties of the job.
   */
readonly schedule?: JobSchedule;

/**
   * Whether or not the schedule is enabled.
   */
readonly enabled?: bool;

/**
   * Schedule end time.
   */
readonly endTime?: string;

/**
   * Value of the schedule's recurring interval, if the ScheduleType is recurring. ISO8601 duration format.
   */
readonly interval?: string;

/**
   * Schedule start time.
   */
readonly startTime?: string;

/**
   * Schedule interval type
   */
readonly type?: 'Once''Recurring';
}

/**
 * SqlServersJobagentsJobs resource
 */
export class SqlServersJobagentsJobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsJobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsJobsProps): string {
    return JSON.stringify(
        {properties: {description: "string", schedule: {enabled: "${bool}", endTime: "string", interval: "string", startTime: "string", type: "string"}}}
    );
  }
}
