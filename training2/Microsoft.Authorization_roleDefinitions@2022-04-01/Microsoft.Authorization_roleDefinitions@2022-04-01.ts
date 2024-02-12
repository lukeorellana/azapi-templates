import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoledefinitionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Role definition assignable scopes.
   */
readonly assignableScopes?: string[];

/**
   * The role definition description.
   */
readonly description?: string;

/**
   * Role definition permissions.
   */
readonly permissions?: Permission[];

/**
   * The role name.
   */
readonly roleName?: string;

/**
   * The role type.
   */
readonly type?: string;

/**
   * Allowed actions.
   */
readonly actions?: string[];

/**
   * Allowed Data actions.
   */
readonly dataActions?: string[];

/**
   * Denied actions.
   */
readonly notActions?: string[];

/**
   * Denied Data actions.
   */
readonly notDataActions?: string[];
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
