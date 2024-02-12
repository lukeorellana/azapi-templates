```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      principalObjectId = "string"
      roles = [
        "string"
      ]
    }
  })
}

```

### environments/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-90Valid characters:Can't use:'<>%&:\?/#or control characters |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties |  | AccessPolicyResourceProperties(required) |


### AccessPolicyResourceProperties

| Name | Description | Value |
|-|-|-|
| description | An description of the access policy. | string |
| principalObjectId | The objectId of the principal in Azure Active Directory. | string |
| roles | The list of roles the principal is assigned on the environment. | String array containing any of:'Contributor''Reader' |


