import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGroupsUsersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceGroupsUsers resource
 */
export class ApimanagementServiceGroupsUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGroupsUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/groups/users@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGroupsUsersProps): string {
    return JSON.stringify(
        
    );
  }
}
