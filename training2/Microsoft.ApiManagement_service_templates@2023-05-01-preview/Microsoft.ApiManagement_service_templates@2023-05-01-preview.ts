import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTemplatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Email Template Body. This should be a valid XDocument
   */
readonly body?: string;

/**
   * Description of the Email Template.
   */
readonly description?: string;

/**
   * Email Template Parameter values.
   */
readonly parameters?: EmailTemplateParametersContractProperties[];

/**
   * Subject of the Template.
   */
readonly subject?: string;

/**
   * Title of the Template.
   */
readonly title?: string;

/**
   * Template parameter description.
   */
readonly description?: string;

/**
   * Template parameter title.
   */
readonly title?: string;
}

/**
 * ApimanagementServiceTemplates resource
 */
export class ApimanagementServiceTemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/templates@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTemplatesProps): string {
    return JSON.stringify(
        {properties: {body: "string", description: "string", parameters: [{description: "string", name: "string", title: "string"}], subject: "string", title: "string"}}
    );
  }
}
