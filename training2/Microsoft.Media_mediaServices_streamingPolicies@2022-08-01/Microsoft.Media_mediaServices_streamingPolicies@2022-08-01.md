```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/streamingPolicies@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      commonEncryptionCbcs = {
        clearKeyEncryptionConfiguration = {
          customKeysAcquisitionUrlTemplate = "string"
        }
        clearTracks = [
          {
            trackSelections = [
              {
                operation = "string"
                property = "string"
                value = "string"
              }
            ]
          }
        ]
        contentKeys = {
          defaultKey = {
            label = "string"
            policyName = "string"
          }
          keyToTrackMappings = [
            {
              label = "string"
              policyName = "string"
              tracks = [
                {
                  trackSelections = [
                    {
                      operation = "string"
                      property = "string"
                      value = "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
        drm = {
          fairPlay = {
            allowPersistentLicense = bool
            customLicenseAcquisitionUrlTemplate = "string"
          }
          playReady = {
            customLicenseAcquisitionUrlTemplate = "string"
            playReadyCustomAttributes = "string"
          }
          widevine = {
            customLicenseAcquisitionUrlTemplate = "string"
          }
        }
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
      commonEncryptionCenc = {
        clearKeyEncryptionConfiguration = {
          customKeysAcquisitionUrlTemplate = "string"
        }
        clearTracks = [
          {
            trackSelections = [
              {
                operation = "string"
                property = "string"
                value = "string"
              }
            ]
          }
        ]
        contentKeys = {
          defaultKey = {
            label = "string"
            policyName = "string"
          }
          keyToTrackMappings = [
            {
              label = "string"
              policyName = "string"
              tracks = [
                {
                  trackSelections = [
                    {
                      operation = "string"
                      property = "string"
                      value = "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
        drm = {
          playReady = {
            customLicenseAcquisitionUrlTemplate = "string"
            playReadyCustomAttributes = "string"
          }
          widevine = {
            customLicenseAcquisitionUrlTemplate = "string"
          }
        }
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
      defaultContentKeyPolicyName = "string"
      envelopeEncryption = {
        clearTracks = [
          {
            trackSelections = [
              {
                operation = "string"
                property = "string"
                value = "string"
              }
            ]
          }
        ]
        contentKeys = {
          defaultKey = {
            label = "string"
            policyName = "string"
          }
          keyToTrackMappings = [
            {
              label = "string"
              policyName = "string"
              tracks = [
                {
                  trackSelections = [
                    {
                      operation = "string"
                      property = "string"
                      value = "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
        customKeyAcquisitionUrlTemplate = "string"
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
      noEncryption = {
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
    }
  })
}

```

### mediaServices/streamingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | Class to specify properties of Streaming Policy | StreamingPolicyProperties |


### StreamingPolicyProperties

| Name | Description | Value |
|-|-|-|
| commonEncryptionCbcs | Configuration of CommonEncryptionCbcs | CommonEncryptionCbcs |
| commonEncryptionCenc | Configuration of CommonEncryptionCenc | CommonEncryptionCenc |
| defaultContentKeyPolicyName | Default ContentKey used by current Streaming Policy | string |
| envelopeEncryption | Configuration of EnvelopeEncryption | EnvelopeEncryption |
| noEncryption | Configurations of NoEncryption | NoEncryption |


### CommonEncryptionCbcs

| Name | Description | Value |
|-|-|-|
| clearKeyEncryptionConfiguration | Optional configuration supporting ClearKey in CommonEncryptionCbcs encryption scheme. | ClearKeyEncryptionConfiguration |
| clearTracks | Representing which tracks should not be encrypted | TrackSelection[] |
| contentKeys | Representing default content key for each encryption scheme and separate content keys for specific tracks | StreamingPolicyContentKeys |
| drm | Configuration of DRMs for current encryption scheme | CbcsDrmConfiguration |
| enabledProtocols | Representing supported protocols | EnabledProtocols |


### ClearKeyEncryptionConfiguration

