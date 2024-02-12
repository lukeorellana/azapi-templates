import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisTagdescriptionsProps extends IAzAPIBaseProps {

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
