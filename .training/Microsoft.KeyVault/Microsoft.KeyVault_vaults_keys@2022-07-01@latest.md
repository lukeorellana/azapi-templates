```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/keys@2022-07-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      attributes = {
        enabled = bool
        exp = int
        exportable = bool
        nbf = int
      }
      curveName = "string"
      keyOps = [
        "string"
      ]
      keySize = int
      kty = "string"
      release_policy = {
        contentType = "string"
        data = "string"
      }
      rotationPolicy = {
        attributes = {
          expiryTime = "string"
        }
        lifetimeActions = [
          {
            action = {
              type = "string"
            }
            trigger = {
              timeAfterCreate = "string"
              timeBeforeExpiry = "string"
            }
          }
        ]
      }
    }
  })
}

```

### vaults/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | The tags that will be assigned to the key. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | The properties of the key to be created. | KeyProperties(required) |


### KeyProperties

| Name | Description | Value |
|-|-|-|
| attributes | The attributes of the key. | KeyAttributes |
| curveName | The elliptic curve name. For valid values, see JsonWebKeyCurveName. | 'P-256''P-256K''P-384''P-521' |
| keyOps |  | String array containing any of:'decrypt''encrypt''import''release''sign''unwrapKey''verify''wrapKey' |
| keySize | The key size in bits. For example: 2048, 3072, or 4096 for RSA. | int |
| kty | The type of the key. For valid values, see JsonWebKeyType. | 'EC''EC-HSM''RSA''RSA-HSM' |
| release_policy | Key release policy in response. It will be used for both output and input. Omitted if empty | KeyReleasePolicy |
| rotationPolicy | Key rotation policy in response. It will be used for both output and input. Omitted if empty | RotationPolicy |


### KeyAttributes

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether or not the object is enabled. | bool |
| exp | Expiry date in seconds since 1970-01-01T00:00:00Z. | int |
| exportable | Indicates if the private key can be exported. | bool |
| nbf | Not before date in seconds since 1970-01-01T00:00:00Z. | int |


### KeyReleasePolicy

| Name | Description | Value |
|-|-|-|
| contentType | Content type and version of key release policy | string |
| data | Blob encoding the policy rules under which the key can be released. | string |


### RotationPolicy

| Name | Description | Value |
|-|-|-|
| attributes | The attributes of key rotation policy. | KeyRotationPolicyAttributes |
| lifetimeActions | The lifetimeActions for key rotation action. | LifetimeAction[] |


### KeyRotationPolicyAttributes

| Name | Description | Value |
|-|-|-|
| expiryTime | The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'. | string |


### LifetimeAction

| Name | Description | Value |
|-|-|-|
| action | The action of key rotation policy lifetimeAction. | Action |
| trigger | The trigger of key rotation policy lifetimeAction. | Trigger |


### Action

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'notify''rotate' |


### Trigger

| Name | Description | Value |
|-|-|-|
| timeAfterCreate | The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'. | string |
| timeBeforeExpiry | The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'. | string |


