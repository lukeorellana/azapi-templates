## Microsoft.Media/videoAnalyzers@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers@2021-11-01-preview"
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
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          keyIdentifier = "string"
        }
        type = "string"
      }
      iotHubs = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
          }
        }
      ]
      networkAccessControl = {
        consumption = {
          publicNetworkAccess = "string"
        }
        ingestion = {
          publicNetworkAccess = "string"
        }
        integration = {
          publicNetworkAccess = "string"
        }
      }
      publicNetworkAccess = "string"
      storageAccounts = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
          }
        }
      ]
    }
  })
}

```

### videoAnalyzers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identities associated to the Video Analyzer resource. | VideoAnalyzerIdentity |
| properties | The resource properties. | VideoAnalyzerProperties |


### VideoAnalyzerIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | string (required) |
| userAssignedIdentities | The User Assigned Managed Identities. | object |


### VideoAnalyzerProperties

| Name | Description | Value |
|-|-|-|
| encryption | The account encryption properties. | AccountEncryption |
| iotHubs | The IoT Hubs for this resource. | IotHub[] |
| networkAccessControl | Network access control for Video Analyzer. | NetworkAccessControl |
| publicNetworkAccess | Whether or not public network access is allowed for resources under the Video Analyzer account. | 'Disabled''Enabled' |
| storageAccounts | The storage accounts for this resource. | StorageAccount[] (required) |


### AccountEncryption

| Name | Description | Value |
|-|-|-|
| identity | The Key Vault identity. | ResourceIdentity |
| keyVaultProperties | The properties of the key used to encrypt the account. | KeyVaultProperties |
| type | The type of key used to encrypt the Account Key. | 'CustomerKey''SystemKey' (required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned managed identity's resource identifier to use when accessing a resource. | string (required) |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for examplehttps://vault/keys/mykey/version1) or reference a key without a version (for examplehttps://vault/keys/mykey). | string (required) |


### IotHub

| Name | Description | Value |
|-|-|-|
| id | The IoT Hub resource identifier. | string (required) |
| identity | The IoT Hub identity. | ResourceIdentity(required) |


### NetworkAccessControl

| Name | Description | Value |
|-|-|-|
| consumption | Public network access for consumption group. | GroupLevelAccessControl |
| ingestion | Public network access for ingestion group. | GroupLevelAccessControl |
| integration | Public network access for integration group. | GroupLevelAccessControl |


### GroupLevelAccessControl

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Whether or not public network access is allowed for specified resources under the Video Analyzer account. | 'Disabled''Enabled' |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| id | The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). | string (required) |
| identity | A managed identity that Video Analyzer will use to access the storage account. | ResourceIdentity |
## Microsoft.Media/videoAnalyzers/accessPolicies@2021-11-01-preview

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
## Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### videoAnalyzers/edgeModules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | EdgeModuleProperties |
## Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bitrateKbps = int
      description = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      topologyName = "string"
    }
  })
}

```

### videoAnalyzers/livePipelines

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | LivePipelineProperties |


### LivePipelineProperties

| Name | Description | Value |
|-|-|-|
| bitrateKbps | Maximum bitrate capacity in Kbps reserved for the live pipeline. The allowed range is from 500 to 3000 Kbps in increments of 100 Kbps. If the RTSP camera exceeds this capacity, then the service will disconnect temporarily from the camera. It will retry to re-establish connection (with exponential backoff), checking to see if the camera bitrate is now below the reserved capacity. Doing so will ensure that one 'noisy neighbor' does not affect other live pipelines in your account. | int (required) |
| description | An optional description for the pipeline. | string |
| parameters | List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden. | ParameterDefinition[] |
| topologyName | The reference to an existing pipeline topology defined for real-time content processing. When activated, this live pipeline will process content according to the pipeline topology definition. | string (required) |


### ParameterDefinition

| Name | Description | Value |
|-|-|-|
| name | Name of the parameter declared in the pipeline topology. | string (required) |
| value | Parameter value to be applied on this specific pipeline. | string |
## Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      topologyName = "string"
    }
  })
}

