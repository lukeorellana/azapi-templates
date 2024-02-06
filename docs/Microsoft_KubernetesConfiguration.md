## Microsoft.KubernetesConfiguration/extensions@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/extensions@2022-11-01"
  name = "string"
  parent_id = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      aksAssignedIdentity = {
        type = "string"
      }
      autoUpgradeMinorVersion = bool
      configurationProtectedSettings = {}
      configurationSettings = {}
      extensionType = "string"
      releaseTrain = "string"
      scope = {
        cluster = {
          releaseNamespace = "string"
        }
        namespace = {
          targetNamespace = "string"
        }
      }
      statuses = [
        {
          code = "string"
          displayStatus = "string"
          level = "string"
          message = "string"
          time = "string"
        }
      ]
      version = "string"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

## Microsoft.KubernetesConfiguration/fluxConfigurations@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/fluxConfigurations@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureBlob = {
        accountKey = "string"
        containerName = "string"
        localAuthRef = "string"
        managedIdentity = {
          clientId = "string"
        }
        sasToken = "string"
        servicePrincipal = {
          clientCertificate = "string"
          clientCertificatePassword = "string"
          clientCertificateSendChain = bool
          clientId = "string"
          clientSecret = "string"
          tenantId = "string"
        }
        syncIntervalInSeconds = int
        timeoutInSeconds = int
        url = "string"
      }
      bucket = {
        accessKey = "string"
        bucketName = "string"
        insecure = bool
        localAuthRef = "string"
        syncIntervalInSeconds = int
        timeoutInSeconds = int
        url = "string"
      }
      configurationProtectedSettings = {}
      gitRepository = {
        httpsCACert = "string"
        httpsUser = "string"
        localAuthRef = "string"
        repositoryRef = {
          branch = "string"
          commit = "string"
          semver = "string"
          tag = "string"
        }
        sshKnownHosts = "string"
        syncIntervalInSeconds = int
        timeoutInSeconds = int
        url = "string"
      }
      kustomizations = {}
      namespace = "string"
      scope = "string"
      sourceKind = "string"
      suspend = bool
    }
  })
}

```

## Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections@2022-04-02-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections@2022-04-02-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

## Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      configurationProtectedSettings = {}
      enableHelmOperator = bool
      helmOperatorProperties = {
        chartValues = "string"
        chartVersion = "string"
      }
      operatorInstanceName = "string"
      operatorNamespace = "string"
      operatorParams = "string"
      operatorScope = "string"
      operatorType = "Flux"
      repositoryUrl = "string"
      sshKnownHostsContents = "string"
    }
  })
}

```

