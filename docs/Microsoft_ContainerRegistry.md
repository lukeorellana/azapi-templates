## Microsoft.ContainerRegistry/registries@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      adminUserEnabled = bool
      anonymousPullEnabled = bool
      dataEndpointEnabled = bool
      encryption = {
        keyVaultProperties = {
          identity = "string"
          keyIdentifier = "string"
        }
        status = "string"
      }
      networkRuleBypassOptions = "string"
      networkRuleSet = {
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            value = "string"
          }
        ]
      }
      policies = {
        azureADAuthenticationAsArmPolicy = {
          status = "string"
        }
        exportPolicy = {
          status = "string"
        }
        quarantinePolicy = {
          status = "string"
        }
        retentionPolicy = {
          days = int
          status = "string"
        }
        softDeletePolicy = {
          retentionDays = int
          status = "string"
        }
        trustPolicy = {
          status = "string"
          type = "Notary"
        }
      }
      publicNetworkAccess = "string"
      zoneRedundancy = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### registries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 5-50Valid characters:Alphanumerics.Resource name must be unique across Azure. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the container registry. | Sku(required) |
| identity | The identity of the container registry. | IdentityProperties |
| properties | The properties of the container registry. | RegistryProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### RegistryProperties

| Name | Description | Value |
|-|-|-|
| adminUserEnabled | The value that indicates whether the admin user is enabled. | bool |
| anonymousPullEnabled | Enables registry-wide pull from unauthenticated clients. | bool |
| dataEndpointEnabled | Enable a single data endpoint per region for serving data. | bool |
| encryption | The encryption settings of container registry. | EncryptionProperty |
| networkRuleBypassOptions | Whether to allow trusted Azure services to access a network restricted registry. | 'AzureServices''None' |
| networkRuleSet | The network rule set for a container registry. | NetworkRuleSet |
| policies | The policies for a container registry. | Policies |
| publicNetworkAccess | Whether or not public network access is allowed for the container registry. | 'Disabled''Enabled' |
| zoneRedundancy | Whether or not zone redundancy is enabled for this container registry | 'Disabled''Enabled' |


### EncryptionProperty

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | Key vault properties. | KeyVaultProperties |
| status | Indicates whether or not the encryption is enabled for container registry. | 'disabled''enabled' |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identity | The client id of the identity which will be used to access key vault. | string |
| keyIdentifier | Key vault uri to access the encryption key. | string |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| defaultAction | The default action of allow or deny when no other rules match. | 'Allow''Deny' (required) |
| ipRules | The IP ACL rules. | IPRule[] |


### IPRule

| Name | Description | Value |
|-|-|-|
| action | The action of IP ACL rule. | 'Allow' |
| value | Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed. | string (required) |


### Policies

| Name | Description | Value |
|-|-|-|
| azureADAuthenticationAsArmPolicy | The policy for using ARM audience token for a container registry. | AzureADAuthenticationAsArmPolicy |
| exportPolicy | The export policy for a container registry. | ExportPolicy |
| quarantinePolicy | The quarantine policy for a container registry. | QuarantinePolicy |
| retentionPolicy | The retention policy for a container registry. | RetentionPolicy |
| softDeletePolicy | The soft delete policy for a container registry. | SoftDeletePolicy |
| trustPolicy | The content trust policy for a container registry. | TrustPolicy |


### AzureADAuthenticationAsArmPolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### ExportPolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### QuarantinePolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| days | The number of days to retain an untagged manifest after which it gets purged. | int |
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### SoftDeletePolicy

| Name | Description | Value |
|-|-|-|
| retentionDays | The number of days after which a soft-deleted item is permanently deleted. | int |
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### TrustPolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |
| type | The type of trust policy. | 'Notary' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name of the container registry. Required for registry creation. | 'Basic''Classic''Premium''Standard' (required) |
## Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      count = int
      os = "string"
      tier = "string"
      virtualNetworkSubnetResourceId = "string"
    }
  })
}

