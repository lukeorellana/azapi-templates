import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsWatchlistsProps extends IAzAPIBaseProps {
/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The content type of the raw content. Example : text/csv or text/tsv
   */
readonly contentType?: string;

/**
   * The time the watchlist was created
   */
readonly created?: string;

/**
   * Describes a user that created the watchlist
   */
readonly createdBy?: UserInfo;

/**
   * The default duration of a watchlist (in ISO 8601 duration format)
   */
readonly defaultDuration?: string;

/**
   * A description of the watchlist
   */
readonly description?: string;

/**
   * The display name of the watchlist
   */
readonly displayName: string;

/**
   * A flag that indicates if the watchlist is deleted or not
   */
readonly isDeleted?: bool;

/**
   * The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address.
   */
readonly itemsSearchKey: string;

/**
   * List of labels relevant to this watchlist
   */
readonly labels?: string[];

/**
   * The number of lines in a csv/tsv content to skip before the header
   */
readonly numberOfLinesToSkip?: number;

/**
   * The provider of the watchlist
   */
readonly provider: string;

/**
   * The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
   */
readonly rawContent?: string;

/**
   * The filename of the watchlist, called 'source'
   */
readonly source?: string;

/**
   * The sourceType of the watchlist
   */
readonly sourceType?: 'Local file''Remote storage';

/**
   * The tenantId where the watchlist belongs to
   */
readonly tenantId?: string;

/**
   * The last time the watchlist was updated
   */
readonly updated?: string;

/**
   * Describes a user that updated the watchlist
   */
readonly updatedBy?: UserInfo;

/**
   * The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
   */
readonly uploadStatus?: string;

/**
   * The alias of the watchlist
   */
readonly watchlistAlias?: string;

/**
   * The id (a Guid) of the watchlist
   */
readonly watchlistId?: string;

/**
   * The type of the watchlist
   */
readonly watchlistType?: string;

/**
   * The object id of the user.
   */
readonly objectId?: string;
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
