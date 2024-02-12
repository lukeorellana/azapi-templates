import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTagsApilinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceTagsApilinks resource
 */
export class ApimanagementServiceTagsApilinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTagsApilinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/tags/apiLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTagsApilinksProps): string {
    return JSON.stringify(
        {properties: {apiId: "string"}}
    );
  }
}
