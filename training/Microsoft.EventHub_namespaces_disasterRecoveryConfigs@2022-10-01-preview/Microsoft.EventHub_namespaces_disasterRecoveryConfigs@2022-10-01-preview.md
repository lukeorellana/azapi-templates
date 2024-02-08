```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternateName = "string"
      partnerNamespace = "string"
    }
  })
}

```

### namespaces/disasterRecoveryConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter. End with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties required to the Create Or Update Alias(Disaster Recovery configurations) | ArmDisasterRecoveryProperties |


### ArmDisasterRecoveryProperties

| Name | Description | Value |
|-|-|-|
| alternateName | Alternate name specified when alias and namespace names are same. | string |
| partnerNamespace | ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing | string |


