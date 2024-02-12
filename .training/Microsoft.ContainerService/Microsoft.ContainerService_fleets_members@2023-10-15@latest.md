```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/fleets/members@2023-10-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      group = "string"
    }
  })
}

```

### fleets/members

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:fleets |
| properties | The resource-specific properties for this resource. | FleetMemberProperties |


### FleetMemberProperties

| Name | Description | Value |
|-|-|-|
| clusterResourceId | The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'. | string (required) |
| group | The group this member belongs to for multi-cluster update management. | stringConstraints:Min length = 1Max length = 50Pattern =^[a-z0-9]([-a-z0-9]*[a-z0-9])?$ |


