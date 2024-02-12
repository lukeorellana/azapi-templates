import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagementManagementgroupsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: For Bicep:tenant().;

/**
   * The details of a management group used during creation.
   */
readonly details?: CreateManagementGroupDetailsOrManagementGroupDetails;

/**
   * The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
   */
readonly displayName?: string;

/**
   * (Optional) The ID of the parent management group used during creation.
   */
readonly parent?: CreateParentGroupInfoOrParentGroupInfo;

/**
   * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
   */
readonly id?: string;
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
