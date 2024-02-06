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

