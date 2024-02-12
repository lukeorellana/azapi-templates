```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      computePolicies = [
        {
          name = "string"
          properties = {
            maxDegreeOfParallelismPerJob = int
            minPriorityPerJob = int
            objectId = "string"
            objectType = "string"
          }
        }
      ]
      dataLakeStoreAccounts = [
        {
          name = "string"
          properties = {
            suffix = "string"
          }
        }
      ]
      defaultDataLakeStoreAccount = "string"
      firewallAllowAzureIps = "string"
      firewallRules = [
        {
          name = "string"
          properties = {
            endIpAddress = "string"
            startIpAddress = "string"
          }
        }
      ]
      firewallState = "string"
      maxDegreeOfParallelism = int
      maxDegreeOfParallelismPerJob = int
      maxJobCount = int
      minPriorityPerJob = int
      newTier = "string"
      queryStoreRetention = int
      storageAccounts = [
        {
          name = "string"
          properties = {
            accessKey = "string"
            suffix = "string"
          }
        }
      ]
    }
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers.Resource name must be unique across Azure. |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The Data Lake Analytics account properties to use for creating. | CreateDataLakeAnalyticsAccountPropertiesOrDataLakeAn...(required) |


### CreateDataLakeAnalyticsAccountPropertiesOrDataLakeAn...

| Name | Description | Value |
|-|-|-|
| computePolicies | The list of compute policies associated with this account. | CreateComputePolicyWithAccountParametersOrComputePol...[] |
| dataLakeStoreAccounts | The list of Data Lake Store accounts associated with this account. | AddDataLakeStoreWithAccountParametersOrDataLakeStore...[] (required) |
| defaultDataLakeStoreAccount | The default Data Lake Store account associated with this account. | string (required) |
| firewallAllowAzureIps | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | 'Disabled''Enabled' |
| firewallRules | The list of firewall rules associated with this account. | CreateFirewallRuleWithAccountParametersOrFirewallRul...[] |
| firewallState | The current state of the IP address firewall for this account. | 'Disabled''Enabled' |
| maxDegreeOfParallelism | The maximum supported degree of parallelism for this account. | int |
| maxDegreeOfParallelismPerJob | The maximum supported degree of parallelism per job for this account. | int |
| maxJobCount | The maximum supported jobs running under the account at the same time. | int |
| minPriorityPerJob | The minimum supported priority per job for this account. | int |
| newTier | The commitment tier for the next month. | 'Commitment_100000AUHours''Commitment_10000AUHours''Commitment_1000AUHours''Commitment_100AUHours''Commitment_500000AUHours''Commitment_50000AUHours''Commitment_5000AUHours''Commitment_500AUHours''Consumption' |
| queryStoreRetention | The number of days that job metadata is retained. | int |
| storageAccounts | The list of Azure Blob Storage accounts associated with this account. | AddStorageAccountWithAccountParametersOrStorageAccou...[] |


### CreateComputePolicyWithAccountParametersOrComputePol...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the compute policy to create. | string (required) |
| properties | The compute policy properties to use when creating a new compute policy. | CreateOrUpdateComputePolicyPropertiesOrComputePolicy...(required) |


### CreateOrUpdateComputePolicyPropertiesOrComputePolicy...

| Name | Description | Value |
|-|-|-|
| maxDegreeOfParallelismPerJob | The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed. | int |
| minPriorityPerJob | The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed. | int |
| objectId | The AAD object identifier for the entity to create a policy for. | string (required) |
| objectType | The type of AAD object the object identifier refers to. | 'Group''ServicePrincipal''User' (required) |


### AddDataLakeStoreWithAccountParametersOrDataLakeStore...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the Data Lake Store account to add. | string (required) |
| properties | The Data Lake Store account properties to use when adding a new Data Lake Store account. | AddDataLakeStorePropertiesOrDataLakeStoreAccountInfo... |


### AddDataLakeStorePropertiesOrDataLakeStoreAccountInfo...

| Name | Description | Value |
|-|-|-|
| suffix | The optional suffix for the Data Lake Store account. | string |


### CreateFirewallRuleWithAccountParametersOrFirewallRul...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the firewall rule to create. | string (required) |
| properties | The firewall rule properties to use when creating a new firewall rule. | CreateOrUpdateFirewallRulePropertiesOrFirewallRulePr...(required) |


### CreateOrUpdateFirewallRulePropertiesOrFirewallRulePr...

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | string (required) |
| startIpAddress | The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | string (required) |


### AddStorageAccountWithAccountParametersOrStorageAccou...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the Azure Storage account to add. | string (required) |
| properties | The Azure Storage account properties to use when adding a new Azure Storage account. | AddStorageAccountPropertiesOrStorageAccountInformati...(required) |


### AddStorageAccountPropertiesOrStorageAccountInformati...

| Name | Description | Value |
|-|-|-|
| accessKey | The access key associated with this Azure Storage account that will be used to connect to it. | string (required) |
| suffix | The optional suffix for the storage account. | string |


