import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinescalesetsVirtualmachinesExtensionsProps extends IAzAPIBaseProps {

}

/**
 * ComputeVirtualmachinescalesetsVirtualmachinesExtensions resource
 */
export class ComputeVirtualmachinescalesetsVirtualmachinesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinescalesetsVirtualmachinesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinescalesetsVirtualmachinesExtensionsProps): string {
    return JSON.stringify(
        {properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", instanceView: {name: "string", statuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], substatuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], type: "string", typeHandlerVersion: "string"}, protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, provisionAfterExtensions: ["string"], publisher: "string", suppressFailures: "${bool}", type: "string", typeHandlerVersion: "string"}}
    );
  }
}
