```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/accessPolicies@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authentication = {
        @type = "string"
        // For remaining properties, see AuthenticationBase objects
      }
      role = "Reader"
    }
  })
}

```

### videoAnalyzers/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | AccessPolicyProperties |


### AccessPolicyProperties

| Name | Description | Value |
|-|-|-|
| authentication | Authentication method to be used when validating client API access. | AuthenticationBase |
| role | Defines the access level granted by this policy. | 'Reader' |


### AuthenticationBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.JwtAuthentication(required) |


### JwtAuthentication

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.JwtAuthentication' (required) |
| audiences | List of expected token audiences. Token audience is valid if it matches at least one of the given values. | string[] |
| claims | List of additional token claims to be validated. Token must contains all claims and respective values for it to be valid. | TokenClaim[] |
| issuers | List of expected token issuers. Token issuer is valid if it matches at least one of the given values. | string[] |
| keys | List of keys which can be used to validate access tokens. Having multiple keys allow for seamless key rotation of the token signing key. Token signature must match exactly one key. | TokenKey[] |


### TokenClaim

| Name | Description | Value |
|-|-|-|
| name | Name of the claim which must be present on the token. | string (required) |
| value | Expected value of the claim to be present on the token. | string (required) |


### TokenKey

| Name | Description | Value |
|-|-|-|
| kid | JWT token key id. Validation keys are looked up based on the key id present on the JWT token header. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.EccTokenKey#Microsoft.VideoAnalyzer.RsaTokenKey(required) |


### EccTokenKey

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EccTokenKey' (required) |
| alg | Elliptical curve algorithm to be used: ES256, ES384 or ES512. | 'ES256''ES384''ES512' (required) |
| x | X coordinate. | string (required) |
| y | Y coordinate. | string (required) |


### RsaTokenKey

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.RsaTokenKey' (required) |
| alg | RSA algorithm to be used: RS256, RS384 or RS512. | 'RS256''RS384''RS512' (required) |
| e | RSA public key exponent. | string (required) |
| n | RSA public key modulus. | string (required) |


