## Microsoft.Automation/automationAccounts@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      disableLocalAuth = bool
      encryption = {
        identity = {}
        keySource = "string"
        keyVaultProperties = {
          keyName = "string"
          keyvaultUri = "string"
          keyVersion = "string"
        }
      }
      publicNetworkAccess = bool
      sku = {
        capacity = int
        family = "string"
        name = "string"
      }
    }
  })
}

```

### automationAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Sets the identity property for automation account | Identity |
| properties | Gets or sets account create or update properties. | AutomationAccountCreateOrUpdatePropertiesOrAutomatio... |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentitiesProperties |


### AutomationAccountCreateOrUpdatePropertiesOrAutomatio...

| Name | Description | Value |
|-|-|-|
| disableLocalAuth | Indicates whether requests using non-AAD authentication are blocked | bool |
| encryption | Set the encryption properties for the automation account | EncryptionProperties |
| publicNetworkAccess | Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet | bool |
| sku | Gets or sets account SKU. | Sku |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| identity | User identity used for CMK. | EncryptionPropertiesIdentity |
| keySource | Encryption Key Source | 'Microsoft.Automation''Microsoft.Keyvault' |
| keyVaultProperties | Key vault properties. | KeyVaultProperties |


### EncryptionPropertiesIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | For Bicep, you can use theany()function. |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of key used to encrypt data. | string |
| keyvaultUri | The URI of the key vault key used to encrypt data. | string |
| keyVersion | The key version of the key used to encrypt data. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Gets or sets the SKU capacity. | int |
| family | Gets or sets the SKU family. | string |
| name | Gets or sets the SKU name of the account. | 'Basic''Free' (required) |
## Microsoft.Automation/automationAccounts/certificates@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/certificates@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      base64Value = "string"
      description = "string"
      isExportable = bool
      thumbprint = "string"
    }
  })
}

```

### automationAccounts/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the certificate. | CertificateCreateOrUpdatePropertiesOrCertificateProp...(required) |


### CertificateCreateOrUpdatePropertiesOrCertificateProp...

| Name | Description | Value |
|-|-|-|
| base64Value | Gets or sets the base64 encoded value of the certificate. | string (required) |
| description | Gets or sets the description of the certificate. | string |
| isExportable | Gets or sets the is exportable flag of the certificate. | bool |
| thumbprint | Gets or sets the thumbprint of the certificate. | string |
## Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      configuration = {
        name = "string"
      }
      incrementNodeConfigurationBuild = bool
      parameters = {
        {customized property} = "string"
      }
    }
  })
}

```

### automationAccounts/compilationjobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of compilation job properties. | DscCompilationJobCreatePropertiesOrDscCompilationJob...(required) |


### DscCompilationJobCreatePropertiesOrDscCompilationJob...

| Name | Description | Value |
|-|-|-|
| configuration | Gets or sets the configuration. | DscConfigurationAssociationProperty(required) |
| incrementNodeConfigurationBuild | If a new build version of NodeConfiguration is required. | bool |
| parameters | Gets or sets the parameters of the job. | DscCompilationJobCreatePropertiesParameters |


### DscConfigurationAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the Dsc configuration. | string |


### DscCompilationJobCreatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.Automation/automationAccounts/configurations@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/configurations@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      description = "string"
      logProgress = bool
      logVerbose = bool
      parameters = {
        {customized property} = {
          defaultValue = "string"
          isMandatory = bool
          position = int
          type = "string"
        }
      }
      source = {
        hash = {
          algorithm = "string"
          value = "string"
        }
        type = "string"
        value = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets configuration create or update properties. | DscConfigurationCreateOrUpdatePropertiesOrDscConfigu...(required) |


### DscConfigurationCreateOrUpdatePropertiesOrDscConfigu...

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the configuration. | string |
| logProgress | Gets or sets progress log option. | bool |
| logVerbose | Gets or sets verbose log option. | bool |
| parameters | Gets or sets the configuration parameters. | DscConfigurationCreateOrUpdatePropertiesParameters |
| source | Gets or sets the source. | ContentSource(required) |


### DscConfigurationCreateOrUpdatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | DscConfigurationParameter |


### DscConfigurationParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | Gets or sets the default value of parameter. | string |
| isMandatory | Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. | bool |
| position | Get or sets the position of the parameter. | int |
| type | Gets or sets the type of the parameter. | string |


### ContentSource

| Name | Description | Value |
|-|-|-|
| hash | Gets or sets the hash. | ContentHash |
| type | Gets or sets the content source type. | 'embeddedContent''uri' |
| value | Gets or sets the value of the content. This is based on the content source type. | string |
| version | Gets or sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/connections@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/connections@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionType = {
        name = "string"
      }
      description = "string"
      fieldDefinitionValues = {
        {customized property} = "string"
      }
    }
  })
}

```

