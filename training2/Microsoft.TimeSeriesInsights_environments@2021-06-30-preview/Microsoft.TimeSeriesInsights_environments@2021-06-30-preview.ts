import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsProps extends IAzAPIBaseProps {
/**
   * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
   */
readonly sku: Sku;

/**
   * Set the object type
   */
readonly kind: Gen1Gen2;

/**
   * The kind of the environment.
   */
readonly kind: 'Gen1';

/**
   * ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
   */
readonly dataRetentionTime: string;

/**
   * The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported.
   */
readonly partitionKeyProperties?: TimeSeriesIdProperty[];

/**
   * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
   */
readonly storageLimitExceededBehavior?: 'PauseIngress''PurgeOldData';

/**
   * The type of the property.
   */
readonly type?: 'String';

/**
   * The kind of the environment.
   */
readonly kind: 'Gen2';

/**
   * The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
   */
readonly storageConfiguration: Gen2StorageConfigurationInputOrGen2StorageConfigurat...;

/**
   * The list of event properties which will be used to define the environment's time series id.
   */
readonly timeSeriesIdProperties: TimeSeriesIdProperty[];

/**
   * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
   */
readonly warmStoreConfiguration?: WarmStoreConfigurationProperties;

/**
   * The name of the storage account that will hold the environment's Gen2 data.
   */
readonly accountName: string;

/**
   * The value of the management key that grants the Time Series Insights service write access to the storage account. This property is not shown in environment responses.
   */
readonly managementKey: string;

/**
   * ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store.
   */
readonly dataRetention: string;

/**
   * The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
   */
readonly capacity: number;
}

/**
 * TimeseriesinsightsEnvironments resource
 */
export class TimeseriesinsightsEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsProps): string {
    return JSON.stringify(
        {sku: {capacity: "${int}", name: "string"}, kind: "string"}
    );
  }
}
