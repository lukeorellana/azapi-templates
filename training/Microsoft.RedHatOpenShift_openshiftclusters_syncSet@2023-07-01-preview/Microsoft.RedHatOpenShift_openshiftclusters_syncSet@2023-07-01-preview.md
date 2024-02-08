```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RedHatOpenShift/openshiftclusters/syncSet@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resources = "string"
    }
  })
}

```

### openshiftclusters/syncSet

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:openshiftclusters |
| properties | The Syncsets properties | SyncSetProperties |


### SyncSetProperties

| Name | Description | Value |
|-|-|-|
| resources | Resources represents the SyncSets configuration. | string |


