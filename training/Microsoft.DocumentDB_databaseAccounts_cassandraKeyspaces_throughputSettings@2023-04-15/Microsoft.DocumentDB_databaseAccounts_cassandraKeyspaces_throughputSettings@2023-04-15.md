```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces/throughputSettin...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cassandraKeyspaces |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |


