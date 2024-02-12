import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityDevicesecuritygroupsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The allow-list custom alert rules.
   */
readonly allowlistRules?: AllowlistCustomAlertRule[];

/**
   * The deny-list custom alert rules.
   */
readonly denylistRules?: DenylistCustomAlertRule[];

/**
   * The list of custom alert threshold rules.
   */
readonly thresholdRules?: ThresholdCustomAlertRule[];

/**
   * The list of custom alert time-window rules.
   */
readonly timeWindowRules?: TimeWindowCustomAlertRule[];

/**
   * The values to allow. The format of the values depends on the rule type.
   */
readonly allowlistValues: string[];

/**
   * Status of the custom alert.
   */
readonly isEnabled: bool;

/**
   * Set the object type
   */
readonly ruleType: ConnectionFromIpNotAllowedConnectionToIpNotAllowedLocalUserNotAllowedProcessNotAllowed;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'ConnectionFromIpNotAllowed';

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'ConnectionToIpNotAllowed';

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'LocalUserNotAllowed';

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'ProcessNotAllowed';

/**
   * The values to deny. The format of the values depends on the rule type.
   */
readonly denylistValues: string[];

/**
   * Status of the custom alert.
   */
readonly isEnabled: bool;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: string;

/**
   * Status of the custom alert.
   */
readonly isEnabled: bool;

/**
   * The maximum threshold.
   */
readonly maxThreshold: number;

/**
   * The minimum threshold.
   */
readonly minThreshold: number;

/**
   * Set the object type
   */
readonly ruleType: ActiveConnectionsNotInAllowedRangeAmqpC2DMessagesNotInAllowedRangeAmqpC2DRejectedMessagesNotInAllowedRangeAmqpD2CMessagesNotInAllowedRangeDirectMethodInvokesNotInAllowedRangeFailedLocalLoginsNotInAllowedRangeFileUploadsNotInAllowedRangeHttpC2DMessagesNotInAllowedRangeHttpC2DRejectedMessagesNotInAllowedRangeHttpD2CMessagesNotInAllowedRangeMqttC2DMessagesNotInAllowedRangeMqttC2DRejectedMessagesNotInAllowedRangeMqttD2CMessagesNotInAllowedRangeQueuePurgesNotInAllowedRangeTwinUpdatesNotInAllowedRangeUnauthorizedOperationsNotInAllowedRange;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'ActiveConnectionsNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'AmqpC2DMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'AmqpC2DRejectedMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'AmqpD2CMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'DirectMethodInvokesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'FailedLocalLoginsNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'FileUploadsNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'HttpC2DMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'HttpC2DRejectedMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'HttpD2CMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'MqttC2DMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'MqttC2DRejectedMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'MqttD2CMessagesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'QueuePurgesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'TwinUpdatesNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * The type of the custom alert rule.
   */
readonly ruleType: 'UnauthorizedOperationsNotInAllowedRange';

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * Status of the custom alert.
   */
readonly isEnabled: bool;

/**
   * The maximum threshold.
   */
readonly maxThreshold: number;

/**
   * The minimum threshold.
   */
readonly minThreshold: number;

/**
   * The time window size in iso8601 format.
   */
readonly timeWindowSize: string;

/**
   * Set the object type
   */
readonly ruleType: ActiveConnectionsNotInAllowedRangeAmqpC2DMessagesNotInAllowedRangeAmqpC2DRejectedMessagesNotInAllowedRangeAmqpD2CMessagesNotInAllowedRangeDirectMethodInvokesNotInAllowedRangeFailedLocalLoginsNotInAllowedRangeFileUploadsNotInAllowedRangeHttpC2DMessagesNotInAllowedRangeHttpC2DRejectedMessagesNotInAllowedRangeHttpD2CMessagesNotInAllowedRangeMqttC2DMessagesNotInAllowedRangeMqttC2DRejectedMessagesNotInAllowedRangeMqttD2CMessagesNotInAllowedRangeQueuePurgesNotInAllowedRangeTwinUpdatesNotInAllowedRangeUnauthorizedOperationsNotInAllowedRange;
}

/**
 * SecurityDevicesecuritygroups resource
 */
export class SecurityDevicesecuritygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityDevicesecuritygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/deviceSecurityGroups@2019-08-01";
  }

  protected getResourceBody(props: SecurityDevicesecuritygroupsProps): string {
    return JSON.stringify(
        {properties: {allowlistRules: [{allowlistValues: ["string"], isEnabled: "${bool}", ruleType: "string"}], denylistRules: [{denylistValues: ["string"], isEnabled: "${bool}", ruleType: "string"}], thresholdRules: [{isEnabled: "${bool}", maxThreshold: "${int}", minThreshold: "${int}", ruleType: "string"}], timeWindowRules: [{isEnabled: "${bool}", maxThreshold: "${int}", minThreshold: "${int}", timeWindowSize: "string", ruleType: "string"}]}}
    );
  }
}
