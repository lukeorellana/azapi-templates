import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkServiceDesignGroups;

/**
   * The configuration schemas to used to define the values.
   */
readonly configurationGroupSchemaReferences?: NetworkServiceDesignVersionPropertiesFormatConfigura...;

/**
   * The network service design version description.
   */
readonly description?: string;

/**
   * The nfvis from the site.
   */
readonly nfvisFromSite?: NetworkServiceDesignVersionPropertiesFormatNfvisFrom...;

/**
   * List of resource element template
   */
readonly resourceElementTemplates?: ResourceElementTemplate[];

/**
   * 
   */
readonly {customized property}?: ReferencedResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * 
   */
readonly {customized property}?: NfviDetails;

/**
   * The nfvi type.
   */
readonly type?: string;

/**
   * The depends on profile.
   */
readonly dependsOnProfile?: DependsOnProfile;

/**
   * Set the object type
   */
readonly type: ArmResourceDefinitionNetworkFunctionDefinition;

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
   * The resource element template type.
   */
readonly type: 'ArmResourceDefinition';

/**
   * The resource element template type.
   */
readonly configuration?: ArmResourceDefinitionResourceElementTemplate;

/**
   * Artifact profile properties.
   */
readonly artifactProfile?: NSDArtifactProfile;

/**
   * Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string.
   */
readonly parameterValues?: string;

/**
   * The template type.
   */
readonly templateType?: 'ArmTemplate''Unknown';

/**
   * Artifact name.
   */
readonly artifactName?: string;

/**
   * The artifact store resource id
   */
readonly artifactStoreReference?: ReferencedResource;

/**
   * Artifact version.
   */
readonly artifactVersion?: string;

/**
   * The resource element template type.
   */
readonly type: 'NetworkFunctionDefinition';

/**
   * The resource element template type.
   */
readonly configuration?: ArmResourceDefinitionResourceElementTemplate;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
