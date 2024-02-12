import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesSnapshotsProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccountsCapacitypoolsVolumesSnapshots resource
 */
export class NetappNetappaccountsCapacitypoolsVolumesSnapshots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsCapacitypoolsVolumesSnapshotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsCapacitypoolsVolumesSnapshotsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
