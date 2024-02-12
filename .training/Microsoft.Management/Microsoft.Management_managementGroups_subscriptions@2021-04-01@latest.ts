import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagementManagementgroupsSubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * ManagementManagementgroupsSubscriptions resource
 */
export class ManagementManagementgroupsSubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagementManagementgroupsSubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Management/managementGroups/subscriptions@2021-04-01";
  }

  protected getResourceBody(props: ManagementManagementgroupsSubscriptionsProps): string {
    return JSON.stringify(
        
    );
  }
}
