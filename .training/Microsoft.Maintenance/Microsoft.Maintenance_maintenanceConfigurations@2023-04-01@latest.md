```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maintenance/maintenanceConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      extensionProperties = {}
      installPatches = {
        linuxParameters = {
          classificationsToInclude = [
            "string"
          ]
          packageNameMasksToExclude = [
            "string"
          ]
          packageNameMasksToInclude = [
            "string"
          ]
        }
        rebootSetting = "string"
        windowsParameters = {
          classificationsToInclude = [
            "string"
          ]
          excludeKbsRequiringReboot = bool
          kbNumbersToExclude = [
            "string"
          ]
          kbNumbersToInclude = [
            "string"
          ]
        }
      }
      maintenanceScope = "string"
      maintenanceWindow = {
        duration = "string"
        expirationDateTime = "string"
        recurEvery = "string"
        startDateTime = "string"
        timeZone = "string"
      }
      namespace = "string"
      visibility = "string"
    }
  })
}

```

### maintenanceConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets location of the resource | string |
| tags | Gets or sets tags of the resource | Dictionary of tag names and values. SeeTags in templates |
| properties | Gets or sets properties of the resource | MaintenanceConfigurationProperties |


### MaintenanceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| extensionProperties | Gets or sets extensionProperties of the maintenanceConfiguration | object |
| installPatches | The input parameters to be passed to the patch run operation. | InputPatchConfiguration |
| maintenanceScope | Gets or sets maintenanceScope of the configuration | 'Extension''Host''InGuestPatch''OSImage''Resource''SQLDB''SQLManagedInstance' |
| maintenanceWindow | Definition of a MaintenanceWindow | MaintenanceWindow |
| namespace | Gets or sets namespace of the resource | string |
| visibility | Gets or sets the visibility of the configuration. The default value is 'Custom' | 'Custom''Public' |


### InputPatchConfiguration

| Name | Description | Value |
|-|-|-|
| linuxParameters | Input parameters specific to patching Linux machine. For Windows machines, do not pass this property. | InputLinuxParameters |
| rebootSetting | Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed. | 'Always''IfRequired''Never' |
| windowsParameters | Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property. | InputWindowsParameters |


### InputLinuxParameters

| Name | Description | Value |
|-|-|-|
| classificationsToInclude | Classification category of patches to be patched | string[] |
| packageNameMasksToExclude | Package names to be excluded for patching. | string[] |
| packageNameMasksToInclude | Package names to be included for patching. | string[] |


### InputWindowsParameters

| Name | Description | Value |
|-|-|-|
| classificationsToInclude | Classification category of patches to be patched | string[] |
| excludeKbsRequiringReboot | Exclude patches which need reboot | bool |
| kbNumbersToExclude | Windows KBID to be excluded for patching. | string[] |
| kbNumbersToInclude | Windows KBID to be included for patching. | string[] |


### MaintenanceWindow

| Name | Description | Value |
|-|-|-|
| duration | Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00. | string |
| expirationDateTime | Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59. | string |
| recurEvery | Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday] [Optional Offset(No. of days)]. Offset value must be between -6 to 6 inclusive. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday, recurEvery: Month Last Sunday Offset-3, recurEvery: Month Third Sunday Offset6. | string |
| startDateTime | Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. | string |
| timeZone | Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time. | string |


