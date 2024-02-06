## Microsoft.Management/managementGroups@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups@2021-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      details = {
        parent = {
          id = "string"
        }
      }
      displayName = "string"
    }
  })
}

```

## Microsoft.Management/managementGroups/settings@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups/settings@2021-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultManagementGroup = "string"
      requireAuthorizationForGroupCreation = bool
    }
  })
}

```

## Microsoft.Management/managementGroups/subscriptions@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups/subscriptions@2021-04-01"
  name = "string"
  parent_id = "string"
}

```