### automationAccounts/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the connection. | ConnectionCreateOrUpdatePropertiesOrConnectionProper...(required) |


### ConnectionCreateOrUpdatePropertiesOrConnectionProper...

| Name | Description | Value |
|-|-|-|
| connectionType | Gets or sets the connectionType of the connection. | ConnectionTypeAssociationProperty(required) |
| description | Gets or sets the description of the connection. | string |
| fieldDefinitionValues | Gets or sets the field definition properties of the connection. | ConnectionCreateOrUpdatePropertiesFieldDefinitionVal... |


### ConnectionTypeAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the connection type. | string |


### ConnectionCreateOrUpdatePropertiesFieldDefinitionVal...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.Automation/automationAccounts/connectionTypes@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/connectionTypes@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      fieldDefinitions = {
        {customized property} = {
          isEncrypted = bool
          isOptional = bool
          type = "string"
        }
      }
      isGlobal = bool
    }
  })
}

```

### automationAccounts/connectionTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the value of the connection type. | ConnectionTypeCreateOrUpdatePropertiesOrConnectionTy...(required) |


### ConnectionTypeCreateOrUpdatePropertiesOrConnectionTy...

| Name | Description | Value |
|-|-|-|
| fieldDefinitions | Gets or sets the field definitions of the connection type. | ConnectionTypeCreateOrUpdatePropertiesFieldDefinitio...(required) |
| isGlobal | Gets or sets a Boolean value to indicate if the connection type is global. | bool |


### ConnectionTypeCreateOrUpdatePropertiesFieldDefinitio...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | FieldDefinition |


### FieldDefinition

| Name | Description | Value |
|-|-|-|
| isEncrypted | Gets or sets the isEncrypted flag of the connection field definition. | bool |
| isOptional | Gets or sets the isOptional flag of the connection field definition. | bool |
| type | Gets or sets the type of the connection field definition. | string (required) |
## Microsoft.Automation/automationAccounts/credentials@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/credentials@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      password = "string"
      userName = "string"
    }
  })
}

```

### automationAccounts/credentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the credential. | CredentialCreateOrUpdatePropertiesOrCredentialProper...(required) |


### CredentialCreateOrUpdatePropertiesOrCredentialProper...

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the credential. | string |
| password | Gets or sets the password of the credential. | string (required) |
| userName | Gets or sets the user name of the credential. | string (required) |
## Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credential = {
        name = "string"
      }
    }
  })
}

```

### automationAccounts/hybridRunbookWorkerGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets hybrid runbook worker group create or update properties. | HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHy... |


### HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHy...

| Name | Description | Value |
|-|-|-|
| credential | Sets the credential of a worker group. | RunAsCredentialAssociationProperty |


### RunAsCredentialAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the credential. | string |
## Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vmResourceId = "string"
    }
  })
}

```

### automationAccounts/hybridRunbookWorkerGroups/hybridR...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hybridRunbookWorkerGroups |
| properties | Gets or sets hybrid runbook worker group create or update properties. | HybridRunbookWorkerCreateOrUpdateParametersOrHybridR...(required) |


### HybridRunbookWorkerCreateOrUpdateParametersOrHybridR...

| Name | Description | Value |
|-|-|-|
| vmResourceId | Azure Resource Manager Id for a virtual machine. | string |
## Microsoft.Automation/automationAccounts/jobs@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/jobs@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
    }
  })
}

```

### automationAccounts/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of job properties. | JobCreatePropertiesOrJobProperties(required) |


### JobCreatePropertiesOrJobProperties

| Name | Description | Value |
|-|-|-|
| parameters | Gets or sets the parameters of the job. | JobCreatePropertiesParameters |
| runbook | Gets or sets the runbook. | RunbookAssociationProperty |
| runOn | Gets or sets the runOn which specifies the group name where the job is to be executed. | string |


### JobCreatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RunbookAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the runbook. | string |
## Microsoft.Automation/automationAccounts/jobSchedules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/jobSchedules@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
      schedule = {
        name = "string"
      }
    }
  })
}

```

