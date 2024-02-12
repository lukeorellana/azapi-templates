import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityCustomassessmentautomationsProps extends IAzAPIBaseProps {

}

/**
 * SecurityCustomassessmentautomations resource
 */
export class SecurityCustomassessmentautomations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityCustomassessmentautomationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/customAssessmentAutomations@2021-07-01-preview";
  }

  protected getResourceBody(props: SecurityCustomassessmentautomationsProps): string {
    return JSON.stringify(
        {properties: {compressedQuery: "string", description: "string", displayName: "string", remediationDescription: "string", severity: "string", supportedCloud: "string"}}
    );
  }
}
