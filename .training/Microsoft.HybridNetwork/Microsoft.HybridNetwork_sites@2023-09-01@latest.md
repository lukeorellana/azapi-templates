```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/sites@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      nfvis = [
        {
          name = "string"
          nfviType = "string"
          // For remaining properties, see NFVIs objects
        }
      ]
    }
  })
}

```

### sites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Site properties. | SitePropertiesFormat |


### SitePropertiesFormat

| Name | Description | Value |
|-|-|-|
| nfvis | List of NFVIs | NFVIs[] |


### NFVIs

| Name | Description | Value |
|-|-|-|
| name | Name of the nfvi. | string |
| nfviType | Set the object type | AzureArcKubernetesAzureCoreAzureOperatorNexus(required) |


### AzureArcK8SClusterNfviDetails

| Name | Description | Value |
|-|-|-|
| nfviType | The NFVI type. | 'AzureArcKubernetes' (required) |
| customLocationReference | The reference to the custom location. | ReferencedResource |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### AzureCoreNfviDetails

| Name | Description | Value |
|-|-|-|
| nfviType | The NFVI type. | 'AzureCore' (required) |
| location | Location of the Azure core. | string |


### AzureOperatorNexusClusterNfviDetails

| Name | Description | Value |
|-|-|-|
| nfviType | The NFVI type. | 'AzureOperatorNexus' (required) |
| customLocationReference | The reference to the custom location. | ReferencedResource |


