import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesApplicationgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * The Unique identifier for application group.Supports SAS(SASKeyName=KeyName) or AAD(AADAppID=Guid)
   */
readonly clientAppGroupIdentifier: string;

/**
   * Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed
   */
readonly isEnabled?: bool;

/**
   * List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic.
   */
readonly policies?: ApplicationGroupPolicy[];

/**
   * Set the object type
   */
readonly type: ThrottlingPolicy;

/**
   * Application Group Policy types
   */
readonly type: 'ThrottlingPolicy';

/**
   * Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal
   */
readonly metricId: 'IncomingBytes''IncomingMessages''OutgoingBytes''OutgoingMessages';

/**
   * The Threshold limit above which the application group will be throttled.Rate limit is always per second.
   */
readonly rateLimitThreshold: number;
}

/**
 * EventhubNamespacesApplicationgroups resource
 */
export class EventhubNamespacesApplicationgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesApplicationgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesApplicationgroupsProps): string {
    return JSON.stringify(
        {properties: {clientAppGroupIdentifier: "string", isEnabled: "${bool}", policies: [{name: "string", type: "string"}]}}
    );
  }
}