```

### videoAnalyzers/pipelineJobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | PipelineJobProperties |


### PipelineJobProperties

| Name | Description | Value |
|-|-|-|
| description | An optional description for the pipeline. | string |
| parameters | List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden. | ParameterDefinition[] |
| topologyName | Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition. | string (required) |


### ParameterDefinition

| Name | Description | Value |
|-|-|-|
| name | Name of the parameter declared in the pipeline topology. | string (required) |
| value | Parameter value to be applied on this specific pipeline. | string |
## Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      parameters = [
        {
          default = "string"
          description = "string"
          name = "string"
          type = "string"
        }
      ]
      processors = [
        {
          inputs = [
            {
              nodeName = "string"
            }
          ]
          name = "string"
          @type = "string"
          // For remaining properties, see ProcessorNodeBase objects
        }
      ]
      sinks = [
        {
          inputs = [
            {
              nodeName = "string"
            }
          ]
          name = "string"
          @type = "string"
          // For remaining properties, see SinkNodeBase objects
        }
      ]
      sources = [
        {
          name = "string"
          @type = "string"
          // For remaining properties, see SourceNodeBase objects
        }
      ]
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

### videoAnalyzers/pipelineTopologies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Describes the properties of a SKU. | Sku(required) |
| kind | Topology kind. | 'Batch''Live' (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | PipelineTopologyProperties |


### PipelineTopologyProperties

| Name | Description | Value |
|-|-|-|
| description | An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here. | string |
| parameters | List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline. | ParameterDeclaration[] |
| processors | List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed. | ProcessorNodeBase[] |
| sinks | List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported. | SinkNodeBase[] (required) |
| sources | List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline. | SourceNodeBase[] (required) |


### ParameterDeclaration

| Name | Description | Value |
|-|-|-|
| default | The default value for the parameter to be used if the pipeline does not specify a value. | string |
| description | Description of the parameter. | string |
| name | Name of the parameter. | string (required) |
| type | Type of the parameter. | 'Bool''Double''Int''SecretString''String' (required) |


### ProcessorNodeBase

| Name | Description | Value |
|-|-|-|
| inputs | An array of upstream node references within the topology to be used as inputs for this node. | NodeInput[] (required) |
| name | Node name. Must be unique within the topology. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.EncoderProcessor(required) |


### NodeInput

| Name | Description | Value |
|-|-|-|
| nodeName | The name of the upstream node in the pipeline which output is used as input of the current node. | string (required) |


### EncoderProcessor

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EncoderProcessor' (required) |
| preset | The encoder preset, which defines the recipe or instructions on how the input content should be processed. | EncoderPresetBase(required) |


### EncoderPresetBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.EncoderCustomPreset#Microsoft.VideoAnalyzer.EncoderSystemPreset(required) |


### EncoderCustomPreset

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EncoderCustomPreset' (required) |
| audioEncoder | Describes a custom preset for encoding audio. | AudioEncoderBase |
| videoEncoder | Describes a custom preset for encoding video. | VideoEncoderBase |


### AudioEncoderBase

| Name | Description | Value |
|-|-|-|
| bitrateKbps | Bitrate, in kilobits per second or Kbps, at which audio should be encoded (2-channel stereo audio at a sampling rate of 48 kHz). Allowed values are 96, 112, 128, 160, 192, 224, and 256. If omitted, the bitrate of the input audio is used. | string |
| @type | Set the object type | #Microsoft.VideoAnalyzer.AudioEncoderAac(required) |


### AudioEncoderAac

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.AudioEncoderAac' (required) |


### VideoEncoderBase

| Name | Description | Value |
|-|-|-|
| bitrateKbps | The maximum bitrate, in kilobits per second or Kbps, at which video should be encoded. If omitted, encoder sets it automatically to try and match the quality of the input video. | string |
| frameRate | The frame rate (in frames per second) of the encoded video. The value must be greater than zero, and less than or equal to 300. If omitted, the encoder uses the average frame rate of the input video. | string |
| scale | Describes the resolution of the encoded video. If omitted, the encoder uses the resolution of the input video. | VideoScale |
| @type | Set the object type | #Microsoft.VideoAnalyzer.VideoEncoderH264(required) |


### VideoScale

| Name | Description | Value |
|-|-|-|
| height | The desired output video height. | string |
| mode | Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided. | 'Pad''PreserveAspectRatio''Stretch' |
| width | The desired output video width. | string |


### VideoEncoderH264

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoEncoderH264' (required) |


### EncoderSystemPreset

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EncoderSystemPreset' (required) |
| name | Name of the built-in encoding preset. | 'SingleLayer_1080p_H264_AAC''SingleLayer_2160p_H264_AAC''SingleLayer_540p_H264_AAC''SingleLayer_720p_H264_AAC' (required) |


### SinkNodeBase

| Name | Description | Value |
|-|-|-|
| inputs | An array of upstream node references within the topology to be used as inputs for this node. | NodeInput[] (required) |
| name | Node name. Must be unique within the topology. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.VideoSink(required) |


### VideoSink

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoSink' (required) |
| videoCreationProperties | Optional video properties to be used in case a new video resource needs to be created on the service. | VideoCreationProperties |
| videoName | Name of a new or existing video resource used to capture and publish content. Note: if downstream of RTSP source, and if disableArchive is set to true, then no content is archived. | string (required) |
| videoPublishingOptions | Options to change how the video sink publishes content via the video resource. This property is only allowed for topologies where "kind" is set to "live". | VideoPublishingOptions |


### VideoCreationProperties

| Name | Description | Value |
|-|-|-|
| description | Optional description provided by the user. Value can be up to 2048 characters long. | string |
| retentionPeriod | Video retention period indicates how long the video is kept in storage. Value must be specified in ISO8601 duration format (i.e. "P1D" equals 1 day) and can vary between 1 day to 10 years, in 1 day increments. When absent (null), all video content is retained indefinitely. This property is only allowed for topologies where "kind" is set to "live". | string |
| segmentLength | Segment length indicates the length of individual content files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. Changing this value after the initial call to create the video resource can lead to errors when uploading content to the archive. Default value is 30 seconds. This property is only allowed for topologies where "kind" is set to "live". | string |
| title | Optional title provided by the user. Value can be up to 256 characters long. | string |


### VideoPublishingOptions

| Name | Description | Value |
|-|-|-|
| disableArchive | When set to 'true' content will not be archived or recorded. This is used, for example, when the topology is used only for low latency video streaming. Default is 'false'.  If set to 'true', then "disableRtspPublishing" must be set to 'false'. | string |
| disableRtspPublishing | When set to 'true' the RTSP playback URL will not be published, disabling low latency streaming. This is used, for example, when the topology is used only for archiving content. Default is 'false'.  If set to 'true', then "disableArchive" must be set to 'false'. | string |


### SourceNodeBase

| Name | Description | Value |
|-|-|-|
| name | Node name. Must be unique within the topology. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.RtspSource#Microsoft.VideoAnalyzer.VideoSource(required) |


### RtspSource

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.RtspSource' (required) |
| endpoint | RTSP endpoint information for Video Analyzer to connect to. This contains the required information for Video Analyzer to connect to RTSP cameras and/or generic RTSP servers. | EndpointBase(required) |
| transport | Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages. | 'Http''Tcp' |


### EndpointBase

| Name | Description | Value |
|-|-|-|
| credentials | Credentials to be presented to the endpoint. | CredentialsBase(required) |
| tunnel | Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall. | TunnelBase |
| url | The endpoint URL for Video Analyzer to connect to. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.TlsEndpoint#Microsoft.VideoAnalyzer.UnsecuredEndpoint(required) |


### CredentialsBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.UsernamePasswordCredentials(required) |


### UsernamePasswordCredentials

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials' (required) |
| password | Password to be presented as part of the credentials. It is recommended that this value is parameterized as a secret string in order to prevent this value to be returned as part of the resource on API requests. | string (required) |
| username | Username to be presented as part of the credentials. | string (required) |


### TunnelBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel(required) |


### SecureIotDeviceRemoteTunnel

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel' (required) |
| deviceId | The IoT device id to use when establishing the remote tunnel. This string is case-sensitive. | string (required) |
| iotHubName | Name of the IoT Hub. | string (required) |


### TlsEndpoint

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.TlsEndpoint' (required) |
| trustedCertificates | List of trusted certificate authorities when authenticating a TLS connection. A null list designates that Azure Video Analyzer's list of trusted authorities should be used. | CertificateSource |
| validationOptions | Validation options to use when authenticating a TLS connection. By default, strict validation is used. | TlsValidationOptions |


### CertificateSource

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.PemCertificateList(required) |


### PemCertificateList

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.PemCertificateList' (required) |
| certificates | PEM formatted public certificates. One certificate per entry. | string[] (required) |


### TlsValidationOptions

| Name | Description | Value |
|-|-|-|
| ignoreHostname | When set to 'true' causes the certificate subject name validation to be skipped. Default is 'false'. | string |
| ignoreSignature | When set to 'true' causes the certificate chain trust validation to be skipped. Default is 'false'. | string |


### UnsecuredEndpoint

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.UnsecuredEndpoint' (required) |


### VideoSource

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoSource' (required) |
| timeSequences | Describes a sequence of datetime ranges. The video source only picks up recorded media within these ranges. | TimeSequenceBase(required) |
| videoName | Name of the Video Analyzer video resource to be used as the source. | string (required) |


### TimeSequenceBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers(required) |


### VideoSequenceAbsoluteTimeMarkers

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers' (required) |
| ranges | The sequence of datetime ranges. Example: '[["2021-10-05T03:30:00Z", "2021-10-05T03:40:00Z"]]'. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name. | 'Batch_S1''Live_S1' (required) |
## Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview"
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

### videoAnalyzers/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
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
## Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      archival = {
        retentionPeriod = "string"
      }
      description = "string"
      mediaInfo = {
        segmentLength = "string"
      }
      title = "string"
    }
  })
}

```

### videoAnalyzers/videos

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | VideoProperties |


### VideoProperties

| Name | Description | Value |
|-|-|-|
| archival | Video archival properties. | VideoArchival |
| description | Optional video description provided by the user. Value can be up to 2048 characters long. | string |
| mediaInfo | Contains information about the video and audio content. | VideoMediaInfo |
| title | Optional video title provided by the user. Value can be up to 256 characters long. | string |


### VideoArchival

| Name | Description | Value |
|-|-|-|
| retentionPeriod | Video retention period indicates the maximum age of the video archive segments which are intended to be kept in storage. It must be provided in the ISO8601 duration format in the granularity of days, up to a maximum of 10 years. For example, if this is set to P30D (30 days), content older than 30 days will be periodically deleted. This value can be updated at any time and the new desired retention period will be effective within 24 hours. | string |


### VideoMediaInfo

