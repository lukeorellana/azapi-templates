import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAssignmentsProps extends IAzAPIBaseProps {

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
