import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGroupsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceGroups resource
 */
export class ApimanagementServiceGroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/groups@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGroupsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", externalId: "string", type: "string"}}
    );
  }
}
