import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsLogprofilesProps extends IAzAPIBaseProps {
/**
   * the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
   */
readonly categories: string[];

/**
   * List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
   */
readonly locations: string[];

/**
   * the retention policy for the events in the log.
   */
readonly retentionPolicy: RetentionPolicy;

/**
   * The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
   */
readonly serviceBusRuleId?: string;

/**
   * the resource id of the storage account to which you would like to send the Activity Log.
   */
readonly storageAccountId?: string;

/**
   * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
   */
readonly days: number Constranumbers:Min value = 0;

/**
   * a value indicating whether the retention policy is enabled.
   */
readonly enabled: bool;
}

/**
 * InsightsLogprofiles resource
 */
export class InsightsLogprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsLogprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/logprofiles@2016-03-01";
  }

  protected getResourceBody(props: InsightsLogprofilesProps): string {
    return JSON.stringify(
        {properties: {categories: ["string"], locations: ["string"], retentionPolicy: {days: "${int}", enabled: "${bool}"}, serviceBusRuleId: "string", storageAccountId: "string"}}
    );
  }
}
