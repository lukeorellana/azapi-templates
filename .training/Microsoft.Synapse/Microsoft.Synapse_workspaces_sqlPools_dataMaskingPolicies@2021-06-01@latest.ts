import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsDatamaskingpoliciesProps extends IAzAPIBaseProps {

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
