import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesExtensionsProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciVirtualmachinesExtensions resource
 */
export class AzurestackhciVirtualmachinesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualmachinesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualMachines/extensions@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualmachinesExtensionsProps): string {
    return JSON.stringify(
        {properties: {autoUpgradeMinorVersion: "${bool}", forceUpdateTag: "string", instanceView: {status: {}}, publisher: "string", type: "string", typeHandlerVersion: "string"}}
    );
  }
}
