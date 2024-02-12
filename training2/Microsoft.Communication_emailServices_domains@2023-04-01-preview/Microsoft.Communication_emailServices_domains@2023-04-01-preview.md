```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices/domains@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainManagement = "string"
      userEngagementTracking = "string"
    }
  })
}

```

### emailServices/domains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:emailServices |
| properties | The properties of a Domains resource. | DomainProperties |


### DomainProperties

| Name | Description | Value |
|-|-|-|
| domainManagement | Describes how a Domains resource is being managed. | 'AzureManaged''CustomerManaged''CustomerManagedInExchangeOnline' (required) |
| userEngagementTracking | Describes whether user engagement tracking is enabled or disabled. | 'Disabled''Enabled' |


