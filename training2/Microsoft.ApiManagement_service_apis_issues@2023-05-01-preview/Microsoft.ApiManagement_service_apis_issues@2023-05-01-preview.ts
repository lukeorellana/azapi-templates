import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisIssuesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * A resource identifier for the API the issue was created for.
   */
readonly apiId?: string;

/**
   * Date and time when the issue was created.
   */
readonly createdDate?: string;

/**
   * Text describing the issue.
   */
readonly description: string;

/**
   * Status of the issue.
   */
readonly state?: 'closed''open''proposed''removed''resolved';

/**
   * The issue title.
   */
readonly title: string;

/**
   * A resource identifier for the user created the issue.
   */
readonly userId: string;
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
