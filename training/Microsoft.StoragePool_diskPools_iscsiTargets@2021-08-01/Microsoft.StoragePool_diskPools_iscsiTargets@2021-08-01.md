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


