```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/contentKeyPolicies@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      options = [
        {
          configuration = {
            @odata.type = "string"
            // For remaining properties, see ContentKeyPolicyConfiguration objects
          }
          name = "string"
          restriction = {
            @odata.type = "string"
            // For remaining properties, see ContentKeyPolicyRestriction objects
          }
        }
      ]
    }
  })
}

```

### mediaServices/contentKeyPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | The properties of the Content Key Policy. | ContentKeyPolicyProperties |


### ContentKeyPolicyProperties

| Name | Description | Value |
|-|-|-|
| description | A description for the Policy. | string |
| options | The Key Policy options. | ContentKeyPolicyOption[] (required) |


### ContentKeyPolicyOption

| Name | Description | Value |
|-|-|-|
| configuration | The key delivery configuration. | ContentKeyPolicyConfiguration(required) |
| name | The Policy Option description. | string |
| restriction | The requirements that must be met to deliver keys with this configuration | ContentKeyPolicyRestriction(required) |


### ContentKeyPolicyConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.ContentKeyPolicyClearKeyConfiguration#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration#Microsoft.Media.ContentKeyPolicyUnknownConfiguration#Microsoft.Media.ContentKeyPolicyWidevineConfiguration(required) |


### ContentKeyPolicyClearKeyConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration' (required) |


### ContentKeyPolicyFairPlayConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration' (required) |
| ask | The key that must be used as FairPlay Application Secret key. This needs to be base64 encoded. | For Bicep, you can use theany()function.(required) |
| fairPlayPfx | The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key). | string (required) |
| fairPlayPfxPassword | The password encrypting FairPlay certificate in PKCS 12 (pfx) format. | string (required) |
| offlineRentalConfiguration | Offline rental policy | ContentKeyPolicyFairPlayOfflineRentalConfiguration |
| rentalAndLeaseKeyType | The rental and lease key type. | 'DualExpiry''PersistentLimited''PersistentUnlimited''Undefined''Unknown' (required) |
| rentalDuration | The rental duration. Must be greater than or equal to 0. | int (required) |


### ContentKeyPolicyFairPlayOfflineRentalConfiguration

| Name | Description | Value |
|-|-|-|
| playbackDurationSeconds | Playback duration | int (required) |
| storageDurationSeconds | Storage duration | int (required) |


### ContentKeyPolicyPlayReadyConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration' (required) |
| licenses | The PlayReady licenses. | ContentKeyPolicyPlayReadyLicense[] (required) |
| responseCustomData | The custom response data. | string |


### ContentKeyPolicyPlayReadyLicense

| Name | Description | Value |
|-|-|-|
| allowTestDevices | A flag indicating whether test devices can use the license. | bool (required) |
| beginDate | The begin date of license | string |
| contentKeyLocation | The content key location. | ContentKeyPolicyPlayReadyContentKeyLocation(required) |
| contentType | The PlayReady content type. | 'UltraVioletDownload''UltraVioletStreaming''Unknown''Unspecified' (required) |
| expirationDate | The expiration date of license. | string |
| gracePeriod | The grace period of license. | string |
| licenseType | The license type. | 'NonPersistent''Persistent''Unknown' (required) |
| playRight | The license PlayRight | ContentKeyPolicyPlayReadyPlayRight |
| relativeBeginDate | The relative begin date of license. | string |
| relativeExpirationDate | The relative expiration date of license. | string |
| securityLevel | The security level. | 'SL150''SL2000''SL3000''Unknown' |


### ContentKeyPolicyPlayReadyContentKeyLocation

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier(required) |


### ContentKeyPolicyPlayReadyContentEncryptionKeyFromHea...

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader' (required) |


### ContentKeyPolicyPlayReadyContentEncryptionKeyFromKey...

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier' (required) |
| keyId | The content key ID. | string (required) |


### ContentKeyPolicyPlayReadyPlayRight

