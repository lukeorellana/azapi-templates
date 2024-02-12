import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityWorkspacesettingsProps extends IAzAPIBaseProps {
/**
   * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
   */
readonly scope: string;

/**
   * The full Azure ID of the workspace to save the data in
   */
readonly workspaceId: string;
}

/**
 * SecurityWorkspacesettings resource
 */
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
