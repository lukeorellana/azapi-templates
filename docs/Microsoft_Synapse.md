## Microsoft.Synapse/privateLinkHubs@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/privateLinkHubs@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
    }
  })
}

```

### privateLinkHubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | PrivateLinkHub resource properties | PrivateLinkHubProperties |


### PrivateLinkHubProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | PrivateLinkHub provisioning state | string |
## Microsoft.Synapse/workspaces@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces@2021-06-01"
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
      azureADOnlyAuthentication = bool
      cspWorkspaceAdminProperties = {
        initialWorkspaceAdminObjectId = "string"
      }
      defaultDataLakeStorage = {
        accountUrl = "string"
        createManagedPrivateEndpoint = bool
        filesystem = "string"
        resourceId = "string"
      }
      encryption = {
        cmk = {
          kekIdentity = {
            userAssignedIdentity = "string"
          }
          key = {
            keyVaultUrl = "string"
            name = "string"
          }
        }
      }
      managedResourceGroupName = "string"
      managedVirtualNetwork = "string"
      managedVirtualNetworkSettings = {
        allowedAadTenantIdsForLinking = [
          "string"
        ]
        linkedAccessCheckOnTargetResource = bool
        preventDataExfiltration = bool
      }
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              description = "string"
              status = "string"
            }
          }
        }
      ]
      publicNetworkAccess = "string"
      purviewConfiguration = {
        purviewResourceId = "string"
      }
      sqlAdministratorLogin = "string"
      sqlAdministratorLoginPassword = "string"
      trustedServiceBypassEnabled = bool
      virtualNetworkProfile = {
        computeSubnetId = "string"
      }
      workspaceRepositoryConfiguration = {
        accountName = "string"
        collaborationBranch = "string"
        hostName = "string"
        lastCommitId = "string"
        projectName = "string"
        repositoryName = "string"
        rootFolder = "string"
        tenantId = "string"
        type = "string"
      }
    }
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-50Valid characters:Lowercase letters, hyphens, and numbers.Start and end with letter or number.Can't contain-ondemandResource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity of the workspace | ManagedIdentity |
| properties | Workspace resource properties | WorkspaceProperties |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity for the workspace | 'None''SystemAssigned''SystemAssigned,UserAssigned' |
| userAssignedIdentities | The user assigned managed identities. | object |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| azureADOnlyAuthentication | Enable or Disable AzureADOnlyAuthentication on All Workspace subresource | bool |
| cspWorkspaceAdminProperties | Initial workspace AAD admin properties for a CSP subscription | CspWorkspaceAdminProperties |
| defaultDataLakeStorage | Workspace default data lake storage account details | DataLakeStorageAccountDetails |
| encryption | The encryption details of the workspace | EncryptionDetails |
| managedResourceGroupName | Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.' | string |
| managedVirtualNetwork | Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user. | string |
| managedVirtualNetworkSettings | Managed Virtual Network Settings | ManagedVirtualNetworkSettings |
| privateEndpointConnections | Private endpoint connections to the workspace | PrivateEndpointConnection[] |
| publicNetworkAccess | Enable or Disable public network access to workspace | 'Disabled''Enabled' |
| purviewConfiguration | Purview Configuration | PurviewConfiguration |
| sqlAdministratorLogin | Login for workspace SQL active directory administrator | string |
| sqlAdministratorLoginPassword | SQL administrator login password | string |
| trustedServiceBypassEnabled | Is trustedServiceBypassEnabled for the workspace | bool |
| virtualNetworkProfile | Virtual Network profile | VirtualNetworkProfile |
| workspaceRepositoryConfiguration | Git integration settings | WorkspaceRepositoryConfiguration |


### CspWorkspaceAdminProperties

| Name | Description | Value |
|-|-|-|
| initialWorkspaceAdminObjectId | AAD object ID of initial workspace admin | string |


### DataLakeStorageAccountDetails

| Name | Description | Value |
|-|-|-|
| accountUrl | Account URL | string |
| createManagedPrivateEndpoint | Create managed private endpoint to this storage account or not | bool |
| filesystem | Filesystem name | string |
| resourceId | ARM resource Id of this storage account | string |


### EncryptionDetails

| Name | Description | Value |
|-|-|-|
| cmk | Customer Managed Key Details | CustomerManagedKeyDetails |


### CustomerManagedKeyDetails

| Name | Description | Value |
|-|-|-|
| kekIdentity | Key encryption key | KekIdentityProperties |
| key | The key object of the workspace | WorkspaceKeyDetails |


### KekIdentityProperties

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | User assigned identity resource Id | string |
| useSystemAssignedIdentity | Boolean specifying whether to use system assigned identity or not | For Bicep, you can use theany()function. |


### WorkspaceKeyDetails

| Name | Description | Value |
|-|-|-|
| keyVaultUrl | Workspace Key sub-resource key vault url | string |
| name | Workspace Key sub-resource name | string |


### ManagedVirtualNetworkSettings

| Name | Description | Value |
|-|-|-|
| allowedAadTenantIdsForLinking | Allowed Aad Tenant Ids For Linking | string[] |
| linkedAccessCheckOnTargetResource | Linked Access Check On Target Resource | bool |
| preventDataExfiltration | Prevent Data Exfiltration | bool |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Private endpoint connection properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint which the connection belongs to. | PrivateEndpoint |
| privateLinkServiceConnectionState | Connection state of the private endpoint connection. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string |
| status | The private link service connection status. | string |


### PurviewConfiguration

| Name | Description | Value |
|-|-|-|
| purviewResourceId | Purview Resource ID | string |


### VirtualNetworkProfile

| Name | Description | Value |
|-|-|-|
| computeSubnetId | Subnet ID used for computes in workspace | string |


### WorkspaceRepositoryConfiguration

| Name | Description | Value |
|-|-|-|
| accountName | Account name | string |
| collaborationBranch | Collaboration branch | string |
| hostName | GitHub Enterprise host name. For example:https://github.mydomain.com | string |
| lastCommitId | The last commit ID | string |
| projectName | VSTS project name | string |
| repositoryName | Repository name | string |
| rootFolder | Root folder to use in the repository | string |
| tenantId | The VSTS tenant ID | string |
| type | Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration | string |
## Microsoft.Synapse/workspaces/administrators@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/administrators@2021-06-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### workspaces/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'activeDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Workspace active directory administrator properties | AadAdminProperties |


### AadAdminProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Workspace active directory administrator type | string |
| login | Login of the workspace active directory administrator | string |
| sid | Object ID of the workspace active directory administrator | string |
| tenantId | Tenant ID of the workspace active directory administrator | string |
## Microsoft.Synapse/workspaces/auditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/auditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isStorageSecondaryKeyInUse = bool
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### workspaces/auditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | ServerBlobAuditingPolicyProperties |


### ServerBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isDevopsAuditEnabled | Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as trueWhen using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Synapse/workspaces/azureADOnlyAuthentications@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/azureADOnlyAuthentications@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

### workspaces/azureADOnlyAuthentications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | azureADOnlyAuthentication resource properties | AzureADOnlyAuthenticationProperties |


### AzureADOnlyAuthenticationProperties

| Name | Description | Value |
|-|-|-|
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool (required) |
## Microsoft.Synapse/workspaces/bigDataPools@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/bigDataPools@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoPause = {
        delayInMinutes = int
        enabled = bool
      }
      autoScale = {
        enabled = bool
        maxNodeCount = int
        minNodeCount = int
      }
      customLibraries = [
        {
          containerName = "string"
          name = "string"
          path = "string"
          type = "string"
        }
      ]
      defaultSparkLogFolder = "string"
      dynamicExecutorAllocation = {
        enabled = bool
        maxExecutors = int
        minExecutors = int
      }
      isAutotuneEnabled = bool
      isComputeIsolationEnabled = bool
      libraryRequirements = {
        content = "string"
        filename = "string"
      }
      nodeCount = int
      nodeSize = "string"
      nodeSizeFamily = "string"
      provisioningState = "string"
      sessionLevelPackagesEnabled = bool
      sparkConfigProperties = {
        configurationType = "string"
        content = "string"
        filename = "string"
      }
      sparkEventsFolder = "string"
      sparkVersion = "string"
    }
  })
}

```

