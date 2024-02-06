## Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      blueprintId = "string"
      description = "string"
      displayName = "string"
      locks = {
        excludedPrincipals = [
          "string"
        ]
        mode = "string"
      }
      parameters = {}
      resourceGroups = {}
      scope = "string"
    }
  })
}

```

## Microsoft.Blueprint/blueprints@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      parameters = {}
      resourceGroups = {}
      targetScope = "string"
    }
  })
}

```

## Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see blueprints/artifacts objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Blueprint/blueprints/versions@2018-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints/versions@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      blueprintName = "string"
      changeNotes = "string"
      description = "string"
      displayName = "string"
      parameters = {}
      resourceGroups = {}
      targetScope = "string"
    }
  })
}

```

