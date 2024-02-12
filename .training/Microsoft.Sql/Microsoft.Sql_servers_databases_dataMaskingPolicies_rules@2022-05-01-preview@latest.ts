import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesDatamaskingpoliciesRulesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesDatamaskingpoliciesRules resource
 */
export class SqlServersDatabasesDatamaskingpoliciesRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesDatamaskingpoliciesRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesDatamaskingpoliciesRulesProps): string {
    return JSON.stringify(
        {properties: {aliasName: "string", columnName: "string", maskingFunction: "string", numberFrom: "string", numberTo: "string", prefixSize: "string", replacementString: "string", ruleState: "string", schemaName: "string", suffixSize: "string", tableName: "string"}}
    );
  }
}
