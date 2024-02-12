import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MixedrealitySpatialanchorsaccountsProps extends IAzAPIBaseProps {

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
