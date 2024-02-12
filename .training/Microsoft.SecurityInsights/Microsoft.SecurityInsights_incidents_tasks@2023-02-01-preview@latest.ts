import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsTasksProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsIncidentsTasks resource
 */
export class SecurityinsightsIncidentsTasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsTasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsTasksProps): string {
    return JSON.stringify(
        {properties: {createdBy: {email: "string", name: "string", objectId: "string", userPrincipalName: "string"}, description: "string", lastModifiedBy: {email: "string", name: "string", objectId: "string", userPrincipalName: "string"}, status: "string", title: "string"}, etag: "string"}
    );
  }
}
