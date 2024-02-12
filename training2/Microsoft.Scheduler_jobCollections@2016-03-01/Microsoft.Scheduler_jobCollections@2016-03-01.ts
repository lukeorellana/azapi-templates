import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SchedulerJobcollectionsProps extends IAzAPIBaseProps {
/**
   * Gets or sets the job collection quota.
   */
readonly quota?: JobCollectionQuota;

/**
   * Gets or sets the SKU.
   */
readonly sku?: Sku;

/**
   * Gets or sets the state.
   */
readonly state?: 'Deleted''Disabled''Enabled''Suspended';

/**
   * Gets or set the maximum job count.
   */
readonly maxJobCount?: number;

/**
   * Gets or sets the maximum job occurrence.
   */
readonly maxJobOccurrence?: number;

/**
   * Gets or set the maximum recurrence.
   */
readonly maxRecurrence?: JobMaxRecurrence;

/**
   * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
   */
readonly frequency?: 'Day''Hour''Minute''Month''Week';

/**
   * Gets or sets the interval between retries.
   */
readonly interval?: number;
}

/**
 * SchedulerJobcollections resource
 */
export class SchedulerJobcollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SchedulerJobcollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Scheduler/jobCollections@2016-03-01";
  }

  protected getResourceBody(props: SchedulerJobcollectionsProps): string {
    return JSON.stringify(
        {properties: {quota: {maxJobCount: "${int}", maxJobOccurrence: "${int}", maxRecurrence: {frequency: "string", interval: "${int}"}}, sku: {name: "string"}, state: "string"}}
    );
  }
}
