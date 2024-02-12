import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisWikisProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisWikis resource
 */
export class ApimanagementServiceApisWikis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisWikisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/wikis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisWikisProps): string {
    return JSON.stringify(
        {properties: {documents: [{documentationId: "string"}]}}
    );
  }
}
