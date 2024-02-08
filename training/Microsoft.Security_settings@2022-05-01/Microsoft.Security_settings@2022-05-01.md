```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/settings@2022-05-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
  })
}

```

### settings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: see valuesValid characters:Use one of:MCASSentinelWDATPWDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW |
| kind | Set the object type | AlertSyncSettingsDataExportSettings(required) |


### AlertSyncSettings

| Name | Description | Value |
|-|-|-|
| kind | the kind of the settings string | 'AlertSyncSettings' (required) |
| properties | Alert sync setting data | AlertSyncSettingProperties |


### AlertSyncSettingProperties

| Name | Description | Value |
|-|-|-|
| enabled | Is the alert sync setting enabled | bool (required) |


### DataExportSettings

| Name | Description | Value |
|-|-|-|
| kind | the kind of the settings string | 'DataExportSettings' (required) |
| properties | Data export setting data | DataExportSettingProperties |


### DataExportSettingProperties

| Name | Description | Value |
|-|-|-|
| enabled | Is the data export setting enabled | bool (required) |


