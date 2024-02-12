import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagementManagementgroupsSubscriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managementGroups;
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