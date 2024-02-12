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


