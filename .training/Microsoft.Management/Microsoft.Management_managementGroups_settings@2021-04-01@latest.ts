import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagementManagementgroupsSettingsProps extends IAzAPIBaseProps {

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
