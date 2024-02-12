import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersConnectionmonitorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkWatchers;

/**
   * Determines if the connection monitor will start automatically once created.
   */
readonly autoStart?: bool;

/**
   * Describes the destination of connection monitor.
   */
readonly destination?: ConnectionMonitorDestination;

/**
   * List of connection monitor endpoints.
   */
readonly endpoints?: ConnectionMonitorEndponumber[];

/**
   * Monitoring interval in seconds.
   */
readonly monitoringIntervalInSeconds?: number;

/**
   * Optional notes to be associated with the connection monitor.
   */
readonly notes?: string;

/**
   * List of connection monitor outputs.
   */
readonly outputs?: ConnectionMonitorOutput[];

/**
   * Describes the source of connection monitor.
   */
readonly source?: ConnectionMonitorSource;

/**
   * List of connection monitor test configurations.
   */
readonly testConfigurations?: ConnectionMonitorTestConfiguration[];

/**
   * List of connection monitor test groups.
   */
readonly testGroups?: ConnectionMonitorTestGroup[];

/**
   * Address of the connection monitor destination (IP or domain name).
   */
readonly address?: string;

/**
   * The destination port used by connection monitor.
   */
readonly port?: number;

/**
   * The ID of the resource used as the destination by connection monitor.
   */
readonly resourceId?: string;

/**
   * Address of the connection monitor endpoint (IP or domain name).
   */
readonly address?: string;

/**
   * Test coverage for the endpoint.
   */
readonly coverageLevel?: 'AboveAverage''Average''BelowAverage''Default''Full''Low';

/**
   * Filter for sub-items within the endpoint.
   */
readonly filter?: ConnectionMonitorEndponumberFilter;

/**
   * Resource ID of the connection monitor endpoint.
   */
readonly resourceId?: string;

/**
   * Endpoint scope.
   */
readonly scope?: ConnectionMonitorEndponumberScope;

/**
   * The endpoint type.
   */
readonly type?: 'AzureArcVM''AzureSubnet''AzureVM''AzureVMSS''AzureVNet''ExternalAddress''MMAWorkspaceMachine''MMAWorkspaceNetwork';

/**
   * List of items in the filter.
   */
readonly items?: ConnectionMonitorEndponumberFilterItem[];

/**
   * The behavior of the endpoint filter. Currently only 'Include' is supported.
   */
readonly type?: 'Include';

/**
   * The address of the filter item.
   */
readonly address?: string;

/**
   * The type of item included in the filter. Currently only 'AgentAddress' is supported.
   */
readonly type?: 'AgentAddress';

/**
   * List of items which needs to be excluded from the endpoint scope.
   */
readonly exclude?: ConnectionMonitorEndponumberScopeItem[];

/**
   * List of items which needs to be included to the endpoint scope.
   */
readonly include?: ConnectionMonitorEndponumberScopeItem[];

/**
   * The address of the endpoint item. Supported types are IPv4/IPv6 subnet mask or IPv4/IPv6 IP address.
   */
readonly address?: string;

/**
   * Connection monitor output destination type. Currently, only "Workspace" is supported.
   */
readonly type?: 'Workspace';

/**
   * Describes the settings for producing output into a log analytics workspace.
   */
readonly workspaceSettings?: ConnectionMonitorWorkspaceSettings;

/**
   * Log analytics workspace resource ID.
   */
readonly workspaceResourceId?: string;

/**
   * The source port used by connection monitor.
   */
readonly port?: number;

/**
   * The ID of the resource used as the source by connection monitor.
   */
readonly resourceId: string;

/**
   * The parameters used to perform test evaluation over HTTP.
   */
readonly httpConfiguration?: ConnectionMonitorHttpConfiguration;

/**
   * The parameters used to perform test evaluation over ICMP.
   */
readonly icmpConfiguration?: ConnectionMonitorIcmpConfiguration;

/**
   * The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
   */
readonly preferredIPVersion?: 'IPv4''IPv6';

/**
   * The protocol to use in test evaluation.
   */
readonly protocol: 'Http''Icmp''Tcp';

/**
   * The threshold for declaring a test successful.
   */
readonly successThreshold?: ConnectionMonitorSuccessThreshold;

/**
   * The parameters used to perform test evaluation over TCP.
   */
readonly tcpConfiguration?: ConnectionMonitorTcpConfiguration;

/**
   * The frequency of test evaluation, in seconds.
   */
readonly testFrequencySec?: number;

/**
   * The HTTP method to use.
   */
readonly method?: 'Get''Post';

/**
   * The path component of the URI. For instance, "/dir1/dir2".
   */
readonly path?: string;

/**
   * The port to connect to.
   */
readonly port?: number;

/**
   * Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
   */
readonly preferHTTPS?: bool;

/**
   * The HTTP headers to transmit with the request.
   */
readonly requestHeaders?: HttpHeader[];

/**
   * HTTP status codes to consider successful. For instance, "2xx,301-304,418".
   */
readonly validStatusCodeRanges?: string[];

/**
   * The value in HTTP header.
   */
readonly value?: string;

/**
   * Value indicating whether path evaluation with trace route should be disabled.
   */
readonly disableTraceRoute?: bool;

/**
   * The maximum percentage of failed checks permitted for a test to evaluate as successful.
   */
readonly checksFailedPercent?: number;

/**
   * The maximum round-trip time in milliseconds permitted for a test to evaluate as successful.
   */
readonly roundTripTimeMs?: number;

/**
   * Destination port behavior.
   */
readonly destinationPortBehavior?: 'ListenIfAvailable''None';

/**
   * Value indicating whether path evaluation with trace route should be disabled.
   */
readonly disableTraceRoute?: bool;

/**
   * The port to connect to.
   */
readonly port?: number;

/**
   * List of destination endpoint names.
   */
readonly destinations: string[];

/**
   * Value indicating whether test group is disabled.
   */
readonly disable?: bool;

/**
   * List of source endpoint names.
   */
readonly sources: string[];

/**
   * List of test configuration names.
   */
readonly testConfigurations: string[];
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
