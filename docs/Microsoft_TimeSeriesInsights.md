## Microsoft.TimeSeriesInsights/environments@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  // For remaining properties, see environments objects
  body = jsonencode({
    sku = {
      capacity = int
      name = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      principalObjectId = "string"
      roles = [
        "string"
      ]
    }
  })
}

```

## Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  // For remaining properties, see environments/eventSources objects
  body = jsonencode({
    kind = "string"
    localTimestamp = {
      format = "Embedded"
      timeZoneOffset = {
        propertyName = "string"
      }
    }
  })
}

```

## Microsoft.TimeSeriesInsights/environments/privateEndpointConnections@2021-03-31-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/privateEndpointConnections@2021-03-31-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataStringComparisonBehavior = "string"
      keyProperties = [
        {
          name = "string"
          type = "string"
        }
      ]
    }
  })
}

```

