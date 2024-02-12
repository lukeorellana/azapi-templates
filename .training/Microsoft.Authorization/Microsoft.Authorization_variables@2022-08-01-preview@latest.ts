import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationVariablesProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationVariables resource
 */
export class AuthorizationVariables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationVariablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/variables@2022-08-01-preview";
  }

  protected getResourceBody(props: AuthorizationVariablesProps): string {
    return JSON.stringify(
        {properties: {columns: [{columnName: "string"}]}}
    );
  }
}
