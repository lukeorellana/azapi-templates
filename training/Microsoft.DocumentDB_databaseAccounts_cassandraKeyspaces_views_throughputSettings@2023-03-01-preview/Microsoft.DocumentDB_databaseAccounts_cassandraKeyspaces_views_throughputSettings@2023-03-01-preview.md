```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2023-03-01-preview"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
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

### databaseAccounts/cassandraKeyspaces/views/throughput...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:views |
| identity | Identity for the resource. | ManagedServiceIdentity |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


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


