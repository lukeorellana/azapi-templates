```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts/packages@2022-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationName = "string"
      blobPath = "string"
      flightingRing = "string"
      targetOSList = [
        {
          baselineOSs = [
            "string"
          ]
          osUpdateType = "string"
          targetOSs = [
            "string"
          ]
        }
      ]
      tests = [
        {
          commands = [
            {
              action = "string"
              alwaysRun = bool
              applyUpdateBefore = bool
              content = "string"
              contentType = "string"
              maxRunTime = int
              name = "string"
              restartAfter = bool
              runAsInteractive = bool
              runElevated = bool
            }
          ]
          isActive = bool
          testType = "string"
        }
      ]
      version = "string"
    }
  })
}

```

### testBaseAccounts/packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:testBaseAccounts |
| properties | Test Base Package properties. | PackageProperties |


### PackageProperties

| Name | Description | Value |
|-|-|-|
| applicationName | Application name | string (required) |
| blobPath | The file path of the package. | string (required) |
| flightingRing | The flighting ring for feature update. | string (required) |
| targetOSList | Specifies the target OSs of specific OS Update types. | TargetOSInfo[] (required) |
| tests | The detailed test information. | Test[] (required) |
| version | Application version | string (required) |


### TargetOSInfo

| Name | Description | Value |
|-|-|-|
| baselineOSs | Specifies the baseline OSs to be tested. | string[] |
| osUpdateType | Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'. | string (required) |
| targetOSs | Specifies the target OSs to be tested. | string[] (required) |


### Test

| Name | Description | Value |
|-|-|-|
| commands | The commands used in the test. | Command[] (required) |
| isActive | Indicates if this test is active.It doesn't schedule test for not active Test. | bool |
| testType | The type of the test. | 'FunctionalTest''OutOfBoxTest' (required) |


### Command

| Name | Description | Value |
|-|-|-|
| action | The action of the command. | 'Close''Custom''Install''Launch''Uninstall' (required) |
| alwaysRun | Specifies whether to run the command even if a previous command is failed. | bool |
| applyUpdateBefore | Specifies whether to apply update before the command. | bool |
| content | The content of the command. The content depends on source type. | string (required) |
| contentType | The type of command content. | 'File''Inline''Path' (required) |
| maxRunTime | Specifies the max run time of the command. | int |
| name | The name of the command. | string (required) |
| restartAfter | Specifies whether to restart the VM after the command executed. | bool |
| runAsInteractive | Specifies whether to run the command in interactive mode. | bool |
| runElevated | Specifies whether to run the command as administrator. | bool |


