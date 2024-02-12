```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/connections@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      target = "string"
      value = "string"
      valueFormat = "JSON"
      authType = "string"
      // For remaining properties, see WorkspaceConnectionPropertiesV2 objects
    }
  })
}

```

### workspaces/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties |  | WorkspaceConnectionPropertiesV2(required) |


### WorkspaceConnectionPropertiesV2

| Name | Description | Value |
|-|-|-|
| category | Category of the connection | 'ContainerRegistry''Git''PythonFeed' |
| target |  | string |
| value | Value details of the workspace connection. | string |
| valueFormat | format for the workspace connection value | 'JSON' |
| authType | Set the object type | ManagedIdentityNonePATSASUsernamePassword(required) |


### ManagedIdentityAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'ManagedIdentity' (required) |
| credentials |  | WorkspaceConnectionManagedIdentity |


### WorkspaceConnectionManagedIdentity

| Name | Description | Value |
|-|-|-|
| clientId |  | string |
| resourceId |  | string |


### NoneAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'None' (required) |


### PATAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'PAT' (required) |
| credentials |  | WorkspaceConnectionPersonalAccessToken |


### WorkspaceConnectionPersonalAccessToken

| Name | Description | Value |
|-|-|-|
| pat |  | string |


### SASAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'SAS' (required) |
| credentials |  | WorkspaceConnectionSharedAccessSignature |


### WorkspaceConnectionSharedAccessSignature

| Name | Description | Value |
|-|-|-|
| sas |  | string |


### UsernamePasswordAuthTypeWorkspaceConnectionPropertie...

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'UsernamePassword' (required) |
| credentials |  | WorkspaceConnectionUsernamePassword |


### WorkspaceConnectionUsernamePassword

| Name | Description | Value |
|-|-|-|
| password |  | string |
| username |  | string |


