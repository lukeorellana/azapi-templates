import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTagsOperationlinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceTagsOperationlinks resource
 */
export class ApimanagementServiceTagsOperationlinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTagsOperationlinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/tags/operationLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTagsOperationlinksProps): string {
    return JSON.stringify(
        {properties: {operationId: "string"}}
    );
  }
}
