```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      signedIdentifiers = [
        {
          accessPolicy = {
            expiryTime = "string"
            permission = "string"
            startTime = "string"
          }
          id = "string"
        }
      ]
    }
  })
}

```

### storageAccounts/tableServices/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tableServices |
| properties | Table resource properties. | TableProperties |


### TableProperties

| Name | Description | Value |
|-|-|-|
| signedIdentifiers | List of stored access policies specified on the table. | TableSignedIdentifier[] |


### TableSignedIdentifier

| Name | Description | Value |
|-|-|-|
| accessPolicy | Access policy | TableAccessPolicy |
| id | unique-64-character-value of the stored access policy. | string (required) |


### TableAccessPolicy

| Name | Description | Value |
|-|-|-|
| expiryTime | Expiry time of the access policy | string |
| permission | Required. List of abbreviated permissions. Supported permission values include 'r','a','u','d' | string (required) |
| startTime | Start time of the access policy | string |


