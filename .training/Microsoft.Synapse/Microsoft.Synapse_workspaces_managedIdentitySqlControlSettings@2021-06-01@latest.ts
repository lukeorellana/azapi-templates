import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesManagedidentitysqlcontrolsettingsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesManagedidentitysqlcontrolsettings resource
 */
export class SynapseWorkspacesManagedidentitysqlcontrolsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesManagedidentitysqlcontrolsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesManagedidentitysqlcontrolsettingsProps): string {
    return JSON.stringify(
        {properties: {grantSqlControlToManagedIdentity: {desiredState: "string"}}}
    );
  }
}
