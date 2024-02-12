import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisIssuesAttachmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:issues;

/**
   * An HTTP link or Base64-encoded binary data.
   */
readonly content: string;

/**
   * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
   */
readonly contentFormat: string;

/**
   * Filename by which the binary data will be saved.
   */
readonly title: string;
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
