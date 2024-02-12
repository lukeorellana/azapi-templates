import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetappNetappaccountsCapacitypoolsVolumesSnapshotsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | location | Resource location | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
// | properties | Snapshot Properties | SnapshotProperties |
