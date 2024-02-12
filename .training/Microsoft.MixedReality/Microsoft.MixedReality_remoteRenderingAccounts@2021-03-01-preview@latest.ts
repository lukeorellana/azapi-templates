import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MixedrealityRemoterenderingaccountsProps extends IAzAPIBaseProps {

}

/**
 * MixedrealityRemoterenderingaccounts resource
 */
export class MixedrealityRemoterenderingaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MixedrealityRemoterenderingaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MixedReality/remoteRenderingAccounts@2021-03-01-preview";
  }

  protected getResourceBody(props: MixedrealityRemoterenderingaccountsProps): string {
    return JSON.stringify(
        {properties: {storageAccountName: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, plan: {type: "SystemAssigned"}}
    );
  }
}