### automationAccounts/jobSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of job schedule properties. | JobScheduleCreatePropertiesOrJobScheduleProperties(required) |


### JobScheduleCreatePropertiesOrJobScheduleProperties

| Name | Description | Value |
|-|-|-|
| parameters | Gets or sets a list of job properties. | JobScheduleCreatePropertiesParameters |
| runbook | Gets or sets the runbook. | RunbookAssociationProperty(required) |
| runOn | Gets or sets the hybrid worker group that the scheduled job should run on. | string |
| schedule | Gets or sets the schedule. | ScheduleAssociationProperty(required) |


### JobScheduleCreatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RunbookAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the runbook. | string |


### ScheduleAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the Schedule. | string |
## Microsoft.Automation/automationAccounts/modules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/modules@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/modules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Sets the location of the resource. | string |
| tags | Sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Sets the module create properties. | ModuleCreateOrUpdatePropertiesOrModuleProperties(required) |


### ModuleCreateOrUpdatePropertiesOrModuleProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Sets the hash. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Sets the hash. | ContentHash |
| uri | Sets the uri of the content. | string |
| version | Sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/nodeConfigurations@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/nodeConfigurations@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      configuration = {
        name = "string"
      }
      incrementNodeConfigurationBuild = bool
      source = {
        hash = {
          algorithm = "string"
          value = "string"
        }
        type = "string"
        value = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/nodeConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Node configuration properties | DscNodeConfigurationCreateOrUpdateParametersProperti... |


### DscNodeConfigurationCreateOrUpdateParametersProperti...

| Name | Description | Value |
|-|-|-|
| configuration | Gets or sets the configuration of the node. | DscConfigurationAssociationProperty(required) |
| incrementNodeConfigurationBuild | If a new build version of NodeConfiguration is required. | bool |
| source | Gets or sets the source. | ContentSourceOrDscNodeConfigurationPropertiesSource(required) |


### DscConfigurationAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the Dsc configuration. | string |


### ContentSourceOrDscNodeConfigurationPropertiesSource

| Name | Description | Value |
|-|-|-|
| hash | Gets or sets the hash. | ContentHash |
| type | Gets or sets the content source type. | 'embeddedContent''uri' |
| value | Gets or sets the value of the content. This is based on the content source type. | string |
| version | Gets or sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/powerShell72Modules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/powerShell72Modules@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/powerShell72Modules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Sets the location of the resource. | string |
| tags | Sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Sets the module create properties. | ModuleCreateOrUpdatePropertiesOrModuleProperties(required) |


### ModuleCreateOrUpdatePropertiesOrModuleProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Sets the hash. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Sets the hash. | ContentHash |
| uri | Sets the uri of the content. | string |
| version | Sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### automationAccounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | Gets the groupIds. | string[] |
| privateEndpoint | Private endpoint which the connection belongs to. | PrivateEndpointProperty |
| privateLinkServiceConnectionState | Connection State of the Private Endpoint Connection. | PrivateLinkServiceConnectionStateProperty |


### PrivateEndpointProperty

| Name | Description | Value |
|-|-|-|
| id | Resource id of the private endpoint. | string |


### PrivateLinkServiceConnectionStateProperty

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string |
| status | The private link service connection status. | string |
## Microsoft.Automation/automationAccounts/python2Packages@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/python2Packages@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/python2Packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the module create properties. | PythonPackageCreatePropertiesOrModuleProperties(required) |


### PythonPackageCreatePropertiesOrModuleProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Gets or sets the module content link. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Sets the hash. | ContentHash |
| uri | Sets the uri of the content. | string |
| version | Sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/python3Packages@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/python3Packages@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/python3Packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the module create properties. | PythonPackageCreatePropertiesOrModuleProperties(required) |


### PythonPackageCreatePropertiesOrModuleProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Gets or sets the module content link. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Sets the hash. | ContentHash |
| uri | Sets the uri of the content. | string |
| version | Sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/runbooks@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      description = "string"
      draft = {
        creationTime = "string"
        draftContentLink = {
          contentHash = {
            algorithm = "string"
            value = "string"
          }
          uri = "string"
          version = "string"
        }
        inEdit = bool
        lastModifiedTime = "string"
        outputTypes = [
          "string"
        ]
        parameters = {
          {customized property} = {
            defaultValue = "string"
            isMandatory = bool
            position = int
            type = "string"
          }
        }
      }
      logActivityTrace = int
      logProgress = bool
      logVerbose = bool
      publishContentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
      runbookType = "string"
    }
  })
}

