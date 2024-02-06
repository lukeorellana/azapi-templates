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