| Name | Description | Value |
|-|-|-|
| segmentLength | Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. | string |
## Microsoft.Media/mediaservices@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices@2021-11-01"
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
        identity = {
          userAssignedIdentity = "string"
          useSystemAssignedIdentity = bool
        }
        keyVaultProperties = {
          keyIdentifier = "string"
        }
        type = "string"
      }
      keyDelivery = {
        accessControl = {
          defaultAction = "string"
          ipAllowList = [
            "string"
          ]
        }
      }
      publicNetworkAccess = "string"
      storageAccounts = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
            useSystemAssignedIdentity = bool
          }
          type = "string"
        }
      ]
      storageAuthentication = "string"
    }
  })
}

```

### mediaservices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The Managed Identity for the Media Services account. | MediaServiceIdentity |
| properties | The resource properties. | MediaServiceProperties |


### MediaServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | string (required) |
| userAssignedIdentities | The user assigned managed identities. | object |


### MediaServiceProperties

| Name | Description | Value |
|-|-|-|
| encryption | The account encryption properties. | AccountEncryption |
| keyDelivery | The Key Delivery properties for Media Services account. | KeyDelivery |
| publicNetworkAccess | Whether or not public network access is allowed for resources under the Media Services account. | 'Disabled''Enabled' |
| storageAccounts | The storage accounts for this resource. | StorageAccount[] |
| storageAuthentication |  | 'ManagedIdentity''System' |


### AccountEncryption

| Name | Description | Value |
|-|-|-|
| identity | The Key Vault identity. | ResourceIdentity |
| keyVaultProperties | The properties of the key used to encrypt the account. | KeyVaultProperties |
| type | The type of key used to encrypt the Account Key. | 'CustomerKey''SystemKey' (required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned managed identity's ARM ID to use when accessing a resource. | string |
| useSystemAssignedIdentity | Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity. | bool (required) |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for examplehttps://vault/keys/mykey/version1) or reference a key without a version (for examplehttps://vault/keys/mykey). | string |


### KeyDelivery

| Name | Description | Value |
|-|-|-|
| accessControl | The access control properties for Key Delivery. | AccessControl |


### AccessControl

| Name | Description | Value |
|-|-|-|
| defaultAction | The behavior for IP access control in Key Delivery. | 'Allow''Deny' |
| ipAllowList | The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty. | string[] |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| id | The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts. | string |
| identity | The storage account identity. | ResourceIdentity |
| type | The type of the storage account. | 'Primary''Secondary' (required) |
## Microsoft.Media/mediaServices/accountFilters@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/accountFilters@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firstQuality = {
        bitrate = int
      }
      presentationTimeRange = {
        endTimestamp = int
        forceEndTimestamp = bool
        liveBackoffDuration = int
        presentationWindowDuration = int
        startTimestamp = int
        timescale = int
      }
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
  })
}

```

### mediaServices/accountFilters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | The Media Filter properties. | MediaFilterProperties |


### MediaFilterProperties

| Name | Description | Value |
|-|-|-|
| firstQuality | The first quality. | FirstQuality |
| presentationTimeRange | The presentation time range. | PresentationTimeRange |
| tracks | The tracks selection conditions. | FilterTrackSelection[] |


### FirstQuality

| Name | Description | Value |
|-|-|-|
| bitrate | The first quality bitrate. | int (required) |


### PresentationTimeRange

| Name | Description | Value |
|-|-|-|
| endTimestamp | The absolute end time boundary. | int |
| forceEndTimestamp | The indicator of forcing existing of end time stamp. | bool |
| liveBackoffDuration | The relative to end right edge. | int |
| presentationWindowDuration | The relative to end sliding window. | int |
| startTimestamp | The absolute start time boundary. | int |
| timescale | The time scale of time stamps. | int |


### FilterTrackSelection

| Name | Description | Value |
|-|-|-|
| trackSelections | The track selections. | FilterTrackPropertyCondition[] (required) |


### FilterTrackPropertyCondition

| Name | Description | Value |
|-|-|-|
| operation | The track property condition operation. | 'Equal''NotEqual' (required) |
| property | The track property type. | 'Bitrate''FourCC''Language''Name''Type''Unknown' (required) |
| value | The track property value. | string (required) |
## Microsoft.Media/mediaServices/assets@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternateId = "string"
      container = "string"
      description = "string"
      storageAccountName = "string"
    }
  })
}

```

### mediaServices/assets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | The resource properties. | AssetProperties |


### AssetProperties

| Name | Description | Value |
|-|-|-|
| alternateId | The alternate ID of the Asset. | string |
| container | The name of the asset blob container. | string |
| description | The Asset description. | string |
| storageAccountName | The name of the storage account. | string |
## Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firstQuality = {
        bitrate = int
      }
      presentationTimeRange = {
        endTimestamp = int
        forceEndTimestamp = bool
        liveBackoffDuration = int
        presentationWindowDuration = int
        startTimestamp = int
        timescale = int
      }
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
  })
}

```

### mediaServices/assets/assetFilters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assets |
| properties | The Media Filter properties. | MediaFilterProperties |


### MediaFilterProperties

| Name | Description | Value |
|-|-|-|
| firstQuality | The first quality. | FirstQuality |
| presentationTimeRange | The presentation time range. | PresentationTimeRange |
| tracks | The tracks selection conditions. | FilterTrackSelection[] |


### FirstQuality

| Name | Description | Value |
|-|-|-|
| bitrate | The first quality bitrate. | int (required) |


### PresentationTimeRange

| Name | Description | Value |
|-|-|-|
| endTimestamp | The absolute end time boundary. | int |
| forceEndTimestamp | The indicator of forcing existing of end time stamp. | bool |
| liveBackoffDuration | The relative to end right edge. | int |
| presentationWindowDuration | The relative to end sliding window. | int |
| startTimestamp | The absolute start time boundary. | int |
| timescale | The time scale of time stamps. | int |


### FilterTrackSelection

| Name | Description | Value |
|-|-|-|
| trackSelections | The track selections. | FilterTrackPropertyCondition[] (required) |


### FilterTrackPropertyCondition

| Name | Description | Value |
|-|-|-|
| operation | The track property condition operation. | 'Equal''NotEqual' (required) |
| property | The track property type. | 'Bitrate''FourCC''Language''Name''Type''Unknown' (required) |
| value | The track property value. | string (required) |
## Microsoft.Media/mediaServices/assets/tracks@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets/tracks@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      track = {
        @odata.type = "string"
        // For remaining properties, see TrackBase objects
      }
    }
  })
}

