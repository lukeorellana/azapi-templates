## Microsoft.ApiCenter/services@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services@2024-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.ApiCenter/services/metadataSchemas@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/metadataSchemas@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignedTo = [
        {
          deprecated = bool
          entity = "string"
          required = bool
        }
      ]
      schema = "string"
    }
  })
}

```

## Microsoft.ApiCenter/services/workspaces@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      title = "string"
    }
  })
}

```

## Microsoft.ApiCenter/services/workspaces/apis@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contacts = [
        {
          email = "string"
          name = "string"
          url = "string"
        }
      ]
      description = "string"
      externalDocumentation = [
        {
          description = "string"
          title = "string"
          url = "string"
        }
      ]
      kind = "string"
      license = {
        identifier = "string"
        name = "string"
        url = "string"
      }
      summary = "string"
      termsOfService = {
        url = "string"
      }
      title = "string"
    }
  })
}

```

## Microsoft.ApiCenter/services/workspaces/apis/deployments@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/deployments@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definitionId = "string"
      description = "string"
      environmentId = "string"
      server = {
        runtimeUri = [
          "string"
        ]
      }
      state = "string"
      title = "string"
    }
  })
}

```

## Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      lifecycleStage = "string"
      title = "string"
    }
  })
}

```

## Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      title = "string"
    }
  })
}

```

## Microsoft.ApiCenter/services/workspaces/environments@2024-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/environments@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      kind = "string"
      onboarding = {
        developerPortalUri = [
          "string"
        ]
        instructions = "string"
      }
      server = {
        managementPortalUri = [
          "string"
        ]
        type = "string"
      }
      title = "string"
    }
  })
}

```

