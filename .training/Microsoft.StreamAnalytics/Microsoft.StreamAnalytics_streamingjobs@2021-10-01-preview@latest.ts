import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsProps extends IAzAPIBaseProps {

}

/**
 * StreamanalyticsStreamingjobs resource
 */
export class StreamanalyticsStreamingjobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsProps): string {
    return JSON.stringify(
        {properties: {cluster: {id: "string"}, compatibilityLevel: "string", contentStoragePolicy: "string", dataLocale: "string", eventsLateArrivalMaxDelayInSeconds: "${int}", eventsOutOfOrderMaxDelayInSeconds: "${int}", eventsOutOfOrderPolicy: "string", externals: {container: "string", path: "string", refreshConfiguration: {dateFormat: "string", pathPattern: "string", refreshInterval: "string", refreshType: "string", timeFormat: "string"}, storageAccount: {accountKey: "string", accountName: "string", authenticationMode: "string"}}, functions: [{name: "string", properties: {properties: {binding: {type: "string"}, inputs: [{dataType: "string", isConfigurationParameter: "${bool}"}], output: {dataType: "string"}}, type: "string"}}], inputs: [{name: "string", properties: {compression: {type: "string"}, partitionKey: "string", serialization: {type: "string"}, watermarkSettings: {watermarkMode: "string"}, type: "string"}}], jobStorageAccount: {accountKey: "string", accountName: "string", authenticationMode: "string"}, jobType: "string", outputErrorPolicy: "string", outputs: [{name: "string", properties: {datasource: {type: "string"}, serialization: {type: "string"}, sizeWindow: "${int}", timeWindow: "string", watermarkSettings: {maxWatermarkDifferenceAcrossPartitions: "string", watermarkMode: "string"}}}], outputStartMode: "string", outputStartTime: "string", sku: {capacity: "${int}", name: "Standard"}, transformation: {name: "string", properties: {query: "string", streamingUnits: "${int}", validStreamingUnits: ["${int}"]}}}, sku: {capacity: "${int}", name: "Standard"}}
    );
  }
}
