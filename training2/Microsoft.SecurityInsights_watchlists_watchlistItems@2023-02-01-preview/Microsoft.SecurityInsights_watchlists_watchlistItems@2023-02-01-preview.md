```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/watchlists/watchlistItems@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      created = "string"
      createdBy = {
        objectId = "string"
      }
      entityMapping = {}
      isDeleted = bool
      itemsKeyValue = {}
      tenantId = "string"
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
      watchlistItemId = "string"
      watchlistItemType = "string"
    }
    etag = "string"
  })
}

```

### watchlists/watchlistItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:watchlists |
| etag | Etag of the azure resource | string |
| properties | Watchlist Item properties | WatchlistItemProperties |


### WatchlistItemProperties

| Name | Description | Value |
|-|-|-|
| created | The time the watchlist item was created | string |
| createdBy | Describes a user that created the watchlist item | UserInfo |
| entityMapping | key-value pairs for a watchlist item entity mapping | object |
| isDeleted | A flag that indicates if the watchlist item is deleted or not | bool |
| itemsKeyValue | key-value pairs for a watchlist item | object (required) |
| tenantId | The tenantId to which the watchlist item belongs to | string |
| updated | The last time the watchlist item was updated | string |
| updatedBy | Describes a user that updated the watchlist item | UserInfo |
| watchlistItemId | The id (a Guid) of the watchlist item | string |
| watchlistItemType | The type of the watchlist item | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |


