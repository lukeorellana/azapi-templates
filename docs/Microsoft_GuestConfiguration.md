## Microsoft.GuestConfiguration/guestConfigurationAssignments@2022-01-25

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.GuestConfiguration/guestConfigurationAssignments@2022-01-25"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      context = "string"
      guestConfiguration = {
        assignmentType = "string"
        configurationParameter = [
          {
            name = "string"
            value = "string"
          }
        ]
        configurationProtectedParameter = [
          {
            name = "string"
            value = "string"
          }
        ]
        contentHash = "string"
        contentUri = "string"
        kind = "DSC"
        name = "string"
        version = "string"
      }
      latestAssignmentReport = {
        assignment = {
          configuration = {}
        }
        resources = [
          {
            reasons = [
              {
              }
            ]
          }
        ]
        vm = {}
      }
      vmssVMList = [
        {
        }
      ]
    }
  })
}

```