```

### registries/agentPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties associated with the agent pool | AgentPoolProperties |


### AgentPoolProperties

| Name | Description | Value |
|-|-|-|
| count | The count of agent machine | int |
| os | The OS of agent machine | 'Linux''Windows' |
| tier | The Tier of agent machine | string |
| virtualNetworkSubnetResourceId | The Virtual Network Subnet Resource Id of the agent machine | string |
## Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      alias = "string"
      platform = {
        cpu = int
        osType = "string"
      }
      sourceRepository = {
        isCommitTriggerEnabled = bool
        repositoryUrl = "string"
        sourceControlAuthProperties = {
          expiresIn = int
          refreshToken = "string"
          scope = "string"
          token = "string"
          tokenType = "string"
        }
        sourceControlType = "string"
        isCommitTriggerEnabled = bool
        repositoryUrl = "string"
        sourceControlAuthProperties = {
          expiresIn = int
          refreshToken = "string"
          scope = "string"
          token = "string"
          tokenType = "string"
        }
        sourceControlType = "string"
      }
      status = "string"
      timeout = int
    }
  })
}

```

### registries/buildTasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of a build task. | BuildTaskProperties |


### BuildTaskProperties

| Name | Description | Value |
|-|-|-|
| alias | The alternative updatable name for a build task. | string (required) |
| platform | The platform properties against which the build has to happen. | PlatformProperties(required) |
| sourceRepository | The properties that describes the source(code) for the build task. | SourceRepositoryProperties(required) |
| status | The current status of build task. | 'Disabled''Enabled' |
| timeout | Build timeout in seconds. | int |


### PlatformProperties

| Name | Description | Value |
|-|-|-|
| cpu | The CPU configuration in terms of number of cores required for the build. | int |
| osType | The operating system type required for the build. | 'Linux''Windows' (required) |


### SourceRepositoryProperties

| Name | Description | Value |
|-|-|-|
| isCommitTriggerEnabled | The value of this property indicates whether the source control commit trigger is enabled or not. | bool |
| repositoryUrl | The full URL to the source code repository | string (required) |
| sourceControlAuthProperties | The authorization properties for accessing the source code repository. | SourceControlAuthInfo |
| sourceControlType | The type of source control service. | 'Github''VisualStudioTeamService' (required) |
| isCommitTriggerEnabled | The value of this property indicates whether the source control commit trigger is enabled or not. | bool |
| repositoryUrl | The full URL to the source code repository | string (required) |
| sourceControlAuthProperties | The authorization properties for accessing the source code repository. | SourceControlAuthInfo |
| sourceControlType | The type of source control service. | 'Github''VisualStudioTeamService' (required) |


### SourceControlAuthInfo

| Name | Description | Value |
|-|-|-|
| expiresIn | Time in seconds that the token remains valid | int |
| refreshToken | The refresh token used to refresh the access token. | string |
| scope | The scope of the access token. | string |
| token | The access token used to access the source control provider. | string (required) |
| tokenType | The type of Auth token. | 'OAuth''PAT' |
## Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      type = "string"
      // For remaining properties, see BuildStepProperties objects
    }
  })
}

```

### registries/buildTasks/steps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:buildTasks |
| properties | The properties of a build step. | BuildStepProperties |


### BuildStepProperties

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Docker(required) |


### DockerBuildStep

| Name | Description | Value |
|-|-|-|
| type | The type of the step. | 'Docker' (required) |
| baseImageTrigger | The type of the auto trigger for base image dependency updates. | 'All''None''Runtime' |
| branch | The repository branch name. | string |
| buildArguments | The custom arguments for building this build step. | BuildArgument[] |
| contextPath | The relative context path for a docker build in the source. | string |
| dockerFilePath | The Docker file path relative to the source control root. | string |
| imageNames | The fully qualified image names including the repository and tag. | string[] |
| isPushEnabled | The value of this property indicates whether the image built should be pushed to the registry or not. | bool |
| noCache | The value of this property indicates whether the image cache is enabled or not. | bool |


### BuildArgument

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | bool |
| name | The name of the argument. | string (required) |
| type | The type of the argument. | 'DockerBuildArgument' (required) |
| value | The value of the argument. | string (required) |
## Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentialSetResourceId = "string"
      sourceRepository = "string"
      targetRepository = "string"
    }
  })
}

```