### workspaces/bigDataPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-15Valid characters:Letters and numbers.Start with letter. End with letter or number.Can't containreserved word. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Big Data pool properties | BigDataPoolResourceProperties |


### BigDataPoolResourceProperties

| Name | Description | Value |
|-|-|-|
| autoPause | Auto-pausing properties | AutoPauseProperties |
| autoScale | Auto-scaling properties | AutoScaleProperties |
| customLibraries | List of custom libraries/packages associated with the spark pool. | LibraryInfo[] |
| defaultSparkLogFolder | The default folder where Spark logs will be written. | string |
| dynamicExecutorAllocation | Dynamic Executor Allocation | DynamicExecutorAllocation |
| isAutotuneEnabled | Whether autotune is required or not. | bool |
| isComputeIsolationEnabled | Whether compute isolation is required or not. | bool |
| libraryRequirements | Library version requirements | LibraryRequirements |
| nodeCount | The number of nodes in the Big Data pool. | int |
| nodeSize | The level of compute power that each node in the Big Data pool has. | 'Large''Medium''None''Small''XLarge''XXLarge''XXXLarge' |
| nodeSizeFamily | The kind of nodes that the Big Data pool provides. | 'HardwareAcceleratedFPGA''HardwareAcceleratedGPU''MemoryOptimized''None' |
| provisioningState | The state of the Big Data pool. | string |
| sessionLevelPackagesEnabled | Whether session level packages enabled. | bool |
| sparkConfigProperties | Spark configuration file to specify additional properties | SparkConfigProperties |
| sparkEventsFolder | The Spark events folder | string |
| sparkVersion | The Apache Spark version. | string |


### AutoPauseProperties

