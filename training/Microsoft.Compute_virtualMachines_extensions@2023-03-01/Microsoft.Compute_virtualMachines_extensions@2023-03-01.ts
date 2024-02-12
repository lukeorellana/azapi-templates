import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ComputeVirtualmachinesExtensionsProps extends IAzAPIBaseProps {

}

export class ComputeVirtualmachinesExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinesExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachines/extensions@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinesExtensionsProps): string {
    return JSON.stringify(
      {properties: {autoUpgradeMinorVersion: "${bool}", enableAutomaticUpgrade: "${bool}", forceUpdateTag: "string", instanceView: {name: "string", statuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], substatuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], type: "string", typeHandlerVersion: "string"}, protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, provisionAfterExtensions: ["string"], publisher: "string", suppressFailures: "${bool}", type: "string", typeHandlerVersion: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | location | Resource location | string |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
// | properties | Describes the properties of a Virtual Machine Extension. | VirtualMachineExtensionProperties |

// | Name | Description | Value |
// |-|-|-|
// | autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
// | enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
// | forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
// | instanceView | The virtual machine extension instance view. | VirtualMachineExtensionInstanceView |
// | protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
// | protectedSettingsFromKeyVault | The extensions protected settings that are passed by reference, and consumed from key vault | KeyVaultSecretReference |
// | provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
// | publisher | The name of the extension handler publisher. | string |
// | settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
// | suppressFailures | Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false. | bool |
// | type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
// | typeHandlerVersion | Specifies the version of the script handler. | string |

// | Name | Description | Value |
// |-|-|-|
// | name | The virtual machine extension name. | string |
// | statuses | The resource status information. | InstanceViewStatus[] |
// | substatuses | The resource status information. | InstanceViewStatus[] |
// | type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
// | typeHandlerVersion | Specifies the version of the script handler. | string |

// | Name | Description | Value |
// |-|-|-|
// | code | The status code. | string |
// | displayStatus | The short localizable label for the status. | string |
// | level | The level code. | 'Error''Info''Warning' |
// | message | The detailed status message, including for alerts and error messages. | string |
// | time | The time of the status. | string |

// | Name | Description | Value |
// |-|-|-|
// | secretUrl | The URL referencing a secret in a Key Vault. | string (required) |
// | sourceVault | The relative URL of the Key Vault containing the secret. | SubResource(required) |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource Id | string |
