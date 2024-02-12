import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisTagdescriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Description of the Tag.
   */
readonly description?: string;

/**
   * Description of the external resources describing the tag.
   */
readonly externalDocsDescription?: string;

/**
   * Absolute URL of external resources describing the tag.
   */
readonly externalDocsUrl?: string;
}

/**
 * ApimanagementServiceApisTagdescriptions resource
 */
export class ApimanagementServiceApisTagdescriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisTagdescriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/tagDescriptions@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisTagdescriptionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", externalDocsDescription: "string", externalDocsUrl: "string"}}
    );
  }
}
