```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2023-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scheduledDateTimeZone = "string"
      update = {
        deleteOriginalVm = bool
        logOffDelayMinutes = int
        logOffMessage = "string"
        maxVmsRemoved = int
      }
    }
  })
}

```

### hostPools/sessionHostManagements

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostPools |
| properties | Detailed properties for SessionHostManagement | SessionHostManagementProperties(required) |


### SessionHostManagementProperties

| Name | Description | Value |
|-|-|-|
| scheduledDateTimeZone | Time zone for sessionHostManagement operations as defined inhttps://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyid. Must be set if useLocalTime is true. | string (required) |
| update | Parameters for a hostpool update. | HostPoolUpdateConfigurationProperties(required) |


### HostPoolUpdateConfigurationProperties

| Name | Description | Value |
|-|-|-|
| deleteOriginalVm | Whether not to save original disk. False by default. | bool |
| logOffDelayMinutes | Grace period before logging off users in minutes. | int (required) |
| logOffMessage | Log off message sent to user for logoff. Default value is an empty string. | stringConstraints:Max length = 260 |
| maxVmsRemoved | The maximum number of virtual machines to be removed during hostpool update. | int (required)Constraints:Min value = 1 |


