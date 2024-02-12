import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * ARM resource ID of the component resource.
   */
readonly componentId?: string;

/**
   * ARM resource ID of the compute resource.
   */
readonly computeId?: string;

/**
   * Configuration of data used in the job.
   */
readonly dataConfiguration?: LabelingDataConfiguration;

/**
   * The asset description text.
   */
readonly description?: string;

/**
   * Display name of job.
   */
readonly displayName?: string;

/**
   * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
   */
readonly experimentName?: string;

/**
   * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null.
   */
readonly identity?: IdentityConfiguration;

/**
   * Is the asset archived?
   */
readonly isArchived?: bool;

/**
   * Labeling instructions of the job.
   */
readonly jobInstructions?: LabelingJobInstructions;

/**
   * [Required] Specifies the type of job.
   */
readonly jobType: 'AutoML''Command''Labeling''Pipeline''Spark''Sweep';

/**
   * Label categories of the job.
   */
readonly labelCategories?: LabelingJobLabelCategories;

/**
   * Media type specific properties in the job.
   */
readonly labelingJobMediaProperties?: LabelingJobMediaProperties;

/**
   * Configuration of MLAssist feature in the job.
   */
readonly mlAssistConfiguration?: MLAssistConfiguration;

/**
   * Notification setting for the job
   */
readonly notificationSetting?: NotificationSetting;

/**
   * Configuration for secrets to be made available during runtime.
   */
readonly secretsConfiguration?: JobBaseSecretsConfiguration;

/**
   * List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
   */
readonly services?: JobBaseServices;

/**
   * Resource Id of the data asset to perform labeling.
   */
readonly dataId?: string;

/**
   * Indicates whether to enable incremental data refresh.
   */
readonly incrementalDataRefresh?: 'Disabled''Enabled';

/**
   * Set the object type
   */
readonly identityType: AMLTokenManagedUserIdentity;

/**
   * [Required] Specifies the type of identity framework.
   */
readonly identityType: 'AMLToken';

/**
   * [Required] Specifies the type of identity framework.
   */
readonly identityType: 'Managed';

/**
   * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
   */
readonly clientId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
   */
readonly objectId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
   */
readonly resourceId?: string;

/**
   * [Required] Specifies the type of identity framework.
   */
readonly identityType: 'UserIdentity';

/**
   * The link to a page with detailed labeling instructions for labelers.
   */
readonly uri?: string;

/**
   * 
   */
readonly {customized property}?: LabelCategory;

/**
   * 
   */
readonly {customized property}?: LabelCategory;

/**
   * Dictionary of label classes in this category.
   */
readonly classes?: LabelCategoryClasses;

/**
   * Display name of the label category.
   */
readonly displayName?: string;

/**
   * Indicates whether it is allowed to select multiple classes in this category.
   */
readonly multiSelect?: 'Disabled''Enabled';

/**
   * 
   */
readonly {customized property}?: LabelClass;

/**
   * Display name of the label class.
   */
readonly displayName?: string;

/**
   * Dictionary of subclasses of the label class.
   */
readonly subclasses?: LabelClassSubclasses;

/**
   * 
   */
readonly {customized property}?: LabelClass;

/**
   * Set the object type
   */
readonly mediaType: ImageText;

/**
   * [Required] Media type of the job.
   */
readonly mediaType: 'Image';

/**
   * Annotation type of image labeling job.
   */
readonly annotationType?: 'BoundingBox''Classification''InstanceSegmentation';

/**
   * [Required] Media type of the job.
   */
readonly mediaType: 'Text';

/**
   * Annotation type of text labeling job.
   */
readonly annotationType?: 'Classification''NamedEntityRecognition';

/**
   * Set the object type
   */
readonly mlAssist: DisabledEnabled;

/**
   * [Required] Indicates whether MLAssist feature is enabled.
   */
readonly mlAssist: 'Disabled';

/**
   * [Required] Indicates whether MLAssist feature is enabled.
   */
readonly mlAssist: 'Enabled';

/**
   * [Required] AML compute binding used in inferencing.
   */
readonly inferencingComputeBinding: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] AML compute binding used in training.
   */
readonly trainingComputeBinding: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Send email notification to user on specified notification type
   */
readonly emailOn?: String array containing any of:'JobCancelled''JobCompleted''JobFailed';

/**
   * This is the email recipient list which has a limitation of 499 characters in total concat with comma separator
   */
readonly emails?: string[];

/**
   * Send webhook callback to a service. Key is a user-provided name for the webhook.
   */
readonly webhooks?: NotificationSettingWebhooks;

/**
   * 
   */
readonly {customized property}?: Webhook;

/**
   * Send callback on a specified notification event
   */
readonly eventType?: string;

/**
   * Set the object type
   */
readonly webhookType: AzureDevOps;

/**
   * [Required] Specifies the type of service to send a callback
   */
readonly webhookType: 'AzureDevOps';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: SecretConfiguration;

/**
   * 
   */
readonly {customized property}?: SecretConfiguration;

/**
   * Secret Uri.Sample Uri :https://myvault.vault.azure.net/secrets/mysecretname/secretversion
   */
readonly uri?: string;

/**
   * Name of secret in workspace key vault.
   */
readonly workspaceSecretName?: string;

/**
   * 
   */
readonly {customized property}?: JobService;

/**
   * 
   */
readonly {customized property}?: JobService;

/**
   * Url for endpoint.
   */
readonly endpoint?: string;

/**
   * Endpoint type.
   */
readonly jobServiceType?: string;

/**
   * Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node.
   */
readonly nodes?: Nodes;

/**
   * Port for endpoint set by user.
   */
readonly port?: number;

/**
   * Set the object type
   */
readonly nodesValueType: All;

/**
   * [Required] Type of the Nodes value
   */
readonly nodesValueType: 'All';

/**
   * 
   */
readonly {customized property}?: string;
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
