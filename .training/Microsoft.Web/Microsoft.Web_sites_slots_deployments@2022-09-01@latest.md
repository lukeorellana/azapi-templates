```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/deployments@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      author = "string"
      author_email = "string"
      deployer = "string"
      details = "string"
      end_time = "string"
      message = "string"
      start_time = "string"
      status = int
    }
    kind = "string"
  })
}

```

### sites/slots/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Deployment resource specific properties | DeploymentProperties |


### DeploymentProperties

| Name | Description | Value |
|-|-|-|
| active | True if deployment is currently active, false if completed and null if not started. | bool |
| author | Who authored the deployment. | string |
| author_email | Author email. | string |
| deployer | Who performed the deployment. | string |
| details | Details on deployment. | string |
| end_time | End time. | string |
| message | Details about deployment status. | string |
| start_time | Start time. | string |
| status | Deployment status. | int |


