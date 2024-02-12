import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsWatchlistsWatchlistitemsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:watchlists;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The time the watchlist item was created
   */
readonly created?: string;

/**
   * Describes a user that created the watchlist item
   */
readonly createdBy?: UserInfo;

/**
   * key-value pairs for a watchlist item entity mapping
   */
readonly entityMapping?: object;

/**
   * A flag that indicates if the watchlist item is deleted or not
   */
readonly isDeleted?: bool;

/**
   * key-value pairs for a watchlist item
   */
readonly itemsKeyValue: object;

/**
   * The tenantId to which the watchlist item belongs to
   */
readonly tenantId?: string;

/**
   * The last time the watchlist item was updated
   */
readonly updated?: string;

/**
   * Describes a user that updated the watchlist item
   */
readonly updatedBy?: UserInfo;

/**
   * The id (a Guid) of the watchlist item
   */
readonly watchlistItemId?: string;

/**
   * The type of the watchlist item
   */
readonly watchlistItemType?: string;

/**
   * The object id of the user.
   */
readonly objectId?: string;
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
