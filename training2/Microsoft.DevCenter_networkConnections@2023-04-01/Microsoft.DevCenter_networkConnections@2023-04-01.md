```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/networkConnections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainJoinType = "string"
      domainName = "string"
      domainPassword = "string"
      domainUsername = "string"
      networkingResourceGroupName = "string"
      organizationUnit = "string"
      subnetId = "string"
    }
  })
}

```

### networkConnections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a Network Connection | NetworkProperties |


### NetworkProperties

| Name | Description | Value |
|-|-|-|
| domainJoinType | AAD Join type. | 'AzureADJoin''HybridAzureADJoin' (required) |
| domainName | Active Directory domain name | string |
| domainPassword | The password for the account used to join domain | string |
| domainUsername | The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com. | string |
| networkingResourceGroupName | The name for resource group where NICs will be placed. | string |
| organizationUnit | Active Directory domain Organization Unit (OU) | string |
| subnetId | The subnet to attach Virtual Machines to | string |


