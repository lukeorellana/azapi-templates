import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationPolicydefinitionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The policy definition description.
   */
readonly description?: string;

/**
   * The display name of the policy definition.
   */
readonly displayName?: string;

/**
   * The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
   */
readonly mode?: string;

/**
   * The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
   */
readonly parameters?: object;

/**
   * The policy rule.
   */
readonly policyRule?: For Bicep, you can use theany()function.;

/**
   * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
   */
readonly policyType?: 'BuiltIn''Custom''NotSpecified''Static';
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
