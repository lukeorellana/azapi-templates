import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsVolumesSubvolumesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:volumes;

/**
   * parent path to the subvolume
   */
readonly parentPath?: string;

/**
   * Path to the subvolume
   */
readonly path?: string;

/**
   * Truncate subvolume to the provided size in bytes
   */
readonly size?: number;
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