### registries/cacheRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the cache rule. | CacheRuleProperties |


### CacheRuleProperties

| Name | Description | Value |
|-|-|-|
| credentialSetResourceId | The ARM resource ID of the credential store which is associated with the cache rule. | string |
| sourceRepository | Source repository pulled from upstream. | string |
| targetRepository | Target repository specified in docker pull command.Eg: docker pull myregistry.azurecr.io/{targetRepository}:{tag} | string |
## Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientTokenIds = [
        "string"
      ]
      logging = {
        auditLogStatus = "string"
        logLevel = "string"
      }
      loginServer = {}
      mode = "string"
      notificationsList = [
        "string"
      ]
      parent = {
        id = "string"
        syncProperties = {
          messageTtl = "string"
          schedule = "string"
          syncWindow = "string"
          tokenId = "string"
        }
      }
    }
  })
}

```

### registries/connectedRegistries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the connected registry. | ConnectedRegistryProperties |


### ConnectedRegistryProperties

| Name | Description | Value |
|-|-|-|
| clientTokenIds | The list of the ACR token resource IDs used to authenticate clients to the connected registry. | string[] |
| logging | The logging properties of the connected registry. | LoggingProperties |
| loginServer | The login server properties of the connected registry. | LoginServerProperties |
| mode | The mode of the connected registry resource that indicates the permissions of the registry. | 'Mirror''ReadOnly''ReadWrite''Registry' (required) |
| notificationsList | The list of notifications subscription information for the connected registry. | string[] |
| parent | The parent of the connected registry. | ParentProperties(required) |


### LoggingProperties

| Name | Description | Value |
|-|-|-|
| auditLogStatus | Indicates whether audit logs are enabled on the connected registry. | 'Disabled''Enabled' |
| logLevel | The verbosity of logs persisted on the connected registry. | 'Debug''Error''Information''None''Warning' |


### ParentProperties

| Name | Description | Value |
|-|-|-|
| id | The resource ID of the parent to which the connected registry will be associated. | string |
| syncProperties | The sync properties of the connected registry with its parent. | SyncProperties(required) |


### SyncProperties

| Name | Description | Value |
|-|-|-|
| messageTtl | The period of time for which a message is available to sync before it is expired. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601. | string (required) |
| schedule | The cron expression indicating the schedule that the connected registry will sync with its parent. | string |
| syncWindow | The time window during which sync is enabled for each schedule occurrence. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601. | string |
| tokenId | The resource ID of the ACR token used to authenticate the connected registry to its parent during sync. | string (required) |
## Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      authCredentials = [
        {
          name = "Credential1"
          passwordSecretIdentifier = "string"
          usernameSecretIdentifier = "string"
        }
      ]
      loginServer = "string"
    }
  })
}

```

### registries/credentialSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | Identities associated with the resource. This is used to access the KeyVault secrets. | IdentityProperties |
| properties | The properties of the credential set. | CredentialSetProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### CredentialSetProperties

| Name | Description | Value |
|-|-|-|
| authCredentials | List of authentication credentials stored for an upstream.Usually consists of a primary and an optional secondary credential. | AuthCredential[] |
| loginServer | The credentials are stored for this upstream or login server. | string |


### AuthCredential

