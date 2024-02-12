```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cores = int
      edition = "string"
      propertyBag = "string"
      registrationID = "string"
      version = "string"
    }
  })
}

```

### sqlServerRegistrations/sqlServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlServerRegistrations |
| properties | Resource properties. | SqlServerProperties |


### SqlServerProperties

| Name | Description | Value |
|-|-|-|
| cores | Cores of the Sql Server. | int |
| edition | Sql Server Edition. | string |
| propertyBag | Sql Server Json Property Bag. | string |
| registrationID | ID for Parent Sql Server Registration. | string |
| version | Version of the Sql Server. | string |


