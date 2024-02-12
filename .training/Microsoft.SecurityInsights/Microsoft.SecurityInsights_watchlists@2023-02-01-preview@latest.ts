import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsWatchlistsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsWatchlists resource
 */
export class SecurityinsightsWatchlists extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsWatchlistsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/watchlists@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsWatchlistsProps): string {
    return JSON.stringify(
        {properties: {contentType: "string", created: "string", createdBy: {objectId: "string"}, defaultDuration: "string", description: "string", displayName: "string", isDeleted: "${bool}", itemsSearchKey: "string", labels: ["string"], numberOfLinesToSkip: "${int}", provider: "string", rawContent: "string", source: "string", sourceType: "string", tenantId: "string", updated: "string", updatedBy: {objectId: "string"}, uploadStatus: "string", watchlistAlias: "string", watchlistId: "string", watchlistType: "string"}, etag: "string"}
    );
  }
}
