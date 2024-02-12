import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceCachesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceCaches resource
 */
export class ApimanagementServiceCaches extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceCachesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/caches@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceCachesProps): string {
    return JSON.stringify(
        {properties: {connectionString: "string", description: "string", resourceId: "string", useFromLocation: "string"}}
    );
  }
}
