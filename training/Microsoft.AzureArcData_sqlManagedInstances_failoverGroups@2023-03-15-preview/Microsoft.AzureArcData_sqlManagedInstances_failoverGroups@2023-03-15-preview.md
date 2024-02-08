```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      partnerManagedInstanceId = "string"
      spec = {
        partnerMI = "string"
        partnerMirroringCert = "string"
        partnerMirroringURL = "string"
        partnerSyncMode = "string"
        role = "string"
        sharedName = "string"
        sourceMI = "string"
      }
    }
  })
}

```

### sqlManagedInstances/failoverGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlManagedInstances |
| properties | null | FailoverGroupProperties(required) |


### FailoverGroupProperties

| Name | Description | Value |
|-|-|-|
| partnerManagedInstanceId | The resource ID of the partner SQL managed instance. | string (required) |
| spec | The specifications of the failover group resource. | FailoverGroupSpec(required) |
| status | The status of the failover group custom resource. | For Bicep, you can use theany()function. |


### FailoverGroupSpec

| Name | Description | Value |
|-|-|-|
| partnerMI | The name of the partner SQL managed instance. | string |
| partnerMirroringCert | The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported. | string |
| partnerMirroringURL | The mirroring endpoint URL of the partner SQL managed instance. | string |
| partnerSyncMode | The partner sync mode of the SQL managed instance. | 'async''sync' |
| role | The role of the SQL managed instance in this failover group. | 'force-primary-allow-data-loss''force-secondary''primary''secondary' (required) |
| sharedName | The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name. | string |
| sourceMI | The name of the SQL managed instance with this failover group role. | string |


