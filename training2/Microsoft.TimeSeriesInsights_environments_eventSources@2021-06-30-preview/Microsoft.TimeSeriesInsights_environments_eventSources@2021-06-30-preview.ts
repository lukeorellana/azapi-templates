import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsEventsourcesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: Microsoft.EventHubMicrosoft.IoTHub;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:environments;

/**
   * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
   */
readonly localTimestamp?: LocalTimestamp;

/**
   * The kind of the event source.
   */
readonly kind: 'Microsoft.EventHub';

/**
   * The name of the event hub's consumer group that holds the partitions from which events will be read.
   */
readonly consumerGroupName: string;

/**
   * The name of the event hub.
   */
readonly eventHubName: string;

/**
   * The resource id of the event source in Azure Resource Manager.
   */
readonly eventSourceResourceId: string;

/**
   * An object that contains the details about the starting point in time to ingest events.
   */
readonly ingressStartAt?: IngressStartAtProperties;

/**
   * The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
   */
readonly keyName: string;

/**
   * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
   */
readonly localTimestamp?: LocalTimestamp;

/**
   * The name of the service bus that contains the event hub.
   */
readonly serviceBusNamespace: string;

/**
   * The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses.
   */
readonly sharedAccessKey: string;

/**
   * The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
   */
readonly timestampPropertyName?: string;

/**
   * ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed.
   */
readonly time?: string;

/**
   * The type of the ingressStartAt, It can be "EarliestAvailable", "EventSourceCreationTime", "CustomEnqueuedTime".
   */
readonly type?: 'CustomEnqueuedTime''EarliestAvailable''EventSourceCreationTime';

/**
   * An enum that represents the format of the local timestamp property that needs to be set.
   */
readonly format?: 'Embedded';

/**
   * An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.
   */
readonly timeZoneOffset?: LocalTimestampTimeZoneOffset;

/**
   * The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00)
   */
readonly propertyName?: string;

/**
   * The kind of the event source.
   */
readonly kind: 'Microsoft.IoTHub';

/**
   * The name of the iot hub's consumer group that holds the partitions from which events will be read.
   */
readonly consumerGroupName: string;

/**
   * The resource id of the event source in Azure Resource Manager.
   */
readonly eventSourceResourceId: string;

/**
   * An object that contains the details about the starting point in time to ingest events.
   */
readonly ingressStartAt?: IngressStartAtProperties;

/**
   * The name of the iot hub.
   */
readonly iotHubName: string;

/**
   * The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
   */
readonly keyName: string;

/**
   * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
   */
readonly localTimestamp?: LocalTimestamp;

/**
   * The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
   */
readonly sharedAccessKey: string;

/**
   * The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
   */
readonly timestampPropertyName?: string;
}

/**
 * TimeseriesinsightsEnvironmentsEventsources resource
 */
export class TimeseriesinsightsEnvironmentsEventsources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsEventsourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsEventsourcesProps): string {
    return JSON.stringify(
        {kind: "string", localTimestamp: {format: "Embedded", timeZoneOffset: {propertyName: "string"}}}
    );
  }
}
