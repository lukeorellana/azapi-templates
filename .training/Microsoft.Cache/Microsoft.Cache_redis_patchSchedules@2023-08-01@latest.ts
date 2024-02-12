import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisPatchschedulesProps extends IAzAPIBaseProps {

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
