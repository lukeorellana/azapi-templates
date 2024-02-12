```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/pools@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      devBoxDefinitionName = "string"
      licenseType = "Windows_Client"
      localAdministrator = "string"
      networkConnectionName = "string"
      stopOnDisconnect = {
        gracePeriodMinutes = int
        status = "string"
      }
    }
  })
}

```

### projects/pools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| properties | Pool properties | PoolProperties |


### PoolProperties

| Name | Description | Value |
|-|-|-|
| devBoxDefinitionName | Name of a Dev Box definition in parent Project of this Pool | string |
| licenseType | Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created. | 'Windows_Client' |
| localAdministrator | Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box. | 'Disabled''Enabled' |
| networkConnectionName | Name of a Network Connection in parent Project of this Pool | string |
| stopOnDisconnect | Stop on disconnect configuration settings for Dev Boxes created in this pool. | StopOnDisconnectConfiguration |


### StopOnDisconnectConfiguration

| Name | Description | Value |
|-|-|-|
| gracePeriodMinutes | The specified time in minutes to wait before stopping a Dev Box once disconnect is detected. | int |
| status | Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled. | 'Disabled''Enabled' |