```

### mediaServices/assets/tracks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assets |
| properties | The resource properties. | AssetTrackProperties |


### AssetTrackProperties

| Name | Description | Value |
|-|-|-|
| track | Detailed information about a track in the asset. | TrackBase |


### TrackBase

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.AudioTrack#Microsoft.Media.TextTrack#Microsoft.Media.VideoTrack(required) |


### AudioTrack

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AudioTrack' (required) |
| dashSettings | The DASH specific setting for the audio track. | DashSettings |
| displayName | The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA. | string |
| fileName | The file name to the source file. This file is located in the storage container of the asset. | string |
| hlsSettings | The HLS specific setting for the audio track. | HlsSettings |
| languageCode | The RFC5646 language code for the audio track. | string |
| mpeg4TrackId | The MPEG-4 audio track ID for the audio track. | int |


### DashSettings

| Name | Description | Value |
|-|-|-|
| role | The role for the DASH setting. | string |


### HlsSettings

| Name | Description | Value |
|-|-|-|
| characteristics | The characteristics for the HLS setting. | string |
| default | The default for the HLS setting. | bool |
| forced | The forced for the HLS setting. | bool |


### TextTrack

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.TextTrack' (required) |
| displayName | The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA. | string |
| fileName | The file name to the source file. This file is located in the storage container of the asset. | string |
| hlsSettings | The HLS specific setting for the text track. | HlsSettings |
| playerVisibility | When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible". | 'Hidden''Visible' |


### VideoTrack

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoTrack' (required) |
## Microsoft.Media/mediaServices/contentKeyPolicies@2022-08-01

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
## Microsoft.Media/mediaservices/liveEvents@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/liveEvents@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      crossSiteAccessPolicies = {
        clientAccessPolicy = "string"
        crossDomainPolicy = "string"
      }
      description = "string"
      encoding = {
        encodingType = "string"
        keyFrameInterval = "string"
        presetName = "string"
        stretchMode = "string"
      }
      hostnamePrefix = "string"
      input = {
        accessControl = {
          ip = {
            allow = [
              {
                address = "string"
                name = "string"
                subnetPrefixLength = int
              }
            ]
          }
        }
        accessToken = "string"
        endpoints = [
          {
            protocol = "string"
            url = "string"
          }
        ]
        keyFrameIntervalDuration = "string"
        streamingProtocol = "string"
      }
      preview = {
        accessControl = {
          ip = {
            allow = [
              {
                address = "string"
                name = "string"
                subnetPrefixLength = int
              }
            ]
          }
        }
        alternativeMediaId = "string"
        endpoints = [
          {
            protocol = "string"
            url = "string"
          }
        ]
        previewLocator = "string"
        streamingPolicyName = "string"
      }
      streamOptions = [
        "string"
      ]
      transcriptions = [
        {
          inputTrackSelection = [
            {
              operation = "string"
              property = "string"
              value = "string"
            }
          ]
          language = "string"
          outputTranscriptionTrack = {
            trackName = "string"
          }
        }
      ]
      useStaticHostname = bool
    }
  })
}

```

### mediaservices/liveEvents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-32Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaservices |
| properties | The live event properties. | LiveEventProperties |


### LiveEventProperties

| Name | Description | Value |
|-|-|-|
| crossSiteAccessPolicies | Live event cross site access policies. | CrossSiteAccessPolicies |
| description | A description for the live event. | string |
| encoding | Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used. | LiveEventEncoding |
| hostnamePrefix | When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center. | string |
| input | Live event input settings. It defines how the live event receives input from a contribution encoder. | LiveEventInput(required) |
| preview | Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output. | LiveEventPreview |
| streamOptions | The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'. | String array containing any of:'Default''LowLatency''LowLatencyV2' |
| transcriptions | Live transcription settings for the live event. Seehttps://go.microsoft.com/fwlink/?linkid=2133742for more information about the live transcription feature. | LiveEventTranscription[] |
| useStaticHostname | Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state | bool |


### CrossSiteAccessPolicies

| Name | Description | Value |
|-|-|-|
| clientAccessPolicy | The content of clientaccesspolicy.xml used by Silverlight. | string |
| crossDomainPolicy | The content of crossdomain.xml used by Silverlight. | string |


### LiveEventEncoding

| Name | Description | Value |
|-|-|-|
| encodingType | Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. Seehttps://go.microsoft.com/fwlink/?linkid=2095101for more information. This property cannot be modified after the live event is created. | 'None''PassthroughBasic''PassthroughStandard''Premium1080p''Standard' |
| keyFrameInterval | Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events. | string |
| presetName | The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is âDefault720pâ. Else if the encodingType is set to Premium1080p, the default preset is âDefault1080pâ. | string |
| stretchMode | Specifies how the input video will be resized to fit the desired output resolution(s). Default is None | 'AutoFit''AutoSize''None' |


### LiveEventInput

| Name | Description | Value |
|-|-|-|
| accessControl | Access control for live event input. | LiveEventInputAccessControl |
| accessToken | A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value. | string |
| endpoints | The input endpoints for the live event. | LiveEventEndpoint[] |
| keyFrameIntervalDuration | ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events. | string |
| streamingProtocol | The input protocol for the live event. This is specified at creation time and cannot be updated. | 'FragmentedMP4''RTMP' (required) |


### LiveEventInputAccessControl

| Name | Description | Value |
|-|-|-|
| ip | The IP access control properties. | IPAccessControl |


### IPAccessControl

| Name | Description | Value |
|-|-|-|
| allow | The IP allow list. | IPRange[] |


### IPRange

| Name | Description | Value |
|-|-|-|
| address | The IP address. | string |
| name | The friendly name for the IP address range. | string |
| subnetPrefixLength | The subnet mask prefix length (see CIDR notation). | int |


### LiveEventEndpoint

| Name | Description | Value |
|-|-|-|
| protocol | The endpoint protocol. | string |
| url | The endpoint URL. | string |


### LiveEventPreview

| Name | Description | Value |
|-|-|-|
| accessControl | The access control for live event preview. | LiveEventPreviewAccessControl |
| alternativeMediaId | An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field. | string |
| endpoints | The endpoints for preview. Do not share the preview URL with the live event audience. | LiveEventEndpoint[] |
| previewLocator | The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created. | string |
| streamingPolicyName | The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated. | string |


### LiveEventPreviewAccessControl

| Name | Description | Value |
|-|-|-|
| ip | The IP access control properties. | IPAccessControl |


### LiveEventTranscription

| Name | Description | Value |
|-|-|-|
| inputTrackSelection | Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored. | LiveEventInputTrackSelection[] |
| language | Specifies the language (locale) to be used for speech-to-text transcription â it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). Seehttps://go.microsoft.com/fwlink/?linkid=2133742for more information about the live transcription feature and the list of supported languages. | string |
| outputTranscriptionTrack | Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored. | LiveEventOutputTranscriptionTrack |


### LiveEventInputTrackSelection

| Name | Description | Value |
|-|-|-|
| operation | Comparing operation. This property is reserved for future use, any value set on this property will be ignored. | string |
| property | Property name to select. This property is reserved for future use, any value set on this property will be ignored. | string |
| value | Property value to select. This property is reserved for future use, any value set on this property will be ignored. | string |


### LiveEventOutputTranscriptionTrack

| Name | Description | Value |
|-|-|-|
| trackName | The output track name. This property is reserved for future use, any value set on this property will be ignored. | string (required) |
## Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      archiveWindowLength = "string"
      assetName = "string"
      description = "string"
      hls = {
        fragmentsPerTsSegment = int
      }
      manifestName = "string"
      outputSnapTime = int
      rewindWindowLength = "string"
    }
  })
}

```

### mediaservices/liveEvents/liveOutputs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:liveEvents |
| properties | Live output properties. | LiveOutputProperties |


### LiveOutputProperties

| Name | Description | Value |
|-|-|-|
| archiveWindowLength | ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window. | string (required) |
| assetName | The asset that the live output will write to. | string (required) |
| description | The description of the live output. | string |
| hls | HTTP Live Streaming (HLS) packing setting for the live output. | Hls |
| manifestName | The manifest file name. If not provided, the service will generate one automatically. | string |
| outputSnapTime | The initial timestamp that the live output will start at, any content before this value will not be archived. | int |
| rewindWindowLength | ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL. | string |


### Hls

| Name | Description | Value |
|-|-|-|
| fragmentsPerTsSegment | The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output. | int |
## Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      sinks = [
        {
          inputs = [
            "string"
          ]
          name = "string"
          @odata.type = "string"
          // For remaining properties, see MediaGraphSink objects
        }
      ]
      sources = [
        {
          name = "string"
          @odata.type = "string"
          // For remaining properties, see MediaGraphSource objects
        }
      ]
    }
  })
}

```

### mediaServices/mediaGraphs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | Class for Media Graph properties. | MediaGraphProperties |


### MediaGraphProperties

