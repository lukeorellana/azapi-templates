```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/registrations/customerSubscriptions@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      tenantId = "string"
    }
    etag = "string"
  })
}

```

### registrations/customerSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registrations |
| etag | The entity tag used for optimistic concurrency when modifying the resource. | string |
| properties | Customer subscription properties. | CustomerSubscriptionProperties |


### CustomerSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| tenantId | Tenant Id. | string |


