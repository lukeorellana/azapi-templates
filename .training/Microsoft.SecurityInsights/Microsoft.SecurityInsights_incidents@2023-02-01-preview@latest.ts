import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsIncidents resource
 */
export class SecurityinsightsIncidents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsProps): string {
    return JSON.stringify(
        {properties: {classification: "string", classificationComment: "string", classificationReason: "string", description: "string", firstActivityTimeUtc: "string", labels: [{labelName: "string"}], lastActivityTimeUtc: "string", owner: {assignedTo: "string", email: "string", objectId: "string", ownerType: "string", userPrincipalName: "string"}, providerIncidentId: "string", providerName: "string", severity: "string", status: "string", teamInformation: {}, title: "string"}, etag: "string"}
    );
  }
}
