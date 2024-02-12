import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsSchemasTablesColumnsSensitivitylabelsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsSchemasTablesColumnsSensitivitylabels resource
 */
export class SynapseWorkspacesSqlpoolsSchemasTablesColumnsSensitivitylabels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsSchemasTablesColumnsSensitivitylabelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsSchemasTablesColumnsSensitivitylabelsProps): string {
    return JSON.stringify(
        {properties: {informationType: "string", informationTypeId: "string", labelId: "string", labelName: "string", rank: "string"}}
    );
  }
}
