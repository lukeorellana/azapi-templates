import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesImportpipelinesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The identity of the import pipeline.
   */
readonly identity?: IdentityProperties;

/**
   * The principal ID of resource identity.
   */
readonly principalId?: string;

/**
   * The tenant ID of resource.
   */
readonly tenantId?: string;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The list of all options configured for the pipeline.
   */
readonly options?: String array containing any of:'ContinueOnErrors''DeleteSourceBlobOnSuccess''OverwriteBlobs''OverwriteTags';

/**
   * The source properties of the import pipeline.
   */
readonly source: ImportPipelineSourceProperties;

/**
   * The properties that describe the trigger of the import pipeline.
   */
readonly trigger?: PipelineTriggerProperties;

/**
   * They key vault secret uri to obtain the source storage SAS token.
   */
readonly keyVaultUri: string;

/**
   * The type of source for the import pipeline.
   */
readonly type?: 'AzureStorageBlobContainer';

/**
   * The source uri of the import pipeline.When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"When 'AzureStorageBlobContainer': "https://accountName.blob.core.windows.net/containerName"
   */
readonly uri?: string;

/**
   * The source trigger properties of the pipeline.
   */
readonly sourceTrigger?: PipelineSourceTriggerProperties;

/**
   * The current status of the source trigger.
   */
readonly status: 'Disabled''Enabled';
}

/**
 * ContainerregistryRegistriesImportpipelines resource
 */
export class ContainerregistryRegistriesImportpipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesImportpipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesImportpipelinesProps): string {
    return JSON.stringify(
        {properties: {options: ["string"], source: {keyVaultUri: "string", type: "AzureStorageBlobContainer", uri: "string"}, trigger: {sourceTrigger: {status: "string"}}}}
    );
  }
}
