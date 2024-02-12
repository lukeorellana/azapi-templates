import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsCapacitypoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:netAppAccounts;

/**
   * If enabled (true) the pool can contain cool Access enabled volumes.
   */
readonly coolAccess?: bool;

/**
   * Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool.
   */
readonly encryptionType?: 'Double''Single';

/**
   * The qos type of the pool
   */
readonly qosType?: 'Auto''Manual';

/**
   * The service level of the file system
   */
readonly serviceLevel: 'Premium''Standard''StandardZRS''Ultra';

/**
   * Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiply of 4398046511104).
   */
readonly size: number;
}

/**
 * NetappNetappaccountsCapacitypools resource
 */
export class NetappNetappaccountsCapacitypools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsCapacitypoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsCapacitypoolsProps): string {
    return JSON.stringify(
        {properties: {coolAccess: "${bool}", encryptionType: "string", qosType: "string", serviceLevel: "string", size: "${int}"}}
    );
  }
}