```

### automationAccounts/runbooks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Alphanumerics, underscores, and hyphens.Start with letter. |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets runbook create or update properties. | RunbookCreateOrUpdatePropertiesOrRunbookProperties(required) |


### RunbookCreateOrUpdatePropertiesOrRunbookProperties

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the runbook. | string |
| draft | Gets or sets the draft runbook properties. | RunbookDraft |
| logActivityTrace | Gets or sets the activity-level tracing options of the runbook. | int |
| logProgress | Gets or sets progress log option. | bool |
| logVerbose | Gets or sets verbose log option. | bool |
| publishContentLink | Gets or sets the published runbook content link. | ContentLink |
| runbookType | Gets or sets the type of the runbook. | 'Graph''GraphPowerShell''GraphPowerShellWorkflow''PowerShell''PowerShell72''PowerShellWorkflow''Python2''Python3''Script' (required) |


### RunbookDraft

| Name | Description | Value |
|-|-|-|
| creationTime | Gets or sets the creation time of the runbook draft. | string |
| draftContentLink | Gets or sets the draft runbook content link. | ContentLink |
| inEdit | Gets or sets whether runbook is in edit mode. | bool |
| lastModifiedTime | Gets or sets the last modified time of the runbook draft. | string |
| outputTypes | Gets or sets the runbook output types. | string[] |
| parameters | Gets or sets the runbook draft parameters. | RunbookDraftParameters |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Sets the hash. | ContentHash |
| uri | Sets the uri of the content. | string |
| version | Sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |


### RunbookDraftParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | RunbookParameter |


### RunbookParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | Gets or sets the default value of parameter. | string |
| isMandatory | Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. | bool |
| position | Get or sets the position of the parameter. | int |
| type | Gets or sets the type of the parameter. | string |
## Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01"
  name = "content"
  parent_id = "string"
}

```

### automationAccounts/runbooks/draft-content

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'content' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:runbooks |
## Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01"
  name = "testJob"
  parent_id = "string"
  body = jsonencode({
    parameters = {
      {customized property} = "string"
    }
    runOn = "string"
  })
}

```

### automationAccounts/runbooks/draft-testJob

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'testJob' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:runbooks |
| parameters | Gets or sets the parameters of the test job. | TestJobCreateParameters |
| runOn | Gets or sets the runOn which specifies the group name where the job is to be executed. | string |


### TestJobCreateParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      defaultPackages = {
        {customized property} = "string"
      }
      description = "string"
      runtime = {
        language = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/runtimeEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the Runtime Environment properties. | RuntimeEnvironmentProperties |


### RuntimeEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| defaultPackages | List of Default packages for Environment | DefaultPackages |
| description | Gets or sets the description. | string |
| runtime | Runtime properties. | RuntimeProperties |


### DefaultPackages

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RuntimeProperties

| Name | Description | Value |
|-|-|-|
| language | Language of Runtime Environment | string |
| version | Version of Language | string |
## Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
    allOf = {
      location = "string"
      tags = {}
    }
  })
}

```

### automationAccounts/runtimeEnvironments/packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:runtimeEnvironments |
| allOf | The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' | TrackedResource |
| properties | Gets or sets the package create properties. | PackageCreateOrUpdatePropertiesOrPackageProperties(required) |


### TrackedResource

| Name | Description | Value |
|-|-|-|
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | object |


### PackageCreateOrUpdatePropertiesOrPackageProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Gets or sets the package content link. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Gets or sets the hash. | ContentHash |
| uri | Gets or sets the uri of content. | string |
| version | Gets or sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |
## Microsoft.Automation/automationAccounts/schedules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/schedules@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      advancedSchedule = {
        monthDays = [
          int
        ]
        monthlyOccurrences = [
          {
            day = "string"
            occurrence = int
          }
        ]
        weekDays = [
          "string"
        ]
      }
      description = "string"
      expiryTime = "string"
      frequency = "string"
      startTime = "string"
      timeZone = "string"
    }
  })
}

