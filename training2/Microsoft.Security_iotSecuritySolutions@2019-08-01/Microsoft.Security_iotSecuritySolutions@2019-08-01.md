```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/iotSecuritySolutions@2019-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalWorkspaces = [
        {
          dataTypes = [
            "string"
          ]
          type = "Sentinel"
          workspace = "string"
        }
      ]
      disabledDataSources = "TwinData"
      displayName = "string"
      export = "RawEvents"
      iotHubs = [
        "string"
      ]
      recommendationsConfiguration = [
        {
          recommendationType = "string"
          status = "string"
        }
      ]
      status = "string"
      unmaskedIpLoggingStatus = "string"
      userDefinedResources = {
        query = "string"
        querySubscriptions = [
          "string"
        ]
      }
      workspace = "string"
    }
  })
}

```

### iotSecuritySolutions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| location | The resource location. | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Security Solution data | IoTSecuritySolutionProperties |


### IoTSecuritySolutionProperties

| Name | Description | Value |
|-|-|-|
| additionalWorkspaces | List of additional workspaces | AdditionalWorkspacesProperties[] |
| disabledDataSources | Disabled data sources. Disabling these data sources compromises the system. | String array containing any of:'TwinData' |
| displayName | Resource display name. | string (required) |
| export | List of additional options for exporting to workspace data. | String array containing any of:'RawEvents' |
| iotHubs | IoT Hub resource IDs | string[] (required) |
| recommendationsConfiguration | List of the configuration status for each recommendation type. | RecommendationConfigurationProperties[] |
| status | Status of the IoT Security solution. | 'Disabled''Enabled' |
| unmaskedIpLoggingStatus | Unmasked IP address logging status | 'Disabled''Enabled' |
| userDefinedResources | Properties of the IoT Security solution's user defined resources. | UserDefinedResourcesProperties |
| workspace | Workspace resource ID | string |


### AdditionalWorkspacesProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | List of data types sent to workspace | String array containing any of:'Alerts''RawEvents' |
| type | Workspace type. | 'Sentinel' |
| workspace | Workspace resource id | string |


### RecommendationConfigurationProperties

| Name | Description | Value |
|-|-|-|
| recommendationType | The type of IoT Security recommendation. | 'IoT_ACRAuthentication''IoT_AgentSendsUnutilizedMessages''IoT_Baseline''IoT_EdgeHubMemOptimize''IoT_EdgeLoggingOptions''IoT_IPFilter_DenyAll''IoT_IPFilter_PermissiveRule''IoT_InconsistentModuleSettings''IoT_InstallAgent''IoT_OpenPorts''IoT_PermissiveFirewallPolicy''IoT_PermissiveInputFirewallRules''IoT_PermissiveOutputFirewallRules''IoT_PrivilegedDockerOptions''IoT_SharedCredentials''IoT_VulnerableTLSCipherSuite' (required) |
| status | Recommendation status. When the recommendation status is disabled recommendations are not generated. | 'Disabled''Enabled' (required) |


### UserDefinedResourcesProperties

| Name | Description | Value |
|-|-|-|
| query | Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs"" | string (required) |
| querySubscriptions | List of Azure subscription ids on which the user defined resources query should be executed. | string[] (required)Constraints:Pattern =^[0-9A-Fa-f]{8}-([0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$ |


