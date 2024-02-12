import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybriddataDatamanagersProps extends IAzAPIBaseProps {
/**
   * The sku type.
   */
readonly sku?: Sku;

/**
   * Etag of the Resource.
   */
readonly etag?: string;

/**
   * The sku tier. This is based on the SKU name.
   */
readonly tier?: string;
}

/**
 * HybriddataDatamanagers resource
 */
export class HybriddataDatamanagers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybriddataDatamanagersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridData/dataManagers@2019-06-01";
  }

  protected getResourceBody(props: HybriddataDatamanagersProps): string {
    return JSON.stringify(
        {sku: {name: "string", tier: "string"}, etag: "string"}
    );
  }
}
