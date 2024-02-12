```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      capacityLimit = int
      capacityObjectId = "string"
    }
    systemData = {
      createdAt = "string"
      createdBy = "string"
      createdByType = "string"
      lastModifiedAt = "string"
      lastModifiedBy = "string"
      lastModifiedByType = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "AutoScale"
    }
  })
}

```

### autoScaleVCores

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the PowerBI Dedicated resource. | string (required) |
| tags | Key-value pairs of additional resource provisioning properties. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the auto scale v-core resource. | AutoScaleVCoreSku(required) |
| properties | Properties of an auto scale v-core resource. | AutoScaleVCoreProperties |
| systemData | Metadata pertaining to creation and last modification of the resource. | SystemData |


### AutoScaleVCoreProperties

| Name | Description | Value |
|-|-|-|
| capacityLimit | The maximum capacity of an auto scale v-core resource. | int |
| capacityObjectId | The object ID of the capacity resource associated with the auto scale v-core resource. | string |


### AutoScaleVCoreSku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of an auto scale v-core resource. | int |
| name | Name of the SKU level. | string (required) |
| tier | The name of the Azure pricing tier to which the SKU applies. | 'AutoScale' |


### SystemData

| Name | Description | Value |
|-|-|-|
| createdAt | The timestamp of resource creation (UTC) | string |
| createdBy | An identifier for the identity that created the resource | string |
| createdByType | The type of identity that created the resource | 'Application''Key''ManagedIdentity''User' |
| lastModifiedAt | The timestamp of resource last modification (UTC) | string |
| lastModifiedBy | An identifier for the identity that last modified the resource | string |
| lastModifiedByType | The type of identity that last modified the resource | 'Application''Key''ManagedIdentity''User' |


