## Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationId = "string"
    }
  })
}

```

## Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationId = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      parentResourceType = "string"
    }
  })
}

```

## Microsoft.OperationsManagement/solutions@2015-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationsManagement/solutions@2015-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containedResources = [
        "string"
      ]
      referencedResources = [
        "string"
      ]
      workspaceResourceId = "string"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
    }
  })
}

```

