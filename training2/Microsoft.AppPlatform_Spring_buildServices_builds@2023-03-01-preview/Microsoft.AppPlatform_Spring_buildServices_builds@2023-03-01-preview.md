```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentPool = "string"
      builder = "string"
      env = {}
      relativePath = "string"
      resourceRequests = {
        cpu = "string"
        memory = "string"
      }
    }
  })
}

```

### Spring/buildServices/builds

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: buildServices |
| properties | Properties of the build resource | BuildProperties |


### BuildProperties

| Name | Description | Value |
|-|-|-|
| agentPool | The resource id of agent pool | string |
| builder | The resource id of builder to build the source code | string |
| env | The environment variables for this build | object |
| relativePath | The relative path of source code | string |
| resourceRequests | The customized build resource for this build | BuildResourceRequests |


### BuildResourceRequests

| Name | Description | Value |
|-|-|-|
| cpu | Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m.The default value is 1, this should not exceed build service agent pool cpu size. | string |
| memory | Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi.The default value is 2Gi, this should not exceed build service agent pool memory size. | string |


