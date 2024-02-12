import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ResourcesDeploymentscriptsProps extends IAzAPIBaseProps {

}

export class ResourcesDeploymentscripts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesDeploymentscriptsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/deploymentScripts@2020-10-01";
  }

  protected getResourceBody(props: ResourcesDeploymentscriptsProps): string {
    return JSON.stringify(
      {kind: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The location of the ACI and the storage account for the deployment script. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | kind | Set the object type | AzureCLIAzurePowerShell(required) |
// | identity | Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported. | ManagedServiceIdentity |

// | Name | Description | Value |
// |-|-|-|
// | kind | Type of the script. | 'AzureCLI' (required) |
// | properties | Properties of the Azure CLI script object. | AzureCliScriptProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | arguments | Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' | string |
// | azCliVersion | Azure CLI module version to be used. | string (required) |
// | cleanupPreference | The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. | 'Always''OnExpiration''OnSuccess' |
// | containerSettings | Container settings. | ContainerConfiguration |
// | environmentVariables | The environment variables to pass over to the script. | EnvironmentVariable[] |
// | forceUpdateTag | Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. | string |
// | primaryScriptUri | Uri for the script. This is the entry point for the external script. | string |
// | retentionInterval | Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). | string (required) |
// | scriptContent | Script body. | string |
// | storageAccountSettings | Storage Account settings. | StorageAccountConfiguration |
// | supportingScriptUris | Supporting files for the external script. | string[] |
// | timeout | Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D | string |

// | Name | Description | Value |
// |-|-|-|
// | containerGroupName | Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property. | string |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the environment variable. | string (required) |
// | secureValue | The value of the secure environment variable. | string |
// | value | The value of the environment variable. | string |

// | Name | Description | Value |
// |-|-|-|
// | storageAccountKey | The storage account access key. | string |
// | storageAccountName | The storage account name. | string |

// | Name | Description | Value |
// |-|-|-|
// | kind | Type of the script. | 'AzurePowerShell' (required) |
// | properties | Properties of the Azure PowerShell script object. | AzurePowerShellScriptProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | arguments | Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' | string |
// | azPowerShellVersion | Azure PowerShell module version to be used. | string (required) |
// | cleanupPreference | The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. | 'Always''OnExpiration''OnSuccess' |
// | containerSettings | Container settings. | ContainerConfiguration |
// | environmentVariables | The environment variables to pass over to the script. | EnvironmentVariable[] |
// | forceUpdateTag | Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. | string |
// | primaryScriptUri | Uri for the script. This is the entry point for the external script. | string |
// | retentionInterval | Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). | string (required) |
// | scriptContent | Script body. | string |
// | storageAccountSettings | Storage Account settings. | StorageAccountConfiguration |
// | supportingScriptUris | Supporting files for the external script. | string[] |
// | timeout | Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D | string |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of the managed identity. | 'UserAssigned' |
// | userAssignedIdentities | The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. | object |
