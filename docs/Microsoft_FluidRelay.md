## Microsoft.FluidRelay/fluidRelayServers@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.FluidRelay/fluidRelayServers@2022-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = {
        customerManagedKeyEncryption = {
          keyEncryptionKeyIdentity = {
            identityType = "string"
            userAssignedIdentityResourceId = "string"
          }
          keyEncryptionKeyUrl = "string"
        }
      }
      provisioningState = "string"
      storagesku = "string"
    }
  })
}

```

