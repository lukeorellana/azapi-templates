import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputeMachinesExtensionsProps extends IAzAPIBaseProps {

}

/**
 * HybridcomputeMachinesExtensions resource
 */
export class HybridcomputeMachinesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridcomputeMachinesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridCompute/machines/extensions@2022-11-10";
  }

  protected getResourceBody(props: HybridcomputeMachinesExtensionsProps): string {
    return JSON.stringify(
        {properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", instanceView: {name: "string", status: {code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}, type: "string", typeHandlerVersion: "string"}, protectedSettings: {}, publisher: "string", settings: {}, type: "string", typeHandlerVersion: "string"}}
    );
  }
}
