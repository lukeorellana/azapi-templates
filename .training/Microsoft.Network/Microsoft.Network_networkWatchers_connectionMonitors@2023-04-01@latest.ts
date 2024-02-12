import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersConnectionmonitorsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkwatchersConnectionmonitors resource
 */
export class NetworkNetworkwatchersConnectionmonitors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkwatchersConnectionmonitorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkwatchersConnectionmonitorsProps): string {
    return JSON.stringify(
        {properties: {autoStart: "${bool}", destination: {address: "string", port: "${int}", resourceId: "string"}, endpoints: [{address: "string", coverageLevel: "string", filter: {items: [{address: "string", type: "AgentAddress"}], type: "Include"}, name: "string", resourceId: "string", scope: {exclude: [{address: "string"}], include: [{address: "string"}]}, type: "string"}], monitoringIntervalInSeconds: "${int}", notes: "string", outputs: [{type: "Workspace", workspaceSettings: {workspaceResourceId: "string"}}], source: {port: "${int}", resourceId: "string"}, testConfigurations: [{httpConfiguration: {method: "string", path: "string", port: "${int}", preferHTTPS: "${bool}", requestHeaders: [{name: "string", value: "string"}], validStatusCodeRanges: ["string"]}, icmpConfiguration: {disableTraceRoute: "${bool}"}, name: "string", preferredIPVersion: "string", protocol: "string", successThreshold: {checksFailedPercent: "${int}", roundTripTimeMs: "${int}"}, tcpConfiguration: {destinationPortBehavior: "string", disableTraceRoute: "${bool}", port: "${int}"}, testFrequencySec: "${int}"}], testGroups: [{destinations: ["string"], disable: "${bool}", name: "string", sources: ["string"], testConfigurations: ["string"]}]}}
    );
  }
}
