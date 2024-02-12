import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsAutoscalesettingsProps extends IAzAPIBaseProps {

}

/**
 * InsightsAutoscalesettings resource
 */
export class InsightsAutoscalesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsAutoscalesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/autoscalesettings@2022-10-01";
  }

  protected getResourceBody(props: InsightsAutoscalesettingsProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", name: "string", notifications: [{email: {customEmails: ["string"], sendToSubscriptionAdministrator: "${bool}", sendToSubscriptionCoAdministrators: "${bool}"}, operation: "Scale", webhooks: [{properties: {}, serviceUri: "string"}]}], predictiveAutoscalePolicy: {scaleLookAheadTime: "string", scaleMode: "string"}, profiles: [{capacity: {default: "string", maximum: "string", minimum: "string"}, fixedDate: {end: "string", start: "string", timeZone: "string"}, name: "string", recurrence: {frequency: "string", schedule: {days: ["string"], hours: ["${int}"], minutes: ["${int}"], timeZone: "string"}}, rules: [{metricTrigger: {dimensions: [{DimensionName: "string", Operator: "string", Values: ["string"]}], dividePerInstance: "${bool}", metricName: "string", metricNamespace: "string", metricResourceLocation: "string", metricResourceUri: "string", operator: "string", statistic: "string", threshold: "${int}", timeAggregation: "string", timeGrain: "string", timeWindow: "string"}, scaleAction: {cooldown: "string", direction: "string", type: "string", value: "string"}}]}], targetResourceLocation: "string", targetResourceUri: "string"}}
    );
  }
}