| Name | Description | Value |
|-|-|-|
| name | The name of the credential. | 'Credential1' |
| passwordSecretIdentifier | KeyVault Secret URI for accessing the password. | string |
| usernameSecretIdentifier | KeyVault Secret URI for accessing the username. | string |
## Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      options = [
        "string"
      ]
      target = {
        keyVaultUri = "string"
        type = "string"
        uri = "string"
      }
    }
  })
}

```

### registries/exportPipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the export pipeline. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | The identity of the export pipeline. | IdentityProperties |
| properties | The properties of the export pipeline. | ExportPipelineProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ExportPipelineProperties

| Name | Description | Value |
|-|-|-|
| options | The list of all options configured for the pipeline. | String array containing any of:'ContinueOnErrors''DeleteSourceBlobOnSuccess''OverwriteBlobs''OverwriteTags' |
| target | The target properties of the export pipeline. | ExportPipelineTargetProperties(required) |


### ExportPipelineTargetProperties

| Name | Description | Value |
|-|-|-|
| keyVaultUri | They key vault secret uri to obtain the target storage SAS token. | string (required) |
| type | The type of target for the export pipeline. | string |
| uri | The target uri of the export pipeline.When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"When 'AzureStorageBlobContainer':  "https://accountName.blob.core.windows.net/containerName" | string |
## Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      options = [
        "string"
      ]
      source = {
        keyVaultUri = "string"
        type = "AzureStorageBlobContainer"
        uri = "string"
      }
      trigger = {
        sourceTrigger = {
          status = "string"
        }
      }
    }
  })
}

```

### registries/importPipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the import pipeline. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | The identity of the import pipeline. | IdentityProperties |
| properties | The properties of the import pipeline. | ImportPipelineProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ImportPipelineProperties

| Name | Description | Value |
|-|-|-|
| options | The list of all options configured for the pipeline. | String array containing any of:'ContinueOnErrors''DeleteSourceBlobOnSuccess''OverwriteBlobs''OverwriteTags' |
| source | The source properties of the import pipeline. | ImportPipelineSourceProperties(required) |
| trigger | The properties that describe the trigger of the import pipeline. | PipelineTriggerProperties |


### ImportPipelineSourceProperties

| Name | Description | Value |
|-|-|-|
| keyVaultUri | They key vault secret uri to obtain the source storage SAS token. | string (required) |
| type | The type of source for the import pipeline. | 'AzureStorageBlobContainer' |
| uri | The source uri of the import pipeline.When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"When 'AzureStorageBlobContainer': "https://accountName.blob.core.windows.net/containerName" | string |


### PipelineTriggerProperties

| Name | Description | Value |
|-|-|-|
| sourceTrigger | The source trigger properties of the pipeline. | PipelineSourceTriggerProperties |


### PipelineSourceTriggerProperties

| Name | Description | Value |
|-|-|-|
| status | The current status of the source trigger. | 'Disabled''Enabled' (required) |
## Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      forceUpdateTag = "string"
      request = {
        artifacts = [
          "string"
        ]
        catalogDigest = "string"
        pipelineResourceId = "string"
        source = {
          name = "string"
          type = "AzureStorageBlob"
        }
        target = {
          name = "string"
          type = "AzureStorageBlob"
        }
      }
    }
  })
}

```

### registries/pipelineRuns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of a pipeline run. | PipelineRunProperties |


### PipelineRunProperties

| Name | Description | Value |
|-|-|-|
| forceUpdateTag | How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed. | string |
| request | The request parameters for a pipeline run. | PipelineRunRequest |


### PipelineRunRequest

| Name | Description | Value |
|-|-|-|
| artifacts | List of source artifacts to be transferred by the pipeline.Specify an image by repository ('hello-world'). This will use the 'latest' tag.Specify an image by tag ('hello-world:latest').Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123'). | string[] |
| catalogDigest | The digest of the tar used to transfer the artifacts. | string |
| pipelineResourceId | The resource ID of the pipeline to run. | string |
| source | The source properties of the pipeline run. | PipelineRunSourceProperties |
| target | The target properties of the pipeline run. | PipelineRunTargetProperties |


### PipelineRunSourceProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the source. | string |
| type | The type of the source. | 'AzureStorageBlob' |


### PipelineRunTargetProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the target. | string |
| type | The type of the target. | 'AzureStorageBlob' |
## Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### registries/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of a private endpoint connection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | This is private endpoint resource created with Microsoft.Network resource provider. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | 'None''Recreate' |
| description | The description for connection status. For example if connection is rejected it can indicate reason for rejection. | string |
| status | The private link service connection status. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      regionEndpointEnabled = bool
      zoneRedundancy = "string"
    }
  })
}

```

