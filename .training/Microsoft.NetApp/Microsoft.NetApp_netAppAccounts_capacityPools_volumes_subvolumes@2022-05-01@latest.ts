import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesSubvolumesProps extends IAzAPIBaseProps {

}

/**
 * NetappNetappaccountsCapacitypoolsVolumesSubvolumes resource
 */
export class NetappNetappaccountsCapacitypoolsVolumesSubvolumes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsCapacitypoolsVolumesSubvolumesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsCapacitypoolsVolumesSubvolumesProps): string {
    return JSON.stringify(
        {properties: {parentPath: "string", path: "string", size: "${int}"}}
    );
  }
}
