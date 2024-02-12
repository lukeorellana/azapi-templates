```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkServiceDesignGroups/networkServiceDesignVersions@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationGroupSchemaReferences = {
        {customized property} = {
          id = "string"
        }
      }
      description = "string"
      nfvisFromSite = {
        {customized property} = {
          name = "string"
          type = "string"
        }
      }
      resourceElementTemplates = [
        {
          dependsOnProfile = {
            installDependsOn = [
              "string"
            ]
            uninstallDependsOn = [
              "string"
            ]
            updateDependsOn = [
              "string"
            ]
          }
          name = "string"
          type = "string"
          // For remaining properties, see ResourceElementTemplate objects
        }
      ]
    }
  })
}

```

### publishers/networkServiceDesignGroups/networkService...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkServiceDesignGroups |
| properties | network service design version properties. | NetworkServiceDesignVersionPropertiesFormat |


### NetworkServiceDesignVersionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| configurationGroupSchemaReferences | The configuration schemas to used to define the values. | NetworkServiceDesignVersionPropertiesFormatConfigura... |
| description | The network service design version description. | string |
| nfvisFromSite | The nfvis from the site. | NetworkServiceDesignVersionPropertiesFormatNfvisFrom... |
| resourceElementTemplates | List of resource element template | ResourceElementTemplate[] |


### NetworkServiceDesignVersionPropertiesFormatConfigura...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ReferencedResource |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### NetworkServiceDesignVersionPropertiesFormatNfvisFrom...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | NfviDetails |


### NfviDetails

| Name | Description | Value |
|-|-|-|
| name | The nfvi name. | string |
| type | The nfvi type. | string |


### ResourceElementTemplate

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | The depends on profile. | DependsOnProfile |
| name | Name of the resource element template. | string |
| type | Set the object type | ArmResourceDefinitionNetworkFunctionDefinition(required) |


### DependsOnProfile

| Name | Description | Value |
|-|-|-|
| installDependsOn | Application installation operation dependency. | string[] |
| uninstallDependsOn | Application deletion operation dependency. | string[] |
| updateDependsOn | Application update operation dependency. | string[] |


### ArmResourceDefinitionResourceElementTemplateDetails

| Name | Description | Value |
|-|-|-|
| type | The resource element template type. | 'ArmResourceDefinition' (required) |
| configuration | The resource element template type. | ArmResourceDefinitionResourceElementTemplate |


### ArmResourceDefinitionResourceElementTemplate

| Name | Description | Value |
|-|-|-|
| artifactProfile | Artifact profile properties. | NSDArtifactProfile |
| parameterValues | Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string. | string |
| templateType | The template type. | 'ArmTemplate''Unknown' |


### NSDArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactName | Artifact name. | string |
| artifactStoreReference | The artifact store resource id | ReferencedResource |
| artifactVersion | Artifact version. | string |


### NetworkFunctionDefinitionResourceElementTemplateDeta...

| Name | Description | Value |
|-|-|-|
| type | The resource element template type. | 'NetworkFunctionDefinition' (required) |
| configuration | The resource element template type. | ArmResourceDefinitionResourceElementTemplate |


