import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationVariablesValuesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:variables;

/**
   * Variable value column value array.
   */
readonly values: PolicyVariableValueColumnValue[];

/**
   * Column name for the variable value
   */
readonly columnName: string;

/**
   * Column value for the variable value; this can be an integer, double, boolean, null or a string.
   */
readonly columnValue: For Bicep, you can use theany()function.;
}

/**
 * AuthorizationVariablesValues resource
 */
export class AuthorizationVariablesValues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationVariablesValuesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/variables/values@2022-08-01-preview";
  }

  protected getResourceBody(props: AuthorizationVariablesValuesProps): string {
    return JSON.stringify(
        {properties: {values: [{columnName: "string"}]}}
    );
  }
}
