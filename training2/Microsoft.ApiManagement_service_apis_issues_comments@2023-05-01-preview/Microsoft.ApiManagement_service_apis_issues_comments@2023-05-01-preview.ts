import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisIssuesCommentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:issues;

/**
   * Date and time when the comment was created.
   */
readonly createdDate?: string;

/**
   * Comment text.
   */
readonly text: string;

/**
   * A resource identifier for the user who left the comment.
   */
readonly userId: string;
}

/**
 * ApimanagementServiceApisIssuesComments resource
 */
export class ApimanagementServiceApisIssuesComments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisIssuesCommentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/issues/comments@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisIssuesCommentsProps): string {
    return JSON.stringify(
        {properties: {createdDate: "string", text: "string", userId: "string"}}
    );
  }
}
