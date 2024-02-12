import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsBookmarksProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsBookmarks resource
 */
export class SecurityinsightsBookmarks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsBookmarksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/bookmarks@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsBookmarksProps): string {
    return JSON.stringify(
        {properties: {created: "string", createdBy: {objectId: "string"}, displayName: "string", entityMappings: [{entityType: "string", fieldMappings: [{identifier: "string", value: "string"}]}], eventTime: "string", incidentInfo: {incidentId: "string", relationName: "string", severity: "string", title: "string"}, labels: ["string"], notes: "string", query: "string", queryEndTime: "string", queryResult: "string", queryStartTime: "string", tactics: ["string"], techniques: ["string"], updated: "string", updatedBy: {objectId: "string"}}, etag: "string"}
    );
  }
}
