## Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
}

```

### userAssignedIdentities

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-128Valid characters:Alphanumerics, hyphens, and underscoresStart with letter or number. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
## Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-01-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      audiences = [
        "string"
      ]
      issuer = "string"
      subject = "string"
    }
  })
}

```

### userAssignedIdentities/federatedIdentityCredentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:userAssignedIdentities |
| properties | The properties associated with the federated identity credential. | FederatedIdentityCredentialProperties |


### FederatedIdentityCredentialProperties

| Name | Description | Value |
|-|-|-|
| audiences | The list of audiences that can appear in the issued token. | string[] (required) |
| issuer | The URL of the issuer to be trusted. | string (required) |
| subject | The identifier of the external identity. | string (required) |
