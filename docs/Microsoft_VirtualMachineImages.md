## Microsoft.VirtualMachineImages/imageTemplates@2022-02-14

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.VirtualMachineImages/imageTemplates@2022-02-14"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      buildTimeoutInMinutes = int
      customize = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ImageTemplateCustomizer objects
        }
      ]
      distribute = [
        {
          artifactTags = {}
          runOutputName = "string"
          type = "string"
          // For remaining properties, see ImageTemplateDistributor objects
        }
      ]
      source = {
        type = "string"
        // For remaining properties, see ImageTemplateSource objects
      }
      stagingResourceGroup = "string"
      validate = {
        continueDistributeOnFailure = bool
        inVMValidations = [
          {
            name = "string"
            type = "string"
            // For remaining properties, see ImageTemplateInVMValidator objects
          }
        ]
        sourceValidationOnly = bool
      }
      vmProfile = {
        osDiskSizeGB = int
        userAssignedIdentities = [
          "string"
        ]
        vmSize = "string"
        vnetConfig = {
          proxyVmSize = "string"
          subnetId = "string"
        }
      }
    }
  })
}

```

