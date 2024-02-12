```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases/relations@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relationName = "string"
      sourceRelationNode = {
        etag = "string"
        relationAdditionalProperties = {}
        relationNodeId = "string"
      }
      targetRelationNode = {
        etag = "string"
        relationAdditionalProperties = {}
        relationNodeId = "string"
      }
    }
    etag = "string"
  })
}

```

### cases/relations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cases |
| etag | ETag for relation | string |
| properties | Relation input properties | RelationsModelInputPropertiesOrCaseRelationPropertie... |


### RelationsModelInputPropertiesOrCaseRelationPropertie...

| Name | Description | Value |
|-|-|-|
| relationName | Name of relation | string |
| sourceRelationNode | Relation source node | RelationNode |
| targetRelationNode | Relation target node | RelationNode |


### RelationNode

| Name | Description | Value |
|-|-|-|
| etag | Etag for relation node | string |
| relationAdditionalProperties | Additional set of properties | object |
| relationNodeId | Relation Node Id | string |