| Name | Description | Value |
|-|-|-|
| description | Media Graph description. | string |
| sinks | Media Graph sinks. | MediaGraphSink[] (required) |
| sources | Media Graph sources. | MediaGraphSource[] (required) |


### MediaGraphSink

| Name | Description | Value |
|-|-|-|
| inputs | Sink inputs. | string[] (required) |
| name | Sink name. | string (required) |
| @odata.type | Set the object type | #Microsoft.Media.MediaGraphAssetSink(required) |


### MediaGraphAssetSink

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.MediaGraphAssetSink' (required) |
| assetName | Asset name. | string (required) |


### MediaGraphSource

| Name | Description | Value |
|-|-|-|
| name | Source name. | string (required) |
| @odata.type | Set the object type | #Microsoft.Media.MediaGraphRtspSource(required) |


### MediaGraphRtspSource

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.MediaGraphRtspSource' (required) |
| endpoint | RTSP endpoint of the stream being connected to. | MediaGraphEndpoint(required) |
| transport | Underlying RTSP transport. This can be used to enable or disable HTTP tunneling. | 'Http''Tcp' (required) |


### MediaGraphEndpoint

| Name | Description | Value |
|-|-|-|
| credentials | Polymorphic credentials to present to the endpoint. | MediaGraphCredentials |
| url | Url for the endpoint. | string (required) |
| @odata.type | Set the object type | #Microsoft.Media.MediaGraphClearEndpoint#Microsoft.Media.MediaGraphTlsEndpoint(required) |


### MediaGraphCredentials

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.MediaGraphUsernamePasswordCredentials(required) |


### MediaGraphUsernamePasswordCredentials

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.MediaGraphUsernamePasswordCredentials' (required) |
| password | Password for a username/password pair. | string (required) |
| username | Username for a username/password pair. | string (required) |


### MediaGraphClearEndpoint

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.MediaGraphClearEndpoint' (required) |


### MediaGraphTlsEndpoint

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.MediaGraphTlsEndpoint' (required) |
| trustedCertificates | What certificates should be trusted when authenticating a TLS connection. Null designates that Azure Media's source of trust should be used. | MediaGraphCertificateSource |
| validationOptions | Validation options to use when authenticating a TLS connection. By default, strict validation is used. | MediaGraphTlsValidationOptions |


### MediaGraphCertificateSource

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.MediaGraphPemCertificateList(required) |


### MediaGraphPemCertificateList

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.MediaGraphPemCertificateList' (required) |
| certificates | PEM formatted public certificates, one per entry. | string[] (required) |


### MediaGraphTlsValidationOptions

| Name | Description | Value |
|-|-|-|
| ignoreHostname | Ignore the host name (common name) during validation. | bool (required) |
| ignoreSignature | Ignore the integrity of the certificate chain at the current time. | bool (required) |
## Microsoft.Media/mediaservices/privateEndpointConnections@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/privateEndpointConnections@2021-11-01"
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

### mediaservices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaservices |
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
## Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessControl = {
        akamai = {
          akamaiSignatureHeaderAuthenticationKeyList = [
            {
              base64Key = "string"
              expiration = "string"
              identifier = "string"
            }
          ]
        }
        ip = {
          allow = [
            {
              address = "string"
              name = "string"
              subnetPrefixLength = int
            }
          ]
        }
      }
      availabilitySetName = "string"
      cdnEnabled = bool
      cdnProfile = "string"
      cdnProvider = "string"
      crossSiteAccessPolicies = {
        clientAccessPolicy = "string"
        crossDomainPolicy = "string"
      }
      customHostNames = [
        "string"
      ]
      description = "string"
      maxCacheAge = int
      scaleUnits = int
    }
    sku = {
      capacity = int
    }
  })
}

```

### mediaservices/streamingEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-24Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The streaming endpoint sku. | ArmStreamingEndpointCurrentSku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaservices |
| properties | The streaming endpoint properties. | StreamingEndpointProperties |


### StreamingEndpointProperties

| Name | Description | Value |
|-|-|-|
| accessControl | The access control definition of the streaming endpoint. | StreamingEndpointAccessControl |
| availabilitySetName | This feature is deprecated, do not set a value for this property. | string |
| cdnEnabled | The CDN enabled flag. | bool |
| cdnProfile | The CDN profile name. | string |
| cdnProvider | The CDN provider name. | string |
| crossSiteAccessPolicies | The streaming endpoint access policies. | CrossSiteAccessPolicies |
| customHostNames | The custom host names of the streaming endpoint | string[] |
| description | The streaming endpoint description. | string |
| maxCacheAge | Max cache age | int |
| scaleUnits | The number of scale units. Use the Scale operation to adjust this value. | int (required) |


### StreamingEndpointAccessControl

| Name | Description | Value |
|-|-|-|
| akamai | The access control of Akamai | AkamaiAccessControl |
| ip | The IP access control of the streaming endpoint. | IPAccessControl |


### AkamaiAccessControl

| Name | Description | Value |
|-|-|-|
| akamaiSignatureHeaderAuthenticationKeyList | authentication key list | AkamaiSignatureHeaderAuthenticationKey[] |


### AkamaiSignatureHeaderAuthenticationKey

| Name | Description | Value |
|-|-|-|
| base64Key | authentication key | string |
| expiration | The expiration time of the authentication key. | string |
| identifier | identifier of the key | string |


### IPAccessControl

| Name | Description | Value |
|-|-|-|
| allow | The IP allow list. | IPRange[] |


### IPRange

| Name | Description | Value |
|-|-|-|
| address | The IP address. | string |
| name | The friendly name for the IP address range. | string |
| subnetPrefixLength | The subnet mask prefix length (see CIDR notation). | int |


### CrossSiteAccessPolicies

| Name | Description | Value |
|-|-|-|
| clientAccessPolicy | The content of clientaccesspolicy.xml used by Silverlight. | string |
| crossDomainPolicy | The content of crossdomain.xml used by Silverlight. | string |


### ArmStreamingEndpointCurrentSku

| Name | Description | Value |
|-|-|-|
| capacity | The streaming endpoint sku capacity. | int |
## Microsoft.Media/mediaServices/streamingLocators@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/streamingLocators@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternativeMediaId = "string"
      assetName = "string"
      contentKeys = [
        {
          id = "string"
          labelReferenceInStreamingPolicy = "string"
          value = "string"
        }
      ]
      defaultContentKeyPolicyName = "string"
      endTime = "string"
      filters = [
        "string"
      ]
      startTime = "string"
      streamingLocatorId = "string"
      streamingPolicyName = "string"
    }
  })
}

```

### mediaServices/streamingLocators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | Properties of the Streaming Locator. | StreamingLocatorProperties |


### StreamingLocatorProperties

| Name | Description | Value |
|-|-|-|
| alternativeMediaId | Alternative Media ID of this Streaming Locator | string |
| assetName | Asset Name | string (required) |
| contentKeys | The ContentKeys used by this Streaming Locator. | StreamingLocatorContentKey[] |
| defaultContentKeyPolicyName | Name of the default ContentKeyPolicy used by this Streaming Locator. | string |
| endTime | The end time of the Streaming Locator. | string |
| filters | A list of asset or account filters which apply to this streaming locator | string[] |
| startTime | The start time of the Streaming Locator. | string |
| streamingLocatorId | The StreamingLocatorId of the Streaming Locator. | string |
| streamingPolicyName | Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming' | string (required) |


### StreamingLocatorContentKey

