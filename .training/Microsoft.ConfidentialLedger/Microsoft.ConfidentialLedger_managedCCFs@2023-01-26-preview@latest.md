```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConfidentialLedger/managedCCFs@2023-01-26-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deploymentType = {
        appSourceUri = "string"
        languageRuntime = "string"
      }
      memberIdentityCertificates = [
        {
          certificate = "string"
          encryptionkey = "string"
        }
      ]
      nodeCount = int
    }
  })
}

```

### managedCCFs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of Managed CCF Resource. | ManagedCCFProperties |


### ManagedCCFProperties

| Name | Description | Value |
|-|-|-|
| deploymentType | Deployment Type of Managed CCF | DeploymentType |
| memberIdentityCertificates | List of member identity certificates for  Managed CCF | MemberIdentityCertificate[] |
| nodeCount | Number of CCF nodes in the Managed CCF. | int |


### DeploymentType

| Name | Description | Value |
|-|-|-|
| appSourceUri | Source Uri containing ManagedCCF code | string |
| languageRuntime | Unique name for the Managed CCF. | 'CPP''JS' |


### MemberIdentityCertificate

| Name | Description | Value |
|-|-|-|
| certificate | Member Identity Certificate | string |
| encryptionkey | Member Identity Certificate Encryption Key | string |
| tags | Anything | For Bicep, you can use theany()function. |


