import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesDatamaskingpoliciesRulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataMaskingPolicies;

/**
   * The alias name. This is a legacy parameter and is no longer used.
   */
readonly aliasName?: string;

/**
   * The column name on which the data masking rule is applied.
   */
readonly columnName: string;

/**
   * The masking function that is used for the data masking rule.
   */
readonly maskingFunction: 'CCN''Default''Email''Number''SSN''Text';

/**
   * The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
   */
readonly numberFrom?: string;

/**
   * The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
   */
readonly numberTo?: string;

/**
   * If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored.
   */
readonly prefixSize?: string;

/**
   * If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored.
   */
readonly replacementString?: string;

/**
   * The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState.
   */
readonly ruleState?: 'Disabled''Enabled';

/**
   * The schema name on which the data masking rule is applied.
   */
readonly schemaName: string;

/**
   * If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored.
   */
readonly suffixSize?: string;

/**
   * The table name on which the data masking rule is applied.
   */
readonly tableName: string;
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
