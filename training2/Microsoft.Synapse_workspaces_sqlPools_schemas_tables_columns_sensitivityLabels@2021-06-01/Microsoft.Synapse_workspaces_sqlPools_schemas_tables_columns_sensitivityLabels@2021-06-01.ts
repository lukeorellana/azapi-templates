import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsSchemasTablesColumnsSensitivitylabelsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: columns;

/**
   * The information type.
   */
readonly informationType?: string;

/**
   * The information type ID.
   */
readonly informationTypeId?: string;

/**
   * The label ID.
   */
readonly labelId?: string;

/**
   * The label name.
   */
readonly labelName?: string;

/**
   * 
   */
readonly rank?: 'Critical''High''Low''Medium''None';
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
