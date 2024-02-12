import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesExtensionsProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereVirtualmachinesExtensions resource
 */
export class ConnectedvmwarevsphereVirtualmachinesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVirtualmachinesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVirtualmachinesExtensionsProps): string {
    return JSON.stringify(
        {properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", instanceView: {status: {}}, publisher: "string", type: "string", typeHandlerVersion: "string"}}
    );
  }
}
