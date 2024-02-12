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


