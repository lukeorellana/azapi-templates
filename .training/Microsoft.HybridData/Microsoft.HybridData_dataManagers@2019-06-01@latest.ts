import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybriddataDatamanagersProps extends IAzAPIBaseProps {

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