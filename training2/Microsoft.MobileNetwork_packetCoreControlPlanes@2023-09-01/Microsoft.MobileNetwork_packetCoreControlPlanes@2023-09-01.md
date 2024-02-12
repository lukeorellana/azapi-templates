```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      controlPlaneAccessInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
      controlPlaneAccessVirtualIpv4Addresses = [
        "string"
      ]
      coreNetworkTechnology = "string"
      diagnosticsUpload = {
        storageAccountContainerUrl = "string"
      }
      eventHub = {
        id = "string"
        reportingInterval = int
      }
      installation = {
        desiredState = "string"
      }
      localDiagnosticsAccess = {
        authenticationType = "string"
        httpsServerCertificate = {
          certificateUrl = "string"
        }
      }
      platform = {
        azureStackEdgeDevice = {
          id = "string"
        }
        azureStackHciCluster = {
          id = "string"
        }
        connectedCluster = {
          id = "string"
        }
        customLocation = {
          id = "string"
        }
        type = "string"
      }
      signaling = {
        nasReroute = {
          macroMmeGroupId = int
        }
      }
      sites = [
        {
          id = "string"
        }
      ]
      sku = "string"
      ueMtu = int
      version = "string"
    }
  })
}

```

### packetCoreControlPlanes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity used to retrieve the ingress certificate from Azure key vault. | ManagedServiceIdentity |
| properties | Packet core control plane Properties. | PacketCoreControlPlanePropertiesFormat(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (currently only UserAssigned allowed). | 'None''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### PacketCoreControlPlanePropertiesFormat

| Name | Description | Value |
|-|-|-|
| controlPlaneAccessInterface | The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface. | InterfaceProperties(required) |
| controlPlaneAccessVirtualIpv4Addresses | The virtual IP address(es) for the control plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to anycast traffic for this address to the control plane access interfaces on the active and standby nodes. In non-HA system this list should be omitted or empty. | string[]Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| coreNetworkTechnology | The core network technology generation (5G core or EPC / 4G core). | '5GC''EPC + 5GC''EPC' |
| diagnosticsUpload | Configuration for uploading packet core diagnostics | DiagnosticsUploadConfiguration |
| eventHub | Configuration for sending packet core events to an Azure Event Hub. | EventHubConfiguration |
| installation | The installation state of the packet core control plane resource. | Installation |
| interopSettings | Settings to allow interoperability with third party components e.g. RANs and UEs. | For Bicep, you can use theany()function. |
| localDiagnosticsAccess | The kubernetes ingress configuration to control access to packet core diagnostics over local APIs. | LocalDiagnosticsAccessConfiguration(required) |
| platform | The platform where the packet core is deployed. | PlatformConfiguration(required) |
| signaling | Signaling configuration for the packet core. | SignalingConfiguration |
| sites | Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane. | SiteResourceId[] (required)Constraints:Min length = 1 |
| sku | The SKU defining the throughput and SIM allowances for this packet core control plane deployment. | 'G0''G1''G10''G2''G5' (required) |
| ueMtu | The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation. | intConstraints:Min value = 1280Max value = 1930 |
| version | The desired version of the packet core software. | string |


### InterfaceProperties

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Gateway | The default IPv4 gateway (router). | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Subnet | The IPv4 subnet. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$ |
| name | The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device. | string |


### DiagnosticsUploadConfiguration

| Name | Description | Value |
|-|-|-|
| storageAccountContainerUrl | The Storage Account Container URL to upload diagnostics to. | string (required) |


### EventHubConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID  of Azure Event Hub to send packet core events to. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][vV][eE][nN][tT][hH][uU][bB]/[nN][aA][mM][eE][sS][pP][aA][cC][eE][sS]/[^/?#]+/[eV][vV][eE][nN][tT][hH][uU][bB][sS]/[^/?#]+$ |
| reportingInterval | The duration (in seconds) between UE usage reports. | intConstraints:Min value = 30Max value = 3600 |


### Installation

| Name | Description | Value |
|-|-|-|
| desiredState | The desired installation state | 'Installed''Uninstalled' |


### LocalDiagnosticsAccessConfiguration

| Name | Description | Value |
|-|-|-|
| authenticationType | How to authenticate users who access local diagnostics APIs. | 'AAD''Password' (required) |
| httpsServerCertificate | The HTTPS server TLS certificate used to secure local access to diagnostics. | HttpsServerCertificate |


### HttpsServerCertificate

| Name | Description | Value |
|-|-|-|
| certificateUrl | The certificate URL, unversioned. For example:https://contosovault.vault.azure.net/certificates/ingress. | string (required) |


### PlatformConfiguration

| Name | Description | Value |
|-|-|-|
| azureStackEdgeDevice | The Azure Stack Edge device where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified. | AzureStackEdgeDeviceResourceId |
| azureStackHciCluster | The Azure Stack HCI cluster where the packet core is deployed. | AzureStackHCIClusterResourceId |
| connectedCluster | Azure Arc connected cluster where the packet core is deployed. | ConnectedClusterResourceId |
| customLocation | Azure Arc custom location where the packet core is deployed. | CustomLocationResourceId |
| type | The platform type where packet core is deployed. | '3P-AZURE-STACK-HCI''AKS-HCI' (required) |


### AzureStackEdgeDeviceResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Stack Edge device resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE]/[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE][dD][eE][vV][iI][cC][eE][sS]/[^/?#]+$ |


### AzureStackHCIClusterResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Stack HCI cluster resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[aA][zZ][uU][rR][eE][sS][tT][aA][cC][kK][hH][cC][iI]/[cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$ |


### ConnectedClusterResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Arc connected cluster resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[kK][uU][bB][eE][rR][nN][eE][tT][eE][sS]/[cC][oO][nN][nN][eE][cC][tT][eE][dD][cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$ |


### CustomLocationResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Arc custom location resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][xX][tT][eE][nN][dD][eE][dD][lL][oO][cC][aA][tT][iI][oO][nN]/[cC][uU][sS][tT][oO][mM][lL][oO][cC][aA][tT][iI][oO][nN][sS]/[^/?#]+$ |


### SignalingConfiguration

| Name | Description | Value |
|-|-|-|
| nasReroute | Configuration enabling 4G NAS reroute. | NASRerouteConfiguration |


### NASRerouteConfiguration

| Name | Description | Value |
|-|-|-|
| macroMmeGroupId | The macro network's MME group ID. This is where unknown UEs are sent to via NAS reroute. | int (required)Constraints:Min value = 0Max value = 65535 |


### SiteResourceId

| Name | Description | Value |
|-|-|-|
| id | Site resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][tT][eE][sS]/[^/?#]+$ |


