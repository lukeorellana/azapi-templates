import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesTasksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * Identity for the resource.
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
   * The machine configuration of the run agent.
   */
readonly agentConfiguration?: AgentProperties;

/**
   * The dedicated agent pool for the task.
   */
readonly agentPoolName?: string;

/**
   * The properties that describes a set of credentials that will be used when this run is invoked.
   */
readonly credentials?: Credentials;

/**
   * The value of this property indicates whether the task resource is system task or not.
   */
readonly isSystemTask?: bool;

/**
   * The template that describes the repository and tag information for run log artifact.
   */
readonly logTemplate?: string;

/**
   * The platform properties against which the run has to happen.
   */
readonly platform?: PlatformProperties;

/**
   * The current status of task.
   */
readonly status?: 'Disabled''Enabled';

/**
   * The properties of a task step.
   */
readonly step?: TaskStepProperties;

/**
   * Run timeout in seconds.
   */
readonly timeout?: number;

/**
   * The properties that describe all triggers for the task.
   */
readonly trigger?: TriggerProperties;

/**
   * The CPU configuration in terms of number of cores required for the run.
   */
readonly cpu?: number;

/**
   * Describes the credential parameters for accessing other custom registries. The keyfor the dictionary item will be the registry login server (myregistry.azurecr.io) andthe value of the item will be the registry credentials for accessing the registry.
   */
readonly customRegistries?: object;

/**
   * Describes the credential parameters for accessing the source registry.
   */
readonly sourceRegistry?: SourceRegistryCredentials;

/**
   * The authentication mode which determines the source registry login scope. The credentials for the source registrywill be generated using the given scope. These credentials will be used to login tothe source registry during the run.
   */
readonly loginMode?: 'Default''None';

/**
   * The OS architecture.
   */
readonly architecture?: '386''amd64''arm''arm64''x86';

/**
   * The operating system type required for the run.
   */
readonly os: 'Linux''Windows';

/**
   * Variant of the CPU.
   */
readonly variant?: 'v6''v7''v8';

/**
   * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
   */
readonly contextAccessToken?: string;

/**
   * The URL(absolute or relative) of the source context for the task step.
   */
readonly contextPath?: string;

/**
   * Set the object type
   */
readonly type: DockerEncodedTaskFileTask;

/**
   * The type of the step.
   */
readonly type: 'Docker';

/**
   * The collection of override arguments to be used when executing this build step.
   */
readonly arguments?: Argument[];

/**
   * The Docker file path relative to the source context.
   */
readonly dockerFilePath: string;

/**
   * The fully qualified image names including the repository and tag.
   */
readonly imageNames?: string[];

/**
   * The value of this property indicates whether the image built should be pushed to the registry or not.
   */
readonly isPushEnabled?: bool;

/**
   * The value of this property indicates whether the image cache is enabled or not.
   */
readonly noCache?: bool;

/**
   * The name of the target build stage for the docker build.
   */
readonly target?: string;

/**
   * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
   */
readonly isSecret?: bool;

/**
   * The value of the argument.
   */
readonly value: string;

/**
   * The type of the step.
   */
readonly type: 'EncodedTask';

/**
   * Base64 encoded value of the template/definition file content.
   */
readonly encodedTaskContent: string;

/**
   * Base64 encoded value of the parameters/values file content.
   */
readonly encodedValuesContent?: string;

/**
   * The collection of overridable values that can be passed when running a task.
   */
readonly values?: SetValue[];

/**
   * Flag to indicate whether the value represents a secret or not.
   */
readonly isSecret?: bool;

/**
   * The overridable value.
   */
readonly value: string;

/**
   * The type of the step.
   */
readonly type: 'FileTask';

/**
   * The task template/definition file path relative to the source context.
   */
readonly taskFilePath: string;

/**
   * The collection of overridable values that can be passed when running a task.
   */
readonly values?: SetValue[];

/**
   * The task values/parameters file path relative to the source context.
   */
readonly valuesFilePath?: string;

/**
   * The trigger based on base image dependencies.
   */
readonly baseImageTrigger?: BaseImageTrigger;

/**
   * The collection of triggers based on source code repository.
   */
readonly sourceTriggers?: SourceTrigger[];

/**
   * The collection of timer triggers.
   */
readonly timerTriggers?: TimerTrigger[];

/**
   * The type of the auto trigger for base image dependency updates.
   */
readonly baseImageTriggerType: 'All''Runtime';

/**
   * The current status of trigger.
   */
readonly status?: 'Disabled''Enabled';

/**
   * The endpoint URL for receiving update triggers.
   */
readonly updateTriggerEndpoint?: string;

/**
   * Type of Payload body for Base image update triggers.
   */
readonly updateTriggerPayloadType?: 'Default''Token';

/**
   * The properties that describes the source(code) for the task.
   */
readonly sourceRepository: SourceProperties;

/**
   * The source event corresponding to the trigger.
   */
readonly sourceTriggerEvents: String array containing any of:'commit''pullrequest';

/**
   * The current status of trigger.
   */
readonly status?: 'Disabled''Enabled';

/**
   * The branch name of the source code.
   */
readonly branch?: string;

/**
   * The full URL to the source code repository
   */
readonly repositoryUrl: string;

/**
   * The authorization properties for accessing the source code repository and to set upwebhooks for notifications.
   */
readonly sourceControlAuthProperties?: AuthInfo;

/**
   * The type of source control service.
   */
readonly sourceControlType: 'Github''VisualStudioTeamService';

/**
   * Time in seconds that the token remains valid
   */
readonly expiresIn?: number;

/**
   * The refresh token used to refresh the access token.
   */
readonly refreshToken?: string;

/**
   * The scope of the access token.
   */
readonly scope?: string;

/**
   * The access token used to access the source control provider.
   */
readonly token: string;

/**
   * The type of Auth token.
   */
readonly tokenType: 'OAuth''PAT';

/**
   * The CRON expression for the task schedule
   */
readonly schedule: string;

/**
   * The current status of trigger.
   */
readonly status?: 'Disabled''Enabled';
}

/**
 * ContainerregistryRegistriesTasks resource
 */
export class ContainerregistryRegistriesTasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesTasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesTasksProps): string {
    return JSON.stringify(
        {properties: {agentConfiguration: {cpu: "${int}"}, agentPoolName: "string", credentials: {customRegistries: {}, sourceRegistry: {loginMode: "string"}}, isSystemTask: "${bool}", logTemplate: "string", platform: {architecture: "string", os: "string", variant: "string"}, status: "string", step: {contextAccessToken: "string", contextPath: "string", type: "string"}, timeout: "${int}", trigger: {baseImageTrigger: {baseImageTriggerType: "string", name: "string", status: "string", updateTriggerEndpoint: "string", updateTriggerPayloadType: "string"}, sourceTriggers: [{name: "string", sourceRepository: {branch: "string", repositoryUrl: "string", sourceControlAuthProperties: {expiresIn: "${int}", refreshToken: "string", scope: "string", token: "string", tokenType: "string"}, sourceControlType: "string"}, sourceTriggerEvents: ["string"], status: "string"}], timerTriggers: [{name: "string", schedule: "string", status: "string"}]}}}
    );
  }
}
