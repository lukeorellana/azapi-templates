import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisPatchschedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:redis;

/**
   * List of patch schedules for a Redis cache.
   */
readonly scheduleEntries: ScheduleEntry[];

/**
   * Day of the week when a cache can be patched.
   */
readonly dayOfWeek: 'Everyday''Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday''Weekend';

/**
   * ISO8601 timespan specifying how much time cache patching can take.
   */
readonly maintenanceWindow?: string;

/**
   * Start hour after which cache patching can start.
   */
readonly startHourUtc: number;
}

/**
 * CacheRedisPatchschedules resource
 */
export class CacheRedisPatchschedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisPatchschedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/patchSchedules@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisPatchschedulesProps): string {
    return JSON.stringify(
        {properties: {scheduleEntries: [{dayOfWeek: "string", maintenanceWindow: "string", startHourUtc: "${int}"}]}}
    );
  }
}