```

### automationAccounts/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of schedule properties. | ScheduleCreateOrUpdatePropertiesOrScheduleProperties(required) |


### ScheduleCreateOrUpdatePropertiesOrScheduleProperties

| Name | Description | Value |
|-|-|-|
| advancedSchedule | Gets or sets the AdvancedSchedule. | AdvancedSchedule |
| description | Gets or sets the description of the schedule. | string |
| expiryTime | Gets or sets the end time of the schedule. | string |
| frequency | Gets or sets the frequency of the schedule. | 'Day''Hour''Minute''Month''OneTime''Week' (required) |
| interval | Gets or sets the interval of the schedule. | For Bicep, you can use theany()function. |
| startTime | Gets or sets the start time of the schedule. | string (required) |
| timeZone | Gets or sets the time zone of the schedule. | string |


### AdvancedSchedule

| Name | Description | Value |
|-|-|-|
| monthDays | Days of the month that the job should execute on. Must be between 1 and 31. | int[] |
| monthlyOccurrences | Occurrences of days within a month. | AdvancedScheduleMonthlyOccurrence[] |
| weekDays | Days of the week that the job should execute on. | string[] |


### AdvancedScheduleMonthlyOccurrence

| Name | Description | Value |
|-|-|-|
| day | Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | Occurrence of the week within the month. Must be between 1 and 5 | int |
## Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      error = {
        code = "string"
        message = "string"
      }
      scheduleInfo = {
        advancedSchedule = {
          monthDays = [
            int
          ]
          monthlyOccurrences = [
            {
              day = "string"
              occurrence = int
            }
          ]
          weekDays = [
            "string"
          ]
        }
        creationTime = "string"
        description = "string"
        expiryTime = "string"
        expiryTimeOffsetMinutes = int
        frequency = "string"
        interval = int
        isEnabled = bool
        lastModifiedTime = "string"
        nextRun = "string"
        nextRunOffsetMinutes = int
        startTime = "string"
        timeZone = "string"
      }
      tasks = {
        postTask = {
          parameters = {
            {customized property} = "string"
          }
          source = "string"
        }
        preTask = {
          parameters = {
            {customized property} = "string"
          }
          source = "string"
        }
      }
      updateConfiguration = {
        azureVirtualMachines = [
          "string"
        ]
        duration = "string"
        linux = {
          excludedPackageNameMasks = [
            "string"
          ]
          includedPackageClassifications = "string"
          includedPackageNameMasks = [
            "string"
          ]
          rebootSetting = "string"
        }
        nonAzureComputerNames = [
          "string"
        ]
        operatingSystem = "string"
        targets = {
          azureQueries = [
            {
              locations = [
                "string"
              ]
              scope = [
                "string"
              ]
              tagSettings = {
                filterOperator = "string"
                tags = {
                  {customized property} = [
                    "string"
                  ]
                }
              }
            }
          ]
          nonAzureQueries = [
            {
              functionAlias = "string"
              workspaceId = "string"
            }
          ]
        }
        windows = {
          excludedKbNumbers = [
            "string"
          ]
          includedKbNumbers = [
            "string"
          ]
          includedUpdateClassifications = "string"
          rebootSetting = "string"
        }
      }
    }
  })
}

```

### automationAccounts/softwareUpdateConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Software update configuration properties. | SoftwareUpdateConfigurationProperties(required) |


### SoftwareUpdateConfigurationProperties

| Name | Description | Value |
|-|-|-|
| error | Details of provisioning error | ErrorResponse |
| scheduleInfo | Schedule information for the Software update configuration | SUCScheduleProperties(required) |
| tasks | Tasks information for the Software update configuration. | SoftwareUpdateConfigurationTasks |
| updateConfiguration | update specific properties for the Software update configuration | UpdateConfiguration(required) |


### ErrorResponse

| Name | Description | Value |
|-|-|-|
| code | Error code | string |
| message | Error message indicating why the operation failed. | string |


### SUCScheduleProperties

