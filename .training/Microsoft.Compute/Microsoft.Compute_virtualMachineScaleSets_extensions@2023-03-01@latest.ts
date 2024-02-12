import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinescalesetsExtensionsProps extends IAzAPIBaseProps {

}

/**
 * ComputeVirtualmachinescalesetsExtensions resource
 */
export class ComputeVirtualmachinescalesetsExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinescalesetsExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachineScaleSets/extensions@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinescalesetsExtensionsProps): string {
    return JSON.stringify(
        {properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, provisionAfterExtensions: ["string"], publisher: "string", suppressFailures: "${bool}", type: "string", typeHandlerVersion: "string"}}
    );
  }
}
