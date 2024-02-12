import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Sku details required for ARM contract for Autoscaling.
   */
readonly sku?: Sku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:batchEndponumbers;

/**
   * Managed service identity (system assigned and/or user assigned identities)
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Code configuration for the endpoint deployment.
   */
readonly codeConfiguration?: CodeConfiguration;

/**
   * Compute target for batch inference operation.
   */
readonly compute?: string;

/**
   * Description of the endpoint deployment.
   */
readonly description?: string;

/**
   * ARM resource ID or AssetId of the environment specification for the endpoint deployment.
   */
readonly environmentId?: string;

/**
   * Environment variables configuration for the deployment.
   */
readonly environmentVariables?: EndponumberDeploymentPropertiesBaseEnvironmentVariables;

/**
   * Error threshold, if the error count for the entire input goes above this value,the batch inference will be aborted. Range is [-1, int.MaxValue].For FileDataset, this value is the count of file failures.For TabularDataset, this value is the count of record failures.If set to -1 (the lower bound), all failures during batch inference will be ignored.
   */
readonly errorThreshold?: number;

/**
   * Logging level for batch inference operation.
   */
readonly loggingLevel?: 'Debug''Info''Warning';

/**
   * Indicates maximum number of parallelism per instance.
   */
readonly maxConcurrencyPerInstance?: number;

/**
   * Size of the mini-batch passed to each batch invocation.For FileDataset, this is the number of files per mini-batch.For TabularDataset, this is the size of the records in bytes, per mini-batch.
   */
readonly miniBatchSize?: number;

/**
   * Reference to the model asset for the endpoint deployment.
   */
readonly model?: AssetReferenceBase;

/**
   * Indicates how the output will be organized.
   */
readonly outputAction?: 'AppendRow''SummaryOnly';

/**
   * Customized output file name for append_row output action.
   */
readonly outputFileName?: string;

/**
   * Indicates compute configuration for the job.If not provided, will default to the defaults defined in ResourceConfiguration.
   */
readonly resources?: DeploymentResourceConfiguration;

/**
   * Retry Settings for the batch inference operation.If not provided, will default to the defaults defined in BatchRetrySettings.
   */
readonly retrySettings?: BatchRetrySettings;

/**
   * ARM resource ID of the code asset.
   */
readonly codeId?: string;

/**
   * [Required] The script to execute on startup. eg. "score.py"
   */
readonly scoringScript: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Set the object type
   */
readonly referenceType: DataPathIdOutputPath;

/**
   * [Required] Specifies the type of asset reference.
   */
readonly referenceType: 'DataPath';

/**
   * ARM resource ID of the datastore where the asset is located.
   */
readonly datastoreId?: string;

/**
   * The path of the file/directory in the datastore.
   */
readonly path?: string;

/**
   * [Required] Specifies the type of asset reference.
   */
readonly referenceType: 'Id';

/**
   * [Required] ARM resource ID of the asset.
   */
readonly assetId: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Specifies the type of asset reference.
   */
readonly referenceType: 'OutputPath';

/**
   * ARM resource ID of the job.
   */
readonly jobId?: string;

/**
   * The path of the file/directory in the job output.
   */
readonly path?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Optional number of instances or nodes used by the compute target.
   */
readonly instanceCount?: number;

/**
   * Optional type of VM used as supported by the compute target.
   */
readonly instanceType?: string;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * Maximum retry count for a mini-batch
   */
readonly maxRetries?: number;

/**
   * Invocation timeout for a mini-batch, in ISO 8601 format.
   */
readonly timeout?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
