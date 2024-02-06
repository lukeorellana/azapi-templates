## Microsoft.Communication/communicationServices@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/communicationServices@2023-04-01-preview"
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
      dataLocation = "string"
      linkedDomains = [
        "string"
      ]
    }
  })
}

```

### communicationServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Alphanumerics and hyphens.Can't start or end with hyphen.Can't use underscores.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | The properties of the service. | CommunicationServiceProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### CommunicationServiceProperties

| Name | Description | Value |
|-|-|-|
| dataLocation | The location where the communication service stores its data at rest. | string (required) |
| linkedDomains | List of email Domain resource Ids. | string[] |
## Microsoft.Communication/emailServices@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataLocation = "string"
    }
  })
}

```

### emailServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the service. | EmailServiceProperties |


### EmailServiceProperties

| Name | Description | Value |
|-|-|-|
| dataLocation | The location where the email service stores its data at rest. | string (required) |
## Microsoft.Communication/emailServices/domains@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices/domains@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainManagement = "string"
      userEngagementTracking = "string"
    }
  })
}

```

### emailServices/domains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:emailServices |
| properties | The properties of a Domains resource. | DomainProperties |


### DomainProperties

| Name | Description | Value |
|-|-|-|
| domainManagement | Describes how a Domains resource is being managed. | 'AzureManaged''CustomerManaged''CustomerManagedInExchangeOnline' (required) |
| userEngagementTracking | Describes whether user engagement tracking is enabled or disabled. | 'Disabled''Enabled' |
## Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      username = "string"
    }
  })
}

```

### emailServices/domains/senderUsernames

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |
| properties | The properties of a SenderUsername resource. | SenderUsernameProperties |


### SenderUsernameProperties

| Name | Description | Value |
|-|-|-|
| displayName | The display name for the senderUsername. | string |
| username | A sender senderUsername to be used when sending emails. | string (required) |
