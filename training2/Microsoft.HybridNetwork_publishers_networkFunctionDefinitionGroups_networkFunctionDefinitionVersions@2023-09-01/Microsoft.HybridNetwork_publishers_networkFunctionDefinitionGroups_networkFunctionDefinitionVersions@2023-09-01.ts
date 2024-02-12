import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkFunctionDefinitionGroups;

/**
   * The deployment parameters of the network function definition version.
   */
readonly deployParameters?: string;

/**
   * The network function definition version description.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly networkFunctionType: ContainerizedNetworkFunctionVirtualNetworkFunction;

/**
   * The network function type.
   */
readonly networkFunctionType: 'ContainerizedNetworkFunction';

/**
   * Containerized network function template.
   */
readonly networkFunctionTemplate?: ContainerizedNetworkFunctionTemplate;

/**
   * Set the object type
   */
readonly nfviType: AzureArcKubernetes;

/**
   * The network function type.
   */
readonly nfviType: 'AzureArcKubernetes';

/**
   * Network function applications.
   */
readonly networkFunctionApplications?: AzureArcKubernetesNetworkFunctionApplication[];

/**
   * Depends on profile definition.
   */
readonly dependsOnProfile?: DependsOnProfile;

/**
   * Set the object type
   */
readonly artifactType: HelmPackage;

/**
   * Application installation operation dependency.
   */
readonly installDependsOn?: string[];

/**
   * Application deletion operation dependency.
   */
readonly uninstallDependsOn?: string[];

/**
   * Application update operation dependency.
   */
readonly updateDependsOn?: string[];

/**
   * The artifact type.
   */
readonly artifactType: 'HelmPackage';

/**
   * Azure arc kubernetes artifact profile.
   */
readonly artifactProfile?: AzureArcKubernetesArtifactProfile;

/**
   * Deploy mapping rule profile.
   */
readonly deployParametersMappingRuleProfile?: AzureArcKubernetesDeployMappingRuleProfile;

/**
   * The reference to artifact store.
   */
readonly artifactStore?: ReferencedResource;

/**
   * Helm artifact profile.
   */
readonly helmArtifactProfile?: HelmArtifactProfile;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Helm package name.
   */
readonly helmPackageName?: string;

/**
   * Helm package version range.
   */
readonly helmPackageVersionRange?: string;

/**
   * The image pull secrets values path list.
   */
readonly imagePullSecretsValuesPaths?: string[];

/**
   * The registry values path list.
   */
readonly registryValuesPaths?: string[];

/**
   * The application enablement.
   */
readonly applicationEnablement?: 'Disabled''Enabled''Unknown';

/**
   * The helm mapping rule profile.
   */
readonly helmMappingRuleProfile?: HelmMappingRuleProfile;

/**
   * Helm package version.
   */
readonly helmPackageVersion?: string;

/**
   * The helm deployment options
   */
readonly options?: HelmMappingRuleProfileOptions;

/**
   * Helm release name.
   */
readonly releaseName?: string;

/**
   * Helm release namespace.
   */
readonly releaseNamespace?: string;

/**
   * Helm release values.
   */
readonly values?: string;

/**
   * The helm deployment install options
   */
readonly installOptions?: HelmInstallOptions;

/**
   * The helm deployment upgrade options
   */
readonly upgradeOptions?: HelmUpgradeOptions;

/**
   * The helm deployment atomic options
   */
readonly atomic?: string;

/**
   * The helm deployment timeout options
   */
readonly timeout?: string;

/**
   * The helm deployment wait options
   */
readonly wait?: string;

/**
   * The helm deployment atomic options
   */
readonly atomic?: string;

/**
   * The helm deployment timeout options
   */
readonly timeout?: string;

/**
   * The helm deployment wait options
   */
readonly wait?: string;

/**
   * The network function type.
   */
readonly networkFunctionType: 'VirtualNetworkFunction';

/**
   * Virtual network function template.
   */
readonly networkFunctionTemplate?: VirtualNetworkFunctionTemplate;

/**
   * Set the object type
   */
readonly nfviType: AzureCoreAzureOperatorNexus;

/**
   * The network function type.
   */
readonly nfviType: 'AzureCore';

/**
   * Network function applications.
   */
readonly networkFunctionApplications?: AzureCoreNetworkFunctionApplication[];

/**
   * Depends on profile definition.
   */
readonly dependsOnProfile?: DependsOnProfile;

/**
   * Set the object type
   */
readonly artifactType: ArmTemplateVhdImageFile;

/**
   * The artifact type.
   */
readonly artifactType: 'ArmTemplate';

