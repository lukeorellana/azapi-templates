```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      addonConfigs = {}
      customPersistentDisks = [
        {
          customPersistentDiskProperties = {
            enableSubPath = bool
            mountOptions = [
              "string"
            ]
            mountPath = "string"
            readOnly = bool
            type = "string"
            // For remaining properties, see CustomPersistentDiskProperties objects
          }
          storageId = "string"
        }
      ]
      enableEndToEndTLS = bool
      httpsOnly = bool
      ingressSettings = {
        backendProtocol = "string"
        clientAuth = {
          certificates = [
            "string"
          ]
        }
        readTimeoutInSeconds = int
        sendTimeoutInSeconds = int
        sessionAffinity = "string"
        sessionCookieMaxAge = int
      }
      loadedCertificates = [
        {
          loadTrustStore = bool
          resourceId = "string"
        }
      ]
      persistentDisk = {
        mountPath = "string"
        sizeInGB = int
      }
      public = bool
      secrets = [
        {
          name = "string"
          value = "string"
        }
      ]
      temporaryDisk = {
        mountPath = "string"
        sizeInGB = int
      }
      vnetAddons = {
        publicEndpoint = bool
      }
    }
  })
}

```

### Spring/apps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The GEO location of the application, always the same with its parent resource | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| identity | The Managed Identity type of the app resource | ManagedIdentityProperties |
| properties | Properties of the App resource | AppResourceProperties |


### ManagedIdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | Principal Id of system-assigned managed identity. | string |
| tenantId | Tenant Id of system-assigned managed identity. | string |
| type | Type of the managed identity | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | Properties of user-assigned managed identities | object |


### AppResourceProperties

| Name | Description | Value |
|-|-|-|
| addonConfigs | Collection of addons | object |
| customPersistentDisks | List of custom persistent disks | CustomPersistentDiskResource[] |
| enableEndToEndTLS | Indicate if end to end TLS is enabled. | bool |
| httpsOnly | Indicate if only https is allowed. | bool |
| ingressSettings | App ingress settings payload. | IngressSettings |
| loadedCertificates | Collection of loaded certificates | LoadedCertificate[] |
| persistentDisk | Persistent disk settings | PersistentDisk |
| public | Indicates whether the App exposes public endpoint | bool |
| secrets | Collection of auth secrets | Secret[] |
| temporaryDisk | Temporary disk settings | TemporaryDisk |
| vnetAddons | Additional App settings in vnet injection instance | AppVNetAddons |


### CustomPersistentDiskResource

| Name | Description | Value |
|-|-|-|
| customPersistentDiskProperties | Properties of the custom persistent disk resource payload. | CustomPersistentDiskProperties |
| storageId | The resource id of Azure Spring Apps Storage resource. | string (required) |


### CustomPersistentDiskProperties

| Name | Description | Value |
|-|-|-|
| enableSubPath | If set to true, it will create and mount a dedicated directory for every individual app instance. | bool |
| mountOptions | These are the mount options for a persistent disk. | string[] |
| mountPath | The mount path of the persistent disk. | string (required) |
| readOnly | Indicates whether the persistent disk is a readOnly one. | bool |
| type | Set the object type | AzureFileVolume(required) |


### AzureFileVolume

| Name | Description | Value |
|-|-|-|
| type | The type of the underlying resource to mount as a persistent disk. | 'AzureFileVolume' (required) |
| shareName | The share name of the Azure File share. | string |


### IngressSettings

| Name | Description | Value |
|-|-|-|
| backendProtocol | How ingress should communicate with this app backend service. | 'Default''GRPC' |
| clientAuth | Client-Certification Authentication. | IngressSettingsClientAuth |
| readTimeoutInSeconds | Ingress read time out in seconds. | int |
| sendTimeoutInSeconds | Ingress send time out in seconds. | int |
| sessionAffinity | Type of the affinity, set this to Cookie to enable session affinity. | 'Cookie''None' |
| sessionCookieMaxAge | Time in seconds until the cookie expires. | int |


### IngressSettingsClientAuth

| Name | Description | Value |
|-|-|-|
| certificates | Collection of certificate resource id. | string[] |


### LoadedCertificate

| Name | Description | Value |
|-|-|-|
| loadTrustStore | Indicate whether the certificate will be loaded into default trust store, only work for Java runtime. | bool |
| resourceId | Resource Id of loaded certificate | string (required) |


### PersistentDisk

| Name | Description | Value |
|-|-|-|
| mountPath | Mount path of the persistent disk | string |
| sizeInGB | Size of the persistent disk in GB | int |


### Secret

| Name | Description | Value |
|-|-|-|
| name | Secret Name. | string |
| value | Secret Value. | string |


### TemporaryDisk

| Name | Description | Value |
|-|-|-|
| mountPath | Mount path of the temporary disk | string |
| sizeInGB | Size of the temporary disk in GB | int |


### AppVNetAddons

| Name | Description | Value |
|-|-|-|
| publicEndpoint | Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet. | bool |


