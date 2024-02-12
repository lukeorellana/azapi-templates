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
   * The option whether validate the exemption is at or under the assignment scope.
   */
readonly assignmentScopeValidation?: 'Default''DoNotValidate';

/**
   * The description of the policy exemption.
   */
readonly description?: string;

/**
   * The display name of the policy exemption.
   */
readonly displayName?: string;

/**
   * The policy exemption category. Possible values are Waiver and Mitigated.
   */
readonly exemptionCategory: 'Mitigated''Waiver';

/**
   * The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
   */
readonly expiresOn?: string;

/**
   * The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The ID of the policy assignment that is being exempted.
   */
readonly policyAssignmentId: string;

/**
   * The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.
   */
readonly policyDefinitionReferenceIds?: string[];

/**
   * The resource selector list to filter policies by resource properties.
   */
readonly resourceSelectors?: ResourceSelector[];

/**
   * The list of the selector expressions.
   */
readonly selectors?: Selector[];

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
