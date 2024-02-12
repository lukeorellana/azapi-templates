import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAssessmentsGovernanceassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:assessments;

/**
   * The additional data for the governance assignment - e.g. links to ticket (optional), see example
   */
readonly additionalData?: GovernanceAssignmentAdditionalData;

/**
   * The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
   */
readonly governanceEmailNotification?: GovernanceEmailNotification;

/**
   * Defines whether there is a grace period on the governance assignment
   */
readonly isGracePeriod?: bool;

/**
   * The Owner for the governance assignment - e.g. user@contoso.com - see example
   */
readonly owner?: string;

/**
   * The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period)
   */
readonly remediationDueDate: string;

/**
   * The ETA (estimated time of arrival) for remediation (optional), see example
   */
readonly remediationEta?: RemediationEta;

/**
   * Ticket link associated with this governance assignment - for example:https://snow.com
   */
readonly ticketLink?: string;

/**
   * Ticket number associated with this governance assignment
   */
readonly ticketNumber?: numberConstranumbers:Min value = 0;

/**
   * The ticket status associated with this governance assignment - for example: Active
   */
readonly ticketStatus?: string;

/**
   * Exclude manager from weekly email notification.
   */
readonly disableManagerEmailNotification?: bool;

/**
   * Exclude  owner from weekly email notification.
   */
readonly disableOwnerEmailNotification?: bool;

/**
   * ETA for remediation.
   */
readonly eta: string;

/**
   * Justification for change of Eta.
   */
readonly justification: string;
}

/**
 * SecurityAssessmentsGovernanceassignments resource
 */
export class SecurityAssessmentsGovernanceassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAssessmentsGovernanceassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview";
  }

  protected getResourceBody(props: SecurityAssessmentsGovernanceassignmentsProps): string {
    return JSON.stringify(
        {properties: {additionalData: {ticketLink: "string", ticketNumber: "${int}", ticketStatus: "string"}, governanceEmailNotification: {disableManagerEmailNotification: "${bool}", disableOwnerEmailNotification: "${bool}"}, isGracePeriod: "${bool}", owner: "string", remediationDueDate: "string", remediationEta: {eta: "string", justification: "string"}}}
    );
  }
}
