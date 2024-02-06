## Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01

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

## Microsoft.PowerBIDedicated/capacities@2021-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBIDedicated/capacities@2021-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      administration = {
        members = [
          "string"
        ]
      }
      mode = "string"
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
      tier = "string"
    }
  })
}

```

