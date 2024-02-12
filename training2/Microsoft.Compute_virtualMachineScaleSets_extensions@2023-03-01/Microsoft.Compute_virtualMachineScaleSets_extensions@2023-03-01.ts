import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinescalesetsExtensionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualMachineScaleSets;

/**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
   */
readonly enableAutomaticUpgrade?: bool;

/**
   * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
   */
readonly forceUpdateTag?: string;

/**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * The extensions protected settings that are passed by reference, and consumed from key vault
   */
readonly protectedSettingsFromKeyVault?: KeyVaultSecretReference;

/**
   * Collection of extension names after which this extension needs to be provisioned.
   */
readonly provisionAfterExtensions?: string[];

/**
   * The name of the extension handler publisher.
   */
readonly publisher?: string;

/**
   * Json formatted public settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
   */
readonly suppressFailures?: bool;

/**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   */
readonly type?: string;

/**
   * Specifies the version of the script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * The URL referencing a secret in a Key Vault.
   */
readonly secretUrl: string;

/**
   * The relative URL of the Key Vault containing the secret.
   */
readonly sourceVault: SubResource;

/**
   * Resource Id
   */
readonly id?: string;
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
