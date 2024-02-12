import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTagsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceTags resource
 */
export class ApimanagementServiceTags extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTagsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/tags@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTagsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string"}}
    );
  }
}
