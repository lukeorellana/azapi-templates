import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SchedulerJobcollectionsJobsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:jobCollections;

/**
   * Gets or sets the job action.
   */
readonly action?: JobAction;

/**
   * Gets or sets the job recurrence.
   */
readonly recurrence?: JobRecurrence;

/**
   * Gets or sets the job start time.
   */
readonly startTime?: string;

/**
   * Gets or set the job state.
   */
readonly state?: 'Completed''Disabled''Enabled''Faulted';

/**
   * Gets or sets the error action.
   */
readonly errorAction?: JobErrorAction;

/**
   * Gets or sets the storage queue message.
   */
readonly queueMessage?: StorageQueueMessage;

/**
   * Gets or sets the http requests.
   */
readonly request?: HttpRequest;

/**
   * Gets or sets the retry policy.
   */
readonly retryPolicy?: RetryPolicy;

/**
   * Gets or sets the service bus queue message.
   */
readonly serviceBusQueueMessage?: ServiceBusQueueMessage;

/**
   * Gets or sets the service bus topic message.
   */
readonly serviceBusTopicMessage?: ServiceBusTopicMessage;

/**
   * Gets or sets the job action type.
   */
readonly type?: 'Http''Https''ServiceBusQueue''ServiceBusTopic''StorageQueue';

/**
   * Gets or sets the storage queue message.
   */
readonly queueMessage?: StorageQueueMessage;

/**
   * Gets or sets the http requests.
   */
readonly request?: HttpRequest;

/**
   * Gets or sets the retry policy.
   */
readonly retryPolicy?: RetryPolicy;

/**
   * Gets or sets the service bus queue message.
   */
readonly serviceBusQueueMessage?: ServiceBusQueueMessage;

/**
   * Gets or sets the service bus topic message.
   */
readonly serviceBusTopicMessage?: ServiceBusTopicMessage;

/**
   * Gets or sets the job error action type.
   */
readonly type?: 'Http''Https''ServiceBusQueue''ServiceBusTopic''StorageQueue';

/**
   * Gets or sets the message.
   */
readonly message?: string;

/**
   * Gets or sets the queue name.
   */
readonly queueName?: string;

/**
   * Gets or sets the SAS key.
   */
readonly sasToken?: string;

/**
   * Gets or sets the storage account name.
   */
readonly storageAccount?: string;

/**
   * Gets or sets the authentication method of the request.
   */
readonly authentication?: HttpAuthentication;

/**
   * Gets or sets the request body.
   */
readonly body?: string;

/**
   * Gets or sets the headers.
   */
readonly headers?: object;

/**
   * Gets or sets the method of the request.
   */
readonly method?: string;

/**
   * Gets or sets the URI of the request.
   */
readonly uri?: string;

/**
   * Set the object type
   */
readonly type: ActiveDirectoryOAuthBasicClientCertificate;

/**
   * Gets or sets the HTTP authentication type.
   */
readonly type: 'ActiveDirectoryOAuth';

/**
   * Gets or sets the audience.
   */
readonly audience?: string;

/**
   * Gets or sets the client identifier.
   */
readonly clientId?: string;

/**
   * Gets or sets the secret, return value will always be empty.
   */
readonly secret?: string;

/**
   * Gets or sets the tenant.
   */
readonly tenant?: string;

/**
   * Gets or sets the HTTP authentication type.
   */
readonly type: 'Basic';

/**
   * Gets or sets the password, return value will always be empty.
   */
readonly password?: string;

/**
   * Gets or sets the username.
   */
readonly username?: string;

/**
   * Gets or sets the HTTP authentication type.
   */
readonly type: 'ClientCertificate';

/**
   * Gets or sets the certificate expiration date.
   */
readonly certificateExpirationDate?: string;

/**
   * Gets or sets the certificate subject name.
   */
readonly certificateSubjectName?: string;

/**
   * Gets or sets the certificate thumbprint.
   */
readonly certificateThumbprint?: string;

/**
   * Gets or sets the certificate password, return value will always be empty.
   */
readonly password?: string;

/**
   * Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty.
   */
readonly pfx?: string;