| Name | Description | Value |
|-|-|-|
| delayInMinutes | Number of minutes of idle time before the Big Data pool is automatically paused. | int |
| enabled | Whether auto-pausing is enabled for the Big Data pool. | bool |


### AutoScaleProperties

| Name | Description | Value |
|-|-|-|
| enabled | Whether automatic scaling is enabled for the Big Data pool. | bool |
| maxNodeCount | The maximum number of nodes the Big Data pool can support. | int |
| minNodeCount | The minimum number of nodes the Big Data pool can support. | int |


### LibraryInfo

| Name | Description | Value |
|-|-|-|
| containerName | Storage blob container name. | string |
| name | Name of the library. | string |
| path | Storage blob path of library. | string |
| type | Type of the library. | string |


### DynamicExecutorAllocation

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether Dynamic Executor Allocation is enabled or not. | bool |
| maxExecutors | The maximum number of executors alloted | int |
| minExecutors | The minimum number of executors alloted | int |


### LibraryRequirements

| Name | Description | Value |
|-|-|-|
| content | The library requirements. | string |
| filename | The filename of the library requirements file. | string |


### SparkConfigProperties

| Name | Description | Value |
|-|-|-|
| configurationType | The type of the spark config properties file. | 'Artifact''File' |
| content | The spark config properties. | string |
| filename | The filename of the spark config properties file. | string |
## Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      minimalTlsVersion = "string"
    }
  })
}

```

### workspaces/dedicatedSQLminimalTlsSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | DedicatedSQLminimalTlsSettingsProperties |


### DedicatedSQLminimalTlsSettingsProperties

| Name | Description | Value |
|-|-|-|
| minimalTlsVersion | The minimal tls version of the sql server. | string |
## Microsoft.Synapse/workspaces/encryptionProtector@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/encryptionProtector@2021-06-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

### workspaces/encryptionProtector

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | EncryptionProtectorProperties |


### EncryptionProtectorProperties

| Name | Description | Value |
|-|-|-|
| serverKeyName | The name of the server key. | string |
| serverKeyType | The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |
## Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isStorageSecondaryKeyInUse = bool
      predicateExpression = "string"
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### workspaces/extendedAuditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | ExtendedServerBlobAuditingPolicyProperties |


### ExtendedServerBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isDevopsAuditEnabled | Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as trueWhen using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| predicateExpression | Specifies condition of where clause when creating an audit. | string |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Synapse/workspaces/firewallRules@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/firewallRules@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

### workspaces/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | IP firewall rule properties | IpFirewallRuleProperties |


### IpFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress | string |
| startIpAddress | The start IP address of the firewall rule. Must be IPv4 format | string |
## Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      type = "string"
      // For remaining properties, see IntegrationRuntime objects
    }
  })
}

```

### workspaces/integrationRuntimes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Integration runtime properties. | IntegrationRuntime(required) |


### IntegrationRuntime

| Name | Description | Value |
|-|-|-|
| description | Integration runtime description. | string |
| type | Set the object type | ManagedSelfHosted(required) |


### ManagedIntegrationRuntime

| Name | Description | Value |
|-|-|-|
| type | Type of integration runtime. | 'Managed' (required) |
| managedVirtualNetwork | Managed integration runtime managed virtual network. | ManagedIntegrationRuntimeManagedVirtualNetworkRefere... |
| typeProperties | Managed integration runtime properties. | ManagedIntegrationRuntimeTypeProperties(required) |


### ManagedIntegrationRuntimeManagedVirtualNetworkRefere...

| Name | Description | Value |
|-|-|-|
| id | The id of the managed virtual network. | string |
| referenceName | The reference name of the managed virtual network | string |
| type | The type of the managed virtual network. | string |


### ManagedIntegrationRuntimeTypeProperties

| Name | Description | Value |
|-|-|-|
| computeProperties | The compute resource for managed integration runtime. | IntegrationRuntimeComputeProperties |
| customerVirtualNetwork | The name of virtual network to which Azure-SSIS integration runtime will join | IntegrationRuntimeCustomerVirtualNetwork |
| ssisProperties | SSIS properties for managed integration runtime. | IntegrationRuntimeSsisProperties |


### IntegrationRuntimeComputeProperties

| Name | Description | Value |
|-|-|-|
| dataFlowProperties | Data flow properties for managed integration runtime. | IntegrationRuntimeDataFlowProperties |
| location | The location for managed integration runtime. The supported regions could be found on /azure/data-factory/data-factory-data-movement-activities | string |
| maxParallelExecutionsPerNode | Maximum parallel executions count per node for managed integration runtime. | int |
| nodeSize | The node size requirement to managed integration runtime. | string |
| numberOfNodes | The required number of nodes for managed integration runtime. | int |
| vNetProperties | VNet properties for managed integration runtime. | IntegrationRuntimeVNetProperties |


### IntegrationRuntimeDataFlowProperties

| Name | Description | Value |
|-|-|-|
| computeType | Compute type of the cluster which will execute data flow job. | 'ComputeOptimized''General''MemoryOptimized' |
| coreCount | Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. | int |
| timeToLive | Time to live (in minutes) setting of the cluster which will execute data flow job. | int |


