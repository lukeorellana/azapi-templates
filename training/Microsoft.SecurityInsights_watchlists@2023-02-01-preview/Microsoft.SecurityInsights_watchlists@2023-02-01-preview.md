```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/watchlists@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      created = "string"
      createdBy = {
        objectId = "string"
      }
      defaultDuration = "string"
      description = "string"
      displayName = "string"
      isDeleted = bool
      itemsSearchKey = "string"
      labels = [
        "string"
      ]
      numberOfLinesToSkip = int
      provider = "string"
      rawContent = "string"
      source = "string"
      sourceType = "string"
      tenantId = "string"
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
      uploadStatus = "string"
      watchlistAlias = "string"
      watchlistId = "string"
      watchlistType = "string"
    }
    etag = "string"
  })
}

```

### watchlists

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| etag | Etag of the azure resource | string |
| properties | Watchlist properties | WatchlistProperties |


### WatchlistProperties

| Name | Description | Value |
|-|-|-|
| contentType | The content type of the raw content. Example : text/csv or text/tsv | string |
| created | The time the watchlist was created | string |
| createdBy | Describes a user that created the watchlist | UserInfo |
| defaultDuration | The default duration of a watchlist (in ISO 8601 duration format) | string |
| description | A description of the watchlist | string |
| displayName | The display name of the watchlist | string (required) |
| isDeleted | A flag that indicates if the watchlist is deleted or not | bool |
| itemsSearchKey | The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address. | string (required) |
| labels | List of labels relevant to this watchlist | string[] |
| numberOfLinesToSkip | The number of lines in a csv/tsv content to skip before the header | int |
| provider | The provider of the watchlist | string (required) |
| rawContent | The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint | string |
| source | The filename of the watchlist, called 'source' | string |
| sourceType | The sourceType of the watchlist | 'Local file''Remote storage' |
| tenantId | The tenantId where the watchlist belongs to | string |
| updated | The last time the watchlist was updated | string |
| updatedBy | Describes a user that updated the watchlist | UserInfo |
| uploadStatus | The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted | string |
| watchlistAlias | The alias of the watchlist | string |
| watchlistId | The id (a Guid) of the watchlist | string |
| watchlistType | The type of the watchlist | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| objectId | The object id of the user. | string |


