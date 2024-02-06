## Microsoft.ExtendedLocation/customLocations@2021-08-31-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ExtendedLocation/customLocations@2021-08-31-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      authentication = {
        type = "string"
        value = "string"
      }
      clusterExtensionIds = [
        "string"
      ]
      displayName = "string"
      hostResourceId = "string"
      hostType = "Kubernetes"
      namespace = "string"
      provisioningState = "string"
    }
  })
}

```

### customLocations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | Identity |
| properties | The set of properties specific to a Custom Location | CustomLocationProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned' |


### CustomLocationProperties

| Name | Description | Value |
|-|-|-|
| authentication | This is optional input that contains the authentication that should be used to generate the namespace. | CustomLocationPropertiesAuthentication |
| clusterExtensionIds | Contains the reference to the add-on that contains charts to deploy CRDs and operators. | string[] |
| displayName | Display name for the Custom Locations location. | string |
| hostResourceId | Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions. | string |
| hostType | Type of host the Custom Locations is referencing (Kubernetes, etc...). | 'Kubernetes' |
| namespace | Kubernetes namespace that will be created on the specified cluster. | string |
| provisioningState | Provisioning State for the Custom Location. | string |


### CustomLocationPropertiesAuthentication

| Name | Description | Value |
|-|-|-|
| type | The type of the Custom Locations authentication | string |
| value | The kubeconfig value. | string |
## Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      priority = int
      selector = {
        matchExpressions = [
          {
            key = "string"
            operator = "string"
            values = [
              "string"
            ]
          }
        ]
        matchLabels = {}
      }
      targetResourceGroup = "string"
    }
  })
}

```

### customLocations/resourceSyncRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:customLocations |
| properties | The set of properties specific to a Resource Sync Rule | ResourceSyncRuleProperties |


### ResourceSyncRuleProperties

| Name | Description | Value |
|-|-|-|
| priority | Priority represents a priority of the Resource Sync Rule | int |
| selector | A label selector is composed of two parts, matchLabels and matchExpressions. The first part, matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The second part, matchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist. All of the requirements, from both matchLabels and matchExpressions must all be satisfied in order to match. | ResourceSyncRulePropertiesSelector |
| targetResourceGroup | For an unmapped custom resource, its labels will be used to find matching resource sync rules. If this resource sync rule is one of the matching rules with highest priority, then the unmapped custom resource will be projected to the target resource group associated with this resource sync rule. The user creating this resource sync rule should have write permissions on the target resource group and this write permission will be validated when creating the resource sync rule. | string |


### ResourceSyncRulePropertiesSelector

| Name | Description | Value |
|-|-|-|
| matchExpressions | MatchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist. | MatchExpressionsProperties[] |
| matchLabels | MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. | object |


### MatchExpressionsProperties

| Name | Description | Value |
|-|-|-|
| key | Key is the label key that the selector applies to. | string |
| operator | The Operator field represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. | string |
| values | The label value | string[] |
