import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisTagsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisTags resource
 */
export class ApimanagementServiceApisTags extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisTagsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/tags@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisTagsProps): string {
    return JSON.stringify(
        
    );
  }
}
