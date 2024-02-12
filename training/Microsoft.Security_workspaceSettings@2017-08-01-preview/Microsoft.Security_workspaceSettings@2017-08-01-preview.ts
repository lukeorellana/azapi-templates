import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SecurityWorkspacesettingsProps extends IAzAPIBaseProps {

}

export class SecurityWorkspacesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityWorkspacesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/workspaceSettings@2017-08-01-preview";
  }

  protected getResourceBody(props: SecurityWorkspacesettingsProps): string {
    return JSON.stringify(
      {properties: {scope: "string", workspaceId: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | properties | Workspace setting data | WorkspaceSettingProperties |

// | Name | Description | Value |
// |-|-|-|
// | scope | All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope | string (required) |
// | workspaceId | The full Azure ID of the workspace to save the data in | string (required) |
