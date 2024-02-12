```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      targetLocation = "string"
      targetSubscriptionId = "string"
    }
  })
}

```

### serviceTopologies/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serviceTopologies |
| properties | The properties that define a service in a service topology. | ServiceResourceProperties(required) |


### ServiceResourceProperties

| Name | Description | Value |
|-|-|-|
| targetLocation | The Azure location to which the resources in the service belong to or should be deployed to. | string (required) |
| targetSubscriptionId | The subscription to which the resources in the service belong to or should be deployed to. | string (required) |