/**
   * Gets or sets the number of times a retry should be attempted.
   */
readonly retryCount?: number;

/**
   * Gets or sets the retry interval between retries, specify duration in ISO 8601 format.
   */
readonly retryInterval?: string;

/**
   * Gets or sets the retry strategy to be used.
   */
readonly retryType?: 'Fixed''None';

/**
   * Gets or sets the Service Bus authentication.
   */
readonly authentication?: ServiceBusAuthentication;

/**
   * Gets or sets the brokered message properties.
   */
readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;

/**
   * Gets or sets the custom message properties.
   */
readonly customMessageProperties?: object;

/**
   * Gets or sets the message.
   */
readonly message?: string;

/**
   * Gets or sets the namespace.
   */
readonly namespace?: string;

/**
   * Gets or sets the queue name.
   */
readonly queueName?: string;

/**
   * Gets or sets the transport type.
   */
readonly transportType?: 'AMQP''NetMessaging''NotSpecified';

/**
   * Gets or sets the SAS key.
   */
readonly sasKey?: string;

/**
   * Gets or sets the SAS key name.
   */
readonly sasKeyName?: string;

/**
   * Gets or sets the authentication type.
   */
readonly type?: 'NotSpecified''SharedAccessKey';

/**
   * Gets or sets the content type.
   */
readonly contentType?: string;

/**
   * Gets or sets the correlation ID.
   */
readonly correlationId?: string;

/**
   * Gets or sets the force persistence.
   */
readonly forcePersistence?: bool;

/**
   * Gets or sets the label.
   */
readonly label?: string;

/**
   * Gets or sets the message ID.
   */
readonly messageId?: string;

/**
   * Gets or sets the partition key.
   */
readonly partitionKey?: string;

/**
   * Gets or sets the reply to.
   */
readonly replyTo?: string;

/**
   * Gets or sets the reply to session ID.
   */
readonly replyToSessionId?: string;

/**
   * Gets or sets the scheduled enqueue time UTC.
   */
readonly scheduledEnqueueTimeUtc?: string;

/**
   * Gets or sets the session ID.
   */
readonly sessionId?: string;

/**
   * Gets or sets the time to live.
   */
readonly timeToLive?: string;

/**
   * Gets or sets the to.
   */
readonly to?: string;

/**
   * Gets or sets the via partition key.
   */
readonly viaPartitionKey?: string;

/**
   * Gets or sets the Service Bus authentication.
   */
readonly authentication?: ServiceBusAuthentication;

/**
   * Gets or sets the brokered message properties.
   */
readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;

/**
   * Gets or sets the custom message properties.
   */
readonly customMessageProperties?: object;

/**
   * Gets or sets the message.
   */
readonly message?: string;

/**
   * Gets or sets the namespace.
   */
readonly namespace?: string;

/**
   * Gets or sets the topic path.
   */
readonly topicPath?: string;

/**
   * Gets or sets the transport type.
   */
readonly transportType?: 'AMQP''NetMessaging''NotSpecified';

/**
   * Gets or sets the maximum number of times that the job should run.
   */
readonly count?: number;

/**
   * Gets or sets the time at which the job will complete.
   */
readonly endTime?: string;

/**
   * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
   */
readonly frequency?: 'Day''Hour''Minute''Month''Week';

/**
   * Gets or sets the interval between retries.
   */
readonly interval?: number;

/**
   * 
   */
readonly schedule?: JobRecurrenceSchedule;

/**
   * Gets or sets the hours of the day that the job should execute at.
   */
readonly hours?: number[];

/**
   * Gets or sets the minutes of the hour that the job should execute at.
   */
readonly minutes?: number[];

/**
   * Gets or sets the days of the month that the job should execute on. Must be between 1 and 31.
   */
readonly monthDays?: number[];

/**
   * Gets or sets the occurrences of days within a month.
   */
readonly monthlyOccurrences?: JobRecurrenceScheduleMonthlyOccurrence[];

/**
   * Gets or sets the days of the week that the job should execute on.
   */
readonly weekDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
   */
readonly day?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Gets or sets the occurrence. Must be between -5 and 5.
   */
readonly Occurrence?: number;
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