| Name | Description | Value |
|-|-|-|
| id | ID of Content Key | string (required) |
| labelReferenceInStreamingPolicy | Label of Content Key as specified in the Streaming Policy | string |
| value | Value of Content Key | string |
## Microsoft.Media/mediaServices/streamingPolicies@2022-08-01

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
## Microsoft.Media/mediaServices/transforms@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/transforms@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      outputs = [
        {
          onError = "string"
          preset = {
            @odata.type = "string"
            // For remaining properties, see Preset objects
          }
          relativePriority = "string"
        }
      ]
    }
  })
}

```

### mediaServices/transforms

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | The resource properties. | TransformProperties |


### TransformProperties

| Name | Description | Value |
|-|-|-|
| description | An optional verbose description of the Transform. | string |
| outputs | An array of one or more TransformOutputs that the Transform should generate. | TransformOutput[] (required) |


### TransformOutput

| Name | Description | Value |
|-|-|-|
| onError | A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'. | 'ContinueJob''StopProcessingJob' |
| preset | Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output. | Preset(required) |
| relativePriority | Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. | 'High''Low''Normal' |


### Preset

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.BuiltInStandardEncoderPreset#Microsoft.Media.FaceDetectorPreset#Microsoft.Media.StandardEncoderPreset#Microsoft.Media.VideoAnalyzerPreset(required) |


### BuiltInStandardEncoderPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.BuiltInStandardEncoderPreset' (required) |
| configurations | Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset. | PresetConfigurations |
| presetName | The built-in preset to be used for encoding videos. | 'AACGoodQualityAudio''AdaptiveStreaming''ContentAwareEncoding''ContentAwareEncodingExperimental''CopyAllBitrateNonInterleaved''H264MultipleBitrate1080p''H264MultipleBitrate720p''H264MultipleBitrateSD''H264SingleBitrate1080p''H264SingleBitrate720p''H264SingleBitrateSD''H265AdaptiveStreaming''H265ContentAwareEncoding''H265SingleBitrate1080p''H265SingleBitrate4K''H265SingleBitrate720p' (required) |


### PresetConfigurations

| Name | Description | Value |
|-|-|-|
| complexity | Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency. | 'Balanced''Quality''Speed' |
| interleaveOutput | Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files. | 'InterleavedOutput''NonInterleavedOutput' |
| keyFrameIntervalInSeconds | The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players. | int |
| maxBitrateBps | The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity. | int |
| maxHeight | The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K. | int |
| maxLayers | The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job. | int |
| minBitrateBps | The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth. | int |
| minHeight | The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P. | int |


### FaceDetectorPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.FaceDetectorPreset' (required) |
| blurType | Blur type | 'Black''Box''High''Low''Med' |
| experimentalOptions | Dictionary containing key value pairs for parameters not exposed in the preset itself | object |
| mode | This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction. | 'Analyze''Combined''Redact' |
| resolution | Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (seehttps://azure.microsoft.com/pricing/details/media-services/#analyticsfor details). However, faces that end up being too small in the resized video may not be detected. | 'SourceResolution''StandardDefinition' |


### StandardEncoderPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.StandardEncoderPreset' (required) |
| codecs | The list of codecs to be used when encoding the input video. | Codec[] (required) |
| filters | One or more filtering operations that are applied to the input media before encoding. | Filters |
| formats | The list of outputs to be produced by the encoder. | Format[] (required) |


### Codec

| Name | Description | Value |
|-|-|-|
| label | An optional label for the codec. The label can be used to control muxing behavior. | string |
| @odata.type | Set the object type | #Microsoft.Media.AacAudio#Microsoft.Media.CopyAudio#Microsoft.Media.CopyVideo#Microsoft.Media.H264Video#Microsoft.Media.H265Video#Microsoft.Media.JpgImage#Microsoft.Media.PngImage(required) |


### AacAudio

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AacAudio' (required) |
| bitrate | The bitrate, in bits per second, of the output encoded audio. | int |
| channels | The number of channels in the audio. | int |
| profile | The encoding profile to be used when encoding audio with AAC. | 'AacLc''HeAacV1''HeAacV2' |
| samplingRate | The sampling rate to use for encoding in hertz. | int |


### CopyAudio

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.CopyAudio' (required) |


### CopyVideo

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.CopyVideo' (required) |


### H264Video

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.H264Video' (required) |
| complexity | Tells the encoder how to choose its encoding settings. The default value is Balanced. | 'Balanced''Quality''Speed' |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | The collection of output H.264 layers to be produced by the encoder. | H264Layer[] |
| rateControlMode | The video rate control mode | 'ABR''CBR''CRF' |
| sceneChangeDetection | Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | bool |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### H264Layer

| Name | Description | Value |
|-|-|-|
| adaptiveBFrame | Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | bool |
| bFrames | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | int |
| bitrate | The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field. | int (required) |
| bufferWindow | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | string |
| crf | The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23. | int |
| entropyMode | The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level. | 'Cabac''Cavlc' |
| frameRate | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | string |
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| level | We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | string |
| maxBitrate | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | int |
| profile | We currently support Baseline, Main, High, High422, High444. Default is Auto. | 'Auto''Baseline''High''High422''High444''Main' |
| referenceFrames | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | int |
| slices | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### H265Video

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.H265Video' (required) |
| complexity | Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced. | 'Balanced''Quality''Speed' |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | The collection of output H.265 layers to be produced by the encoder. | H265Layer[] |
| sceneChangeDetection | Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | bool |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### H265Layer

| Name | Description | Value |
|-|-|-|
| adaptiveBFrame | Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | bool |
| bFrames | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | int |
| bitrate | The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field. | int (required) |
| bufferWindow | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | string |
| crf | The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28. | int |
| frameRate | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | string |
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| level | We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | string |
| maxBitrate | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | int |
| profile | We currently support Main. Default is Auto. | 'Auto''Main''Main10' |
| referenceFrames | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | int |
| slices | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### JpgImage

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JpgImage' (required) |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | A collection of output JPEG image layers to be produced by the encoder. | JpgLayer[] |
| range | The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream. | string |
| spriteColumn | Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535. | int |
| start | The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}. | string (required) |
| step | The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time. | string |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### JpgLayer

| Name | Description | Value |
|-|-|-|
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| quality | The compression quality of the JPEG output. Range is from 0-100 and the default is 70. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### PngImage

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.PngImage' (required) |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | A collection of output PNG image layers to be produced by the encoder. | PngLayer[] |
| range | The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream. | string |
| start | The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}. | string (required) |
| step | The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time. | string |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### PngLayer

| Name | Description | Value |
|-|-|-|
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### Filters

| Name | Description | Value |
|-|-|-|
| crop | The parameters for the rectangular window with which to crop the input video. | Rectangle |
| deinterlace | The de-interlacing settings. | Deinterlace |
| overlays | The properties of overlays to be applied to the input video. These could be audio, image or video overlays. | Overlay[] |
| rotation | The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto | 'Auto''None''Rotate0''Rotate180''Rotate270''Rotate90' |


### Rectangle

| Name | Description | Value |
|-|-|-|
| height | The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| left | The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| top | The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| width | The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |


### Deinterlace

| Name | Description | Value |
|-|-|-|
| mode | The deinterlacing mode. Defaults to AutoPixelAdaptive. | 'AutoPixelAdaptive''Off' |
| parity | The field parity for de-interlacing, defaults to Auto. | 'Auto''BottomFieldFirst''TopFieldFirst' |


### Overlay

| Name | Description | Value |
|-|-|-|
| audioGainLevel | The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0. | int |
| end | The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration. | string |
| fadeInDuration | The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S). | string |
| fadeOutDuration | The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S). | string |
| inputLabel | The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. Seehttps://aka.ms/mesformatsfor the complete list of supported audio and video file formats. | string (required) |
| start | The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video. | string |
| @odata.type | Set the object type | #Microsoft.Media.AudioOverlay#Microsoft.Media.VideoOverlay(required) |


### AudioOverlay

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AudioOverlay' (required) |


### VideoOverlay

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoOverlay' (required) |
| cropRectangle | An optional rectangular window used to crop the overlay image or video. | Rectangle |
| opacity | The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque. | int |
| position | The location in the input video where the overlay is applied. | Rectangle |


### Format

| Name | Description | Value |
|-|-|-|
| filenamePattern | The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename. | string (required) |
| @odata.type | Set the object type | #Microsoft.Media.JpgFormat#Microsoft.Media.Mp4Format#Microsoft.Media.PngFormat#Microsoft.Media.TransportStreamFormat(required) |


### JpgFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JpgFormat' (required) |


### Mp4Format

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.Mp4Format' (required) |
| outputFiles | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | OutputFile[] |


### OutputFile

| Name | Description | Value |
|-|-|-|
| labels | The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1. | string[] (required) |


### PngFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.PngFormat' (required) |


### TransportStreamFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.TransportStreamFormat' (required) |
| outputFiles | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | OutputFile[] |


### VideoAnalyzerPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoAnalyzerPreset' (required) |
| audioLanguage | The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here:https://go.microsoft.com/fwlink/?linkid=2109463 | string |
| experimentalOptions | Dictionary containing key value pairs for parameters not exposed in the preset itself | object |
| insightsToExtract | Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out. | 'AllInsights''AudioInsightsOnly''VideoInsightsOnly' |
| mode | Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. | 'Basic''Standard' |
## Microsoft.Media/mediaServices/transforms/jobs@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/transforms/jobs@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      correlationData = {}
      description = "string"
      input = {
        @odata.type = "string"
        // For remaining properties, see JobInput objects
      }
      outputs = [
        {
          label = "string"
          presetOverride = {
            @odata.type = "string"
            // For remaining properties, see Preset objects
          }
          @odata.type = "string"
          // For remaining properties, see JobOutput objects
        }
      ]
      priority = "string"
    }
  })
}

```

