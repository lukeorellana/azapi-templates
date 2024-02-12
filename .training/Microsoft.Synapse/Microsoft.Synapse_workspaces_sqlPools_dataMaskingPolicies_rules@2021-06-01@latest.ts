import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsDatamaskingpoliciesRulesProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsDatamaskingpoliciesRules resource
 */
export class SynapseWorkspacesSqlpoolsDatamaskingpoliciesRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsDatamaskingpoliciesRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsDatamaskingpoliciesRulesProps): string {
    return JSON.stringify(
        {properties: {aliasName: "string", columnName: "string", maskingFunction: "string", numberFrom: "string", numberTo: "string", prefixSize: "string", replacementString: "string", ruleState: "string", schemaName: "string", suffixSize: "string", tableName: "string"}}
    );
  }
}
