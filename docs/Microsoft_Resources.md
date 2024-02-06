## Microsoft.Resources/deployments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/deployments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      debugSetting = {
        detailLevel = "string"
      }
      expressionEvaluationOptions = {
        scope = "string"
      }
      mode = "string"
      onErrorDeployment = {
        deploymentName = "string"
        type = "string"
      }
      parametersLink = {
        contentVersion = "string"
        uri = "string"
      }
      templateLink = {
        contentVersion = "string"
        id = "string"
        queryString = "string"
        relativePath = "string"
        uri = "string"
      }
    }
    resourceGroup = "string"
    subscriptionId = "string"
    scope = "string"
  })
}

```

### deployments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, parentheses, hyphens, and periods. |
| location | The location to store the deployment data. | string |
| tags | Deployment tags | Dictionary of tag names and values. SeeTags in templates |
| scope | In tenant and management group deployments, provide the management group ID to target. Use the formatMicrosoft.Management/managementGroups/{managementGroupID}. | string |
| properties | The deployment properties. | DeploymentPropertiesOrDeploymentPropertiesExtended(required) |
| resourceGroup | The name of the resource group to deploy to. If not provided, uses the resource group of the deployment operation. | string |
| subscriptionId | The ID of the subscription to deploy to. If not provided, uses the subscription of the deployment operation. | string |


### DeploymentPropertiesOrDeploymentPropertiesExtended

| Name | Description | Value |
|-|-|-|
| debugSetting | The debug setting of the deployment. | DebugSetting |
| expressionEvaluationOptions | Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer. | ExpressionEvaluationOptions |
| mode | The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources. | 'Complete''Incremental' (required) |
| onErrorDeployment | The deployment on error behavior. | OnErrorDeploymentOrOnErrorDeploymentExtended |
| parameters | Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. | For Bicep, you can use theany()function. |
| parametersLink | The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both. | ParametersLink |
| template | The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. | For Bicep, you can use theany()function. |
| templateLink | The URI of the template. Use either the templateLink property or the template property, but not both. | TemplateLink |


### DebugSetting

| Name | Description | Value |
|-|-|-|
| detailLevel | Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations. | string |


### ExpressionEvaluationOptions

| Name | Description | Value |
|-|-|-|
| scope | The scope to be used for evaluation of parameters, variables and functions in a nested template. | 'Inner''NotSpecified''Outer' |


### OnErrorDeploymentOrOnErrorDeploymentExtended

| Name | Description | Value |
|-|-|-|
| deploymentName | The deployment to be used on error case. | string |
| type | The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. | 'LastSuccessful''SpecificDeployment' |


### ParametersLink

| Name | Description | Value |
|-|-|-|
| contentVersion | If included, must match the ContentVersion in the template. | string |
| uri | The URI of the parameters file. | string (required) |


### TemplateLink

| Name | Description | Value |
|-|-|-|
| contentVersion | If included, must match the ContentVersion in the template. | string |
| id | The resource id of a Template Spec. Use either the id or uri property, but not both. | string |
| queryString | The query string (for example, a SAS token) to be used with the templateLink URI. | string |
| relativePath | The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs | string |
| uri | The URI of the template to deploy. Use either the uri or id property, but not both. | string |
## Microsoft.Resources/deploymentScripts@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/deploymentScripts@2020-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "UserAssigned"
    identity_ids = []
  }
  // For remaining properties, see deploymentScripts objects
  body = jsonencode({
    kind = "string"
  })
}

```

### deploymentScripts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the ACI and the storage account for the deployment script. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Set the object type | AzureCLIAzurePowerShell(required) |
| identity | Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported. | ManagedServiceIdentity |


### AzureCliScript

| Name | Description | Value |
|-|-|-|
| kind | Type of the script. | 'AzureCLI' (required) |
| properties | Properties of the Azure CLI script object. | AzureCliScriptProperties(required) |


### AzureCliScriptProperties

| Name | Description | Value |
|-|-|-|
| arguments | Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' | string |
| azCliVersion | Azure CLI module version to be used. | string (required) |
| cleanupPreference | The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. | 'Always''OnExpiration''OnSuccess' |
| containerSettings | Container settings. | ContainerConfiguration |
| environmentVariables | The environment variables to pass over to the script. | EnvironmentVariable[] |
| forceUpdateTag | Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. | string |
| primaryScriptUri | Uri for the script. This is the entry point for the external script. | string |
| retentionInterval | Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). | string (required) |
| scriptContent | Script body. | string |
| storageAccountSettings | Storage Account settings. | StorageAccountConfiguration |
| supportingScriptUris | Supporting files for the external script. | string[] |
| timeout | Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D | string |


