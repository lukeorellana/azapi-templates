```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/certificates@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authType = "string"
    }
  })
}

```

### vaults/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Raw certificate data. | RawCertificateData |


### RawCertificateData

| Name | Description | Value |
|-|-|-|
| authType | Specifies the authentication type. | 'AAD''ACS''AccessControlService''AzureActiveDirectory''Invalid' |
| certificate | The base64 encoded certificate raw data string | For Bicep, you can use theany()function. |


