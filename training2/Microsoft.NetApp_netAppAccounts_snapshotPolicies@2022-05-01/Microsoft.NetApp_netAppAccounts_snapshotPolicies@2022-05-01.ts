import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsSnapshotpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:netAppAccounts;

/**
   * Schedule for daily snapshots
   */
readonly dailySchedule?: DailySchedule;

/**
   * The property to decide policy is enabled or not
   */
readonly enabled?: bool;

/**
   * Schedule for hourly snapshots
   */
readonly hourlySchedule?: HourlySchedule;

/**
   * Schedule for monthly snapshots
   */
readonly monthlySchedule?: MonthlySchedule;

/**
   * Schedule for weekly snapshots
   */
readonly weeklySchedule?: WeeklySchedule;

/**
   * Indicates which hour in UTC timezone a snapshot should be taken
   */
readonly hour?: number;

/**
   * Indicates which minute snapshot should be taken
   */
readonly minute?: number;

/**
   * Daily snapshot count to keep
   */
readonly snapshotsToKeep?: number;

/**
   * Resource size in bytes, current storage usage for the volume in bytes
   */
readonly usedBytes?: number;

/**
   * Indicates which minute snapshot should be taken
   */
readonly minute?: number;

/**
   * Hourly snapshot count to keep
   */
readonly snapshotsToKeep?: number;

/**
   * Resource size in bytes, current storage usage for the volume in bytes
   */
readonly usedBytes?: number;

/**
   * Indicates which days of the month snapshot should be taken. A comma delimited string.
   */
readonly daysOfMonth?: string;

/**
   * Indicates which hour in UTC timezone a snapshot should be taken
   */
readonly hour?: number;

/**
   * Indicates which minute snapshot should be taken
   */
readonly minute?: number;

/**
   * Monthly snapshot count to keep
   */
readonly snapshotsToKeep?: number;

/**
   * Resource size in bytes, current storage usage for the volume in bytes
   */
readonly usedBytes?: number;

/**
   * Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english
   */
readonly day?: string;

/**
   * Indicates which hour in UTC timezone a snapshot should be taken
   */
readonly hour?: number;

/**
   * Indicates which minute snapshot should be taken
   */
readonly minute?: number;

/**
   * Weekly snapshot count to keep
   */
readonly snapshotsToKeep?: number;

/**
   * Resource size in bytes, current storage usage for the volume in bytes
   */
readonly usedBytes?: number;
}

/**
 * NetappNetappaccountsSnapshotpolicies resource
 */
export class NetappNetappaccountsSnapshotpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsSnapshotpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsSnapshotpoliciesProps): string {
    return JSON.stringify(
        {properties: {dailySchedule: {hour: "${int}", minute: "${int}", snapshotsToKeep: "${int}", usedBytes: "${int}"}, enabled: "${bool}", hourlySchedule: {minute: "${int}", snapshotsToKeep: "${int}", usedBytes: "${int}"}, monthlySchedule: {daysOfMonth: "string", hour: "${int}", minute: "${int}", snapshotsToKeep: "${int}", usedBytes: "${int}"}, weeklySchedule: {day: "string", hour: "${int}", minute: "${int}", snapshotsToKeep: "${int}", usedBytes: "${int}"}}}
    );
  }
}
