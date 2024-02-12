```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Scheduler/jobCollections@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      quota = {
        maxJobCount = int
        maxJobOccurrence = int
        maxRecurrence = {
          frequency = "string"
          interval = int
        }
      }
      sku = {
        name = "string"
      }
      state = "string"
    }
  })
}

```

### jobCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the storage account location. | string |
| tags | Gets or sets the tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Gets or sets the job collection properties. | JobCollectionProperties |


### JobCollectionProperties

| Name | Description | Value |
|-|-|-|
| quota | Gets or sets the job collection quota. | JobCollectionQuota |
| sku | Gets or sets the SKU. | Sku |
| state | Gets or sets the state. | 'Deleted''Disabled''Enabled''Suspended' |


### JobCollectionQuota

| Name | Description | Value |
|-|-|-|
| maxJobCount | Gets or set the maximum job count. | int |
| maxJobOccurrence | Gets or sets the maximum job occurrence. | int |
| maxRecurrence | Gets or set the maximum recurrence. | JobMaxRecurrence |


### JobMaxRecurrence

| Name | Description | Value |
|-|-|-|
| frequency | Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). | 'Day''Hour''Minute''Month''Week' |
| interval | Gets or sets the interval between retries. | int |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Gets or set the SKU. | 'Free''P10Premium''P20Premium''Standard' |


