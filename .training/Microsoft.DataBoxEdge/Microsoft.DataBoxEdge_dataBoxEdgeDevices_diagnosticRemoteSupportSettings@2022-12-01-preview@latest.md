```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      remoteSupportSettingsList = [
        {
          accessLevel = "string"
          expirationTimeStampInUTC = "string"
          remoteApplicationType = "string"
        }
      ]
    }
  })
}

```

### dataBoxEdgeDevices/diagnosticRemoteSupportSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | Properties of the remote support  settings. | DiagnosticRemoteSupportSettingsProperties(required) |


### DiagnosticRemoteSupportSettingsProperties

| Name | Description | Value |
|-|-|-|
| remoteSupportSettingsList | Remote support settings list according to the RemoteApplicationType | RemoteSupportSettings[] |


### RemoteSupportSettings

| Name | Description | Value |
|-|-|-|
| accessLevel | Access level allowed for this remote application type | 'FullAccess''None''ReadOnly''ReadWrite' |
| expirationTimeStampInUTC | Expiration time stamp | string |
| remoteApplicationType | Remote application type | 'AllApplications''LocalUI''Powershell''WAC' |


