```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      error = {
        code = "string"
        message = "string"
      }
      scheduleInfo = {
        advancedSchedule = {
          monthDays = [
            int
          ]
          monthlyOccurrences = [
            {
              day = "string"
              occurrence = int
            }
          ]
          weekDays = [
            "string"
          ]
        }
        creationTime = "string"
        description = "string"
        expiryTime = "string"
        expiryTimeOffsetMinutes = int
        frequency = "string"
        interval = int
        isEnabled = bool
        lastModifiedTime = "string"
        nextRun = "string"
        nextRunOffsetMinutes = int
        startTime = "string"
        timeZone = "string"
      }
      tasks = {
        postTask = {
          parameters = {
            {customized property} = "string"
          }
          source = "string"
        }
        preTask = {
          parameters = {
            {customized property} = "string"
          }
          source = "string"
        }
      }
      updateConfiguration = {
        azureVirtualMachines = [
          "string"
        ]
        duration = "string"
        linux = {
          excludedPackageNameMasks = [
            "string"
          ]
          includedPackageClassifications = "string"
          includedPackageNameMasks = [
            "string"
          ]
          rebootSetting = "string"
        }
        nonAzureComputerNames = [
          "string"
        ]
        operatingSystem = "string"
        targets = {
          azureQueries = [
            {
              locations = [
                "string"
              ]
              scope = [
                "string"
              ]
              tagSettings = {
                filterOperator = "string"
                tags = {
                  {customized property} = [
                    "string"
                  ]
                }
              }
            }
          ]
          nonAzureQueries = [
            {
              functionAlias = "string"
              workspaceId = "string"
            }
          ]
        }
        windows = {
          excludedKbNumbers = [
            "string"
          ]
          includedKbNumbers = [
            "string"
          ]
          includedUpdateClassifications = "string"
          rebootSetting = "string"
        }
      }
    }
  })
}

```

### automationAccounts/softwareUpdateConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Software update configuration properties. | SoftwareUpdateConfigurationProperties(required) |


### SoftwareUpdateConfigurationProperties

| Name | Description | Value |
|-|-|-|
| error | Details of provisioning error | ErrorResponse |
| scheduleInfo | Schedule information for the Software update configuration | SUCScheduleProperties(required) |
| tasks | Tasks information for the Software update configuration. | SoftwareUpdateConfigurationTasks |
| updateConfiguration | update specific properties for the Software update configuration | UpdateConfiguration(required) |


### ErrorResponse

| Name | Description | Value |
|-|-|-|
| code | Error code | string |
| message | Error message indicating why the operation failed. | string |


### SUCScheduleProperties

| Name | Description | Value |
|-|-|-|
| advancedSchedule | Gets or sets the advanced schedule. | AdvancedSchedule |
| creationTime | Gets or sets the creation time. | string |
| description | Gets or sets the description. | string |
| expiryTime | Gets or sets the end time of the schedule. | string |
| expiryTimeOffsetMinutes | Gets or sets the expiry time's offset in minutes. | int |
| frequency | Gets or sets the frequency of the schedule. | 'Day''Hour''Minute''Month''OneTime''Week' |
| interval | Gets or sets the interval of the schedule. | int |
| isEnabled | Gets or sets a value indicating whether this schedule is enabled. | bool |
| lastModifiedTime | Gets or sets the last modified time. | string |
| nextRun | Gets or sets the next run time of the schedule. | string |
| nextRunOffsetMinutes | Gets or sets the next run time's offset in minutes. | int |
| startTime | Gets or sets the start time of the schedule. | string |
| timeZone | Gets or sets the time zone of the schedule. | string |


### AdvancedSchedule

| Name | Description | Value |
|-|-|-|
| monthDays | Days of the month that the job should execute on. Must be between 1 and 31. | int[] |
| monthlyOccurrences | Occurrences of days within a month. | AdvancedScheduleMonthlyOccurrence[] |
| weekDays | Days of the week that the job should execute on. | string[] |


### AdvancedScheduleMonthlyOccurrence

| Name | Description | Value |
|-|-|-|
| day | Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | Occurrence of the week within the month. Must be between 1 and 5 | int |


### SoftwareUpdateConfigurationTasks

| Name | Description | Value |
|-|-|-|
| postTask | Post task properties. | TaskProperties |
| preTask | Pre task properties. | TaskProperties |


### TaskProperties

| Name | Description | Value |
|-|-|-|
| parameters | Gets or sets the parameters of the task. | TaskPropertiesParameters |
| source | Gets or sets the name of the runbook. | string |


### TaskPropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### UpdateConfiguration

| Name | Description | Value |
|-|-|-|
| azureVirtualMachines | List of azure resource Ids for azure virtual machines targeted by the software update configuration. | string[] |
| duration | Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 | string |
| linux | Linux specific update configuration. | LinuxProperties |
| nonAzureComputerNames | List of names of non-azure machines targeted by the software update configuration. | string[] |
| operatingSystem | operating system of target machines | 'Linux''Windows' (required) |
| targets | Group targets for the software update configuration. | TargetProperties |
| windows | Windows specific update configuration. | WindowsProperties |


### LinuxProperties

| Name | Description | Value |
|-|-|-|
| excludedPackageNameMasks | packages excluded from the software update configuration. | string[] |
| includedPackageClassifications | Update classifications included in the software update configuration. | 'Critical''Other''Security''Unclassified' |
| includedPackageNameMasks | packages included from the software update configuration. | string[] |
| rebootSetting | Reboot setting for the software update configuration. | string |


### TargetProperties

| Name | Description | Value |
|-|-|-|
| azureQueries | List of Azure queries in the software update configuration. | AzureQueryProperties[] |
| nonAzureQueries | List of non Azure queries in the software update configuration. | NonAzureQueryProperties[] |


### AzureQueryProperties

| Name | Description | Value |
|-|-|-|
| locations | List of locations to scope the query to. | string[] |
| scope | List of Subscription or Resource Group ARM Ids. | string[] |
| tagSettings | Tag settings for the VM. | TagSettingsProperties |


### TagSettingsProperties

| Name | Description | Value |
|-|-|-|
| filterOperator | Filter VMs by Any or All specified tags. | 'All''Any' |
| tags | Dictionary of tags with its list of values. | object |


### NonAzureQueryProperties

| Name | Description | Value |
|-|-|-|
| functionAlias | Log Analytics Saved Search name. | string |
| workspaceId | Workspace Id for Log Analytics in which the saved Search is resided. | string |


### WindowsProperties

| Name | Description | Value |
|-|-|-|
| excludedKbNumbers | KB numbers excluded from the software update configuration. | string[] |
| includedKbNumbers | KB numbers included from the software update configuration. | string[] |
| includedUpdateClassifications | Update classification included in the software update configuration. A comma separated string with required values | 'Critical''Definition''FeaturePack''Security''ServicePack''Tools''Unclassified''UpdateRollup''Updates' |
| rebootSetting | Reboot setting for the software update configuration. | string |


