import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationPolicysetdefinitionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The policy set definition description.
   */
readonly description?: string;

/**
   * The display name of the policy set definition.
   */
readonly displayName?: string;

/**
   * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The policy set definition parameters that can be used in policy definition references.
   */
readonly parameters?: object;

/**
   * The metadata describing groups of policy definition references within the policy set definition.
   */
readonly policyDefinitionGroups?: PolicyDefinitionGroup[];

/**
   * An array of policy definition references.
   */
readonly policyDefinitions: PolicyDefinitionReference[];

/**
   * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
   */
readonly policyType?: 'BuiltIn''Custom''NotSpecified''Static';

/**
   * A resource ID of a resource that contains additional metadata about the group.
   */
readonly additionalMetadataId?: string;

/**
   * The group's category.
   */
readonly category?: string;

/**
   * The group's description.
   */
readonly description?: string;

/**
   * The group's display name.
   */
readonly displayName?: string;

/**
   * The name of the groups that this policy definition reference belongs to.
   */
readonly groupNames?: string[];

/**
   * The parameter values for the referenced policy rule. The keys are the parameter names.
   */
readonly parameters?: object;

/**
   * The ID of the policy definition or policy set definition.
   */
readonly policyDefinitionId: string;

/**
   * A unique id (within the policy set definition) for this policy definition reference.
   */
readonly policyDefinitionReferenceId?: string;
}

/**
 * AuthorizationPolicysetdefinitions resource
 */
export class AuthorizationPolicysetdefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationPolicysetdefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/policySetDefinitions@2021-06-01";
  }

  protected getResourceBody(props: AuthorizationPolicysetdefinitionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", parameters: {}, policyDefinitionGroups: [{additionalMetadataId: "string", category: "string", description: "string", displayName: "string", name: "string"}], policyDefinitions: [{groupNames: ["string"], parameters: {}, policyDefinitionId: "string", policyDefinitionReferenceId: "string"}], policyType: "string"}}
    );
  }
}
