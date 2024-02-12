import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The reason the incident was closed
   */
readonly classification?: 'BenignPositive''FalsePositive''TruePositive''Undetermined';

/**
   * Describes the reason the incident was closed
   */
readonly classificationComment?: string;

/**
   * The classification reason the incident was closed with
   */
readonly classificationReason?: 'InaccurateData''IncorrectAlertLogic''SuspiciousActivity''SuspiciousButExpected';

/**
   * The description of the incident
   */
readonly description?: string;

/**
   * The time of the first activity in the incident
   */
readonly firstActivityTimeUtc?: string;

/**
   * List of labels relevant to this incident
   */
readonly labels?: IncidentLabel[];

/**
   * The time of the last activity in the incident
   */
readonly lastActivityTimeUtc?: string;

/**
   * Describes a user that the incident is assigned to
   */
readonly owner?: IncidentOwnerInfo;

/**
   * The incident ID assigned by the incident provider
   */
readonly providerIncidentId?: string;

/**
   * The name of the source provider that generated the incident
   */
readonly providerName?: string;

/**
   * The severity of the incident
   */
readonly severity: 'High''Informational''Low''Medium';

/**
   * The status of the incident
   */
readonly status: 'Active''Closed''New';

/**
   * Describes a team for the incident
   */
readonly teamInformation?: TeamInformation;

/**
   * The title of the incident
   */
readonly title: string;

/**
   * The name of the label
   */
readonly labelName: string;

/**
   * The name of the user the incident is assigned to.
   */
readonly assignedTo?: string;

/**
   * The email of the user the incident is assigned to.
   */
readonly email?: string;

/**
   * The object id of the user the incident is assigned to.
   */
readonly objectId?: string;

/**
   * The type of the owner the incident is assigned to.
   */
readonly ownerType?: 'Group''Unknown''User';

/**
   * The user principal name of the user the incident is assigned to.
   */
readonly userPrincipalName?: string;
}

/**
 * SecurityinsightsIncidents resource
 */
export class SecurityinsightsIncidents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsProps): string {
    return JSON.stringify(
        {properties: {classification: "string", classificationComment: "string", classificationReason: "string", description: "string", firstActivityTimeUtc: "string", labels: [{labelName: "string"}], lastActivityTimeUtc: "string", owner: {assignedTo: "string", email: "string", objectId: "string", ownerType: "string", userPrincipalName: "string"}, providerIncidentId: "string", providerName: "string", severity: "string", status: "string", teamInformation: {}, title: "string"}, etag: "string"}
    );
  }
}
