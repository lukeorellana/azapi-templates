```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces@2017-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createdAt = "string"
      critical = bool
      dataCenter = "string"
      enabled = bool
      name = "string"
      namespaceType = "string"
      provisioningState = "string"
      region = "string"
      scaleUnit = "string"
      serviceBusEndpoint = "string"
      status = "string"
      subscriptionId = "string"
      updatedAt = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphensStart with letter. End with alphanumeric.Resource name must be unique across Azure. |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the created namespace | Sku |
| properties | Properties of the Namespace. | NamespaceProperties |


### NamespaceProperties

| Name | Description | Value |
|-|-|-|
| createdAt | The time the namespace was created. | string |
| critical | Whether or not the namespace is set as Critical. | bool |
| dataCenter | Data center for the namespace | string |
| enabled | Whether or not the namespace is currently enabled. | bool |
| name | The name of the namespace. | string |
| namespaceType | The namespace type. | 'Messaging''NotificationHub' |
| provisioningState | Provisioning state of the Namespace. | string |
| region | Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe | string |
| scaleUnit | ScaleUnit where the namespace gets created | string |
| serviceBusEndpoint | Endpoint you can use to perform NotificationHub operations. | string |
| status | Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting | string |
| subscriptionId | The Id of the Azure subscription associated with the namespace. | string |
| updatedAt | The time the namespace was updated. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the resource | int |
| family | The Sku Family | string |
| name | Name of the notification hub sku | 'Basic''Free''Standard' (required) |
| size | The Sku size | string |
| tier | The tier of particular sku | string |


