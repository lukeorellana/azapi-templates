```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/graphs@2023-03-01-preview"
  name = "string"
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
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/graphs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| identity | Identity for the resource. | ManagedServiceIdentity |
| properties | Properties to create and update Azure Cosmos DB Graph resource. | GraphResourceCreateUpdatePropertiesOrGraphResourceGe...(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### GraphResourceCreateUpdatePropertiesOrGraphResourceGe...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrGraphResourceGetPropertiesOptio... |
| resource | The standard JSON format of a Graph resource | GraphResourceOrGraphResourceGetPropertiesResource(required) |


### CreateUpdateOptionsOrGraphResourceGetPropertiesOptio...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### GraphResourceOrGraphResourceGetPropertiesResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB Graph | string (required) |


