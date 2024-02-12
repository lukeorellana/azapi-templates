import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoledefinitionsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationRoledefinitions resource
 */
export class AuthorizationRoledefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoledefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleDefinitions@2022-04-01";
  }

  protected getResourceBody(props: AuthorizationRoledefinitionsProps): string {
    return JSON.stringify(
        {properties: {assignableScopes: ["string"], description: "string", permissions: [{actions: ["string"], dataActions: ["string"], notActions: ["string"], notDataActions: ["string"]}], roleName: "string", type: "string"}}
    );
  }
}
