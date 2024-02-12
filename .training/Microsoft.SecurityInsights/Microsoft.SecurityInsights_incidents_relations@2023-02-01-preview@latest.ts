import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsRelationsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsIncidentsRelations resource
 */
export class SecurityinsightsIncidentsRelations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsRelationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsRelationsProps): string {
    return JSON.stringify(
        {properties: {relatedResourceId: "string"}, etag: "string"}
    );
  }
}
