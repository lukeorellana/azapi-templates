import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsSnapshotpoliciesProps extends IAzAPIBaseProps {

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
