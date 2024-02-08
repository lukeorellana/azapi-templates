```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managedResourceId = "string"
      moName = "string"
      moRefId = "string"
      inventoryType = "string"
      // For remaining properties, see InventoryItemProperties objects
    }
    kind = "string"
  })
}

```

### vcenters/inventoryItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vcenters |
| properties | Resource properties. | InventoryItemProperties(required) |


### InventoryItemProperties

| Name | Description | Value |
|-|-|-|
| managedResourceId | Gets or sets the tracked resource id corresponding to the inventory resource. | string |
| moName | Gets or sets the vCenter Managed Object name for the inventory item. | string |
| moRefId | Gets or sets the MoRef (Managed Object Reference) ID for the inventory item. | string |
| inventoryType | Set the object type | ClusterDatastoreHostResourcePoolVirtualMachineVirtualMachineTemplateVirtualNetwork(required) |


### ClusterInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'Cluster' (required) |


### DatastoreInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'Datastore' (required) |
| capacityGB | Gets or sets Maximum capacity of this datastore, in GBs. | int |
| freeSpaceGB | Gets or sets Available space of this datastore, in GBs. | int |


### HostInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'Host' (required) |
| parent | Parent host inventory resource details. | InventoryItemDetails |


### InventoryItemDetails

| Name | Description | Value |
|-|-|-|
| inventoryItemId | Gets or sets the inventory Item ID for the resource. | string |
| inventoryType | The inventory type. | 'Cluster''Datastore''Host''ResourcePool''VirtualMachine''VirtualMachineTemplate''VirtualNetwork' |
| moName | Gets or sets the vCenter Managed Object name for the resource. | string |


### ResourcePoolInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'ResourcePool' (required) |
| parent | Parent resourcePool inventory resource details. | InventoryItemDetails |


### VirtualMachineInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'VirtualMachine' (required) |
| cluster | Cluster inventory resource details. | InventoryItemDetails |
| folderPath | Gets or sets the folder path of the vm. | string |
| host | Host inventory resource details. | InventoryItemDetails |
| instanceUuid | Gets or sets the instance uuid of the vm. | string |
| ipAddresses | Gets or sets the nic ip addresses. | string[] |
| osName | Gets or sets os name. | string |
| osType | Gets or sets the type of the os. | 'Linux''Other''Windows' |
| resourcePool | ResourcePool inventory resource details. | InventoryItemDetails |
| smbiosUuid | Gets or sets the SMBIOS UUID of the vm. | string |


### VirtualMachineTemplateInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'VirtualMachineTemplate' (required) |
| folderPath | Gets or sets the folder path of the template. | string |
| memorySizeMB | Gets or sets memory size in MBs for the template. | int |
| numCoresPerSocket | Gets or sets the number of cores per socket for the template.Defaults to 1 if unspecified. | int |
| numCPUs | Gets or sets the number of vCPUs for the template. | int |
| osName | Gets or sets os name. | string |
| osType | Gets or sets the type of the os. | 'Linux''Other''Windows' |


### VirtualNetworkInventoryItem

| Name | Description | Value |
|-|-|-|
| inventoryType | They inventory type. | 'VirtualNetwork' (required) |


