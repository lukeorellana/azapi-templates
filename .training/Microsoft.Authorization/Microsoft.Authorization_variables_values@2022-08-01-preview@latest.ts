import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationVariablesValuesProps extends IAzAPIBaseProps {

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
