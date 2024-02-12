import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisIssuesCommentsProps extends IAzAPIBaseProps {

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
