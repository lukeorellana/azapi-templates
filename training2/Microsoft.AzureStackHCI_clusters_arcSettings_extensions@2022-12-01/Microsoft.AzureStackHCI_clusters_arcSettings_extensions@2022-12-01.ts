import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciClustersArcsettingsExtensionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:arcSettings;

/**
   * Parameters specific to this extension type.
   */
readonly extensionParameters?: ExtensionParameters;

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
   * Protected settings (may contain secrets).
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
}

/**
 * AzurestackhciClustersArcsettingsExtensions resource
 */
export class AzurestackhciClustersArcsettingsExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciClustersArcsettingsExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01";
  }

  protected getResourceBody(props: AzurestackhciClustersArcsettingsExtensionsProps): string {
    return JSON.stringify(
        {properties: {extensionParameters: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", publisher: "string", type: "string", typeHandlerVersion: "string"}}}
    );
  }
}