### registries/replications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the replication. | ReplicationProperties |


### ReplicationProperties

| Name | Description | Value |
|-|-|-|
| regionEndpointEnabled | Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications. | bool |
| zoneRedundancy | Whether or not zone redundancy is enabled for this container registry replication | 'Disabled''Enabled' |
## Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        "string"
      ]
      description = "string"
    }
  })
}

```

### registries/scopeMaps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the scope map. | ScopeMapProperties |


### ScopeMapProperties

| Name | Description | Value |
|-|-|-|
| actions | The list of scoped permissions for registry artifacts.E.g. repositories/repository-name/content/read,repositories/repository-name/metadata/write | string[] (required) |
| description | The user friendly description of the scope map. | string |
## Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      forceUpdateTag = "string"
      runRequest = {
        agentPoolName = "string"
        isArchiveEnabled = bool
        logTemplate = "string"
        type = "string"
        // For remaining properties, see RunRequest objects
      }
    }
  })
}

```

### registries/taskRuns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | Identity for the resource. | IdentityProperties |
| properties | The properties associated with the task run, i.e., request and result of the run | TaskRunProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### TaskRunProperties

| Name | Description | Value |
|-|-|-|
| forceUpdateTag | How the run should be forced to rerun even if the run request configuration has not changed | string |
| runRequest | The request (parameters) for the run | RunRequest |


### RunRequest

| Name | Description | Value |
|-|-|-|
| agentPoolName | The dedicated agent pool for the run. | string |
| isArchiveEnabled | The value that indicates whether archiving is enabled for the run or not. | bool |
| logTemplate | The template that describes the repository and tag information for run log artifact. | string |
| type | Set the object type | DockerBuildRequestEncodedTaskRunRequestFileTaskRunRequestTaskRunRequest(required) |


### DockerBuildRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'DockerBuildRequest' (required) |
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| arguments | The collection of override arguments to be used when executing the run. | Argument[] |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| dockerFilePath | The Docker file path relative to the source location. | string (required) |
| imageNames | The fully qualified image names including the repository and tag. | string[] |
| isPushEnabled | The value of this property indicates whether the image built should be pushed to the registry or not. | bool |
| noCache | The value of this property indicates whether the image cache is enabled or not. | bool |
| platform | The platform properties against which the run has to happen. | PlatformProperties(required) |
| sourceLocation | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | string |
| target | The name of the target build stage for the docker build. | string |
| timeout | Run timeout in seconds. | int |


### AgentProperties

| Name | Description | Value |
|-|-|-|
| cpu | The CPU configuration in terms of number of cores required for the run. | int |


### Argument

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | bool |
| name | The name of the argument. | string (required) |
| value | The value of the argument. | string (required) |


### Credentials

| Name | Description | Value |
|-|-|-|
| customRegistries | Describes the credential parameters for accessing other custom registries. The keyfor the dictionary item will be the registry login server (myregistry.azurecr.io) andthe value of the item will be the registry credentials for accessing the registry. | object |
| sourceRegistry | Describes the credential parameters for accessing the source registry. | SourceRegistryCredentials |


### SourceRegistryCredentials

| Name | Description | Value |
|-|-|-|
| loginMode | The authentication mode which determines the source registry login scope. The credentials for the source registrywill be generated using the given scope. These credentials will be used to login tothe source registry during the run. | 'Default''None' |


