import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisIssuesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisIssues resource
 */
export class ApimanagementServiceApisIssues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisIssuesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/issues@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisIssuesProps): string {
    return JSON.stringify(
        {properties: {apiId: "string", createdDate: "string", description: "string", state: "string", title: "string", userId: "string"}}
    );
  }
}
