import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticMonitorsTagrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:monitors;

/**
   * Rules for sending logs.
   */
readonly logRules?: LogRules;

/**
   * Provisioning state of the monitoring tag rules.
   */
readonly provisioningState?: 'Accepted''Canceled''Creating''Deleted''Deleting''Failed''NotSpecified''Succeeded''Updating';

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
   * Valid actions for a filtering tag.
   */
readonly action?: 'Exclude''Include';

/**
   * The value of the tag.
   */
readonly value?: string;
}

/**
 * ElasticMonitorsTagrules resource
 */
export class ElasticMonitorsTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticMonitorsTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Elastic/monitors/tagRules@2022-07-01-preview";
  }

  protected getResourceBody(props: ElasticMonitorsTagrulesProps): string {
    return JSON.stringify(
        {properties: {logRules: {filteringTags: [{action: "string", name: "string", value: "string"}], sendAadLogs: "${bool}", sendActivityLogs: "${bool}", sendSubscriptionLogs: "${bool}"}, provisioningState: "string"}}
    );
  }
}
