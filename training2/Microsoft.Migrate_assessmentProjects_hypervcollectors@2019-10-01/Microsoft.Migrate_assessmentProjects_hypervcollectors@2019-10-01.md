```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/hypervcollectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag |  | string |
| properties |  | CollectorProperties |


### CollectorProperties

| Name | Description | Value |
|-|-|-|
| agentProperties |  | CollectorAgentProperties |
| discoverySiteId | The ARM id of the discovery service site. | string |


### CollectorAgentProperties

| Name | Description | Value |
|-|-|-|
| spnDetails |  | CollectorBodyAgentSpnProperties |


### CollectorBodyAgentSpnProperties

| Name | Description | Value |
|-|-|-|
| applicationId | Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| audience | Intended audience for the service principal. | string |
| authority | AAD Authority URL which was used to request the token for the service principal. | string |
| objectId | Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| tenantId | Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |


