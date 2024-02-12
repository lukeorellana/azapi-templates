import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The managed identity associated with the policy assignment.
   */
readonly identity?: Identity;

/**
   * The identity type. This is the only required field when adding a system or user assigned identity to a resource.
   */
readonly type?: 'None''SystemAssigned''UserAssigned';

/**
   * The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * This message will be part of response in case of policy violation.
   */
readonly description?: string;

/**
   * The display name of the policy assignment.
   */
readonly displayName?: string;

/**
   * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
   */
readonly enforcementMode?: 'Default''DoNotEnforce';

/**
   * The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The messages that describe why a resource is non-compliant with the policy.
   */
readonly nonComplianceMessages?: NonComplianceMessage[];

/**
   * The policy's excluded scopes.
   */
readonly notScopes?: string[];

/**
   * The policy property value override.
   */
readonly overrides?: Override[];

/**
   * The parameter values for the assigned policy rule. The keys are the parameter names.
   */
readonly parameters?: object;

/**
   * The ID of the policy definition or policy set definition being assigned.
   */
readonly policyDefinitionId?: string;

/**
   * The resource selector list to filter policies by resource properties.
   */
readonly resourceSelectors?: ResourceSelector[];

/**
   * A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
   */
readonly message: string;

/**
   * The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment.
   */
readonly policyDefinitionReferenceId?: string;

/**
   * The override kind.
   */
readonly kind?: 'policyEffect';

/**
   * The list of the selector expressions.
   */
readonly selectors?: Selector[];

/**
   * The value to override the policy property.
   */
readonly value?: string;

/**
   * The list of values to filter in.
   */
readonly in?: string[];

/**
   * The selector kind.
   */
readonly kind?: 'policyDefinitionReferenceId''resourceLocation''resourceType''resourceWithoutLocation';

/**
   * The list of values to filter out.
   */
readonly notIn?: string[];

/**
   * The list of the selector expressions.
   */
readonly selectors?: Selector[];
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