### mediaServices/transforms/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:transforms |
| properties | The resource properties. | JobProperties |


### JobProperties

| Name | Description | Value |
|-|-|-|
| correlationData | Customer provided key, value pairs that will be returned in Job and JobOutput state events. | object |
| description | Optional customer supplied description of the Job. | string |
| input | The inputs for the Job. | JobInput(required) |
| outputs | The outputs for the Job. | JobOutput[] (required) |
| priority | Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal. | 'High''Low''Normal' |


### JobInput

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.JobInputAsset#Microsoft.Media.JobInputHttp#Microsoft.Media.JobInputs#Microsoft.Media.JobInputSequence(required) |


### JobInputAsset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JobInputAsset' (required) |
| assetName | The name of the input Asset. | string (required) |
| end | Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media. | ClipTime |
| files | List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure. | string[] |
| inputDefinitions | Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata. | InputDefinition[] |
| label | A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'. | string |
| start | Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media. | ClipTime |


### ClipTime

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.AbsoluteClipTime#Microsoft.Media.UtcClipTime(required) |


### AbsoluteClipTime

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AbsoluteClipTime' (required) |
| time | The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds. | string (required) |


### UtcClipTime

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.UtcClipTime' (required) |
| time | The time position on the timeline of the input media based on Utc time. | string (required) |


### InputDefinition

| Name | Description | Value |
|-|-|-|
| includedTracks | The list of TrackDescriptors which define the metadata and selection of tracks in the input. | TrackDescriptor[] |
| @odata.type | Set the object type | #Microsoft.Media.FromAllInputFile#Microsoft.Media.FromEachInputFile#Microsoft.Media.InputFile(required) |


### TrackDescriptor

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.SelectAudioTrackByAttribute#Microsoft.Media.SelectAudioTrackById#Microsoft.Media.SelectVideoTrackByAttribute#Microsoft.Media.SelectVideoTrackById(required) |


### SelectAudioTrackByAttribute

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.SelectAudioTrackByAttribute' (required) |
| attribute | The TrackAttribute to filter the tracks by. | 'Bitrate''Language' (required) |
| channelMapping | Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks. | 'BackLeft''BackRight''Center''FrontLeft''FrontRight''LowFrequencyEffects''StereoLeft''StereoRight' |
| filter | The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks. | 'All''Bottom''Top''ValueEquals' (required) |
| filterValue | The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property. | string |


### SelectAudioTrackById

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.SelectAudioTrackById' (required) |
| channelMapping | Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks. | 'BackLeft''BackRight''Center''FrontLeft''FrontRight''LowFrequencyEffects''StereoLeft''StereoRight' |
| trackId | Track identifier to select | int (required) |


### SelectVideoTrackByAttribute

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.SelectVideoTrackByAttribute' (required) |
| attribute | The TrackAttribute to filter the tracks by. | 'Bitrate''Language' (required) |
| filter | The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks. | 'All''Bottom''Top''ValueEquals' (required) |
| filterValue | The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property. For TrackAttribute.Bitrate, this should be an integer value in bits per second (e.g: '1500000').  The TrackAttribute.Language is not supported for video tracks. | string |


### SelectVideoTrackById

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.SelectVideoTrackById' (required) |
| trackId | Track identifier to select | int (required) |


### FromAllInputFile

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.FromAllInputFile' (required) |


### FromEachInputFile

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.FromEachInputFile' (required) |


### InputFile

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.InputFile' (required) |
| filename | Name of the file that this input definition applies to. | string |


### JobInputHttp

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JobInputHttp' (required) |
| baseUri | Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters. The query strings will not be returned in service responses to prevent sensitive data exposure. | string |
| end | Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media. | ClipTime |
| files | List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure. | string[] |
| inputDefinitions | Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata. | InputDefinition[] |
| label | A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'. | string |
| start | Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media. | ClipTime |


### JobInputs

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JobInputs' (required) |
| inputs | List of inputs to a Job. | JobInput[] |


### JobInputSequence

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JobInputSequence' (required) |
| inputs | JobInputs that make up the timeline. | JobInputClip[] |


### JobInputClip

| Name | Description | Value |
|-|-|-|
| end | Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media. | ClipTime |
| files | List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure. | string[] |
| inputDefinitions | Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata. | InputDefinition[] |
| label | A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'. | string |
| start | Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media. | ClipTime |
| @odata.type | Set the object type | #Microsoft.Media.JobInputAsset#Microsoft.Media.JobInputHttp(required) |


### JobOutput

| Name | Description | Value |
|-|-|-|
| label | A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform. | string |
| presetOverride | A preset used to override the preset in the corresponding transform output. | Preset |
| @odata.type | Set the object type | #Microsoft.Media.JobOutputAsset(required) |


### Preset

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.BuiltInStandardEncoderPreset#Microsoft.Media.FaceDetectorPreset#Microsoft.Media.StandardEncoderPreset#Microsoft.Media.VideoAnalyzerPreset(required) |


### BuiltInStandardEncoderPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.BuiltInStandardEncoderPreset' (required) |
| configurations | Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset. | PresetConfigurations |
| presetName | The built-in preset to be used for encoding videos. | 'AACGoodQualityAudio''AdaptiveStreaming''ContentAwareEncoding''ContentAwareEncodingExperimental''CopyAllBitrateNonInterleaved''H264MultipleBitrate1080p''H264MultipleBitrate720p''H264MultipleBitrateSD''H264SingleBitrate1080p''H264SingleBitrate720p''H264SingleBitrateSD''H265AdaptiveStreaming''H265ContentAwareEncoding''H265SingleBitrate1080p''H265SingleBitrate4K''H265SingleBitrate720p' (required) |


