import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagementManagementgroupsProps extends IAzAPIBaseProps {

}

/**
 * ManagementManagementgroups resource
 */
export class ManagementManagementgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagementManagementgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Management/managementGroups@2021-04-01";
  }

  protected getResourceBody(props: ManagementManagementgroupsProps): string {
    return JSON.stringify(
        {properties: {details: {parent: {id: "string"}}, displayName: "string"}}
    );
  }
}
