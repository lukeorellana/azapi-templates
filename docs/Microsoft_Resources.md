## Microsoft.Resources/deployments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/deployments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      debugSetting = {
        detailLevel = "string"
      }
      expressionEvaluationOptions = {
        scope = "string"
      }
      mode = "string"
      onErrorDeployment = {
        deploymentName = "string"
        type = "string"
      }
      parametersLink = {
        contentVersion = "string"
        uri = "string"
      }
      templateLink = {
        contentVersion = "string"
        id = "string"
        queryString = "string"
        relativePath = "string"
        uri = "string"
      }
    }
    resourceGroup = "string"
    subscriptionId = "string"
    scope = "string"
  })
}

```

## Microsoft.Resources/deploymentScripts@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/deploymentScripts@2020-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "UserAssigned"
    identity_ids = []
  }
  // For remaining properties, see deploymentScripts objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Resources/resourceGroups@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/resourceGroups@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    managedBy = "string"
  })
}

```

## Microsoft.Resources/tags@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/tags@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      tags = {
        tagName1 = "tagValue1"
        tagName2 = "tagValue2"
      }
    }
  })
}

```

## Microsoft.Resources/templateSpecs@2022-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/templateSpecs@2022-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
    }
  })
}

```

## Microsoft.Resources/templateSpecs/versions@2022-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/templateSpecs/versions@2022-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      linkedTemplates = [
        {
          path = "string"
        }
      ]
    }
  })
}

```

