import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesTemplatespecsVersionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:templateSpecs;

/**
   * Template Spec version description.
   */
readonly description?: string;

/**
   * An array of linked template artifacts.
   */
readonly linkedTemplates?: LinkedTemplateArtifact[];

/**
   * The main Azure Resource Manager template content.
   */
readonly mainTemplate?: For Bicep, you can use theany()function.;

/**
   * The version metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The Azure Resource Manager template UI definition content.
   */
readonly uiFormDefinition?: For Bicep, you can use theany()function.;

/**
   * A filesystem safe relative path of the artifact.
   */
readonly path: string;

/**
   * The Azure Resource Manager template.
   */
readonly template: For Bicep, you can use theany()function.;
}

/**
 * ResourcesTemplatespecsVersions resource
 */
export class ResourcesTemplatespecsVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesTemplatespecsVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/templateSpecs/versions@2022-02-01";
  }

  protected getResourceBody(props: ResourcesTemplatespecsVersionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", linkedTemplates: [{path: "string"}]}}
    );
  }
}
