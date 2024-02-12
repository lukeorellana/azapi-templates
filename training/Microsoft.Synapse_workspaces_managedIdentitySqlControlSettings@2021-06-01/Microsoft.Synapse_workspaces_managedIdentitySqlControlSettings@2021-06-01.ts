import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapseWorkspacesManagedidentitysqlcontrolsettingsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | properties | Sql Control Settings for workspace managed identity | ManagedIdentitySqlControlSettingsModelProperties |

// | Name | Description | Value |
// |-|-|-|
// | grantSqlControlToManagedIdentity | Grant sql control to managed identity | ManagedIdentitySqlControlSettingsModelPropertiesGran... |

// | Name | Description | Value |
// |-|-|-|
// | desiredState | Desired state | 'Disabled''Enabled' |