### PlatformProperties

| Name | Description | Value |
|-|-|-|
| architecture | The OS architecture. | '386''amd64''arm''arm64''x86' |
| os | The operating system type required for the run. | 'Linux''Windows' (required) |
| variant | Variant of the CPU. | 'v6''v7''v8' |


### EncodedTaskRunRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'EncodedTaskRunRequest' (required) |
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| encodedTaskContent | Base64 encoded value of the template/definition file content. | string (required) |
| encodedValuesContent | Base64 encoded value of the parameters/values file content. | string |
| platform | The platform properties against which the run has to happen. | PlatformProperties(required) |
| sourceLocation | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | string |
| timeout | Run timeout in seconds. | int |
| values | The collection of overridable values that can be passed when running a task. | SetValue[] |


### SetValue

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the value represents a secret or not. | bool |
| name | The name of the overridable value. | string (required) |
| value | The overridable value. | string (required) |


### FileTaskRunRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'FileTaskRunRequest' (required) |
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| platform | The platform properties against which the run has to happen. | PlatformProperties(required) |
| sourceLocation | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | string |
| taskFilePath | The template/definition file path relative to the source. | string (required) |
| timeout | Run timeout in seconds. | int |
| values | The collection of overridable values that can be passed when running a task. | SetValue[] |
| valuesFilePath | The values/parameters file path relative to the source. | string |


### TaskRunRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'TaskRunRequest' (required) |
| overrideTaskStepProperties | Set of overridable parameters that can be passed when running a Task. | OverrideTaskStepProperties |
| taskId | The resource ID of task against which run has to be queued. | string (required) |


### OverrideTaskStepProperties

| Name | Description | Value |
|-|-|-|
| arguments | Gets or sets the collection of override arguments to be used whenexecuting a build step. | Argument[] |
| contextPath | The source context against which run has to be queued. | string |
| file | The file against which run has to be queued. | string |
| target | The name of the target build stage for the docker build. | string |
| updateTriggerToken | Base64 encoded update trigger token that will be attached with the base image trigger webhook. | string |
| values | The collection of overridable values that can be passed when running a Task. | SetValue[] |
## Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      agentConfiguration = {
        cpu = int
      }
      agentPoolName = "string"
      credentials = {
        customRegistries = {}
        sourceRegistry = {
          loginMode = "string"
        }
      }
      isSystemTask = bool
      logTemplate = "string"
      platform = {
        architecture = "string"
        os = "string"
        variant = "string"
      }
      status = "string"
      step = {
        contextAccessToken = "string"
        contextPath = "string"
        type = "string"
        // For remaining properties, see TaskStepProperties objects
      }
      timeout = int
      trigger = {
        baseImageTrigger = {
          baseImageTriggerType = "string"
          name = "string"
          status = "string"
          updateTriggerEndpoint = "string"
          updateTriggerPayloadType = "string"
        }
        sourceTriggers = [
          {
            name = "string"
            sourceRepository = {
              branch = "string"
              repositoryUrl = "string"
              sourceControlAuthProperties = {
                expiresIn = int
                refreshToken = "string"
                scope = "string"
                token = "string"
                tokenType = "string"
              }
              sourceControlType = "string"
            }
            sourceTriggerEvents = [
              "string"
            ]
            status = "string"
          }
        ]
        timerTriggers = [
          {
            name = "string"
            schedule = "string"
            status = "string"
          }
        ]
      }
    }
  })
}

