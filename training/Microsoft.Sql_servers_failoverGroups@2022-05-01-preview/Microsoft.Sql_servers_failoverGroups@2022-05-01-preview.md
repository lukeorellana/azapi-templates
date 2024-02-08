```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/failoverGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      databases = [
        "string"
      ]
      partnerServers = [
        {
          id = "string"
        }
      ]
      readWriteEndpoint = {
        failoverPolicy = "string"
        failoverWithDataLossGracePeriodMinutes = int
      }
    }
  })
}

```

### servers/failoverGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen.Resource name must be unique across Azure. |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | FailoverGroupProperties |


### FailoverGroupProperties

| Name | Description | Value |
|-|-|-|
| databases | List of databases in the failover group. | string[] |
| partnerServers | List of partner server information for the failover group. | PartnerInfo[] (required) |
| readWriteEndpoint | Read-write endpoint of the failover group instance. | FailoverGroupReadWriteEndpoint(required) |


### PartnerInfo

| Name | Description | Value |
|-|-|-|
| id | Resource identifier of the partner server. | string (required) |


### FailoverGroupReadWriteEndpoint

| Name | Description | Value |
|-|-|-|
| failoverPolicy | Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | 'Automatic''Manual' (required) |
| failoverWithDataLossGracePeriodMinutes | Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | int |


