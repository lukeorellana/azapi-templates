## Microsoft.ElasticSan/elasticSans@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityZones = [
        "string"
      ]
      baseSizeTiB = int
      extendedCapacitySizeTiB = int
      publicNetworkAccess = "string"
      sku = {
        name = "string"
        tier = "Premium"
      }
    }
  })
}

```

### elasticSans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of ElasticSan. | ElasticSanProperties(required) |


### ElasticSanProperties

| Name | Description | Value |
|-|-|-|
| availabilityZones | Logical zone for Elastic San resource; example: ["1"]. | string[] |
| baseSizeTiB | Base size of the Elastic San appliance in TiB. | int (required) |
| extendedCapacitySizeTiB | Extended size of the Elastic San appliance in TiB. | int (required) |
| publicNetworkAccess | Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. | 'Disabled''Enabled' |
| sku | resource sku | Sku(required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'Premium_LRS''Premium_ZRS' (required) |
| tier | The sku tier. | 'Premium' |
## Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
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

### elasticSans/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:elasticSans |
| properties | Private Endpoint Connection Properties. | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | List of resources private endpoint is mapped | string[] |
| privateEndpoint | Private Endpoint resource | PrivateEndpoint |
| privateLinkServiceConnectionState | Private Link Service Connection State. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Failed''Pending''Rejected' |
## Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01"
  name = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = "string"
      encryptionProperties = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          keyName = "string"
          keyVaultUri = "string"
          keyVersion = "string"
        }
      }
      networkAcls = {
        virtualNetworkRules = [
          {
            action = "Allow"
            id = "string"
          }
        ]
      }
      protocolType = "string"
    }
  })
}

```

### elasticSans/volumegroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:elasticSans |
| identity | The identity of the resource. | Identity |
| properties | Properties of VolumeGroup. | VolumeGroupProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this volume group. The key is the ARM resource identifier of the identity. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### VolumeGroupProperties

| Name | Description | Value |
|-|-|-|
| encryption | Type of encryption | 'EncryptionAtRestWithCustomerManagedKey''EncryptionAtRestWithPlatformKey' |
| encryptionProperties | Encryption Properties describing Key Vault and Identity information | EncryptionProperties |
| networkAcls | A collection of rules governing the accessibility from specific network locations. | NetworkRuleSet |
| protocolType | Type of storage target | 'Iscsi''None' |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| identity | The identity to be used with service-side encryption at rest. | EncryptionIdentity |
| keyVaultProperties | Properties provided by key vault. | KeyVaultProperties |


### EncryptionIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | Resource identifier of the UserAssigned identity to be associated with server-side encryption on the volume group. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of KeyVault key. | string |
| keyVaultUri | The Uri of KeyVault. | string |
| keyVersion | The version of KeyVault key. | string |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| virtualNetworkRules | The list of virtual network rules. | VirtualNetworkRule[] |


### VirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| action | The action of virtual network rule. | 'Allow' |
| id | Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}. | string (required) |
## Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creationData = {
        sourceId = "string"
      }
    }
  })
}

```

### elasticSans/volumegroups/snapshots

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumegroups |
| properties | Properties of Volume Snapshot. | SnapshotProperties(required) |


### SnapshotProperties

| Name | Description | Value |
|-|-|-|
| creationData | Data used when creating a volume snapshot. | SnapshotCreationData(required) |


### SnapshotCreationData

| Name | Description | Value |
|-|-|-|
| sourceId | Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}" | string (required) |
## Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creationData = {
        createSource = "string"
        sourceId = "string"
      }
      managedBy = {
        resourceId = "string"
      }
      sizeGiB = int
    }
  })
}

```

### elasticSans/volumegroups/volumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumegroups |
| properties | Properties of Volume. | VolumeProperties(required) |


### VolumeProperties

| Name | Description | Value |
|-|-|-|
| creationData | State of the operation on the resource. | SourceCreationData |
| managedBy | Parent resource information. | ManagedByInfo |
| sizeGiB | Volume size. | int (required) |


### SourceCreationData

| Name | Description | Value |
|-|-|-|
| createSource | This enumerates the possible sources of a volume creation. | 'Disk''DiskRestorePoint''DiskSnapshot''None''VolumeSnapshot' |
| sourceId | Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}" | string |


### ManagedByInfo

| Name | Description | Value |
|-|-|-|
| resourceId | Resource ID of the resource managing the volume, this is a restricted field and can only be set for internal use. | string |
