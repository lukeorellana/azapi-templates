```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowProtectedAppendWrites = bool
      allowProtectedAppendWritesAll = bool
      immutabilityPeriodSinceCreationInDays = int
    }
  })
}

```

### storageAccounts/blobServices/containers/immutability...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | The properties of an ImmutabilityPolicy of a blob container. | ImmutabilityPolicyProperty(required) |


### ImmutabilityPolicyProperty

| Name | Description | Value |
|-|-|-|
| allowProtectedAppendWrites | This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. | bool |
| allowProtectedAppendWritesAll | This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive. | bool |
| immutabilityPeriodSinceCreationInDays | The immutability period for the blobs in the container since the policy creation, in days. | int |


