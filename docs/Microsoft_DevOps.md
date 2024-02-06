## Microsoft.DevOps/pipelines@2020-07-13-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevOps/pipelines@2020-07-13-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bootstrapConfiguration = {
        sourceRepository = {
          authorization = {
            authorizationType = "personalAccessToken"
            parameters = {}
          }
          defaultBranch = "string"
          id = "string"
          properties = {}
          repositoryType = "string"
        }
        template = {
          id = "string"
          parameters = {}
        }
      }
      pipelineType = "string"
      // For remaining properties, see PipelineProperties objects
    }
  })
}

```