```

### registries/tasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics, hyphens, and underscores. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | Identity for the resource. | IdentityProperties |
| properties | The properties of a task. | TaskProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### TaskProperties

| Name | Description | Value |
|-|-|-|
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| agentPoolName | The dedicated agent pool for the task. | string |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| isSystemTask | The value of this property indicates whether the task resource is system task or not. | bool |
| logTemplate | The template that describes the repository and tag information for run log artifact. | string |
| platform | The platform properties against which the run has to happen. | PlatformProperties |
| status | The current status of task. | 'Disabled''Enabled' |
| step | The properties of a task step. | TaskStepProperties |
| timeout | Run timeout in seconds. | int |
| trigger | The properties that describe all triggers for the task. | TriggerProperties |


### AgentProperties

| Name | Description | Value |
|-|-|-|
| cpu | The CPU configuration in terms of number of cores required for the run. | int |


### Credentials

| Name | Description | Value |
|-|-|-|
| customRegistries | Describes the credential parameters for accessing other custom registries. The keyfor the dictionary item will be the registry login server (myregistry.azurecr.io) andthe value of the item will be the registry credentials for accessing the registry. | object |
| sourceRegistry | Describes the credential parameters for accessing the source registry. | SourceRegistryCredentials |


### SourceRegistryCredentials

| Name | Description | Value |
|-|-|-|
| loginMode | The authentication mode which determines the source registry login scope. The credentials for the source registrywill be generated using the given scope. These credentials will be used to login tothe source registry during the run. | 'Default''None' |


### PlatformProperties

| Name | Description | Value |
|-|-|-|
| architecture | The OS architecture. | '386''amd64''arm''arm64''x86' |
| os | The operating system type required for the run. | 'Linux''Windows' (required) |
| variant | Variant of the CPU. | 'v6''v7''v8' |


### TaskStepProperties

| Name | Description | Value |
|-|-|-|
| contextAccessToken | The token (git PAT or SAS token of storage account blob) associated with the context for a step. | string |
| contextPath | The URL(absolute or relative) of the source context for the task step. | string |
| type | Set the object type | DockerEncodedTaskFileTask(required) |


### DockerBuildStep

| Name | Description | Value |
|-|-|-|
| type | The type of the step. | 'Docker' (required) |
| arguments | The collection of override arguments to be used when executing this build step. | Argument[] |
| dockerFilePath | The Docker file path relative to the source context. | string (required) |
| imageNames | The fully qualified image names including the repository and tag. | string[] |
| isPushEnabled | The value of this property indicates whether the image built should be pushed to the registry or not. | bool |
| noCache | The value of this property indicates whether the image cache is enabled or not. | bool |
| target | The name of the target build stage for the docker build. | string |


### Argument

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | bool |
| name | The name of the argument. | string (required) |
| value | The value of the argument. | string (required) |


### EncodedTaskStep

| Name | Description | Value |
|-|-|-|
| type | The type of the step. | 'EncodedTask' (required) |
| encodedTaskContent | Base64 encoded value of the template/definition file content. | string (required) |
| encodedValuesContent | Base64 encoded value of the parameters/values file content. | string |
| values | The collection of overridable values that can be passed when running a task. | SetValue[] |


### SetValue

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the value represents a secret or not. | bool |
| name | The name of the overridable value. | string (required) |
| value | The overridable value. | string (required) |


### FileTaskStep

| Name | Description | Value |
|-|-|-|
| type | The type of the step. | 'FileTask' (required) |
| taskFilePath | The task template/definition file path relative to the source context. | string (required) |
| values | The collection of overridable values that can be passed when running a task. | SetValue[] |
| valuesFilePath | The task values/parameters file path relative to the source context. | string |


### TriggerProperties

| Name | Description | Value |
|-|-|-|
| baseImageTrigger | The trigger based on base image dependencies. | BaseImageTrigger |
| sourceTriggers | The collection of triggers based on source code repository. | SourceTrigger[] |
| timerTriggers | The collection of timer triggers. | TimerTrigger[] |


### BaseImageTrigger

| Name | Description | Value |
|-|-|-|
| baseImageTriggerType | The type of the auto trigger for base image dependency updates. | 'All''Runtime' (required) |
| name | The name of the trigger. | string (required) |
| status | The current status of trigger. | 'Disabled''Enabled' |
| updateTriggerEndpoint | The endpoint URL for receiving update triggers. | string |
| updateTriggerPayloadType | Type of Payload body for Base image update triggers. | 'Default''Token' |


### SourceTrigger

| Name | Description | Value |
|-|-|-|
| name | The name of the trigger. | string (required) |
| sourceRepository | The properties that describes the source(code) for the task. | SourceProperties(required) |
| sourceTriggerEvents | The source event corresponding to the trigger. | String array containing any of:'commit''pullrequest' (required) |
| status | The current status of trigger. | 'Disabled''Enabled' |


### SourceProperties

| Name | Description | Value |
|-|-|-|
| branch | The branch name of the source code. | string |
| repositoryUrl | The full URL to the source code repository | string (required) |
| sourceControlAuthProperties | The authorization properties for accessing the source code repository and to set upwebhooks for notifications. | AuthInfo |
| sourceControlType | The type of source control service. | 'Github''VisualStudioTeamService' (required) |


### AuthInfo

| Name | Description | Value |
|-|-|-|
| expiresIn | Time in seconds that the token remains valid | int |
| refreshToken | The refresh token used to refresh the access token. | string |
| scope | The scope of the access token. | string |
| token | The access token used to access the source control provider. | string (required) |
| tokenType | The type of Auth token. | 'OAuth''PAT' (required) |


### TimerTrigger

| Name | Description | Value |
|-|-|-|
| name | The name of the trigger. | string (required) |
| schedule | The CRON expression for the task schedule | string (required) |
| status | The current status of trigger. | 'Disabled''Enabled' |
## Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        certificates = [
          {
            encodedPemCertificate = "string"
            expiry = "string"
            name = "string"
            thumbprint = "string"
          }
        ]
        passwords = [
          {
            creationTime = "string"
            expiry = "string"
            name = "string"
          }
        ]
      }
      scopeMapId = "string"
      status = "string"
    }
  })
}

```

