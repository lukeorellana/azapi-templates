import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsWatchlistsWatchlistitemsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsWatchlistsWatchlistitems resource
 */
export class SecurityinsightsWatchlistsWatchlistitems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsWatchlistsWatchlistitemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/watchlists/watchlistItems@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsWatchlistsWatchlistitemsProps): string {
    return JSON.stringify(
        {properties: {created: "string", createdBy: {objectId: "string"}, entityMapping: {}, isDeleted: "${bool}", itemsKeyValue: {}, tenantId: "string", updated: "string", updatedBy: {objectId: "string"}, watchlistItemId: "string", watchlistItemType: "string"}, etag: "string"}
    );
  }
}
