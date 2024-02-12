import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsDatamaskingpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlPools;

/**
   * The state of the data masking policy.
   */
readonly dataMaskingState: 'Disabled''Enabled';

/**
   * The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
   */
readonly exemptPrincipals?: string;
}

/**
 * SynapseWorkspacesSqlpoolsDatamaskingpolicies resource
 */
export class SynapseWorkspacesSqlpoolsDatamaskingpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsDatamaskingpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsDatamaskingpoliciesProps): string {
    return JSON.stringify(
        {properties: {dataMaskingState: "string", exemptPrincipals: "string"}}
    );
  }
}