### registries/tokens

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the token. | TokenProperties |


### TokenProperties

| Name | Description | Value |
|-|-|-|
| credentials | The credentials that can be used for authenticating the token. | TokenCredentialsProperties |
| scopeMapId | The resource ID of the scope map to which the token will be associated with. | string |
| status | The status of the token example enabled or disabled. | 'disabled''enabled' |


### TokenCredentialsProperties

| Name | Description | Value |
|-|-|-|
| certificates |  | TokenCertificate[] |
| passwords |  | TokenPassword[] |


### TokenCertificate

| Name | Description | Value |
|-|-|-|
| encodedPemCertificate | Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token. | string |
| expiry | The expiry datetime of the certificate. | string |
| name |  | 'certificate1''certificate2' |
| thumbprint | The thumbprint of the certificate. | string |


### TokenPassword

| Name | Description | Value |
|-|-|-|
| creationTime | The creation datetime of the password. | string |
| expiry | The expiry datetime of the password. | string |
| name | The password name "password1" or "password2" | 'password1''password2' |
## Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        "string"
      ]
      customHeaders = {}
      scope = "string"
      serviceUri = "string"
      status = "string"
    }
  })
}

```

### registries/webhooks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics. |
| location | The location of the webhook. This cannot be changed after the resource is created. | string (required) |
| tags | The tags for the webhook. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties that the webhook will be created with. | WebhookPropertiesCreateParametersOrWebhookProperties |


### WebhookPropertiesCreateParametersOrWebhookProperties

| Name | Description | Value |
|-|-|-|
| actions | The list of actions that trigger the webhook to post notifications. | String array containing any of:'chart_delete''chart_push''delete''push''quarantine' (required) |
| customHeaders | Custom headers that will be added to the webhook notifications. | object |
| scope | The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. | string |
| serviceUri | The service URI for the webhook to post notifications. | string (required) |
| status | The status of the webhook at the time the operation was called. | 'disabled''enabled' |
