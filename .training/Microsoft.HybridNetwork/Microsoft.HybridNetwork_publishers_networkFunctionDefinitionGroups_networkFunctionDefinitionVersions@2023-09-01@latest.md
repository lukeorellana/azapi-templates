```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deployParameters = "string"
      description = "string"
      networkFunctionType = "string"
      // For remaining properties, see NetworkFunctionDefinitionVersionPropertiesFormat objects
    }
  })
}

```

### publishers/networkFunctionDefinitionGroups/networkFu...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkFunctionDefinitionGroups |
| properties | Network function definition version properties. | NetworkFunctionDefinitionVersionPropertiesFormat |


### NetworkFunctionDefinitionVersionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| deployParameters | The deployment parameters of the network function definition version. | string |
| description | The network function definition version description. | string |
| networkFunctionType | Set the object type | ContainerizedNetworkFunctionVirtualNetworkFunction(required) |


### ContainerizedNetworkFunctionDefinitionVersion

| Name | Description | Value |
|-|-|-|
| networkFunctionType | The network function type. | 'ContainerizedNetworkFunction' (required) |
| networkFunctionTemplate | Containerized network function template. | ContainerizedNetworkFunctionTemplate |


### ContainerizedNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | Set the object type | AzureArcKubernetes(required) |


### AzureArcKubernetesNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | The network function type. | 'AzureArcKubernetes' (required) |
| networkFunctionApplications | Network function applications. | AzureArcKubernetesNetworkFunctionApplication[] |


### AzureArcKubernetesNetworkFunctionApplication

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | Depends on profile definition. | DependsOnProfile |
| name | The name of the network function application. | string |
| artifactType | Set the object type | HelmPackage(required) |


### DependsOnProfile

| Name | Description | Value |
|-|-|-|
| installDependsOn | Application installation operation dependency. | string[] |
| uninstallDependsOn | Application deletion operation dependency. | string[] |
| updateDependsOn | Application update operation dependency. | string[] |


### AzureArcKubernetesHelmApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'HelmPackage' (required) |
| artifactProfile | Azure arc kubernetes artifact profile. | AzureArcKubernetesArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureArcKubernetesDeployMappingRuleProfile |


### AzureArcKubernetesArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| helmArtifactProfile | Helm artifact profile. | HelmArtifactProfile |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### HelmArtifactProfile

| Name | Description | Value |
|-|-|-|
| helmPackageName | Helm package name. | string |
| helmPackageVersionRange | Helm package version range. | string |
| imagePullSecretsValuesPaths | The image pull secrets values path list. | string[] |
| registryValuesPaths | The registry values path list. | string[] |


### AzureArcKubernetesDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| helmMappingRuleProfile | The helm mapping rule profile. | HelmMappingRuleProfile |


### HelmMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| helmPackageVersion | Helm package version. | string |
| options | The helm deployment options | HelmMappingRuleProfileOptions |
| releaseName | Helm release name. | string |
| releaseNamespace | Helm release namespace. | string |
| values | Helm release values. | string |


### HelmMappingRuleProfileOptions

| Name | Description | Value |
|-|-|-|
| installOptions | The helm deployment install options | HelmInstallOptions |
| upgradeOptions | The helm deployment upgrade options | HelmUpgradeOptions |


### HelmInstallOptions

| Name | Description | Value |
|-|-|-|
| atomic | The helm deployment atomic options | string |
| timeout | The helm deployment timeout options | string |
| wait | The helm deployment wait options | string |


### HelmUpgradeOptions

| Name | Description | Value |
|-|-|-|
| atomic | The helm deployment atomic options | string |
| timeout | The helm deployment timeout options | string |
| wait | The helm deployment wait options | string |


### VirtualNetworkFunctionDefinitionVersion

| Name | Description | Value |
|-|-|-|
| networkFunctionType | The network function type. | 'VirtualNetworkFunction' (required) |
| networkFunctionTemplate | Virtual network function template. | VirtualNetworkFunctionTemplate |


### VirtualNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | Set the object type | AzureCoreAzureOperatorNexus(required) |


### AzureCoreNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | The network function type. | 'AzureCore' (required) |
| networkFunctionApplications | Network function applications. | AzureCoreNetworkFunctionApplication[] |


### AzureCoreNetworkFunctionApplication

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | Depends on profile definition. | DependsOnProfile |
| name | The name of the network function application. | string |
| artifactType | Set the object type | ArmTemplateVhdImageFile(required) |


### AzureCoreNetworkFunctionArmTemplateApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'ArmTemplate' (required) |
| artifactProfile | Azure template artifact profile. | AzureCoreArmTemplateArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureCoreArmTemplateDeployMappingRuleProfile |


### AzureCoreArmTemplateArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| templateArtifactProfile | Template artifact profile. | ArmTemplateArtifactProfile |


### ArmTemplateArtifactProfile

| Name | Description | Value |
|-|-|-|
| templateName | Template name. | string |
| templateVersion | Template version. | string |


### AzureCoreArmTemplateDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| templateMappingRuleProfile | The template mapping rule profile. | ArmTemplateMappingRuleProfile |


### ArmTemplateMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| templateParameters | List of template parameters. | string |


### AzureCoreNetworkFunctionVhdApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'VhdImageFile' (required) |
| artifactProfile | Azure vhd image artifact profile. | AzureCoreVhdImageArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureCoreVhdImageDeployMappingRuleProfile |


### AzureCoreVhdImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| vhdArtifactProfile | Vhd artifact profile. | VhdImageArtifactProfile |


### VhdImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| vhdName | Vhd name. | string |
| vhdVersion | Vhd version. | string |


### AzureCoreVhdImageDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| vhdImageMappingRuleProfile | The vhd mapping rule profile. | VhdImageMappingRuleProfile |


### VhdImageMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| userConfiguration | List of values. | string |


### AzureOperatorNexusNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | The network function type. | 'AzureOperatorNexus' (required) |
| networkFunctionApplications | Network function applications. | AzureOperatorNexusNetworkFunctionApplication[] |


### AzureOperatorNexusNetworkFunctionApplication

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | Depends on profile definition. | DependsOnProfile |
| name | The name of the network function application. | string |
| artifactType | Set the object type | ArmTemplateImageFile(required) |


### AzureOperatorNexusNetworkFunctionArmTemplateApplicat...

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'ArmTemplate' (required) |
| artifactProfile | Azure Operator Distributed Services Template artifact profile. | AzureOperatorNexusArmTemplateArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureOperatorNexusArmTemplateDeployMappingRuleProfil... |


### AzureOperatorNexusArmTemplateArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| templateArtifactProfile | Template artifact profile. | ArmTemplateArtifactProfile |


### AzureOperatorNexusArmTemplateDeployMappingRuleProfil...

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| templateMappingRuleProfile | The template mapping rule profile. | ArmTemplateMappingRuleProfile |


### AzureOperatorNexusNetworkFunctionImageApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'ImageFile' (required) |
| artifactProfile | Azure Operator Distributed Services image artifact profile. | AzureOperatorNexusImageArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureOperatorNexusImageDeployMappingRuleProfile |


### AzureOperatorNexusImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| imageArtifactProfile | Image artifact profile. | ImageArtifactProfile |


### ImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| imageName | Image name. | string |
| imageVersion | Image version. | string |


### AzureOperatorNexusImageDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| imageMappingRuleProfile | The vhd mapping rule profile. | ImageMappingRuleProfile |


### ImageMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| userConfiguration | List of values. | string |


