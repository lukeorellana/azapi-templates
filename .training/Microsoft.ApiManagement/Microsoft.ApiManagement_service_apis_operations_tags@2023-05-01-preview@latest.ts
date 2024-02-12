import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisOperationsTagsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisOperationsTags resource
 */
export class ApimanagementServiceApisOperationsTags extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisOperationsTagsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/operations/tags@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisOperationsTagsProps): string {
    return JSON.stringify(
        
    );
  }
}
