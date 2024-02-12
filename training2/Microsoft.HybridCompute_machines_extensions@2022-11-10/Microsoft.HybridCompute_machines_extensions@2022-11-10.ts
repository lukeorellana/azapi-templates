import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputeMachinesExtensionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:machines;

/**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
   */
readonly enableAutomaticUpgrade?: bool;

/**
   * How the extension handler should be forced to update even if the extension configuration has not changed.
   */
readonly forceUpdateTag?: string;

/**
   * The machine extension instance view.
   */
readonly instanceView?: MachineExtensionInstanceView;

/**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   */
readonly protectedSettings?: object;

/**
   * The name of the extension handler publisher.
   */
readonly publisher?: string;

/**
   * Json formatted public settings for the extension.
   */
readonly settings?: object;

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

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * The status code.
   */
readonly code?: string;

/**
   * The short localizable label for the status.
   */
readonly displayStatus?: string;

/**
   * The level code.
   */
readonly level?: 'Error''Info''Warning';

/**
   * The detailed status message, including for alerts and error messages.
   */
readonly message?: string;

/**
   * The time of the status.
   */
readonly time?: string;
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
