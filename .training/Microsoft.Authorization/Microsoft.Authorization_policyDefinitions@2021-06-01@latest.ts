import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationPolicydefinitionsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationPolicydefinitions resource
 */
export class AuthorizationPolicydefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationPolicydefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/policyDefinitions@2021-06-01";
  }

  protected getResourceBody(props: AuthorizationPolicydefinitionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", mode: "string", parameters: {}, policyType: "string"}}
    );
  }
}
