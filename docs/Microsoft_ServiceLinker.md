## Microsoft.ServiceLinker/dryruns@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceLinker/dryruns@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        actionName = "string"
        // For remaining properties, see DryrunParameters objects
      }
    }
  })
}

```

## Microsoft.ServiceLinker/linkers@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceLinker/linkers@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authInfo = {
        authType = "string"
        // For remaining properties, see AuthInfoBase objects
      }
      clientType = "string"
      configurationInfo = {
        action = "string"
        additionalConfigurations = {}
        customizedKeys = {}
        deleteOrUpdateBehavior = "string"
      }
      publicNetworkSolution = {
        action = "string"
        deleteOrUpdateBehavior = "string"
        firewallRules = {
          azureServices = "string"
          callerClientIP = "string"
          ipRanges = [
            "string"
          ]
        }
      }
      scope = "string"
      secretStore = {
        keyVaultId = "string"
        keyVaultSecretName = "string"
      }
      targetService = {
        type = "string"
        // For remaining properties, see TargetServiceBase objects
      }
      vNetSolution = {
        deleteOrUpdateBehavior = "string"
        type = "string"
      }
    }
  })
}

```

## Microsoft.ServiceLinker/locations/connectors@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceLinker/locations/connectors@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authInfo = {
        authType = "string"
        // For remaining properties, see AuthInfoBase objects
      }
      clientType = "string"
      configurationInfo = {
        action = "string"
        additionalConfigurations = {}
        customizedKeys = {}
        deleteOrUpdateBehavior = "string"
      }
      publicNetworkSolution = {
        action = "string"
        deleteOrUpdateBehavior = "string"
        firewallRules = {
          azureServices = "string"
          callerClientIP = "string"
          ipRanges = [
            "string"
          ]
        }
      }
      scope = "string"
      secretStore = {
        keyVaultId = "string"
        keyVaultSecretName = "string"
      }
      targetService = {
        type = "string"
        // For remaining properties, see TargetServiceBase objects
      }
      vNetSolution = {
        deleteOrUpdateBehavior = "string"
        type = "string"
      }
    }
  })
}

```

## Microsoft.ServiceLinker/locations/dryruns@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceLinker/locations/dryruns@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        actionName = "string"
        // For remaining properties, see DryrunParameters objects
      }
    }
  })
}

```

