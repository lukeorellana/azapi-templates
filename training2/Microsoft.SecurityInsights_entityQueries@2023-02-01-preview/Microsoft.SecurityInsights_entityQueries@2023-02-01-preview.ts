import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsEntityqueriesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: ActivityExpansion;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * the entity query kind
   */
readonly kind: 'Activity';

/**
   * The entity query content to display in timeline
   */
readonly content?: string;

/**
   * The entity query description
   */
readonly description?: string;

/**
   * Determines whether this activity is enabled or disabled.
   */
readonly enabled?: bool;

/**
   * The query applied only to entities matching to all filters
   */
readonly entitiesFilter?: object;

/**
   * The type of the query's source entity
   */
readonly inputEntityType?: 'Account''AzureResource''CloudApplication''DNS''File''FileHash''Host''HuntingBookmark''IP''IoTDevice''MailCluster''MailMessage''Mailbox''Malware''Nic''Process''RegistryKey''RegistryValue''SecurityAlert''SecurityGroup''SubmissionMail''URL';

/**
   * The Activity query definitions
   */
readonly queryDefinitions?: ActivityEntityQueriesPropertiesQueryDefinitions;

/**
   * List of the fields of the source entity that are required to run the query
   */
readonly requiredInputFieldsSets?: string[][];

/**
   * The template id this activity was created from
   */
readonly templateName?: string;

/**
   * The entity query title
   */
readonly title?: string;

/**
   * The Activity query to run on a given entity
   */
readonly query?: string;

/**
   * the entity query kind
   */
readonly kind: 'Expansion';
}

/**
 * SecurityinsightsEntityqueries resource
 */
export class SecurityinsightsEntityqueries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsEntityqueriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/entityQueries@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsEntityqueriesProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
