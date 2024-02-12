import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceDocumentationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Markdown documentation content.
   */
readonly content?: string;

/**
   * documentation title.
   */
readonly title?: string;
}

/**
 * ApimanagementServiceDocumentations resource
 */
export class ApimanagementServiceDocumentations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceDocumentationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/documentations@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceDocumentationsProps): string {
    return JSON.stringify(
        {properties: {content: "string", title: "string"}}
    );
  }
}