| Name | Description | Value |
|-|-|-|
| customKeysAcquisitionUrlTemplate | Template for the URL of the custom service delivering content keys to end user players. Not required when using Azure Media Services for issuing licenses. The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token value is {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId. | string |


### TrackSelection

| Name | Description | Value |
|-|-|-|
| trackSelections | TrackSelections is a track property condition list which can specify track(s) | TrackPropertyCondition[] |


### TrackPropertyCondition

| Name | Description | Value |
|-|-|-|
| operation | Track property condition operation | 'Equal''Unknown' (required) |
| property | Track property type | 'FourCC''Unknown' (required) |
| value | Track property value | string |


### StreamingPolicyContentKeys

| Name | Description | Value |
|-|-|-|
| defaultKey | Default content key for an encryption scheme | DefaultKey |
| keyToTrackMappings | Representing tracks needs separate content key | StreamingPolicyContentKey[] |


### DefaultKey

| Name | Description | Value |
|-|-|-|
| label | Label can be used to specify Content Key when creating a Streaming Locator | string |
| policyName | Policy used by Default Key | string |


### StreamingPolicyContentKey

| Name | Description | Value |
|-|-|-|
| label | Label can be used to specify Content Key when creating a Streaming Locator | string |
| policyName | Policy used by Content Key | string |
| tracks | Tracks which use this content key | TrackSelection[] |


### CbcsDrmConfiguration

| Name | Description | Value |
|-|-|-|
| fairPlay | FairPlay configurations | StreamingPolicyFairPlayConfiguration |
| playReady | PlayReady configurations | StreamingPolicyPlayReadyConfiguration |
| widevine | Widevine configurations | StreamingPolicyWidevineConfiguration |


### StreamingPolicyFairPlayConfiguration

| Name | Description | Value |
|-|-|-|
| allowPersistentLicense | All license to be persistent or not | bool (required) |
| customLicenseAcquisitionUrlTemplate | Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested. | string |


### StreamingPolicyPlayReadyConfiguration

| Name | Description | Value |
|-|-|-|
| customLicenseAcquisitionUrlTemplate | Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested. | string |
| playReadyCustomAttributes | Custom attributes for PlayReady | string |


### StreamingPolicyWidevineConfiguration

| Name | Description | Value |
|-|-|-|
| customLicenseAcquisitionUrlTemplate | Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested. | string |


### EnabledProtocols

| Name | Description | Value |
|-|-|-|
| dash | Enable DASH protocol or not | bool (required) |
| download | Enable Download protocol or not | bool (required) |
| hls | Enable HLS protocol or not | bool (required) |
| smoothStreaming | Enable SmoothStreaming protocol or not | bool (required) |


### CommonEncryptionCenc

| Name | Description | Value |
|-|-|-|
| clearKeyEncryptionConfiguration | Optional configuration supporting ClearKey in CommonEncryptionCenc encryption scheme. | ClearKeyEncryptionConfiguration |
| clearTracks | Representing which tracks should not be encrypted | TrackSelection[] |
| contentKeys | Representing default content key for each encryption scheme and separate content keys for specific tracks | StreamingPolicyContentKeys |
| drm | Configuration of DRMs for CommonEncryptionCenc encryption scheme | CencDrmConfiguration |
| enabledProtocols | Representing supported protocols | EnabledProtocols |


### CencDrmConfiguration

| Name | Description | Value |
|-|-|-|
| playReady | PlayReady configurations | StreamingPolicyPlayReadyConfiguration |
| widevine | Widevine configurations | StreamingPolicyWidevineConfiguration |


### EnvelopeEncryption

| Name | Description | Value |
|-|-|-|
| clearTracks | Representing which tracks should not be encrypted | TrackSelection[] |
| contentKeys | Representing default content key for each encryption scheme and separate content keys for specific tracks | StreamingPolicyContentKeys |
| customKeyAcquisitionUrlTemplate | Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested. | string |
| enabledProtocols | Representing supported protocols | EnabledProtocols |


### NoEncryption

| Name | Description | Value |
|-|-|-|
| enabledProtocols | Representing supported protocols | EnabledProtocols |


