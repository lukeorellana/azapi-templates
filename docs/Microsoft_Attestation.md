## Microsoft.Attestation/attestationProviders@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Attestation/attestationProviders@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      policySigningCertificates = {
        keys = [
          {
            alg = "string"
            crv = "string"
            d = "string"
            dp = "string"
            dq = "string"
            e = "string"
            k = "string"
            kid = "string"
            kty = "string"
            n = "string"
            p = "string"
            q = "string"
            qi = "string"
            use = "string"
            x = "string"
            x5c = [
              "string"
            ]
            y = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
    }
  })
}

```

### attestationProviders

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The supported Azure location where the attestation provider should be created. | string (required) |
| tags | The tags that will be assigned to the attestation provider. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the attestation provider | AttestationServiceCreationSpecificParamsOrStatusResu...(required) |


### AttestationServiceCreationSpecificParamsOrStatusResu...

| Name | Description | Value |
|-|-|-|
| policySigningCertificates | JSON Web Key Set defining a set of X.509 Certificates that will represent the parent certificate for the signing certificate used for policy operations | JsonWebKeySet |
| publicNetworkAccess | Controls whether traffic from the public network is allowed to access the Attestation Provider APIs. | 'Disabled''Enabled' |


### JsonWebKeySet

| Name | Description | Value |
|-|-|-|
| keys | The value of the "keys" parameter is an array of JWK values.  Bydefault, the order of the JWK values within the array does not implyan order of preference among them, although applications of JWK Setscan choose to assign a meaning to the order for their purposes, ifdesired. | JsonWebKey[] |


### JsonWebKey

| Name | Description | Value |
|-|-|-|
| alg | The "alg" (algorithm) parameter identifies the algorithm intended foruse with the key.  The values used should either be registered in theIANA "JSON Web Signature and Encryption Algorithms" registryestablished by [JWA] or be a value that contains a Collision-Resistant Name. | string |
| crv | The "crv" (curve) parameter identifies the curve type | string |
| d | RSA private exponent or ECC private key | string |
| dp | RSA Private Key Parameter | string |
| dq | RSA Private Key Parameter | string |
| e | RSA public exponent, in Base64 | string |
| k | Symmetric key | string |
| kid | The "kid" (key ID) parameter is used to match a specific key.  Thisis used, for instance, to choose among a set of keys within a JWK Setduring key rollover.  The structure of the "kid" value isunspecified.  When "kid" values are used within a JWK Set, differentkeys within the JWK Set SHOULD use distinct "kid" values.  (Oneexample in which different keys might use the same "kid" value is ifthey have different "kty" (key type) values but are considered to beequivalent alternatives by the application using them.)  The "kid"value is a case-sensitive string. | string |
| kty | The "kty" (key type) parameter identifies the cryptographic algorithmfamily used with the key, such as "RSA" or "EC". "kty" values shouldeither be registered in the IANA "JSON Web Key Types" registryestablished by [JWA] or be a value that contains a Collision-Resistant Name.  The "kty" value is a case-sensitive string. | string (required) |
| n | RSA modulus, in Base64 | string |
| p | RSA secret prime | string |
| q | RSA secret prime, with p { q | string |
| qi | RSA Private Key Parameter | string |
| use | Use ("public key use") identifies the intended use ofthe public key. The "use" parameter is employed to indicate whethera public key is used for encrypting data or verifying the signatureon data. Values are commonly "sig" (signature) or "enc" (encryption). | string |
| x | X coordinate for the Elliptic Curve point | string |
| x5c | The "x5c" (X.509 certificate chain) parameter contains a chain of oneor more PKIX certificates [RFC5280].  The certificate chain isrepresented as a JSON array of certificate value strings.  Eachstring in the array is a base64-encoded (Section 4 of [RFC4648] --not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.The PKIX certificate containing the key value MUST be the firstcertificate. | string[] |
| y | Y coordinate for the Elliptic Curve point | string |
## Microsoft.Attestation/attestationProviders/privateEndpointConnections@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Attestation/attestationProviders/privateEndpointConnections@2021-06-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### attestationProviders/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:attestationProviders |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
