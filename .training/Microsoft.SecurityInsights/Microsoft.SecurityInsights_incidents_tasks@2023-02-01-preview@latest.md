```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdBy = {
        email = "string"
        name = "string"
        objectId = "string"
        userPrincipalName = "string"
      }
      description = "string"
      lastModifiedBy = {
        email = "string"
        name = "string"
        objectId = "string"
        userPrincipalName = "string"
      }
      status = "string"
      title = "string"
    }
    etag = "string"
  })
}

```

### incidents/tasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:incidents |
| etag | Etag of the azure resource | string |
| properties |  | IncidentTaskProperties(required) |


### IncidentTaskProperties

| Name | Description | Value |
|-|-|-|
| createdBy | Information on the client (user or application) that made some action | ClientInfo |
| description | The description of the task | string |
| lastModifiedBy | Information on the client (user or application) that made some action | ClientInfo |
| status |  | 'Completed''New' (required) |
| title | The title of the task | string (required) |


### ClientInfo

| Name | Description | Value |
|-|-|-|
| email | The email of the client. | string |
| name | The name of the client. | string |
| objectId | The object id of the client. | string |
| userPrincipalName | The user principal name of the client. | string |