### IntegrationRuntimeVNetProperties

| Name | Description | Value |
|-|-|-|
| publicIPs | Resource IDs of the public IP addresses that this integration runtime will use. | string[] |
| subnet | The name of the subnet this integration runtime will join. | string |
| subnetId | The ID of subnet, to which this Azure-SSIS integration runtime will be joined. | string |
| vNetId | The ID of the VNet that this integration runtime will join. | string |


### IntegrationRuntimeCustomerVirtualNetwork

| Name | Description | Value |
|-|-|-|
| subnetId | The ID of subnet to which Azure-SSIS integration runtime will join. | string |


### IntegrationRuntimeSsisProperties

| Name | Description | Value |
|-|-|-|
| catalogInfo | Catalog information for managed dedicated integration runtime. | IntegrationRuntimeSsisCatalogInfo |
| customSetupScriptProperties | Custom setup script properties for a managed dedicated integration runtime. | IntegrationRuntimeCustomSetupScriptProperties |
| dataProxyProperties | Data proxy properties for a managed dedicated integration runtime. | IntegrationRuntimeDataProxyProperties |
| edition | The edition for the SSIS Integration Runtime | 'Enterprise''Standard' |
| expressCustomSetupProperties | Custom setup without script properties for a SSIS integration runtime. | CustomSetupBase[] |
| licenseType | License type for bringing your own license scenario. | 'BasePrice''LicenseIncluded' |


### IntegrationRuntimeSsisCatalogInfo

| Name | Description | Value |
|-|-|-|
| catalogAdminPassword | The password of the administrator user account of the catalog database. | SecureString |
| catalogAdminUserName | The administrator user name of catalog database. | string |
| catalogPricingTier | The pricing tier for the catalog database. The valid values could be found inhttps://azure.microsoft.com/pricing/details/sql-database/ | 'Basic''Premium''PremiumRS''Standard' |
| catalogServerEndpoint | The catalog database server URL. | string |


### SecureString

| Name | Description | Value |
|-|-|-|
| type | Type of the secret. | string (required) |
| value | Value of secure string. | string (required) |


### IntegrationRuntimeCustomSetupScriptProperties

| Name | Description | Value |
|-|-|-|
| blobContainerUri | The URI of the Azure blob container that contains the custom setup script. | string |
| sasToken | The SAS token of the Azure blob container. | SecureString |


### IntegrationRuntimeDataProxyProperties

| Name | Description | Value |
|-|-|-|
| connectVia | The self-hosted integration runtime reference. | EntityReference |
| path | The path to contain the staged data in the Blob storage. | string |
| stagingLinkedService | The staging linked service reference. | EntityReference |


### EntityReference

| Name | Description | Value |
|-|-|-|
| referenceName | The name of this referenced entity. | string |
| type | The type of this referenced entity. | 'IntegrationRuntimeReference''LinkedServiceReference' |


### CustomSetupBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | CmdkeySetupComponentSetupEnvironmentVariableSetup(required) |


### CmdkeySetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'CmdkeySetup' (required) |
| typeProperties | Cmdkey command custom setup type properties. | CmdkeySetupTypeProperties(required) |


### CmdkeySetupTypeProperties

| Name | Description | Value |
|-|-|-|
| password | The password of data source access. | SecretBase(required) |
| targetName | The server name of data source access. | For Bicep, you can use theany()function.(required) |
| userName | The user name of data source access. | For Bicep, you can use theany()function.(required) |


### SecretBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | SecureString(required) |


### ComponentSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'ComponentSetup' (required) |
| typeProperties | Install 3rd party component type properties. | LicensedComponentSetupTypeProperties(required) |


### LicensedComponentSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| componentName | The name of the 3rd party component. | string (required) |
| licenseKey | The license key to activate the component. | SecretBase |


### EnvironmentVariableSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'EnvironmentVariableSetup' (required) |
| typeProperties | Add environment variable type properties. | EnvironmentVariableSetupTypeProperties(required) |


### EnvironmentVariableSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| variableName | The name of the environment variable. | string (required) |
| variableValue | The value of the environment variable. | string (required) |


### SelfHostedIntegrationRuntime

| Name | Description | Value |
|-|-|-|
| type | Type of integration runtime. | 'SelfHosted' (required) |
| typeProperties | When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime. | SelfHostedIntegrationRuntimeTypeProperties |


### SelfHostedIntegrationRuntimeTypeProperties

| Name | Description | Value |
|-|-|-|
| linkedInfo | Linked integration runtime type from data factory | LinkedIntegrationRuntimeType |


### LinkedIntegrationRuntimeType

| Name | Description | Value |
|-|-|-|
| authorizationType | Set the object type | KeyRBAC(required) |


### LinkedIntegrationRuntimeKeyAuthorization

| Name | Description | Value |
|-|-|-|
| authorizationType | The authorization type for integration runtime sharing. | 'Key' (required) |
| key | The key used for authorization. | SecureString(required) |


### LinkedIntegrationRuntimeRbacAuthorization

