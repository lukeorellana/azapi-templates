import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The creator of the content item.
   */
readonly author?: MetadataAuthor;

/**
   * Categories for the solution content item
   */
readonly categories?: MetadataCategories;

/**
   * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
   */
readonly contentId?: string;

/**
   * Schema version of the content. Can be used to distinguish between different flow based on the schema version
   */
readonly contentSchemaVersion?: string;

/**
   * The custom version of the content. A optional free text
   */
readonly customVersion?: string;

/**
   * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
   */
readonly dependencies?: MetadataDependencies;

/**
   * first publish date solution content item
   */
readonly firstPublishDate?: string;

/**
   * the icon identifier. this id can later be fetched from the solution template
   */
readonly icon?: string;

/**
   * The kind of content the metadata is for.
   */
readonly kind: 'AnalyticsRule''AnalyticsRuleTemplate''AutomationRule''AzureFunction''DataConnector''DataType''HuntingQuery''InvestigationQuery''LogicAppsCustomConnector''Parser''Playbook''PlaybookTemplate''Solution''Watchlist''WatchlistTemplate''Workbook''WorkbookTemplate';

/**
   * last publish date for the solution content item
   */
readonly lastPublishDate?: string;

/**
   * Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
   */
readonly parentId: string;

/**
   * preview image file names. These will be taken from the solution artifacts
   */
readonly previewImages?: string[];

/**
   * preview image file names. These will be taken from the solution artifacts. used for dark theme support
   */
readonly previewImagesDark?: string[];

/**
   * Providers for the solution content item
   */
readonly providers?: string[];

/**
   * Source of the content.  This is where/how it was created.
   */
readonly source?: MetadataSource;

/**
   * Support information for the metadata - type, name, contact information
   */
readonly support?: MetadataSupport;

/**
   * the tactics the resource covers
   */
readonly threatAnalysisTactics?: string[];

/**
   * the techniques the resource covers, these have to be aligned with the tactics being used
   */
readonly threatAnalysisTechniques?: string[];

/**
   * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks
   */
readonly version?: string;

/**
   * Email of author contact
   */
readonly email?: string;

/**
   * Link for author/vendor page
   */
readonly link?: string;

/**
   * domain for the solution content item
   */
readonly domains?: string[];

/**
   * Industry verticals for the solution content item
   */
readonly verticals?: string[];

/**
   * Id of the content item we depend on
   */
readonly contentId?: string;

/**
   * This is the list of dependencies we must fulfill, according to the AND/OR operator
   */
readonly criteria?: MetadataDependencies[];

/**
   * Type of the content item we depend on
   */
readonly kind?: 'AnalyticsRule''AnalyticsRuleTemplate''AutomationRule''AzureFunction''DataConnector''DataType''HuntingQuery''InvestigationQuery''LogicAppsCustomConnector''Parser''Playbook''PlaybookTemplate''Solution''Watchlist''WatchlistTemplate''Workbook''WorkbookTemplate';

/**
   * Operator used for list of dependencies in criteria array.
   */
readonly operator?: 'AND''OR';

/**
   * Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.
   */
readonly version?: string;

/**
   * Source type of the content
   */
readonly kind: 'Community''LocalWorkspace''Solution''SourceRepository';

/**
   * ID of the content source.  The solution ID, workspace ID, etc
   */
readonly sourceId?: string;

/**
   * Email of support contact
   */
readonly email?: string;

/**
   * Link for support help, like to support page to open a ticket etc.
   */
readonly link?: string;

/**
   * Type of support for content item
   */
readonly tier: 'Community''Microsoft''Partner';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
