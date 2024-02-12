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


