import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesExtensionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualMachines;

/**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * How the extension handler should be forced to update even if the extension configuration has not changed.
   */
readonly forceUpdateTag?: string;

/**
   * The machine extension instance view.
   */
readonly instanceView?: MachineExtensionPropertiesInstanceView;

/**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * The name of the extension handler publisher.
   */
readonly publisher?: string;

/**
   * Json formatted public settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * Instance view status.
   */
readonly status?: MachineExtensionInstanceViewStatus;
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