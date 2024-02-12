```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      primaryTimeServer = "string"
      secondaryTimeServer = [
        "string"
      ]
      timeZone = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/devices/timeSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties of the time settings of a device. | TimeSettingsProperties(required) |


### TimeSettingsProperties

| Name | Description | Value |
|-|-|-|
| primaryTimeServer | The primary Network Time Protocol (NTP) server name, like 'time.windows.com'. | string |
| secondaryTimeServer | The secondary Network Time Protocol (NTP) server name, like 'time.contoso.com'. It's optional. | string[] |
| timeZone | The timezone of device, like '(UTC -06:00) Central America' | string (required) |