| Name | Description | Value |
|-|-|-|
| authorizationType | The authorization type for integration runtime sharing. | 'RBAC' (required) |
| resourceId | The resource identifier of the integration runtime to be shared. | string (required) |
## Microsoft.Synapse/workspaces/keys@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/keys@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isActiveCMK = bool
      keyVaultUrl = "string"
    }
  })
}

```

### workspaces/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Keys resource properties | KeyProperties |


### KeyProperties

| Name | Description | Value |
|-|-|-|
| isActiveCMK | Used to activate the workspace after a customer managed key is provided. | bool |
| keyVaultUrl | The Key Vault Url of the workspace key. | string |
## Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enablePurge = bool
      enableStreamingIngest = bool
      optimizedAutoscale = {
        isEnabled = bool
        maximum = int
        minimum = int
        version = int
      }
      workspaceUID = "string"
    }
    sku = {
      capacity = int
      name = "string"
      size = "string"
    }
  })
}

```

### workspaces/kustoPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the kusto pool. | AzureSku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | The kusto pool properties. | KustoPoolProperties |


### KustoPoolProperties

| Name | Description | Value |
|-|-|-|
| enablePurge | A boolean value that indicates if the purge operations are enabled. | bool |
| enableStreamingIngest | A boolean value that indicates if the streaming ingest is enabled. | bool |
| optimizedAutoscale | Optimized auto scale definition. | OptimizedAutoscale |
| workspaceUID | The workspace unique identifier. | string |


### OptimizedAutoscale

| Name | Description | Value |
|-|-|-|
| isEnabled | A boolean value that indicate if the optimized autoscale feature is enabled or not. | bool (required) |
| maximum | Maximum allowed instances count. | int (required) |
| minimum | Minimum allowed instances count. | int (required) |
| version | The version of the template defined, for instance 1. | int (required) |


### AzureSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of instances of the cluster. | int |
| name | SKU name. | 'Compute optimized''Storage optimized' (required) |
| size | SKU size. | 'Extra small''Large''Medium''Small' (required) |
## Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      databaseName = "string"
      defaultPrincipalsModificationKind = "string"
      tableLevelSharingProperties = {
        externalTablesToExclude = [
          "string"
        ]
        externalTablesToInclude = [
          "string"
        ]
        materializedViewsToExclude = [
          "string"
        ]
        materializedViewsToInclude = [
          "string"
        ]
        tablesToExclude = [
          "string"
        ]
        tablesToInclude = [
          "string"
        ]
      }
    }
  })
}

```

### workspaces/kustoPools/attachedDatabaseConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:kustoPools |
| properties | The properties of the attached database configuration. | AttachedDatabaseConfigurationProperties |


### AttachedDatabaseConfigurationProperties

| Name | Description | Value |
|-|-|-|
| clusterResourceId | The resource id of the kusto pool where the databases you would like to attach reside. | string (required) |
| databaseName | The name of the database which you would like to attach, use * if you want to follow all current and future databases. | string (required) |
| defaultPrincipalsModificationKind | The default principals modification kind | 'None''Replace''Union' (required) |
| tableLevelSharingProperties | Table level sharing specifications | TableLevelSharingProperties |


### TableLevelSharingProperties

| Name | Description | Value |
|-|-|-|
| externalTablesToExclude | List of external tables exclude from the follower database | string[] |
| externalTablesToInclude | List of external tables to include in the follower database | string[] |
| materializedViewsToExclude | List of materialized views exclude from the follower database | string[] |
| materializedViewsToInclude | List of materialized views to include in the follower database | string[] |
| tablesToExclude | List of tables to exclude from the follower database | string[] |
| tablesToInclude | List of tables to include in the follower database | string[] |
## Microsoft.Synapse/workspaces/kustoPools/databases@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/databases@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see workspaces/kustoPools/databases objects
  body = jsonencode({
    kind = "string"
  })
}

```

### workspaces/kustoPools/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| kind | Set the object type | ReadOnlyFollowingReadWrite(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:kustoPools |


### ReadOnlyFollowingDatabase

| Name | Description | Value |
|-|-|-|
| kind | Kind of the database | 'ReadOnlyFollowing' (required) |


### ReadWriteDatabase

| Name | Description | Value |
|-|-|-|
| kind | Kind of the database | 'ReadWrite' (required) |
| properties | The database properties. | ReadWriteDatabaseProperties |


### ReadWriteDatabaseProperties

| Name | Description | Value |
|-|-|-|
| hotCachePeriod | The time the data should be kept in cache for fast queries in TimeSpan. | string |
| softDeletePeriod | The time the data should be kept before it stops being accessible to queries in TimeSpan. | string |
## Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see workspaces/kustoPools/databases/dataConnections objects
  body = jsonencode({
    kind = "string"
  })
}

