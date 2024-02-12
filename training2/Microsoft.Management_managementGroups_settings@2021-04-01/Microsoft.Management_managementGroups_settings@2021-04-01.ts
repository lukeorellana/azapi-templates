import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagementManagementgroupsSettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managementGroups;

/**
   * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
   */
readonly defaultManagementGroup?: string;

/**
   * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
   */
readonly requireAuthorizationForGroupCreation?: bool;
}

/**
 * ManagementManagementgroupsSettings resource
 */
export class ManagementManagementgroupsSettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagementManagementgroupsSettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Management/managementGroups/settings@2021-04-01";
  }

  protected getResourceBody(props: ManagementManagementgroupsSettingsProps): string {
    return JSON.stringify(
        {properties: {defaultManagementGroup: "string", requireAuthorizationForGroupCreation: "${bool}"}}
    );
  }
}
