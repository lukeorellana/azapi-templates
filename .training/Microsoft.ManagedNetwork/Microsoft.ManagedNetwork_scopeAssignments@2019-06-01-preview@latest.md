```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignedManagedNetwork = "string"
    }
  })
}

```

### scopeAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| properties | The Scope Assignment properties | ScopeAssignmentProperties |


### ScopeAssignmentProperties

| Name | Description | Value |
|-|-|-|
| assignedManagedNetwork | The managed network ID with scope will be assigned to. | string |