```

### workspaces/kustoPools/databases/dataConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| kind | Set the object type | EventGridEventHubIotHub(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |


### EventGridDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'EventGrid' (required) |
| properties | The properties of the Event Grid data connection. | EventGridConnectionProperties |


### EventGridConnectionProperties

| Name | Description | Value |
|-|-|-|
| blobStorageEventType | The name of blob storage event type to process. | 'Microsoft.Storage.BlobCreated''Microsoft.Storage.BlobRenamed' |
| consumerGroup | The event hub consumer group. | string (required) |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE' |
| eventHubResourceId | The resource ID where the event grid is configured to send events. | string (required) |
| ignoreFirstRecord | A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file | bool |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| storageAccountResourceId | The resource ID of the storage account where the data resides. | string (required) |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |


### EventHubDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'EventHub' (required) |
| properties | The Event Hub data connection properties to validate. | EventHubConnectionProperties |


### EventHubConnectionProperties

| Name | Description | Value |
|-|-|-|
| compression | The event hub messages compression type | 'GZip''None' |
| consumerGroup | The event hub consumer group. | string (required) |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE' |
| eventHubResourceId | The resource ID of the event hub to be used to create a data connection. | string (required) |
| eventSystemProperties | System properties of the event hub | string[] |
| managedIdentityResourceId | The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub. | string |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |


### IotHubDataConnection

| Name | Description | Value |
|-|-|-|
| kind | Kind of the endpoint for the data connection | 'IotHub' (required) |
| properties | The Iot Hub data connection properties. | IotHubConnectionProperties |


### IotHubConnectionProperties

| Name | Description | Value |
|-|-|-|
| consumerGroup | The iot hub consumer group. | string (required) |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'APACHEAVRO''AVRO''CSV''JSON''MULTIJSON''ORC''PARQUET''PSV''RAW''SCSV''SINGLEJSON''SOHSV''TSV''TSVE''TXT''W3CLOGFILE' |
| eventSystemProperties | System properties of the iot hub | string[] |
| iotHubResourceId | The resource ID of the Iot hub to be used to create a data connection. | string (required) |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| sharedAccessPolicyName | The name of the share access policy | string (required) |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |
## Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments@2021-06-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

### workspaces/kustoPools/databases/principalAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | The database principal. | DatabasePrincipalProperties |


### DatabasePrincipalProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID assigned to the database principal. It can be a user email, application ID, or security group name. | string (required) |
| principalType | Principal type. | 'App''Group''User' (required) |
| role | Database principal role. | 'Admin''Ingestor''Monitor''UnrestrictedViewer''User''Viewer' (required) |
| tenantId | The tenant id of the principal | string |
## Microsoft.Synapse/workspaces/kustoPools/principalAssignments@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/principalAssignments@2021-06-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

### workspaces/kustoPools/principalAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:kustoPools |
| properties | The cluster principal. | ClusterPrincipalProperties |


### ClusterPrincipalProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name. | string (required) |
| principalType | Principal type. | 'App''Group''User' (required) |
| role | Cluster principal role. | 'AllDatabasesAdmin''AllDatabasesViewer' (required) |
| tenantId | The tenant id of the principal | string |
## Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      grantSqlControlToManagedIdentity = {
        desiredState = "string"
      }
    }
  })
}

```

### workspaces/managedIdentitySqlControlSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Sql Control Settings for workspace managed identity | ManagedIdentitySqlControlSettingsModelProperties |


### ManagedIdentitySqlControlSettingsModelProperties

| Name | Description | Value |
|-|-|-|
| grantSqlControlToManagedIdentity | Grant sql control to managed identity | ManagedIdentitySqlControlSettingsModelPropertiesGran... |


### ManagedIdentitySqlControlSettingsModelPropertiesGran...

| Name | Description | Value |
|-|-|-|
| desiredState | Desired state | 'Disabled''Enabled' |
## Microsoft.Synapse/workspaces/privateEndpointConnections@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/privateEndpointConnections@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### workspaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Private endpoint connection properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint which the connection belongs to. | PrivateEndpoint |
| privateLinkServiceConnectionState | Connection state of the private endpoint connection. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string |
| status | The private link service connection status. | string |
## Microsoft.Synapse/workspaces/securityAlertPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/securityAlertPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### workspaces/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | ServerSecurityAlertPolicyProperties |


### ServerSecurityAlertPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific server | 'Disabled''Enabled''New' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.Synapse/workspaces/sqlAdministrators@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlAdministrators@2021-06-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### workspaces/sqlAdministrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'activeDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Workspace active directory administrator properties | AadAdminProperties |


### AadAdminProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Workspace active directory administrator type | string |
| login | Login of the workspace active directory administrator | string |
| sid | Object ID of the workspace active directory administrator | string |
| tenantId | Tenant ID of the workspace active directory administrator | string |
## Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      collation = "string"
      dataRetention = {
        dropRetentionPeriod = "string"
        retentionPeriod = "string"
      }
      storageRedundancy = "string"
    }
  })
}

