## Microsoft.DeploymentManager/artifactSources@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/artifactSources@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifactRoot = "string"
      authentication = {
        type = "string"
        // For remaining properties, see Authentication objects
      }
      sourceType = "string"
    }
  })
}

```

## Microsoft.DeploymentManager/rollouts@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/rollouts@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    identityIds = [
      "string"
    ]
    type = "string"
  }
  body = jsonencode({
    properties = {
      artifactSourceId = "string"
      buildVersion = "string"
      stepGroups = [
        {
          dependsOnStepGroups = [
            "string"
          ]
          deploymentTargetId = "string"
          name = "string"
          postDeploymentSteps = [
            {
              stepId = "string"
            }
          ]
          preDeploymentSteps = [
            {
              stepId = "string"
            }
          ]
        }
      ]
      targetServiceTopologyId = "string"
    }
  })
}

```

## Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifactSourceId = "string"
    }
  })
}

```

## Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      targetLocation = "string"
      targetSubscriptionId = "string"
    }
  })
}

```

## Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifacts = {
        parametersArtifactSourceRelativePath = "string"
        parametersUri = "string"
        templateArtifactSourceRelativePath = "string"
        templateUri = "string"
      }
      deploymentMode = "string"
      targetResourceGroup = "string"
    }
  })
}

```

## Microsoft.DeploymentManager/steps@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/steps@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      stepType = "string"
      // For remaining properties, see StepProperties objects
    }
  })
}

```

