import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsAccountsTagrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * Set of rules for sending logs for the Monitor resource.
   */
readonly logRules?: LogRules;

/**
   * List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
   */
readonly filteringTags?: FilteringTag[];

/**
   * Flag specifying if AAD logs should be sent for the Monitor resource.
   */
readonly sendAadLogs?: bool;

/**
   * Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
   */
readonly sendActivityLogs?: bool;

/**
   * Flag specifying if subscription logs should be sent for the Monitor resource.
   */
readonly sendSubscriptionLogs?: bool;

/**
   * Valid actions for a filtering tag. Exclusion takes priority over inclusion.
   */
readonly action?: 'Exclude''Include';

/**
   * The value of the tag.
   */
readonly value?: string;
}

/**
 * LogzMonitorsAccountsTagrules resource
 */
export class LogzMonitorsAccountsTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsAccountsTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsAccountsTagrulesProps): string {
    return JSON.stringify(
        {properties: {logRules: {filteringTags: [{action: "string", name: "string", value: "string"}], sendAadLogs: "${bool}", sendActivityLogs: "${bool}", sendSubscriptionLogs: "${bool}"}}}
    );
  }
}