| Name | Description | Value |
|-|-|-|
| agcAndColorStripeRestriction | Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive. | int |
| allowPassingVideoContentToUnknownOutput | Configures Unknown output handling settings of the license. | 'Allowed''AllowedWithVideoConstriction''NotAllowed''Unknown' (required) |
| analogVideoOpl | Specifies the output protection level for compressed digital audio. | int |
| compressedDigitalAudioOpl | Specifies the output protection level for compressed digital audio. | int |
| compressedDigitalVideoOpl | Specifies the output protection level for compressed digital video. | int |
| digitalVideoOnlyContentRestriction | Enables the Image Constraint For Analog Component Video Restriction in the license. | bool (required) |
| explicitAnalogTelevisionOutputRestriction | Configures the Explicit Analog Television Output Restriction in the license. Configuration data must be between 0 and 3 inclusive. | ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRes... |
| firstPlayExpiration | The amount of time that the license is valid after the license is first used to play content. | string |
| imageConstraintForAnalogComponentVideoRestriction | Enables the Image Constraint For Analog Component Video Restriction in the license. | bool (required) |
| imageConstraintForAnalogComputerMonitorRestriction | Enables the Image Constraint For Analog Component Video Restriction in the license. | bool (required) |
| scmsRestriction | Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive. | int |
| uncompressedDigitalAudioOpl | Specifies the output protection level for uncompressed digital audio. | int |
| uncompressedDigitalVideoOpl | Specifies the output protection level for uncompressed digital video. | int |


### ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRes...

| Name | Description | Value |
|-|-|-|
| bestEffort | Indicates whether this restriction is enforced on a Best Effort basis. | bool (required) |
| configurationData | Configures the restriction control bits. Must be between 0 and 3 inclusive. | int (required) |


### ContentKeyPolicyUnknownConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyUnknownConfiguration' (required) |


### ContentKeyPolicyWidevineConfiguration

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyWidevineConfiguration' (required) |
| widevineTemplate | The Widevine template. | string (required) |


### ContentKeyPolicyRestriction

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.ContentKeyPolicyOpenRestriction#Microsoft.Media.ContentKeyPolicyTokenRestriction#Microsoft.Media.ContentKeyPolicyUnknownRestriction(required) |


### ContentKeyPolicyOpenRestriction

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyOpenRestriction' (required) |


### ContentKeyPolicyTokenRestriction

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyTokenRestriction' (required) |
| alternateVerificationKeys | A list of alternative verification keys. | ContentKeyPolicyRestrictionTokenKey[] |
| audience | The audience for the token. | string (required) |
| issuer | The token issuer. | string (required) |
| openIdConnectDiscoveryDocument | The OpenID connect discovery document. | string |
| primaryVerificationKey | The primary verification key. | ContentKeyPolicyRestrictionTokenKey(required) |
| requiredClaims | A list of required token claims. | ContentKeyPolicyTokenClaim[] |
| restrictionTokenType | The type of token. | 'Jwt''Swt''Unknown' (required) |


### ContentKeyPolicyRestrictionTokenKey

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.ContentKeyPolicyRsaTokenKey#Microsoft.Media.ContentKeyPolicySymmetricTokenKey#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey(required) |


### ContentKeyPolicyRsaTokenKey

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyRsaTokenKey' (required) |
| exponent | The RSA Parameter exponent | For Bicep, you can use theany()function.(required) |
| modulus | The RSA Parameter modulus | For Bicep, you can use theany()function.(required) |


### ContentKeyPolicySymmetricTokenKey

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey' (required) |
| keyValue | The key value of the key | For Bicep, you can use theany()function.(required) |


### ContentKeyPolicyX509CertificateTokenKey

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyX509CertificateTokenKey' (required) |
| rawBody | The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET) | For Bicep, you can use theany()function.(required) |


### ContentKeyPolicyTokenClaim

| Name | Description | Value |
|-|-|-|
| claimType | Token claim type. | string |
| claimValue | Token claim value. | string |


### ContentKeyPolicyUnknownRestriction

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.ContentKeyPolicyUnknownRestriction' (required) |


