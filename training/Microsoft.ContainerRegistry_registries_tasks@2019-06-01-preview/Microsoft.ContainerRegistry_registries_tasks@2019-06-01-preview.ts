import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ContainerregistryRegistriesTasksProps extends IAzAPIBaseProps {

}

export class ContainerregistryRegistriesTasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesTasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesTasksProps): string {
    return JSON.stringify(
      {properties: {agentConfiguration: {cpu: int}, agentPoolName: "string", credentials: {customRegistries: {}, sourceRegistry: {loginMode: "string"}}, isSystemTask: "${bool}", logTemplate: "string", platform: {architecture: "string", os: "string", variant: "string"}, status: "string", step: {contextAccessToken: "string", contextPath: "string", type: "string"}, timeout: int, trigger: {baseImageTrigger: {baseImageTriggerType: "string", name: "string", status: "string", updateTriggerEndpoint: "string", updateTriggerPayloadType: "string"}, sourceTriggers: [{name: "string", sourceRepository: {branch: "string", repositoryUrl: "string", sourceControlAuthProperties: {expiresIn: int, refreshToken: "string", scope: "string", token: "string", tokenType: "string"}, sourceControlType: "string"}, sourceTriggerEvents: ["string"], status: "string"}], timerTriggers: [{name: "string", schedule: "string", status: "string"}]}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics, hyphens, and underscores. |
// | location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
// | tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
// | identity | Identity for the resource. | IdentityProperties |
// | properties | The properties of a task. | TaskProperties |

// | Name | Description | Value |
// |-|-|-|
// | principalId | The principal ID of resource identity. | string |
// | tenantId | The tenant ID of resource. | string |
// | type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
// | userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |

// | Name | Description | Value |
// |-|-|-|
// | agentConfiguration | The machine configuration of the run agent. | AgentProperties |
// | agentPoolName | The dedicated agent pool for the task. | string |
// | credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
// | isSystemTask | The value of this property indicates whether the task resource is system task or not. | bool |
// | logTemplate | The template that describes the repository and tag information for run log artifact. | string |
// | platform | The platform properties against which the run has to happen. | PlatformProperties |
// | status | The current status of task. | 'Disabled''Enabled' |
// | step | The properties of a task step. | TaskStepProperties |
// | timeout | Run timeout in seconds. | int |
// | trigger | The properties that describe all triggers for the task. | TriggerProperties |

// | Name | Description | Value |
// |-|-|-|
// | cpu | The CPU configuration in terms of number of cores required for the run. | int |

// | Name | Description | Value |
// |-|-|-|
// | customRegistries | Describes the credential parameters for accessing other custom registries. The keyfor the dictionary item will be the registry login server (myregistry.azurecr.io) andthe value of the item will be the registry credentials for accessing the registry. | object |
// | sourceRegistry | Describes the credential parameters for accessing the source registry. | SourceRegistryCredentials |

// | Name | Description | Value |
// |-|-|-|
// | loginMode | The authentication mode which determines the source registry login scope. The credentials for the source registrywill be generated using the given scope. These credentials will be used to login tothe source registry during the run. | 'Default''None' |

// | Name | Description | Value |
// |-|-|-|
// | architecture | The OS architecture. | '386''amd64''arm''arm64''x86' |
// | os | The operating system type required for the run. | 'Linux''Windows' (required) |
// | variant | Variant of the CPU. | 'v6''v7''v8' |

// | Name | Description | Value |
// |-|-|-|
// | contextAccessToken | The token (git PAT or SAS token of storage account blob) associated with the context for a step. | string |
// | contextPath | The URL(absolute or relative) of the source context for the task step. | string |
// | type | Set the object type | DockerEncodedTaskFileTask(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | The type of the step. | 'Docker' (required) |
// | arguments | The collection of override arguments to be used when executing this build step. | Argument[] |
// | dockerFilePath | The Docker file path relative to the source context. | string (required) |
// | imageNames | The fully qualified image names including the repository and tag. | string[] |
// | isPushEnabled | The value of this property indicates whether the image built should be pushed to the registry or not. | bool |
// | noCache | The value of this property indicates whether the image cache is enabled or not. | bool |
// | target | The name of the target build stage for the docker build. | string |

// | Name | Description | Value |
// |-|-|-|
// | isSecret | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | bool |
// | name | The name of the argument. | string (required) |
// | value | The value of the argument. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | The type of the step. | 'EncodedTask' (required) |
// | encodedTaskContent | Base64 encoded value of the template/definition file content. | string (required) |
// | encodedValuesContent | Base64 encoded value of the parameters/values file content. | string |
// | values | The collection of overridable values that can be passed when running a task. | SetValue[] |

// | Name | Description | Value |
// |-|-|-|
// | isSecret | Flag to indicate whether the value represents a secret or not. | bool |
// | name | The name of the overridable value. | string (required) |
// | value | The overridable value. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | type | The type of the step. | 'FileTask' (required) |
// | taskFilePath | The task template/definition file path relative to the source context. | string (required) |
// | values | The collection of overridable values that can be passed when running a task. | SetValue[] |
// | valuesFilePath | The task values/parameters file path relative to the source context. | string |

// | Name | Description | Value |
// |-|-|-|
// | baseImageTrigger | The trigger based on base image dependencies. | BaseImageTrigger |
// | sourceTriggers | The collection of triggers based on source code repository. | SourceTrigger[] |
// | timerTriggers | The collection of timer triggers. | TimerTrigger[] |

// | Name | Description | Value |
// |-|-|-|
// | baseImageTriggerType | The type of the auto trigger for base image dependency updates. | 'All''Runtime' (required) |
// | name | The name of the trigger. | string (required) |
// | status | The current status of trigger. | 'Disabled''Enabled' |
// | updateTriggerEndpoint | The endpoint URL for receiving update triggers. | string |
// | updateTriggerPayloadType | Type of Payload body for Base image update triggers. | 'Default''Token' |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the trigger. | string (required) |
// | sourceRepository | The properties that describes the source(code) for the task. | SourceProperties(required) |
// | sourceTriggerEvents | The source event corresponding to the trigger. | String array containing any of:'commit''pullrequest' (required) |
// | status | The current status of trigger. | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | branch | The branch name of the source code. | string |
// | repositoryUrl | The full URL to the source code repository | string (required) |
// | sourceControlAuthProperties | The authorization properties for accessing the source code repository and to set upwebhooks for notifications. | AuthInfo |
// | sourceControlType | The type of source control service. | 'Github''VisualStudioTeamService' (required) |

// | Name | Description | Value |
// |-|-|-|
// | expiresIn | Time in seconds that the token remains valid | int |
// | refreshToken | The refresh token used to refresh the access token. | string |
// | scope | The scope of the access token. | string |
// | token | The access token used to access the source control provider. | string (required) |
// | tokenType | The type of Auth token. | 'OAuth''PAT' (required) |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the trigger. | string (required) |
// | schedule | The CRON expression for the task schedule | string (required) |
// | status | The current status of trigger. | 'Disabled''Enabled' |
