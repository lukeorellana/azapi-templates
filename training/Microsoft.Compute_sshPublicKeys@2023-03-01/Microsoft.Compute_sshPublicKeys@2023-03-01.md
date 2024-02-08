```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/sshPublicKeys@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicKey = "string"
    }
  })
}

```

### sshPublicKeys

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the SSH public key. | SshPublicKeyResourceProperties |


### SshPublicKeyResourceProperties

| Name | Description | Value |
|-|-|-|
| publicKey | SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format. | string |


