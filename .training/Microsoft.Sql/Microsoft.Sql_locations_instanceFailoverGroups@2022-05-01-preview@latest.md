```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managedInstancePairs = [
        {
          partnerManagedInstanceId = "string"
          primaryManagedInstanceId = "string"
        }
      ]
      partnerRegions = [
        {
          location = "string"
        }
      ]
      readWriteEndpoint = {
        failoverPolicy = "string"
        failoverWithDataLossGracePeriodMinutes = int
      }
      secondaryType = "string"
    }
  })
}

```

### locations/instanceFailoverGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Resource properties. | InstanceFailoverGroupProperties |


### InstanceFailoverGroupProperties

| Name | Description | Value |
|-|-|-|
| managedInstancePairs | List of managed instance pairs in the failover group. | ManagedInstancePairInfo[] (required) |
| partnerRegions | Partner region information for the failover group. | PartnerRegionInfo[] (required) |
| readWriteEndpoint | Read-write endpoint of the failover group instance. | InstanceFailoverGroupReadWriteEndpoint(required) |
| secondaryType | Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only. | 'Geo''Standby' |


### ManagedInstancePairInfo

| Name | Description | Value |
|-|-|-|
| partnerManagedInstanceId | Id of Partner Managed Instance in pair. | string |
| primaryManagedInstanceId | Id of Primary Managed Instance in pair. | string |


### PartnerRegionInfo

| Name | Description | Value |
|-|-|-|
| location | Geo location of the partner managed instances. | string |


### InstanceFailoverGroupReadWriteEndpoint

| Name | Description | Value |
|-|-|-|
| failoverPolicy | Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | 'Automatic''Manual' (required) |
| failoverWithDataLossGracePeriodMinutes | Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | int |


