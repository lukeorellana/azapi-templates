import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAssessmentmetadataProps extends IAzAPIBaseProps {

}

/**
 * SecurityAssessmentmetadata resource
 */
export class SecurityAssessmentmetadata extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAssessmentmetadataProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/assessmentMetadata@2021-06-01";
  }

  protected getResourceBody(props: SecurityAssessmentmetadataProps): string {
    return JSON.stringify(
        {properties: {assessmentType: "string", categories: ["string"], description: "string", displayName: "string", implementationEffort: "string", partnerData: {partnerName: "string", productName: "string", secret: "string"}, plannedDeprecationDate: "string", preview: "${bool}", publishDates: {GA: "string", public: "string"}, remediationDescription: "string", severity: "string", tactics: ["string"], techniques: ["string"], threats: ["string"], userImpact: "string"}}
    );
  }
}
