import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAssessmentsGovernanceassignmentsProps extends IAzAPIBaseProps {

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
