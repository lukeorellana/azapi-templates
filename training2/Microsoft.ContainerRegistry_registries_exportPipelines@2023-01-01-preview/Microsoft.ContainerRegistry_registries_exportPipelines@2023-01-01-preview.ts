import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesExportpipelinesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The identity of the export pipeline.
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
   * The target properties of the export pipeline.
   */
readonly target: ExportPipelineTargetProperties;

/**
   * They key vault secret uri to obtain the target storage SAS token.
   */
readonly keyVaultUri: string;

/**
   * The type of target for the export pipeline.
   */
readonly type?: string;

/**
   * The target uri of the export pipeline.When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"When 'AzureStorageBlobContainer':  "https://accountName.blob.core.windows.net/containerName"
   */
readonly uri?: string;
}

/**
 * ContainerregistryRegistriesExportpipelines resource
 */
export class ContainerregistryRegistriesExportpipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesExportpipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesExportpipelinesProps): string {
    return JSON.stringify(
        {properties: {options: ["string"], target: {keyVaultUri: "string", type: "string", uri: "string"}}}
    );
  }
}
