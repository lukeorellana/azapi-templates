import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesManagedidentitysqlcontrolsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Grant sql control to managed identity
   */
readonly grantSqlControlToManagedIdentity?: ManagedIdentitySqlControlSettingsModelPropertiesGran...;

/**
   * Desired state
   */
readonly desiredState?: 'Disabled''Enabled';
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