```

### workspaces/sqlDatabases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | SqlDatabaseProperties |


### SqlDatabaseProperties

| Name | Description | Value |
|-|-|-|
| collation | The collation of the database. | string |
| dataRetention | Sql database data retention. | SqlDatabaseDataRetention |
| storageRedundancy | The storage redundancy of the database. | 'Geo''GeoZone''Local''Zone' |


### SqlDatabaseDataRetention

| Name | Description | Value |
|-|-|-|
| dropRetentionPeriod | Specifies the dropped database retention period (ISO8601 format). | string |
| retentionPeriod | Specifies the data retention period (ISO8601 format). | string |
## Microsoft.Synapse/workspaces/sqlPools@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      collation = "string"
      createMode = "string"
      maxSizeBytes = int
      provisioningState = "string"
      recoverableDatabaseId = "string"
      restorePointInTime = "string"
      sourceDatabaseDeletionDate = "string"
      sourceDatabaseId = "string"
      storageAccountType = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### workspaces/sqlPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-60Valid characters:Can't contain<>*%&:\/?@-or control characters.Can't end with.or space.Can't containreserved word. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SQL pool SKU | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | SQL pool properties | SqlPoolResourceProperties |


### SqlPoolResourceProperties

| Name | Description | Value |
|-|-|-|
| collation | Collation mode | string |
| createMode | Specifies the mode of sql pool creation.Default: regular sql pool creation.PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified. | 'Default''PointInTimeRestore''Recovery''Restore' |
| maxSizeBytes | Maximum size in bytes | int |
| provisioningState | Resource state | string |
| recoverableDatabaseId | Backup database to restore from | string |
| restorePointInTime | Snapshot time to restore | string |
| sourceDatabaseDeletionDate | Specifies the time that the sql pool was deleted | string |
| sourceDatabaseId | Source database to create from | string |
| storageAccountType | The storage account type used to store backups for this sql pool. | 'GRS''LRS' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| name | The SKU name | string |
| tier | The service tier | string |
## Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isStorageSecondaryKeyInUse = bool
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### workspaces/sqlPools/auditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Resource properties. | SqlPoolBlobAuditingPolicyProperties |


### SqlPoolBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required. | string |
## Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataMaskingState = "string"
      exemptPrincipals = "string"
    }
  })
}

```

### workspaces/sqlPools/dataMaskingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | The properties of the data masking policy. | DataMaskingPolicyProperties |


### DataMaskingPolicyProperties

| Name | Description | Value |
|-|-|-|
| dataMaskingState | The state of the data masking policy. | 'Disabled''Enabled' (required) |
| exemptPrincipals | The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. | string |
## Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliasName = "string"
      columnName = "string"
      maskingFunction = "string"
      numberFrom = "string"
      numberTo = "string"
      prefixSize = "string"
      replacementString = "string"
      ruleState = "string"
      schemaName = "string"
      suffixSize = "string"
      tableName = "string"
    }
  })
}

```

### workspaces/sqlPools/dataMaskingPolicies/rules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataMaskingPolicies |
| properties | The properties of the resource. | DataMaskingRuleProperties |


### DataMaskingRuleProperties

| Name | Description | Value |
|-|-|-|
| aliasName | The alias name. This is a legacy parameter and is no longer used. | string |
| columnName | The column name on which the data masking rule is applied. | string (required) |
| maskingFunction | The masking function that is used for the data masking rule. | 'CCN''Default''Email''Number''SSN''Text' (required) |
| numberFrom | The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | string |
| numberTo | The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | string |
| prefixSize | If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. | string |
| replacementString | If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. | string |
| ruleState | The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. | 'Disabled''Enabled' |
| schemaName | The schema name on which the data masking rule is applied. | string (required) |
| suffixSize | If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. | string |
| tableName | The table name on which the data masking rule is applied. | string (required) |
## Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isStorageSecondaryKeyInUse = bool
      predicateExpression = "string"
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### workspaces/sqlPools/extendedAuditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Resource properties. | ExtendedSqlPoolBlobAuditingPolicyProperties |


### ExtendedSqlPoolBlobAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditActionsAndGroups | Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions | string[] |
| isAzureMonitorTargetEnabled | Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isStorageSecondaryKeyInUse | Specifies whether storageAccountAccessKey value is the storage's secondary key. | bool |
| predicateExpression | Specifies condition of where clause when creating an audit. | string |
| queueDelayMs | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | int |
| retentionDays | Specifies the number of days to keep in the audit logs in the storage account. | int |
| state | Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |
## Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### workspaces/sqlPools/geoBackupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | The properties of the geo backup policy. | GeoBackupPolicyProperties(required) |


### GeoBackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| state | The state of the geo backup policy. | 'Disabled''Enabled' (required) |
## Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-06-01"
  name = "config"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      syncIntervalInMinutes = int
    }
  })
}

```

### workspaces/sqlPools/metadataSync

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'config' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Metadata Sync Config properties | MetadataSyncConfigProperties |


### MetadataSyncConfigProperties

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether the metadata sync is enabled or disabled | bool |
| syncIntervalInMinutes | The Sync Interval in minutes. | int |
## Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationType = "string"
      informationTypeId = "string"
      labelId = "string"
      labelName = "string"
      rank = "string"
    }
  })
}

