import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesTaskrunsProps extends IAzAPIBaseProps {
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
   * How the run should be forced to rerun even if the run request configuration has not changed
   */
readonly forceUpdateTag?: string;

/**
   * The request (parameters) for the run
   */
readonly runRequest?: RunRequest;

/**
   * The dedicated agent pool for the run.
   */
readonly agentPoolName?: string;

/**
   * The value that indicates whether archiving is enabled for the run or not.
   */
readonly isArchiveEnabled?: bool;

/**
   * The template that describes the repository and tag information for run log artifact.
   */
readonly logTemplate?: string;

/**
   * Set the object type
   */
readonly type: DockerBuildRequestEncodedTaskRunRequestFileTaskRunRequestTaskRunRequest;

/**
   * The type of the run request.
   */
readonly type: 'DockerBuildRequest';

/**
   * The machine configuration of the run agent.
   */
readonly agentConfiguration?: AgentProperties;

/**
   * The collection of override arguments to be used when executing the run.
   */
readonly arguments?: Argument[];

/**
   * The properties that describes a set of credentials that will be used when this run is invoked.
   */
readonly credentials?: Credentials;

/**
   * The Docker file path relative to the source location.
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
   * The platform properties against which the run has to happen.
   */
readonly platform: PlatformProperties;

/**
   * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
   */
readonly sourceLocation?: string;

/**
   * The name of the target build stage for the docker build.
   */
readonly target?: string;

/**
   * Run timeout in seconds.
   */
readonly timeout?: number;

/**
   * The CPU configuration in terms of number of cores required for the run.
   */
readonly cpu?: number;

/**
   * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
   */
readonly isSecret?: bool;

/**
   * The value of the argument.
   */
readonly value: string;

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
   * The type of the run request.
   */
readonly type: 'EncodedTaskRunRequest';

/**
   * The machine configuration of the run agent.
   */
readonly agentConfiguration?: AgentProperties;

/**
   * The properties that describes a set of credentials that will be used when this run is invoked.
   */
readonly credentials?: Credentials;

/**
   * Base64 encoded value of the template/definition file content.
   */
readonly encodedTaskContent: string;

/**
   * Base64 encoded value of the parameters/values file content.
   */
readonly encodedValuesContent?: string;

/**
   * The platform properties against which the run has to happen.
   */
readonly platform: PlatformProperties;

/**
   * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
   */
readonly sourceLocation?: string;

/**
   * Run timeout in seconds.
   */
readonly timeout?: number;

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
   * The type of the run request.
   */
readonly type: 'FileTaskRunRequest';

/**
   * The machine configuration of the run agent.
   */
readonly agentConfiguration?: AgentProperties;

/**
   * The properties that describes a set of credentials that will be used when this run is invoked.
   */
readonly credentials?: Credentials;

/**
   * The platform properties against which the run has to happen.
   */
readonly platform: PlatformProperties;

/**
   * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
   */
readonly sourceLocation?: string;

/**
   * The template/definition file path relative to the source.
   */
readonly taskFilePath: string;

/**
   * Run timeout in seconds.
   */
readonly timeout?: number;

/**
   * The collection of overridable values that can be passed when running a task.
   */
readonly values?: SetValue[];

/**
   * The values/parameters file path relative to the source.
   */
readonly valuesFilePath?: string;

/**
   * The type of the run request.
   */
readonly type: 'TaskRunRequest';

/**
   * Set of overridable parameters that can be passed when running a Task.
   */
readonly overrideTaskStepProperties?: OverrideTaskStepProperties;

/**
   * The resource ID of task against which run has to be queued.
   */
readonly taskId: string;

/**
   * Gets or sets the collection of override arguments to be used whenexecuting a build step.
   */
readonly arguments?: Argument[];

/**
   * The source context against which run has to be queued.
   */
readonly contextPath?: string;

/**
   * The file against which run has to be queued.
   */
readonly file?: string;

/**
   * The name of the target build stage for the docker build.
   */
readonly target?: string;

/**
   * Base64 encoded update trigger token that will be attached with the base image trigger webhook.
   */
readonly updateTriggerToken?: string;

/**
   * The collection of overridable values that can be passed when running a Task.
   */
readonly values?: SetValue[];
}

/**
 * ContainerregistryRegistriesTaskruns resource
 */
export class ContainerregistryRegistriesTaskruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesTaskrunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesTaskrunsProps): string {
    return JSON.stringify(
        {properties: {forceUpdateTag: "string", runRequest: {agentPoolName: "string", isArchiveEnabled: "${bool}", logTemplate: "string", type: "string"}}}
    );
  }
}