### ContainerConfiguration

| Name | Description | Value |
|-|-|-|
| containerGroupName | Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property. | string |


### EnvironmentVariable

| Name | Description | Value |
|-|-|-|
| name | The name of the environment variable. | string (required) |
| secureValue | The value of the secure environment variable. | string |
| value | The value of the environment variable. | string |


### StorageAccountConfiguration

| Name | Description | Value |
|-|-|-|
| storageAccountKey | The storage account access key. | string |
| storageAccountName | The storage account name. | string |


### AzurePowerShellScript

| Name | Description | Value |
|-|-|-|
| kind | Type of the script. | 'AzurePowerShell' (required) |
| properties | Properties of the Azure PowerShell script object. | AzurePowerShellScriptProperties(required) |


### AzurePowerShellScriptProperties

| Name | Description | Value |
|-|-|-|
| arguments | Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' | string |
| azPowerShellVersion | Azure PowerShell module version to be used. | string (required) |
| cleanupPreference | The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. | 'Always''OnExpiration''OnSuccess' |
| containerSettings | Container settings. | ContainerConfiguration |
| environmentVariables | The environment variables to pass over to the script. | EnvironmentVariable[] |
| forceUpdateTag | Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. | string |
| primaryScriptUri | Uri for the script. This is the entry point for the external script. | string |
| retentionInterval | Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day). | string (required) |
| scriptContent | Script body. | string |
| storageAccountSettings | Storage Account settings. | StorageAccountConfiguration |
| supportingScriptUris | Supporting files for the external script. | string[] |
| timeout | Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D | string |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of the managed identity. | 'UserAssigned' |
| userAssignedIdentities | The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. | object |
## Microsoft.Resources/resourceGroups@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/resourceGroups@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    managedBy = "string"
  })
}

```

### resourceGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Underscores, hyphens, periods, parentheses, and letters or digits as defined by theChar.IsLetterOrDigitfunction.Valid characters are members of the following categories inUnicodeCategory:UppercaseLetter,LowercaseLetter,TitlecaseLetter,ModifierLetter,OtherLetter,DecimalDigitNumber.Can't end with period. |
| location | The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations. | string (required) |
| tags | The tags attached to the resource group. | Dictionary of tag names and values. SeeTags in templates |
| managedBy | The ID of the resource that manages this resource group. | string |
| properties | The resource group properties. | ResourceGroupProperties |
## Microsoft.Resources/tags@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/tags@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      tags = {
        tagName1 = "tagValue1"
        tagName2 = "tagValue2"
      }
    }
  })
}

```

### tags

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The set of tags. | Tags(required) |


### Tags

| Name | Description | Value |
|-|-|-|
| tags | Dictionary of {string} | object |
## Microsoft.Resources/templateSpecs@2022-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/templateSpecs@2022-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
    }
  })
}

```

### templateSpecs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Alphanumerics, underscores, parentheses, hyphens, and periods. |
| location | The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Template Spec properties. | TemplateSpecProperties |


### TemplateSpecProperties

| Name | Description | Value |
|-|-|-|
| description | Template Spec description. | string |
| displayName | Template Spec display name. | string |
| metadata | The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs. | For Bicep, you can use theany()function. |
## Microsoft.Resources/templateSpecs/versions@2022-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/templateSpecs/versions@2022-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      linkedTemplates = [
        {
          path = "string"
        }
      ]
    }
  })
}

```

### templateSpecs/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the Template Spec Version. It must match the location of the parent Template Spec. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:templateSpecs |
| properties | Template Spec Version properties. | TemplateSpecVersionProperties(required) |


### TemplateSpecVersionProperties

| Name | Description | Value |
|-|-|-|
| description | Template Spec version description. | string |
| linkedTemplates | An array of linked template artifacts. | LinkedTemplateArtifact[] |
| mainTemplate | The main Azure Resource Manager template content. | For Bicep, you can use theany()function. |
| metadata | The version metadata. Metadata is an open-ended object and is typically a collection of key-value pairs. | For Bicep, you can use theany()function. |
| uiFormDefinition | The Azure Resource Manager template UI definition content. | For Bicep, you can use theany()function. |


### LinkedTemplateArtifact

| Name | Description | Value |
|-|-|-|
| path | A filesystem safe relative path of the artifact. | string (required) |
| template | The Azure Resource Manager template. | For Bicep, you can use theany()function.(required) |
