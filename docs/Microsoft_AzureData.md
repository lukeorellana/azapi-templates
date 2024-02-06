## Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      propertyBag = "string"
      resourceGroup = "string"
      subscriptionId = "string"
    }
  })
}

```

### sqlServerRegistrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Resource properties. | SqlServerRegistrationProperties |


### SqlServerRegistrationProperties

| Name | Description | Value |
|-|-|-|
| propertyBag | Optional Properties as JSON string | string |
| resourceGroup | Resource Group Name | string |
| subscriptionId | Subscription Id | string |
## Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview

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
