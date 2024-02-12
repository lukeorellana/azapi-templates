```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/backends@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      circuitBreaker = {
        rules = [
          {
            failureCondition = {
              count = int
              errorReasons = [
                "string"
              ]
              interval = "string"
              percentage = int
              statusCodeRanges = [
                {
                  max = int
                  min = int
                }
              ]
            }
            name = "string"
            tripDuration = "string"
          }
        ]
      }
      credentials = {
        authorization = {
          parameter = "string"
          scheme = "string"
        }
        certificate = [
          "string"
        ]
        certificateIds = [
          "string"
        ]
        header = {
          {customized property} = [
            "string"
          ]
        }
        query = {
          {customized property} = [
            "string"
          ]
        }
      }
      description = "string"
      pool = {
        services = [
          {
            id = "string"
          }
        ]
      }
      properties = {
        serviceFabricCluster = {
          clientCertificateId = "string"
          clientCertificatethumbprint = "string"
          managementEndpoints = [
            "string"
          ]
          maxPartitionResolutionRetries = int
          serverCertificateThumbprints = [
            "string"
          ]
          serverX509Names = [
            {
              issuerCertificateThumbprint = "string"
              name = "string"
            }
          ]
        }
      }
      protocol = "string"
      proxy = {
        password = "string"
        url = "string"
        username = "string"
      }
      resourceId = "string"
      title = "string"
      tls = {
        validateCertificateChain = bool
        validateCertificateName = bool
      }
      type = "string"
      url = "string"
    }
  })
}

```

### service/backends

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Backend entity contract properties. | BackendContractProperties |


### BackendContractProperties

| Name | Description | Value |
|-|-|-|
| circuitBreaker | Backend Circuit Breaker Configuration | BackendCircuitBreaker |
| credentials | Backend Credentials Contract Properties | BackendCredentialsContract |
| description | Backend Description. | string |
| pool |  | BackendBaseParametersPool |
| properties | Backend Properties contract | BackendProperties |
| protocol | Backend communication protocol. | 'http''soap' (required) |
| proxy | Backend gateway Contract Properties | BackendProxyContract |
| resourceId | Management Uri of the Resource in External System. This URL can be the Arm Resource Id of Logic Apps, Function Apps or API Apps. | string |
| title | Backend Title. | string |
| tls | Backend TLS Properties | BackendTlsProperties |
| type | Type of the backend. A backend can be either Single or Pool. | 'Pool''Single' |
| url | Runtime Url of the Backend. | string (required) |


### BackendCircuitBreaker

| Name | Description | Value |
|-|-|-|
| rules | The rules for tripping the backend. | CircuitBreakerRule[] |


### CircuitBreakerRule

| Name | Description | Value |
|-|-|-|
| failureCondition | The conditions for tripping the circuit breaker. | CircuitBreakerFailureCondition |
| name | The rule name. | string |
| tripDuration | The duration for which the circuit will be tripped. | string |


### CircuitBreakerFailureCondition

| Name | Description | Value |
|-|-|-|
| count | The threshold for opening the circuit. | int |
| errorReasons | The error reasons which are considered as failure. | string[] |
| interval | The interval during which the failures are counted. | string |
| percentage | The threshold for opening the circuit. | int |
| statusCodeRanges | The status code ranges which are considered as failure. | FailureStatusCodeRange[] |


### FailureStatusCodeRange

| Name | Description | Value |
|-|-|-|
| max | The maximum http status code. | int |
| min | The minimum http status code. | int |


### BackendCredentialsContract

| Name | Description | Value |
|-|-|-|
| authorization | Authorization header authentication | BackendAuthorizationHeaderCredentials |
| certificate | List of Client Certificate Thumbprints. Will be ignored if certificatesIds are provided. | string[] |
| certificateIds | List of Client Certificate Ids. | string[] |
| header | Header Parameter description. | BackendCredentialsContractHeader |
| query | Query Parameter description. | BackendCredentialsContractQuery |


### BackendAuthorizationHeaderCredentials

| Name | Description | Value |
|-|-|-|
| parameter | Authentication Parameter value. | string (required) |
| scheme | Authentication Scheme name. | string (required) |


### BackendCredentialsContractHeader

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string[] |


### BackendCredentialsContractQuery

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string[] |


### BackendBaseParametersPool

| Name | Description | Value |
|-|-|-|
| services | The list of backend entities belonging to a pool. | BackendPoolItem[] |


### BackendPoolItem

| Name | Description | Value |
|-|-|-|
| id | The unique ARM id of the backend entity. The ARM id should refer to an already existing backend entity. | string (required) |


### BackendProperties

| Name | Description | Value |
|-|-|-|
| serviceFabricCluster | Backend Service Fabric Cluster Properties | BackendServiceFabricClusterProperties |


### BackendServiceFabricClusterProperties

| Name | Description | Value |
|-|-|-|
| clientCertificateId | The client certificate id for the management endpoint. | string |
| clientCertificatethumbprint | The client certificate thumbprint for the management endpoint. Will be ignored if certificatesIds are provided | string |
| managementEndpoints | The cluster management endpoint. | string[] (required) |
| maxPartitionResolutionRetries | Maximum number of retries while attempting resolve the partition. | int |
| serverCertificateThumbprints | Thumbprints of certificates cluster management service uses for tls communication | string[] |
| serverX509Names | Server X509 Certificate Names Collection | X509CertificateName[] |


### X509CertificateName

| Name | Description | Value |
|-|-|-|
| issuerCertificateThumbprint | Thumbprint for the Issuer of the Certificate. | string |
| name | Common Name of the Certificate. | string |


### BackendProxyContract

| Name | Description | Value |
|-|-|-|
| password | Password to connect to the WebProxy Server | string |
| url | WebProxy Server AbsoluteUri property which includes the entire URI stored in the Uri instance, including all fragments and query strings. | string (required) |
| username | Username to connect to the WebProxy server | string |


### BackendTlsProperties

| Name | Description | Value |
|-|-|-|
| validateCertificateChain | Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host. | bool |
| validateCertificateName | Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host. | bool |


