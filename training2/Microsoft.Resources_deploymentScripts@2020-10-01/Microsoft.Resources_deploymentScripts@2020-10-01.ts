import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesDeploymentscriptsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: AzureCLIAzurePowerShell;

/**
   * Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of the script.
   */
readonly kind: 'AzureCLI';

/**
   * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
   */
readonly arguments?: string;

/**
   * Azure CLI module version to be used.
   */
readonly azCliVersion: string;

/**
   * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
   */
readonly cleanupPreference?: 'Always''OnExpiration''OnSuccess';

/**
   * Container settings.
   */
readonly containerSettings?: ContainerConfiguration;

/**
   * The environment variables to pass over to the script.
   */
readonly environmentVariables?: EnvironmentVariable[];

/**
   * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
   */
readonly forceUpdateTag?: string;

/**
   * Uri for the script. This is the entry point for the external script.
   */
readonly primaryScriptUri?: string;

/**
   * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
   */
readonly retentionInterval: string;

/**
   * Script body.
   */
readonly scriptContent?: string;

/**
   * Storage Account settings.
   */
readonly storageAccountSettings?: StorageAccountConfiguration;

/**
   * Supporting files for the external script.
   */
readonly supportingScriptUris?: string[];

/**
   * Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D
   */
readonly timeout?: string;

/**
   * Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.
   */
readonly containerGroupName?: string;

/**
   * The value of the secure environment variable.
   */
readonly secureValue?: string;

/**
   * The value of the environment variable.
   */
readonly value?: string;

/**
   * The storage account access key.
   */
readonly storageAccountKey?: string;

/**
   * The storage account name.
   */
readonly storageAccountName?: string;

/**
   * Type of the script.
   */
readonly kind: 'AzurePowerShell';

/**
   * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2'
   */
readonly arguments?: string;

/**
   * Azure PowerShell module version to be used.
   */
readonly azPowerShellVersion: string;

/**
   * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
   */
readonly cleanupPreference?: 'Always''OnExpiration''OnSuccess';

/**
   * Container settings.
   */
readonly containerSettings?: ContainerConfiguration;

/**
   * The environment variables to pass over to the script.
   */
readonly environmentVariables?: EnvironmentVariable[];

/**
   * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
   */
readonly forceUpdateTag?: string;

/**
   * Uri for the script. This is the entry point for the external script.
   */
readonly primaryScriptUri?: string;

/**
   * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
   */
readonly retentionInterval: string;

/**
   * Script body.
   */
readonly scriptContent?: string;

/**
   * Storage Account settings.
   */
readonly storageAccountSettings?: StorageAccountConfiguration;

/**
   * Supporting files for the external script.
   */
readonly supportingScriptUris?: string[];

/**
   * Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D
   */
readonly timeout?: string;

/**
   * Type of the managed identity.
   */
readonly type?: 'UserAssigned';

/**
   * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
   */
readonly userAssignedIdentities?: object;
}

/**
 * ResourcesDeploymentscripts resource
 */
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
