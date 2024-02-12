import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDatacollectionrulesProps extends IAzAPIBaseProps {

}

/**
 * InsightsDatacollectionrules resource
 */
export class InsightsDatacollectionrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDatacollectionrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/dataCollectionRules@2022-06-01";
  }

  protected getResourceBody(props: InsightsDatacollectionrulesProps): string {
    return JSON.stringify(
        {properties: {dataCollectionEndpointId: "string", dataFlows: [{builtInTransform: "string", destinations: ["string"], outputStream: "string", streams: ["string"], transformKql: "string"}], dataSources: {dataImports: {eventHub: {consumerGroup: "string", name: "string", stream: "string"}}, extensions: [{extensionName: "string", inputDataSources: ["string"], name: "string", streams: ["string"]}], iisLogs: [{logDirectories: ["string"], name: "string", streams: ["string"]}], logFiles: [{filePatterns: ["string"], format: "text", name: "string", settings: {text: {recordStartTimestampFormat: "string"}}, streams: ["string"]}], performanceCounters: [{counterSpecifiers: ["string"], name: "string", samplingFrequencyInSeconds: "${int}", streams: ["string"]}], platformTelemetry: [{name: "string", streams: ["string"]}], prometheusForwarder: [{labelIncludeFilter: {}, name: "string", streams: "Microsoft-PrometheusMetrics"}], syslog: [{facilityNames: ["string"], logLevels: ["string"], name: "string", streams: "Microsoft-Syslog"}], windowsEventLogs: [{name: "string", streams: ["string"], xPathQueries: ["string"]}], windowsFirewallLogs: [{name: "string", streams: ["string"]}]}, description: "string", destinations: {azureMonitorMetrics: {name: "string"}, eventHubs: [{eventHubResourceId: "string", name: "string"}], eventHubsDirect: [{eventHubResourceId: "string", name: "string"}], logAnalytics: [{name: "string", workspaceResourceId: "string"}], monitoringAccounts: [{accountResourceId: "string", name: "string"}], storageAccounts: [{containerName: "string", name: "string", storageAccountResourceId: "string"}], storageBlobsDirect: [{containerName: "string", name: "string", storageAccountResourceId: "string"}], storageTablesDirect: [{name: "string", storageAccountResourceId: "string", tableName: "string"}]}, streamDeclarations: {}}, kind: "string"}
    );
  }
}