```

### workspaces/sqlPools/schemas/tables/columns/sensitivi...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: columns |
| properties | Resource properties. | SensitivityLabelProperties |


### SensitivityLabelProperties

| Name | Description | Value |
|-|-|-|
| informationType | The information type. | string |
| informationTypeId | The information type ID. | string |
| labelId | The label ID. | string |
| labelName | The label name. | string |
| rank |  | 'Critical''High''Low''Medium''None' |
## Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### workspaces/sqlPools/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Resource properties. | SecurityAlertPolicyProperties |


### SecurityAlertPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific Sql pool. | 'Disabled''Enabled''New' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-06-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      status = "string"
    }
  })
}

```

### workspaces/sqlPools/transparentDataEncryption

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Represents the properties of the resource. | TransparentDataEncryptionProperties |


### TransparentDataEncryptionProperties

| Name | Description | Value |
|-|-|-|
| status | The status of the database transparent data encryption. | 'Disabled''Enabled' |
## Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

### workspaces/sqlPools/vulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Resource properties. | SqlPoolVulnerabilityAssessmentProperties |


### SqlPoolVulnerabilityAssessmentProperties

| Name | Description | Value |
|-|-|-|
| recurringScans | The recurring scans settings | VulnerabilityAssessmentRecurringScansProperties |
| storageAccountAccessKey | Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. | string |
| storageContainerPath | A blob storage container path to hold the scan results (e.g.https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set | string |
| storageContainerSasKey | A shared access signature (SAS Key) that has write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. | string |


### VulnerabilityAssessmentRecurringScansProperties

| Name | Description | Value |
|-|-|-|
| emails | Specifies an array of e-mail addresses to which the scan notification is sent. | string[] |
| emailSubscriptionAdmins | Specifies that the schedule scan notification will be is sent to the subscription administrators. | bool |
| isEnabled | Recurring scans state. | bool |
## Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      baselineResults = [
        {
          result = [
            "string"
          ]
        }
      ]
    }
  })
}

```

### workspaces/sqlPools/vulnerabilityAssessments/rules/b...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: rules |
| properties | Resource properties. | SqlPoolVulnerabilityAssessmentRuleBaselineProperties |


### SqlPoolVulnerabilityAssessmentRuleBaselineProperties

| Name | Description | Value |
|-|-|-|
| baselineResults | The rule baseline result | SqlPoolVulnerabilityAssessmentRuleBaselineItem[] (required) |


### SqlPoolVulnerabilityAssessmentRuleBaselineItem

| Name | Description | Value |
|-|-|-|
| result | The rule baseline result | string[] (required) |
## Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      importance = "string"
      maxResourcePercent = int
      maxResourcePercentPerRequest = int
      minResourcePercent = int
      minResourcePercentPerRequest = int
      queryExecutionTimeout = int
    }
  })
}

```

### workspaces/sqlPools/workloadGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Resource properties. | WorkloadGroupProperties |


### WorkloadGroupProperties

| Name | Description | Value |
|-|-|-|
| importance | The workload group importance level. | string |
| maxResourcePercent | The workload group cap percentage resource. | int (required) |
| maxResourcePercentPerRequest | The workload group request maximum grant percentage. | int |
| minResourcePercent | The workload group minimum percentage resource. | int (required) |
| minResourcePercentPerRequest | The workload group request minimum grant percentage. | int (required) |
| queryExecutionTimeout | The workload group query execution timeout. | int |
## Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      context = "string"
      endTime = "string"
      importance = "string"
      label = "string"
      memberName = "string"
      startTime = "string"
    }
  })
}

```

### workspaces/sqlPools/workloadGroups/workloadClassifie...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workloadGroups |
| properties | Resource properties. | WorkloadClassifierProperties |


### WorkloadClassifierProperties

| Name | Description | Value |
|-|-|-|
| context | The workload classifier context. | string |
| endTime | The workload classifier end time for classification. | string |
| importance | The workload classifier importance. | string |
| label | The workload classifier label. | string |
| memberName | The workload classifier member name. | string (required) |
| startTime | The workload classifier start time for classification. | string |
## Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration@2021-06-01-preview"
  name = "default"
  parent_id = "string"
}

```

### workspaces/trustedServiceByPassConfiguration

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
## Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

### workspaces/vulnerabilityAssessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | ServerVulnerabilityAssessmentProperties |


### ServerVulnerabilityAssessmentProperties

| Name | Description | Value |
|-|-|-|
| recurringScans | The recurring scans settings | VulnerabilityAssessmentRecurringScansProperties |
| storageAccountAccessKey | Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. | string |
| storageContainerPath | A blob storage container path to hold the scan results (e.g.https://myStorage.blob.core.windows.net/VaScans/). | string (required) |
| storageContainerSasKey | A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. | string |


### VulnerabilityAssessmentRecurringScansProperties

| Name | Description | Value |
|-|-|-|
| emails | Specifies an array of e-mail addresses to which the scan notification is sent. | string[] |
| emailSubscriptionAdmins | Specifies that the schedule scan notification will be is sent to the subscription administrators. | bool |
| isEnabled | Recurring scans state. | bool |
