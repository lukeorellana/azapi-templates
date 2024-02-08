```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      quotaSizeInKiBs = int
      quotaTarget = "string"
      quotaType = "string"
    }
  })
}

```

### netAppAccounts/capacityPools/volumes/volumeQuotaRule...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Volume Quota Rule Properties | VolumeQuotaRulesProperties |


### VolumeQuotaRulesProperties

| Name | Description | Value |
|-|-|-|
| quotaSizeInKiBs | Size of quota | int |
| quotaTarget | UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running âidâ or âgetentâ command for the user or group and SID can be found by running {wmic useraccount where name='user-name' get sid} | string |
| quotaType | Type of quota | 'DefaultGroupQuota''DefaultUserQuota''IndividualGroupQuota''IndividualUserQuota' |