| Name | Description | Value |
|-|-|-|
| advancedSchedule | Gets or sets the advanced schedule. | AdvancedSchedule |
| creationTime | Gets or sets the creation time. | string |
| description | Gets or sets the description. | string |
| expiryTime | Gets or sets the end time of the schedule. | string |
| expiryTimeOffsetMinutes | Gets or sets the expiry time's offset in minutes. | int |
| frequency | Gets or sets the frequency of the schedule. | 'Day''Hour''Minute''Month''OneTime''Week' |
| interval | Gets or sets the interval of the schedule. | int |
| isEnabled | Gets or sets a value indicating whether this schedule is enabled. | bool |
| lastModifiedTime | Gets or sets the last modified time. | string |
| nextRun | Gets or sets the next run time of the schedule. | string |
| nextRunOffsetMinutes | Gets or sets the next run time's offset in minutes. | int |
| startTime | Gets or sets the start time of the schedule. | string |
| timeZone | Gets or sets the time zone of the schedule. | string |


### AdvancedSchedule

| Name | Description | Value |
|-|-|-|
| monthDays | Days of the month that the job should execute on. Must be between 1 and 31. | int[] |
| monthlyOccurrences | Occurrences of days within a month. | AdvancedScheduleMonthlyOccurrence[] |
| weekDays | Days of the week that the job should execute on. | string[] |


### AdvancedScheduleMonthlyOccurrence

| Name | Description | Value |
|-|-|-|
| day | Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | Occurrence of the week within the month. Must be between 1 and 5 | int |


### SoftwareUpdateConfigurationTasks

| Name | Description | Value |
|-|-|-|
| postTask | Post task properties. | TaskProperties |
| preTask | Pre task properties. | TaskProperties |


### TaskProperties

| Name | Description | Value |
|-|-|-|
| parameters | Gets or sets the parameters of the task. | TaskPropertiesParameters |
| source | Gets or sets the name of the runbook. | string |


### TaskPropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### UpdateConfiguration

| Name | Description | Value |
|-|-|-|
| azureVirtualMachines | List of azure resource Ids for azure virtual machines targeted by the software update configuration. | string[] |
| duration | Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 | string |
| linux | Linux specific update configuration. | LinuxProperties |
| nonAzureComputerNames | List of names of non-azure machines targeted by the software update configuration. | string[] |
| operatingSystem | operating system of target machines | 'Linux''Windows' (required) |
| targets | Group targets for the software update configuration. | TargetProperties |
| windows | Windows specific update configuration. | WindowsProperties |


### LinuxProperties

| Name | Description | Value |
|-|-|-|
| excludedPackageNameMasks | packages excluded from the software update configuration. | string[] |
| includedPackageClassifications | Update classifications included in the software update configuration. | 'Critical''Other''Security''Unclassified' |
| includedPackageNameMasks | packages included from the software update configuration. | string[] |
| rebootSetting | Reboot setting for the software update configuration. | string |


### TargetProperties

| Name | Description | Value |
|-|-|-|
| azureQueries | List of Azure queries in the software update configuration. | AzureQueryProperties[] |
| nonAzureQueries | List of non Azure queries in the software update configuration. | NonAzureQueryProperties[] |


### AzureQueryProperties

| Name | Description | Value |
|-|-|-|
| locations | List of locations to scope the query to. | string[] |
| scope | List of Subscription or Resource Group ARM Ids. | string[] |
| tagSettings | Tag settings for the VM. | TagSettingsProperties |


### TagSettingsProperties

| Name | Description | Value |
|-|-|-|
| filterOperator | Filter VMs by Any or All specified tags. | 'All''Any' |
| tags | Dictionary of tags with its list of values. | object |


### NonAzureQueryProperties

| Name | Description | Value |
|-|-|-|
| functionAlias | Log Analytics Saved Search name. | string |
| workspaceId | Workspace Id for Log Analytics in which the saved Search is resided. | string |


### WindowsProperties

| Name | Description | Value |
|-|-|-|
| excludedKbNumbers | KB numbers excluded from the software update configuration. | string[] |
| includedKbNumbers | KB numbers included from the software update configuration. | string[] |
| includedUpdateClassifications | Update classification included in the software update configuration. A comma separated string with required values | 'Critical''Definition''FeaturePack''Security''ServicePack''Tools''Unclassified''UpdateRollup''Updates' |
| rebootSetting | Reboot setting for the software update configuration. | string |
## Microsoft.Automation/automationAccounts/sourceControls@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/sourceControls@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoSync = bool
      branch = "string"
      description = "string"
      folderPath = "string"
      publishRunbook = bool
      repoUrl = "string"
      securityToken = {
        accessToken = "string"
        refreshToken = "string"
        tokenType = "string"
      }
      sourceType = "string"
    }
  })
}

