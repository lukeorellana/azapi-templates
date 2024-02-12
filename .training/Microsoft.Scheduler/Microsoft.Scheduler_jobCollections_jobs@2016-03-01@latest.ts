import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SchedulerJobcollectionsJobsProps extends IAzAPIBaseProps {

}

/**
 * SchedulerJobcollectionsJobs resource
 */
export class SchedulerJobcollectionsJobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SchedulerJobcollectionsJobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Scheduler/jobCollections/jobs@2016-03-01";
  }

  protected getResourceBody(props: SchedulerJobcollectionsJobsProps): string {
    return JSON.stringify(
        {properties: {action: {errorAction: {queueMessage: {message: "string", queueName: "string", sasToken: "string", storageAccount: "string"}, request: {authentication: {type: "string"}, body: "string", headers: {}, method: "string", uri: "string"}, retryPolicy: {retryCount: "${int}", retryInterval: "string", retryType: "string"}, serviceBusQueueMessage: {authentication: {sasKey: "string", sasKeyName: "string", type: "string"}, brokeredMessageProperties: {contentType: "string", correlationId: "string", forcePersistence: "${bool}", label: "string", messageId: "string", partitionKey: "string", replyTo: "string", replyToSessionId: "string", scheduledEnqueueTimeUtc: "string", sessionId: "string", timeToLive: "string", to: "string", viaPartitionKey: "string"}, customMessageProperties: {}, message: "string", namespace: "string", queueName: "string", transportType: "string"}, serviceBusTopicMessage: {authentication: {sasKey: "string", sasKeyName: "string", type: "string"}, brokeredMessageProperties: {contentType: "string", correlationId: "string", forcePersistence: "${bool}", label: "string", messageId: "string", partitionKey: "string", replyTo: "string", replyToSessionId: "string", scheduledEnqueueTimeUtc: "string", sessionId: "string", timeToLive: "string", to: "string", viaPartitionKey: "string"}, customMessageProperties: {}, message: "string", namespace: "string", topicPath: "string", transportType: "string"}, type: "string"}, queueMessage: {message: "string", queueName: "string", sasToken: "string", storageAccount: "string"}, request: {authentication: {type: "string"}, body: "string", headers: {}, method: "string", uri: "string"}, retryPolicy: {retryCount: "${int}", retryInterval: "string", retryType: "string"}, serviceBusQueueMessage: {authentication: {sasKey: "string", sasKeyName: "string", type: "string"}, brokeredMessageProperties: {contentType: "string", correlationId: "string", forcePersistence: "${bool}", label: "string", messageId: "string", partitionKey: "string", replyTo: "string", replyToSessionId: "string", scheduledEnqueueTimeUtc: "string", sessionId: "string", timeToLive: "string", to: "string", viaPartitionKey: "string"}, customMessageProperties: {}, message: "string", namespace: "string", queueName: "string", transportType: "string"}, serviceBusTopicMessage: {authentication: {sasKey: "string", sasKeyName: "string", type: "string"}, brokeredMessageProperties: {contentType: "string", correlationId: "string", forcePersistence: "${bool}", label: "string", messageId: "string", partitionKey: "string", replyTo: "string", replyToSessionId: "string", scheduledEnqueueTimeUtc: "string", sessionId: "string", timeToLive: "string", to: "string", viaPartitionKey: "string"}, customMessageProperties: {}, message: "string", namespace: "string", topicPath: "string", transportType: "string"}, type: "string"}, recurrence: {count: "${int}", endTime: "string", frequency: "string", interval: "${int}", schedule: {hours: ["${int}"], minutes: ["${int}"], monthDays: ["${int}"], monthlyOccurrences: [{day: "string", Occurrence: "${int}"}], weekDays: ["string"]}}, startTime: "string", state: "string"}}
    );
  }
}
