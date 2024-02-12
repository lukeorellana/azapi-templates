```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters@2023-08-15"
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
      acceptedAudiences = [
        {
          value = "string"
        }
      ]
      allowedFqdnList = [
        "string"
      ]
      allowedIpRangeList = [
        "string"
      ]
      enableAutoStop = bool
      enableDiskEncryption = bool
      enableDoubleEncryption = bool
      enablePurge = bool
      enableStreamingIngest = bool
      engineType = "string"
      keyVaultProperties = {
        keyName = "string"
        keyVaultUri = "string"
        keyVersion = "string"
        userIdentity = "string"
      }
      languageExtensions = {
        value = [
          {
            languageExtensionCustomImageName = "string"
            languageExtensionImageName = "string"
            languageExtensionName = "string"
          }
        ]
        value = [
          {
            languageExtensionCustomImageName = "string"
            languageExtensionImageName = "string"
            languageExtensionName = "string"
          }
        ]
      }
      optimizedAutoscale = {
        isEnabled = bool
        maximum = int
        minimum = int
        version = int
      }
      publicIPType = "string"
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = "string"
      trustedExternalTenants = [
        {
          value = "string"
        }
      ]
      virtualClusterGraduationProperties = "string"
      virtualNetworkConfiguration = {
        dataManagementPublicIpId = "string"
        enginePublicIpId = "string"
        state = "string"
        subnetId = "string"
      }
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-22Valid characters:Lowercase letters and numbers.Start with letter.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the cluster. | AzureSku(required) |
| identity | The identity of the cluster, if configured. | Identity |
| properties | The cluster properties. | ClusterProperties |
| zones | The availability zones of the cluster. | string[] |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ComponentsSgqdofSchemasIdentityPropertiesUserassigne... |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| acceptedAudiences | The cluster's accepted audiences. | AcceptedAudiences[] |
| allowedFqdnList | List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster. | string[] |
| allowedIpRangeList | The list of ips in the format of CIDR allowed to connect to the cluster. | string[] |
| enableAutoStop | A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days). | bool |
| enableDiskEncryption | A boolean value that indicates if the cluster's disks are encrypted. | bool |
| enableDoubleEncryption | A boolean value that indicates if double encryption is enabled. | bool |
| enablePurge | A boolean value that indicates if the purge operations are enabled. | bool |
| enableStreamingIngest | A boolean value that indicates if the streaming ingest is enabled. | bool |
| engineType | The engine type | 'V2''V3' |
| keyVaultProperties | KeyVault properties for the cluster encryption. | KeyVaultProperties |
| languageExtensions | List of the cluster's language extensions. | LanguageExtensionsList |
| optimizedAutoscale | Optimized auto scale definition. | OptimizedAutoscale |
| publicIPType | Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6) | 'DualStack''IPv4' |
| publicNetworkAccess | Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed | 'Disabled''Enabled' |
| restrictOutboundNetworkAccess | Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| trustedExternalTenants | The cluster's external tenants. | TrustedExternalTenant[] |
| virtualClusterGraduationProperties | Virtual Cluster graduation properties | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| virtualNetworkConfiguration | Virtual network definition. | VirtualNetworkConfiguration |


### AcceptedAudiences

| Name | Description | Value |
|-|-|-|
| value | GUID or valid URL representing an accepted audience. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key vault key. | string |
| keyVaultUri | The Uri of the key vault. | string |
| keyVersion | The version of the key vault key. | string |
| userIdentity | The user assigned identity (ARM resource id) that has access to the key. | string |


### LanguageExtensionsList

| Name | Description | Value |
|-|-|-|
| value | The list of language extensions. | LanguageExtension[] |
| value | The list of language extensions. | LanguageExtension[] |


### LanguageExtension

| Name | Description | Value |
|-|-|-|
| languageExtensionCustomImageName | The language extension custom image name. | string |
| languageExtensionImageName | The language extension image name. | 'Python3_10_8''Python3_10_8_DL''Python3_6_5''PythonCustomImage''R' |
| languageExtensionName | The language extension name. | 'PYTHON''R' |


### OptimizedAutoscale

| Name | Description | Value |
|-|-|-|
| isEnabled | A boolean value that indicate if the optimized autoscale feature is enabled or not. | bool (required) |
| maximum | Maximum allowed instances count. | int (required) |
| minimum | Minimum allowed instances count. | int (required) |
| version | The version of the template defined, for instance 1. | int (required) |


### TrustedExternalTenant

| Name | Description | Value |
|-|-|-|
| value | GUID representing an external tenant. | string |


### VirtualNetworkConfiguration

| Name | Description | Value |
|-|-|-|
| dataManagementPublicIpId | Data management's service public IP address resource id. | string (required) |
| enginePublicIpId | Engine service's public IP address resource id. | string (required) |
| state | When enabled, the cluster is deployed into the configured subnet, when disabled it will be removed from the subnet. | 'Disabled''Enabled' |
| subnetId | The subnet resource id. | string (required) |


### AzureSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of instances of the cluster. | int |
| name | SKU name. | 'Dev(No SLA)_Standard_D11_v2''Dev(No SLA)_Standard_E2a_v4''Standard_D11_v2''Standard_D12_v2''Standard_D13_v2''Standard_D14_v2''Standard_D16d_v5''Standard_D32d_v4''Standard_D32d_v5''Standard_DS13_v2+1TB_PS''Standard_DS13_v2+2TB_PS''Standard_DS14_v2+3TB_PS''Standard_DS14_v2+4TB_PS''Standard_E16a_v4''Standard_E16ads_v5''Standard_E16as_v4+3TB_PS''Standard_E16as_v4+4TB_PS''Standard_E16as_v5+3TB_PS''Standard_E16as_v5+4TB_PS''Standard_E16d_v4''Standard_E16d_v5''Standard_E16s_v4+3TB_PS''Standard_E16s_v4+4TB_PS''Standard_E16s_v5+3TB_PS''Standard_E16s_v5+4TB_PS''Standard_E2a_v4''Standard_E2ads_v5''Standard_E2d_v4''Standard_E2d_v5''Standard_E4a_v4''Standard_E4ads_v5''Standard_E4d_v4''Standard_E4d_v5''Standard_E64i_v3''Standard_E80ids_v4''Standard_E8a_v4''Standard_E8ads_v5''Standard_E8as_v4+1TB_PS''Standard_E8as_v4+2TB_PS''Standard_E8as_v5+1TB_PS''Standard_E8as_v5+2TB_PS''Standard_E8d_v4''Standard_E8d_v5''Standard_E8s_v4+1TB_PS''Standard_E8s_v4+2TB_PS''Standard_E8s_v5+1TB_PS''Standard_E8s_v5+2TB_PS''Standard_EC16ads_v5''Standard_EC16as_v5+3TB_PS''Standard_EC16as_v5+4TB_PS''Standard_EC8ads_v5''Standard_EC8as_v5+1TB_PS''Standard_EC8as_v5+2TB_PS''Standard_L16as_v3''Standard_L16s''Standard_L16s_v2''Standard_L16s_v3''Standard_L32as_v3''Standard_L32s_v3''Standard_L4s''Standard_L8as_v3''Standard_L8s''Standard_L8s_v2''Standard_L8s_v3' (required) |
| tier | SKU tier. | 'Basic''Standard' (required) |


