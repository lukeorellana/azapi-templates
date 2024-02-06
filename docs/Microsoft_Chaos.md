## Microsoft.Chaos/experiments@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/experiments@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      selectors = [
        {
          filter = {
            type = "string"
            // For remaining properties, see Filter objects
          }
          id = "string"
          targets = [
            {
              id = "string"
              type = "ChaosTarget"
            }
          ]
          type = "string"
        }
      ]
      startOnCreation = bool
      steps = [
        {
          branches = [
            {
              actions = [
                {
                  name = "string"
                  type = "string"
                  // For remaining properties, see Action objects
                }
              ]
              name = "string"
            }
          ]
          name = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Chaos/targets@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/targets@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Chaos/targets/capabilities@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/targets/capabilities@2022-10-01-preview"
  name = "string"
  parent_id = "string"
}

```

