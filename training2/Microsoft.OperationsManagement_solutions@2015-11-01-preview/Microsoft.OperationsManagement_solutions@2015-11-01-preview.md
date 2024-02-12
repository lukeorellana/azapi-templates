```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationsManagement/solutions@2015-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containedResources = [
        "string"
      ]
      referencedResources = [
        "string"
      ]
      workspaceResourceId = "string"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
    }
  })
}

```

### solutions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: N/AValid characters:For solutions authored by Microsoft, the name must be in the pattern:SolutionType(WorkspaceName)For solutions authored by third parties, the name must be in the pattern:SolutionType[WorkspaceName]For example, a valid name is:AntiMalware(contoso-IT)The solution type is case-sensitive. |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| plan | Plan for solution object supported by the OperationsManagement resource provider. | SolutionPlan |
| properties | Properties for solution object supported by the OperationsManagement resource provider. | SolutionProperties |


### SolutionPlan

| Name | Description | Value |
|-|-|-|
| name | name of the solution to be created. For Microsoft published solution it should be in the format of solutionType(workspaceName). SolutionType part is case sensitive. For third party solution, it can be anything. | string |
| product | name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/{solutionType}. This is case sensitive | string |
| promotionCode | promotionCode, Not really used now, can you left as empty | string |
| publisher | Publisher name. For gallery solution, it is Microsoft. | string |


### SolutionProperties

| Name | Description | Value |
|-|-|-|
| containedResources | The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted. | string[] |
| referencedResources | The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution. | string[] |
| workspaceResourceId | The azure resourceId for the workspace where the solution will be deployed/enabled. | string (required) |

