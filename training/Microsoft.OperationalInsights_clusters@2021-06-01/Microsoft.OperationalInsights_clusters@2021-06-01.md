```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/clusters@2021-06-01"
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
      associatedWorkspaces = [
        {
        }
      ]
      billingType = "string"
      capacityReservationProperties = {}
      isAvailabilityZonesEnabled = bool
      isDoubleEncryptionEnabled = bool
      keyVaultProperties = {
        keyName = "string"
        keyRsaSize = int
        keyVaultUri = "string"
        keyVersion = "string"
      }
    }
    sku = {
      capacity = int
      name = "CapacityReservation"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku properties. | ClusterSku |
| identity | The identity of the resource. | Identity |
| properties | Log Analytics cluster properties. | ClusterProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| associatedWorkspaces | The list of Log Analytics workspaces associated with the cluster | AssociatedWorkspace[] |
| billingType | The cluster's billing type. | 'Cluster''Workspaces' |
| capacityReservationProperties | Additional properties for capacity reservation | CapacityReservationProperties |
| isAvailabilityZonesEnabled | Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones. | bool |
| isDoubleEncryptionEnabled | Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true' | bool |
| keyVaultProperties | The associated key properties. | KeyVaultProperties |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key associated with the Log Analytics cluster. | string |
| keyRsaSize | Selected key minimum required size. | int |
| keyVaultUri | The Key Vault uri which holds they key associated with the Log Analytics cluster. | string |
| keyVersion | The version of the key associated with the Log Analytics cluster. | string |


### ClusterSku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity value | int |
| name | The name of the SKU. | 'CapacityReservation' |


