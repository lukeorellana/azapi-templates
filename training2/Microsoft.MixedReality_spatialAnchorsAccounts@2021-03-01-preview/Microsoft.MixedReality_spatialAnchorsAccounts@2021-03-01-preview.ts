import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MixedrealitySpatialanchorsaccountsProps extends IAzAPIBaseProps {
/**
   * The sku associated with this account
   */
readonly sku?: Sku;

/**
   * The kind of account, if supported
   */
readonly kind?: Sku;

/**
   * The identity associated with this account
   */
readonly identity?: Identity;

/**
   * The plan associated with this account
   */
readonly plan?: Identity;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';

/**
   * The name of the storage account associated with this accountId
   */
readonly storageAccountName?: string;
}

/**
 * MixedrealitySpatialanchorsaccounts resource
 */
export class MixedrealitySpatialanchorsaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MixedrealitySpatialanchorsaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MixedReality/spatialAnchorsAccounts@2021-03-01-preview";
  }

  protected getResourceBody(props: MixedrealitySpatialanchorsaccountsProps): string {
    return JSON.stringify(
        {properties: {storageAccountName: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, plan: {type: "SystemAssigned"}}
    );
  }
}
