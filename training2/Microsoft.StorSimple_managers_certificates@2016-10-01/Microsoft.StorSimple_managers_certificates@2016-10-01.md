```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/certificates@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authType = "string"
      certificate = "string"
    }
  })
}

```

### managers/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | Raw Certificate Data From IDM | RawCertificateData(required) |


### RawCertificateData

| Name | Description | Value |
|-|-|-|
| authType | Specify the Authentication type | 'AccessControlService''AzureActiveDirectory''Invalid' |
| certificate | Gets or sets the base64 encoded certificate raw data string | string (required) |