/**
   * Azure template artifact profile.
   */
readonly artifactProfile?: AzureCoreArmTemplateArtifactProfile;

/**
   * Deploy mapping rule profile.
   */
readonly deployParametersMappingRuleProfile?: AzureCoreArmTemplateDeployMappingRuleProfile;

/**
   * The reference to artifact store.
   */
readonly artifactStore?: ReferencedResource;

/**
   * Template artifact profile.
   */
readonly templateArtifactProfile?: ArmTemplateArtifactProfile;

/**
   * Template name.
   */
readonly templateName?: string;

/**
   * Template version.
   */
readonly templateVersion?: string;

/**
   * The application enablement.
   */
readonly applicationEnablement?: 'Disabled''Enabled''Unknown';

/**
   * The template mapping rule profile.
   */
readonly templateMappingRuleProfile?: ArmTemplateMappingRuleProfile;

/**
   * List of template parameters.
   */
readonly templateParameters?: string;

/**
   * The artifact type.
   */
readonly artifactType: 'VhdImageFile';

/**
   * Azure vhd image artifact profile.
   */
readonly artifactProfile?: AzureCoreVhdImageArtifactProfile;

/**
   * Deploy mapping rule profile.
   */
readonly deployParametersMappingRuleProfile?: AzureCoreVhdImageDeployMappingRuleProfile;

/**
   * The reference to artifact store.
   */
readonly artifactStore?: ReferencedResource;

/**
   * Vhd artifact profile.
   */
readonly vhdArtifactProfile?: VhdImageArtifactProfile;

/**
   * Vhd name.
   */
readonly vhdName?: string;

/**
   * Vhd version.
   */
readonly vhdVersion?: string;

/**
   * The application enablement.
   */
readonly applicationEnablement?: 'Disabled''Enabled''Unknown';

/**
   * The vhd mapping rule profile.
   */
readonly vhdImageMappingRuleProfile?: VhdImageMappingRuleProfile;

/**
   * List of values.
   */
readonly userConfiguration?: string;

/**
   * The network function type.
   */
readonly nfviType: 'AzureOperatorNexus';

/**
   * Network function applications.
   */
readonly networkFunctionApplications?: AzureOperatorNexusNetworkFunctionApplication[];

/**
   * Depends on profile definition.
   */
readonly dependsOnProfile?: DependsOnProfile;

/**
   * Set the object type
   */
readonly artifactType: ArmTemplateImageFile;

/**
   * The artifact type.
   */
readonly artifactType: 'ArmTemplate';

/**
   * Azure Operator Distributed Services Template artifact profile.
   */
readonly artifactProfile?: AzureOperatorNexusArmTemplateArtifactProfile;

/**
   * Deploy mapping rule profile.
   */
readonly deployParametersMappingRuleProfile?: AzureOperatorNexusArmTemplateDeployMappingRuleProfil...;

/**
   * The reference to artifact store.
   */
readonly artifactStore?: ReferencedResource;

/**
   * Template artifact profile.
   */
readonly templateArtifactProfile?: ArmTemplateArtifactProfile;

/**
   * The application enablement.
   */
readonly applicationEnablement?: 'Disabled''Enabled''Unknown';

/**
   * The template mapping rule profile.
   */
readonly templateMappingRuleProfile?: ArmTemplateMappingRuleProfile;

/**
   * The artifact type.
   */
readonly artifactType: 'ImageFile';

/**
   * Azure Operator Distributed Services image artifact profile.
   */
readonly artifactProfile?: AzureOperatorNexusImageArtifactProfile;

/**
   * Deploy mapping rule profile.
   */
readonly deployParametersMappingRuleProfile?: AzureOperatorNexusImageDeployMappingRuleProfile;

/**
   * The reference to artifact store.
   */
readonly artifactStore?: ReferencedResource;

/**
   * Image artifact profile.
   */
readonly imageArtifactProfile?: ImageArtifactProfile;

/**
   * Image name.
   */
readonly imageName?: string;

/**
   * Image version.
   */
readonly imageVersion?: string;

/**
   * The application enablement.
   */
readonly applicationEnablement?: 'Disabled''Enabled''Unknown';

/**
   * The vhd mapping rule profile.
   */
readonly imageMappingRuleProfile?: ImageMappingRuleProfile;

/**
   * List of values.
   */
readonly userConfiguration?: string;
}

/**
 * HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversions resource
 */
export class HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersNetworkfunctiondefinitiongroupsNetworkfunctiondefinitionversionsProps): string {
    return JSON.stringify(
        {properties: {deployParameters: "string", description: "string", networkFunctionType: "string"}}
    );
  }
}
