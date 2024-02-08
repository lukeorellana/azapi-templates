```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destinationAccount = "string"
      rules = [
        {
          destinationContainer = "string"
          filters = {
            minCreationTime = "string"
            prefixMatch = [
              "string"
            ]
          }
          ruleId = "string"
          sourceContainer = "string"
        }
      ]
      sourceAccount = "string"
    }
  })
}

```

### storageAccounts/objectReplicationPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Returns the Storage Account Object Replication Policy. | ObjectReplicationPolicyProperties |


### ObjectReplicationPolicyProperties

| Name | Description | Value |
|-|-|-|
| destinationAccount | Required. Destination account name. It should be full resource id if allowCrossTenantReplication set to false. | string (required) |
| rules | The storage account object replication rules. | ObjectReplicationPolicyRule[] |
| sourceAccount | Required. Source account name. It should be full resource id if allowCrossTenantReplication set to false. | string (required) |


### ObjectReplicationPolicyRule

| Name | Description | Value |
|-|-|-|
| destinationContainer | Required. Destination container name. | string (required) |
| filters | Optional. An object that defines the filter set. | ObjectReplicationPolicyFilter |
| ruleId | Rule Id is auto-generated for each new rule on destination account. It is required for put policy on source account. | string |
| sourceContainer | Required. Source container name. | string (required) |


### ObjectReplicationPolicyFilter

| Name | Description | Value |
|-|-|-|
| minCreationTime | Blobs created after the time will be replicated to the destination. It must be in datetime format 'yyyy-MM-ddTHH:mm:ssZ'. Example: 2020-02-19T16:05:00Z | string |
| prefixMatch | Optional. Filters the results to replicate only blobs whose names begin with the specified prefix. | string[] |


