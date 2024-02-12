import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisWikisProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Collection wiki documents included into this wiki.
   */
readonly documents?: WikiDocumentationContract[];

/**
   * Documentation Identifier
   */
readonly documentationId?: string;
}

/**
 * ApimanagementServiceApisWikis resource
 */
export class ApimanagementServiceApisWikis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisWikisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/wikis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisWikisProps): string {
    return JSON.stringify(
        {properties: {documents: [{documentationId: "string"}]}}
    );
  }
}
