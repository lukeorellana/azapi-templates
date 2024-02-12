import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeVirtualmachinescalesetsVirtualmachinesRuncommandsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualMachines;

/**
   * Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
   */
readonly asyncExecution?: bool;

/**
   * User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged
   */
readonly errorBlobManagedIdentity?: RunCommandManagedIdentity;

/**
   * Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
   */
readonly errorBlobUri?: string;

/**
   * User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged
   */
readonly outputBlobManagedIdentity?: RunCommandManagedIdentity;

/**
   * Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter.
   */
readonly outputBlobUri?: string;

/**
   * The parameters used by the script.
   */
readonly parameters?: RunCommandInputParameter[];

/**
   * The parameters used by the script.
   */
readonly protectedParameters?: RunCommandInputParameter[];

/**
   * Specifies the user account password on the VM when executing the run command.
   */
readonly runAsPassword?: string;

/**
   * Specifies the user account on the VM when executing the run command.
   */
readonly runAsUser?: string;

/**
   * The source of the run command script.
   */
readonly source?: VirtualMachineRunCommandScriptSource;

/**
   * The timeout in seconds to execute the run command.
   */
readonly timeoutInSeconds?: number;

/**
   * Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error:https://aka.ms/runcommandmanaged#get-execution-status-and-results
   */
readonly treatFailureAsDeploymentFailure?: bool;

/**
   * Client Id (GUID value) of the user-assigned managed identity. ObjectId should not be used if this is provided.
   */
readonly clientId?: string;

/**
   * Object Id (GUID value) of the user-assigned managed identity. ClientId should not be used if this is provided.
   */
readonly objectId?: string;

/**
   * The run command parameter value.
   */
readonly value: string;

/**
   * Specifies a commandId of predefined built-in script.
   */
readonly commandId?: string;

/**
   * Specifies the script content to be executed on the VM.
   */
readonly script?: string;

/**
   * Specifies the script download location. It can be either SAS URI of an Azure storage blob with read access or public URI.
   */
readonly scriptUri?: string;

/**
   * User-assigned managed identity that has access to scriptUri in case of Azure storage blob. Use an empty object in case of system-assigned identity. Make sure the Azure storage blob exists, and managed identity has been given access to blob's container with 'Storage Blob Data Reader' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, referhttps://aka.ms/ManagedIdentityandhttps://aka.ms/RunCommandManaged.
   */
readonly scriptUriManagedIdentity?: RunCommandManagedIdentity;
}

/**
 * ComputeVirtualmachinescalesetsVirtualmachinesRuncommands resource
 */
export class ComputeVirtualmachinescalesetsVirtualmachinesRuncommands extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeVirtualmachinescalesetsVirtualmachinesRuncommandsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-03-01";
  }

  protected getResourceBody(props: ComputeVirtualmachinescalesetsVirtualmachinesRuncommandsProps): string {
    return JSON.stringify(
        {properties: {asyncExecution: "${bool}", errorBlobManagedIdentity: {clientId: "string", objectId: "string"}, errorBlobUri: "string", outputBlobManagedIdentity: {clientId: "string", objectId: "string"}, outputBlobUri: "string", parameters: [{name: "string", value: "string"}], protectedParameters: [{name: "string", value: "string"}], runAsPassword: "string", runAsUser: "string", source: {commandId: "string", script: "string", scriptUri: "string", scriptUriManagedIdentity: {clientId: "string", objectId: "string"}}, timeoutInSeconds: "${int}", treatFailureAsDeploymentFailure: "${bool}"}}
    );
  }
}
