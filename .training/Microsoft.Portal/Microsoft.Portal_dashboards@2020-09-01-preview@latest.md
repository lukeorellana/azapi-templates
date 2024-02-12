```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Portal/dashboards@2020-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      lenses = [
        {
          metadata = {}
          order = int
          parts = [
            {
              metadata = {
                type = "string"
                // For remaining properties, see DashboardPartMetadata objects
              }
              position = {
                colSpan = int
                metadata = {}
                rowSpan = int
                x = int
                y = int
              }
            }
          ]
        }
      ]
      metadata = {}
    }
  })
}

```

### dashboards

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-160Valid characters:Alphanumerics and hyphens.To use restricted characters, add a tag namedhidden-titlewith the dashboard name you want to use. The portal displays that name when showing the dashboard. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The shared dashboard properties. | DashboardProperties |


### DashboardProperties

| Name | Description | Value |
|-|-|-|
| lenses | The dashboard lenses. | DashboardLens[] |
| metadata | The dashboard metadata. | object |


### DashboardLens

| Name | Description | Value |
|-|-|-|
| metadata | The dashboard len's metadata. | object |
| order | The lens order. | int (required) |
| parts | The dashboard parts. | DashboardParts[] (required) |


### DashboardParts

| Name | Description | Value |
|-|-|-|
| metadata | The dashboard part's metadata. | DashboardPartMetadata |
| position | The dashboard's part position. | DashboardPartsPosition(required) |


### DashboardPartMetadata

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Extension/HubsExtension/PartType/MarkdownPart(required) |


### MarkdownPartMetadata

| Name | Description | Value |
|-|-|-|
| type | The type of dashboard part. | 'Extension/HubsExtension/PartType/MarkdownPart' (required) |
| inputs | Input to dashboard part. | any[] |
| settings | Markdown part settings. | MarkdownPartMetadataSettings |


### MarkdownPartMetadataSettings

| Name | Description | Value |
|-|-|-|
| content | The content of markdown part. | MarkdownPartMetadataSettingsContent |


### MarkdownPartMetadataSettingsContent

| Name | Description | Value |
|-|-|-|
| settings | The setting of the content of markdown part. | MarkdownPartMetadataSettingsContentSettings |


### MarkdownPartMetadataSettingsContentSettings

| Name | Description | Value |
|-|-|-|
| content | The content of the markdown part. | string |
| markdownSource | The source of the content of the markdown part. | int |
| markdownUri | The uri of markdown content. | string |
| subtitle | The subtitle of the markdown part. | string |
| title | The title of the markdown part. | string |


### DashboardPartsPosition

| Name | Description | Value |
|-|-|-|
| colSpan | The dashboard's part column span. | int (required) |
| metadata | The dashboard part's metadata. | object |
| rowSpan | The dashboard's part row span. | int (required) |
| x | The dashboard's part x coordinate. | int (required) |
| y | The dashboard's part y coordinate. | int (required) |


