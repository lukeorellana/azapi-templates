```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientTokenIds = [
        "string"
      ]
      logging = {
        auditLogStatus = "string"
        logLevel = "string"
      }
      loginServer = {}
      mode = "string"
      notificationsList = [
        "string"
      ]
      parent = {
        id = "string"
        syncProperties = {
          messageTtl = "string"
          schedule = "string"
          syncWindow = "string"
          tokenId = "string"
        }
      }
    }
  })
}

```

### registries/connectedRegistries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the connected registry. | ConnectedRegistryProperties |


### ConnectedRegistryProperties

| Name | Description | Value |
|-|-|-|
| clientTokenIds | The list of the ACR token resource IDs used to authenticate clients to the connected registry. | string[] |
| logging | The logging properties of the connected registry. | LoggingProperties |
| loginServer | The login server properties of the connected registry. | LoginServerProperties |
| mode | The mode of the connected registry resource that indicates the permissions of the registry. | 'Mirror''ReadOnly''ReadWrite''Registry' (required) |
| notificationsList | The list of notifications subscription information for the connected registry. | string[] |
| parent | The parent of the connected registry. | ParentProperties(required) |


### LoggingProperties

| Name | Description | Value |
|-|-|-|
| auditLogStatus | Indicates whether audit logs are enabled on the connected registry. | 'Disabled''Enabled' |
| logLevel | The verbosity of logs persisted on the connected registry. | 'Debug''Error''Information''None''Warning' |


### ParentProperties

| Name | Description | Value |
|-|-|-|
| id | The resource ID of the parent to which the connected registry will be associated. | string |
| syncProperties | The sync properties of the connected registry with its parent. | SyncProperties(required) |


### SyncProperties

| Name | Description | Value |
|-|-|-|
| messageTtl | The period of time for which a message is available to sync before it is expired. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601. | string (required) |
| schedule | The cron expression indicating the schedule that the connected registry will sync with its parent. | string |
| syncWindow | The time window during which sync is enabled for each schedule occurrence. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601. | string |
| tokenId | The resource ID of the ACR token used to authenticate the connected registry to its parent during sync. | string (required) |


