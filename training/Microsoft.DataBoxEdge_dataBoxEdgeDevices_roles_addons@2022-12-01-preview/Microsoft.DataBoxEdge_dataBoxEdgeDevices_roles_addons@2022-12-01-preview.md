```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/roles/addons objects
  body = jsonencode({
    kind = "string"
  })
}

```

### dataBoxEdgeDevices/roles/addons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | ArcForKubernetes(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:roles |


### ArcAddon

| Name | Description | Value |
|-|-|-|
| kind | Addon type. | 'ArcForKubernetes' (required) |
| properties | Properties specific to Arc addon. | ArcAddonProperties(required) |


### ArcAddonProperties

| Name | Description | Value |
|-|-|-|
| resourceGroupName | Arc resource group name | string (required) |
| resourceLocation | Arc resource location | string (required) |
| resourceName | Arc resource Name | string (required) |
| subscriptionId | Arc resource subscription Id | string (required) |


