import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DatabricksAccessconnectorsProps extends IAzAPIBaseProps {

}

export class DatabricksAccessconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksAccessconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/accessConnectors@2022-10-01-preview";
  }

  protected getResourceBody(props: DatabricksAccessconnectorsProps): string {
    return JSON.stringify(
      {properties: {}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
// | properties | Azure Databricks accessConnector properties | AccessConnectorProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
// | userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |
