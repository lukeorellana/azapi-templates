import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MixedrealityObjectanchorsaccountsProps extends IAzAPIBaseProps {

}

/**
 * MixedrealityObjectanchorsaccounts resource
 */
export class MixedrealityObjectanchorsaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MixedrealityObjectanchorsaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview";
  }

  protected getResourceBody(props: MixedrealityObjectanchorsaccountsProps): string {
    return JSON.stringify(
        {properties: {storageAccountName: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, plan: {type: "SystemAssigned"}}
    );
  }
}
