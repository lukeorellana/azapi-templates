import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsCasesProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * the case close reason details
   */
readonly closedReasonText?: string;

/**
   * The reason the case was closed
   */
readonly closeReason?: 'Dismissed''FalsePositive''Other''Resolved''TruePositive';

/**
   * The description of the case
   */
readonly description?: string;

/**
   * The end time of the case
   */
readonly endTimeUtc?: string;

/**
   * List of labels relevant to this case
   */
readonly labels?: string[];

/**
   * Describes a user that the case is assigned to
   */
readonly owner?: UserInfo;

/**
   * The severity of the case
   */
readonly severity: 'Critical''High''Informational''Low''Medium';

/**
   * The start time of the case
   */
readonly startTimeUtc?: string;

/**
   * The status of the case
   */
readonly status: 'Closed''Draft''InProgress''New';

/**
   * The title of the case
   */
readonly title: string;

/**
   * The object id of the user.
   */
readonly objectId?: string;
}

/**
 * SecurityinsightsCases resource
 */
export class SecurityinsightsCases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsCasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/cases@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsCasesProps): string {
    return JSON.stringify(
        {properties: {closedReasonText: "string", closeReason: "string", description: "string", endTimeUtc: "string", labels: ["string"], owner: {objectId: "string"}, severity: "string", startTimeUtc: "string", status: "string", title: "string"}, etag: "string"}
    );
  }
}
