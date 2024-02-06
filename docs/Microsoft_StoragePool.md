## Microsoft.StoragePool/diskPools@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StoragePool/diskPools@2021-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = [
        "string"
      ]
      availabilityZones = [
        "string"
      ]
      disks = [
        {
          id = "string"
        }
      ]
      subnetId = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
    managedBy = "string"
    managedByExtended = [
      "string"
    ]
  })
}

```

### diskPools

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Determines the SKU of the Disk Pool | Sku(required) |
| managedBy | Azure resource id. Indicates if this resource is managed by another Azure resource. | string |
| managedByExtended | List of Azure resource ids that manage this resource. | string[] |
| properties | Properties for Disk Pool create request. | DiskPoolCreatePropertiesOrDiskPoolProperties(required) |


### DiskPoolCreatePropertiesOrDiskPoolProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | List of additional capabilities for a Disk Pool. | string[] |
| availabilityZones | Logical zone for Disk Pool resource; example: ["1"]. | string[] |
| disks | List of Azure Managed Disks to attach to a Disk Pool. | Disk[] |
| subnetId | Azure Resource ID of a Subnet for the Disk Pool. | string (required) |


### Disk

| Name | Description | Value |
|-|-|-|
| id | Unique Azure Resource ID of the Managed Disk. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Sku name | string (required) |
| tier | Sku tier | string |
## Microsoft.StoragePool/diskPools/iscsiTargets@2021-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StoragePool/diskPools/iscsiTargets@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aclMode = "string"
      luns = [
        {
          managedDiskAzureResourceId = "string"
          name = "string"
        }
      ]
      staticAcls = [
        {
          initiatorIqn = "string"
          mappedLuns = [
            "string"
          ]
        }
      ]
      targetIqn = "string"
    }
    managedBy = "string"
    managedByExtended = [
      "string"
    ]
  })
}

```

### diskPools/iscsiTargets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:diskPools |
| managedBy | Azure resource id. Indicates if this resource is managed by another Azure resource. | string |
| managedByExtended | List of Azure resource ids that manage this resource. | string[] |
| properties | Properties for iSCSI Target create request. | IscsiTargetCreatePropertiesOrIscsiTargetProperties(required) |


### IscsiTargetCreatePropertiesOrIscsiTargetProperties

| Name | Description | Value |
|-|-|-|
| aclMode | Mode for Target connectivity. | 'Dynamic''Static' (required) |
| luns | List of LUNs to be exposed through iSCSI Target. | IscsiLun[] |
| staticAcls | Access Control List (ACL) for an iSCSI Target; defines LUN masking policy | Acl[] |
| targetIqn | iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server". | string |


### IscsiLun

| Name | Description | Value |
|-|-|-|
| managedDiskAzureResourceId | Azure Resource ID of the Managed Disk. | string (required) |
| name | User defined name for iSCSI LUN; example: "lun0" | string (required) |


### Acl

| Name | Description | Value |
|-|-|-|
| initiatorIqn | iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client". | string (required) |
| mappedLuns | List of LUN names mapped to the ACL. | string[] (required) |
