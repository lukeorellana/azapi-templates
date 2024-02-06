## Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      scope = {
        managementGroups = [
          {
            id = "string"
          }
        ]
        subnets = [
          {
            id = "string"
          }
        ]
        subscriptions = [
          {
            id = "string"
          }
        ]
        virtualNetworks = [
          {
            id = "string"
          }
        ]
      }
    }
  })
}

```

## Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managementGroups = [
        {
          id = "string"
        }
      ]
      subnets = [
        {
          id = "string"
        }
      ]
      subscriptions = [
        {
          id = "string"
        }
      ]
      virtualNetworks = [
        {
          id = "string"
        }
      ]
    }
    kind = "Connectivity"
  })
}

```

## Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hub = {
        id = "string"
      }
      mesh = [
        {
          id = "string"
        }
      ]
      spokes = [
        {
          id = "string"
        }
      ]
      type = "string"
    }
  })
}

```

## Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignedManagedNetwork = "string"
    }
  })
}

```