```

### automationAccounts/sourceControls

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | The properties of the source control. | SourceControlCreateOrUpdatePropertiesOrSourceControl...(required) |


### SourceControlCreateOrUpdatePropertiesOrSourceControl...

| Name | Description | Value |
|-|-|-|
| autoSync | The auto async of the source control. Default is false. | bool |
| branch | The repo branch of the source control. Include branch as empty string for VsoTfvc. | stringConstraints:Max length = 255 |
| description | The user description of the source control. | stringConstraints:Max length = 512 |
| folderPath | The folder path of the source control. Path must be relative. | stringConstraints:Max length = 255 |
| publishRunbook | The auto publish of the source control. Default is true. | bool |
| repoUrl | The repo url of the source control. | stringConstraints:Max length = 2000 |
| securityToken | The authorization token for the repo of the source control. | SourceControlSecurityTokenProperties |
| sourceType | The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive. | 'GitHub''VsoGit''VsoTfvc' |


### SourceControlSecurityTokenProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The access token. | stringConstraints:Max length = 1024 |
| refreshToken | The refresh token. | stringConstraints:Max length = 1024 |
| tokenType | The token type. Must be either PersonalAccessToken or Oauth. | 'Oauth''PersonalAccessToken' |
## Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      commitId = "string"
    }
  })
}

```

### automationAccounts/sourceControls/sourceControlSyncJ...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sourceControls |
| properties | The properties of the source control sync job. | SourceControlSyncJobCreatePropertiesOrSourceControlS...(required) |


### SourceControlSyncJobCreatePropertiesOrSourceControlS...

| Name | Description | Value |
|-|-|-|
| commitId | The commit id of the source control sync job. If not syncing to a commitId, enter an empty string. | string (required) |
## Microsoft.Automation/automationAccounts/variables@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/variables@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isEncrypted = bool
      value = "string"
    }
  })
}

```

### automationAccounts/variables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the variable. | VariableCreateOrUpdatePropertiesOrVariableProperties(required) |


### VariableCreateOrUpdatePropertiesOrVariableProperties

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the variable. | string |
| isEncrypted | Gets or sets the encrypted flag of the variable. | bool |
| value | Gets or sets the value of the variable. | string |
## Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      description = "string"
      executionFrequencyInSeconds = int
      scriptName = "string"
      scriptParameters = {
        {customized property} = "string"
      }
      scriptRunOn = "string"
    }
    etag = "string"
  })
}

```

### automationAccounts/watchers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Alphanumerics, underscores, and hyphens.Start with letter. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| etag | Gets or sets the etag of the resource. | string |
| properties | Gets or sets the watcher properties. | WatcherProperties |


### WatcherProperties

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description. | string |
| executionFrequencyInSeconds | Gets or sets the frequency at which the watcher is invoked. | int |
| scriptName | Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook. | string |
| scriptParameters | Gets or sets the parameters of the script. | WatcherPropertiesScriptParameters |
| scriptRunOn | Gets or sets the name of the hybrid worker group the watcher will run on. | string |


### WatcherPropertiesScriptParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expiryTime = "string"
      isEnabled = bool
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
      uri = "string"
    }
  })
}

```

### automationAccounts/webhooks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the webhook. | WebhookCreateOrUpdatePropertiesOrWebhookProperties(required) |


### WebhookCreateOrUpdatePropertiesOrWebhookProperties

| Name | Description | Value |
|-|-|-|
| expiryTime | Gets or sets the expiry time. | string |
| isEnabled | Gets or sets the value of the enabled flag of webhook. | bool |
| parameters | Gets or sets the parameters of the job. | WebhookCreateOrUpdatePropertiesParameters |
| runbook | Gets or sets the runbook. | RunbookAssociationProperty |
| runOn | Gets or sets the name of the hybrid worker group the webhook job will run on. | string |
| uri | Gets or sets the uri. | string |


### WebhookCreateOrUpdatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RunbookAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the runbook. | string |
