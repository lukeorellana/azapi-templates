```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/accessControlRecords@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      initiatorName = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/accessControlRecords

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The properties of access control record. | AccessControlRecordProperties(required) |


### AccessControlRecordProperties

| Name | Description | Value |
|-|-|-|
| initiatorName | The iSCSI initiator name (IQN). | string (required) |


