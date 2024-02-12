import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * the cluster name of the rule group evaluation.
   */
readonly clusterName?: string;

/**
   * the description of the Prometheus rule group that will be included in the alert email.
   */
readonly description?: string;

/**
   * the flag that indicates whether the Prometheus rule group is enabled.
   */
readonly enabled?: bool;

/**
   * the interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes
   */
readonly interval?: string;

/**
   * defines the rules in the Prometheus rule group.
   */
readonly rules: PrometheusRule[];

/**
   * the list of resource id's that this rule group is scoped to.
   */
readonly scopes: string[];

/**
   * The array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. Only relevant for alerts.
   */
readonly actions?: PrometheusRuleGroupAction[];

/**
   * the name of the alert rule.
   */
readonly alert?: string;

/**
   * annotations for rule group. Only relevant for alerts.
   */
readonly annotations?: object;

/**
   * the flag that indicates whether the Prometheus rule is enabled.
   */
readonly enabled?: bool;

/**
   * the expression to run for the rule.
   */
readonly expression: string;

/**
   * the amount of time alert must be active before firing. Only relevant for alerts.
   */
readonly for?: string;

/**
   * labels for rule group. Only relevant for alerts.
   */
readonly labels?: object;

/**
   * the name of the recording rule.
   */
readonly record?: string;

/**
   * defines the configuration for resolving fired alerts. Only relevant for alerts.
   */
readonly resolveConfiguration?: PrometheusRuleResolveConfiguration;

/**
   * the severity of the alerts fired by the rule. Only relevant for alerts.
   */
readonly severity?: number;

/**
   * The resource id of the action group to use.
   */
readonly actionGroupId?: string;

/**
   * The properties of an action group object.
   */
readonly actionProperties?: object;

/**
   * the flag that indicates whether or not to auto resolve a fired alert.
   */
readonly autoResolved?: bool;

/**
   * the duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format. Should be between 1 and 15 minutes
   */
readonly timeToResolve?: string;
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
