import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisIssuesAttachmentsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisIssuesAttachments resource
 */
export class ApimanagementServiceApisIssuesAttachments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisIssuesAttachmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/issues/attachments@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisIssuesAttachmentsProps): string {
    return JSON.stringify(
        {properties: {content: "string", contentFormat: "string", title: "string"}}
    );
  }
}
