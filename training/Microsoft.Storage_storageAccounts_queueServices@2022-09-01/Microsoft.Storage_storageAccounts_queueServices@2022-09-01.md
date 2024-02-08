```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/queueServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
    }
  })
}

```

### storageAccounts/queueServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The properties of a storage accountâs Queue service. | QueueServicePropertiesProperties |


### QueueServicePropertiesProperties

| Name | Description | Value |
|-|-|-|
| cors | Specifies CORS rules for the Queue service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Queue service. | CorsRules |


### CorsRules

| Name | Description | Value |
|-|-|-|
| corsRules | The List of CORS rules. You can include up to five CorsRule elements in the request. | CorsRule[] |


### CorsRule

| Name | Description | Value |
|-|-|-|
| allowedHeaders | Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request. | string[] (required) |
| allowedMethods | Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin. | String array containing any of:'DELETE''GET''HEAD''MERGE''OPTIONS''PATCH''POST''PUT' (required) |
| allowedOrigins | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains | string[] (required) |
| exposedHeaders | Required if CorsRule element is present. A list of response headers to expose to CORS clients. | string[] (required) |
| maxAgeInSeconds | Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response. | int (required) |