### PresetConfigurations

| Name | Description | Value |
|-|-|-|
| complexity | Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency. | 'Balanced''Quality''Speed' |
| interleaveOutput | Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files. | 'InterleavedOutput''NonInterleavedOutput' |
| keyFrameIntervalInSeconds | The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players. | int |
| maxBitrateBps | The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity. | int |
| maxHeight | The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K. | int |
| maxLayers | The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job. | int |
| minBitrateBps | The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth. | int |
| minHeight | The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P. | int |


### FaceDetectorPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.FaceDetectorPreset' (required) |
| blurType | Blur type | 'Black''Box''High''Low''Med' |
| experimentalOptions | Dictionary containing key value pairs for parameters not exposed in the preset itself | object |
| mode | This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction. | 'Analyze''Combined''Redact' |
| resolution | Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (seehttps://azure.microsoft.com/pricing/details/media-services/#analyticsfor details). However, faces that end up being too small in the resized video may not be detected. | 'SourceResolution''StandardDefinition' |


### StandardEncoderPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.StandardEncoderPreset' (required) |
| codecs | The list of codecs to be used when encoding the input video. | Codec[] (required) |
| filters | One or more filtering operations that are applied to the input media before encoding. | Filters |
| formats | The list of outputs to be produced by the encoder. | Format[] (required) |


### Codec

| Name | Description | Value |
|-|-|-|
| label | An optional label for the codec. The label can be used to control muxing behavior. | string |
| @odata.type | Set the object type | #Microsoft.Media.AacAudio#Microsoft.Media.CopyAudio#Microsoft.Media.CopyVideo#Microsoft.Media.H264Video#Microsoft.Media.H265Video#Microsoft.Media.JpgImage#Microsoft.Media.PngImage(required) |


### AacAudio

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AacAudio' (required) |
| bitrate | The bitrate, in bits per second, of the output encoded audio. | int |
| channels | The number of channels in the audio. | int |
| profile | The encoding profile to be used when encoding audio with AAC. | 'AacLc''HeAacV1''HeAacV2' |
| samplingRate | The sampling rate to use for encoding in hertz. | int |


### CopyAudio

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.CopyAudio' (required) |


### CopyVideo

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.CopyVideo' (required) |


### H264Video

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.H264Video' (required) |
| complexity | Tells the encoder how to choose its encoding settings. The default value is Balanced. | 'Balanced''Quality''Speed' |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | The collection of output H.264 layers to be produced by the encoder. | H264Layer[] |
| rateControlMode | The video rate control mode | 'ABR''CBR''CRF' |
| sceneChangeDetection | Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | bool |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### H264Layer

| Name | Description | Value |
|-|-|-|
| adaptiveBFrame | Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | bool |
| bFrames | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | int |
| bitrate | The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field. | int (required) |
| bufferWindow | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | string |
| crf | The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23. | int |
| entropyMode | The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level. | 'Cabac''Cavlc' |
| frameRate | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | string |
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| level | We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | string |
| maxBitrate | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | int |
| profile | We currently support Baseline, Main, High, High422, High444. Default is Auto. | 'Auto''Baseline''High''High422''High444''Main' |
| referenceFrames | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | int |
| slices | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### H265Video

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.H265Video' (required) |
| complexity | Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced. | 'Balanced''Quality''Speed' |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | The collection of output H.265 layers to be produced by the encoder. | H265Layer[] |
| sceneChangeDetection | Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | bool |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### H265Layer

| Name | Description | Value |
|-|-|-|
| adaptiveBFrame | Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | bool |
| bFrames | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | int |
| bitrate | The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field. | int (required) |
| bufferWindow | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | string |
| crf | The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28. | int |
| frameRate | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | string |
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| level | We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | string |
| maxBitrate | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | int |
| profile | We currently support Main. Default is Auto. | 'Auto''Main''Main10' |
| referenceFrames | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | int |
| slices | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### JpgImage

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JpgImage' (required) |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | A collection of output JPEG image layers to be produced by the encoder. | JpgLayer[] |
| range | The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream. | string |
| spriteColumn | Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535. | int |
| start | The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}. | string (required) |
| step | The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time. | string |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### JpgLayer

| Name | Description | Value |
|-|-|-|
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| quality | The compression quality of the JPEG output. Range is from 0-100 and the default is 70. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### PngImage

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.PngImage' (required) |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | A collection of output PNG image layers to be produced by the encoder. | PngLayer[] |
| range | The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream. | string |
| start | The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}. | string (required) |
| step | The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time. | string |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### PngLayer

| Name | Description | Value |
|-|-|-|
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### Filters

| Name | Description | Value |
|-|-|-|
| crop | The parameters for the rectangular window with which to crop the input video. | Rectangle |
| deinterlace | The de-interlacing settings. | Deinterlace |
| overlays | The properties of overlays to be applied to the input video. These could be audio, image or video overlays. | Overlay[] |
| rotation | The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto | 'Auto''None''Rotate0''Rotate180''Rotate270''Rotate90' |


### Rectangle

| Name | Description | Value |
|-|-|-|
| height | The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| left | The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| top | The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| width | The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |


### Deinterlace

| Name | Description | Value |
|-|-|-|
| mode | The deinterlacing mode. Defaults to AutoPixelAdaptive. | 'AutoPixelAdaptive''Off' |
| parity | The field parity for de-interlacing, defaults to Auto. | 'Auto''BottomFieldFirst''TopFieldFirst' |


### Overlay

| Name | Description | Value |
|-|-|-|
| audioGainLevel | The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0. | int |
| end | The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration. | string |
| fadeInDuration | The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S). | string |
| fadeOutDuration | The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S). | string |
| inputLabel | The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. Seehttps://aka.ms/mesformatsfor the complete list of supported audio and video file formats. | string (required) |
| start | The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video. | string |
| @odata.type | Set the object type | #Microsoft.Media.AudioOverlay#Microsoft.Media.VideoOverlay(required) |


### AudioOverlay

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AudioOverlay' (required) |


### VideoOverlay

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoOverlay' (required) |
| cropRectangle | An optional rectangular window used to crop the overlay image or video. | Rectangle |
| opacity | The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque. | int |
| position | The location in the input video where the overlay is applied. | Rectangle |


### Format

| Name | Description | Value |
|-|-|-|
| filenamePattern | The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename. | string (required) |
| @odata.type | Set the object type | #Microsoft.Media.JpgFormat#Microsoft.Media.Mp4Format#Microsoft.Media.PngFormat#Microsoft.Media.TransportStreamFormat(required) |


### JpgFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JpgFormat' (required) |


### Mp4Format

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.Mp4Format' (required) |
| outputFiles | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | OutputFile[] |


### OutputFile

| Name | Description | Value |
|-|-|-|
| labels | The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1. | string[] (required) |


### PngFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.PngFormat' (required) |


### TransportStreamFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.TransportStreamFormat' (required) |
| outputFiles | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | OutputFile[] |


### VideoAnalyzerPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoAnalyzerPreset' (required) |
| audioLanguage | The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here:https://go.microsoft.com/fwlink/?linkid=2109463 | string |
| experimentalOptions | Dictionary containing key value pairs for parameters not exposed in the preset itself | object |
| insightsToExtract | Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out. | 'AllInsights''AudioInsightsOnly''VideoInsightsOnly' |
| mode | Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. | 'Basic''Standard' |


### JobOutputAsset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JobOutputAsset' (required) |
| assetName | The name of the output Asset. | string (required) |
