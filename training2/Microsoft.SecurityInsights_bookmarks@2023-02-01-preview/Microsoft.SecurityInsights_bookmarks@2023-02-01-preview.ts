import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsBookmarksProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The time the bookmark was created
   */
readonly created?: string;

/**
   * Describes a user that created the bookmark
   */
readonly createdBy?: UserInfo;

/**
   * The display name of the bookmark
   */
readonly displayName: string;

/**
   * Describes the entity mappings of the bookmark
   */
readonly entityMappings?: BookmarkEntityMappings[];

/**
   * The bookmark event time
   */
readonly eventTime?: string;

/**
   * Describes an incident that relates to bookmark
   */
readonly incidentInfo?: IncidentInfo;

/**
   * List of labels relevant to this bookmark
   */
readonly labels?: string[];

/**
   * The notes of the bookmark
   */
readonly notes?: string;

/**
   * The query of the bookmark.
   */
readonly query: string;

/**
   * The end time for the query
   */
readonly queryEndTime?: string;

/**
   * The query result of the bookmark.
   */
readonly queryResult?: string;

/**
   * The start time for the query
   */
readonly queryStartTime?: string;

/**
   * A list of relevant mitre attacks
   */
readonly tactics?: String array containing any of:'Collection''CommandAndControl''CredentialAccess''DefenseEvasion''Discovery''Execution''Exfiltration''Impact''ImpairProcessControl''InhibitResponseFunction''InitialAccess''LateralMovement''Persistence''PreAttack''PrivilegeEscalation''Reconnaissance''ResourceDevelopment';

/**
   * A list of relevant mitre techniques
   */
readonly techniques?: string[];

/**
   * The last time the bookmark was updated
   */
readonly updated?: string;

/**
   * Describes a user that updated the bookmark
   */
readonly updatedBy?: UserInfo;

/**
   * The object id of the user.
   */
readonly objectId?: string;

/**
   * The entity type
   */
readonly entityType?: string;

/**
   * Array of fields mapping for that entity type
   */
readonly fieldMappings?: EntityFieldMapping[];

/**
   * Alert V3 identifier
   */
readonly identifier?: string;

/**
   * The value of the identifier
   */
readonly value?: string;

/**
   * Incident Id
   */
readonly incidentId?: string;

/**
   * Relation Name
   */
readonly relationName?: string;

/**
   * The severity of the incident
   */
readonly severity?: 'High''Informational''Low''Medium';

/**
   * The title of the incident
   */
readonly title?: string;
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
