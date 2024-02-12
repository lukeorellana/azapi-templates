import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAssignmentsProps extends IAzAPIBaseProps {
/**
   * Kind of the resource
   */
readonly kind?: string;

/**
   * Entity tag is used for comparing two or more entities from the same requested resource.
   */
readonly etag?: string;

/**
   * Additional data about the assignment
   */
readonly additionalData?: AssignmentPropertiesAdditionalData;

/**
   * Component item with key as applied to this standard assignment over the given scope
   */
readonly assignedComponent?: AssignedComponentItem;

/**
   * Standard item with key as applied to this standard assignment over the given scope
   */
readonly assignedStandard?: AssignedStandardItem;

/**
   * description of the standardAssignment
   */
readonly description?: string;

/**
   * display name of the standardAssignment
   */
readonly displayName?: string;

/**
   * expected effect of this assignment (Disable/Exempt/etc)
   */
readonly effect?: string;

/**
   * Expiration date of this assignment as a full ISO date
   */
readonly expiresOn?: string;

/**
   * The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription
   */
readonly scope?: string;

/**
   * Exemption category of this assignment
   */
readonly exemptionCategory?: string;

/**
   * unique key to a security assessment object
   */
readonly key?: string;

/**
   * full resourceId of the Microsoft.Security/standard object
   */
readonly id?: string;
}

/**
 * SecurityAssignments resource
 */
export class SecurityAssignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAssignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/assignments@2021-08-01-preview";
  }

  protected getResourceBody(props: SecurityAssignmentsProps): string {
    return JSON.stringify(
        {properties: {additionalData: {exemptionCategory: "string"}, assignedComponent: {key: "string"}, assignedStandard: {id: "string"}, description: "string", displayName: "string", effect: "string", expiresOn: "string", scope: "string"}, kind: "string", etag: "string"}
    );
  }
}
