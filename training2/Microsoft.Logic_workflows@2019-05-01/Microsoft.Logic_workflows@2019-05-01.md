```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/workflows@2019-05-01"
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
      accessControl = {
        actions = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
        contents = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
        triggers = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
        workflowManagement = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
      }
      endpointsConfiguration = {
        connector = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
        workflow = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
      }
      integrationAccount = {
        id = "string"
      }
      integrationServiceEnvironment = {
        id = "string"
      }
      parameters = {}
      state = "string"
    }
  })
}

```

### workflows

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-43Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity properties. | ManagedServiceIdentity |
| properties | The workflow properties. | WorkflowProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### WorkflowProperties

| Name | Description | Value |
|-|-|-|
| accessControl | The access control configuration. | FlowAccessControlConfiguration |
| definition | The definition. SeeSchema reference for Workflow Definition Language in Azure Logic Apps. | For Bicep, you can use theany()function. |
| endpointsConfiguration | The endpoints configuration. | FlowEndpointsConfiguration |
| integrationAccount | The integration account. | ResourceReference |
| integrationServiceEnvironment | The integration service environment. | ResourceReference |
| parameters | The parameters. | object |
| state | The state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |


### FlowAccessControlConfiguration

| Name | Description | Value |
|-|-|-|
| actions | The access control configuration for workflow actions. | FlowAccessControlConfigurationPolicy |
| contents | The access control configuration for accessing workflow run contents. | FlowAccessControlConfigurationPolicy |
| triggers | The access control configuration for invoking workflow triggers. | FlowAccessControlConfigurationPolicy |
| workflowManagement | The access control configuration for workflow management. | FlowAccessControlConfigurationPolicy |


### FlowAccessControlConfigurationPolicy

| Name | Description | Value |
|-|-|-|
| allowedCallerIpAddresses | The allowed caller IP address ranges. | IpAddressRange[] |
| openAuthenticationPolicies | The authentication policies for workflow. | OpenAuthenticationAccessPolicies |


### IpAddressRange

| Name | Description | Value |
|-|-|-|
| addressRange | The IP address range. | string |


### OpenAuthenticationAccessPolicies

| Name | Description | Value |
|-|-|-|
| policies | Open authentication policies. | OpenAuthenticationAccessPolicies |


### FlowEndpointsConfiguration

| Name | Description | Value |
|-|-|-|
| connector | The connector endpoints. | FlowEndpoints |
| workflow | The workflow endpoints. | FlowEndpoints |


### FlowEndpoints

| Name | Description | Value |
|-|-|-|
| accessEndpointIpAddresses | The access endpoint ip address. | IpAddress[] |
| outgoingIpAddresses | The outgoing ip address. | IpAddress[] |


### IpAddress

| Name | Description | Value |
|-|-|-|
| address | The address. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |


