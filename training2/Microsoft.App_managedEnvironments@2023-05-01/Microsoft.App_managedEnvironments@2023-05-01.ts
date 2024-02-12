import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsProps extends IAzAPIBaseProps {
/**
   * Kind of the Environment.
   */
readonly kind?: string;

/**
   * Cluster configuration which enables the log daemon to exportapp logs to a destination. Currently only "log-analytics" issupported
   */
readonly appLogsConfiguration?: AppLogsConfiguration;

/**
   * Custom domain configuration for the environment
   */
readonly customDomainConfiguration?: CustomDomainConfiguration;

/**
   * Application Insights connection string used by Dapr to export Service to Service communication telemetry
   */
readonly daprAIConnectionString?: string;

/**
   * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
   */
readonly daprAIInstrumentationKey?: string;

/**
   * The configuration of Dapr component.
   */
readonly daprConfiguration?: DaprConfiguration;

/**
   * Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet.
   */
readonly infrastructureResourceGroup?: string;

/**
   * The configuration of Keda component.
   */
readonly kedaConfiguration?: KedaConfiguration;

/**
   * Peer authentication settings for the Managed Environment
   */
readonly peerAuthentication?: ManagedEnvironmentPropertiesPeerAuthentication;

/**
   * Vnet configuration for the environment
   */
readonly vnetConfiguration?: VnetConfiguration;

/**
   * Workload profiles configured for the Managed Environment.
   */
readonly workloadProfiles?: WorkloadProfile[];

/**
   * Whether or not this Managed Environment is zone-redundant.
   */
readonly zoneRedundant?: bool;

/**
   * Logs destination, can be 'log-analytics', 'azure-monitor' or 'none'
   */
readonly destination?: string;

/**
   * Log Analytics configuration, must only be provided when destination is configured as 'log-analytics'
   */
readonly logAnalyticsConfiguration?: LogAnalyticsConfiguration;

/**
   * Log analytics customer id
   */
readonly customerId?: string;

/**
   * Log analytics customer key
   */
readonly sharedKey?: string;

/**
   * Certificate password
   */
readonly certificatePassword?: string;

/**
   * PFX or PEM blob
   */
readonly certificateValue?: For Bicep, you can use theany()function.;

/**
   * Dns suffix for the environment domain
   */
readonly dnsSuffix?: string;

/**
   * Mutual TLS authentication settings for the Managed Environment
   */
readonly mtls?: Mtls;

/**
   * Boolean indicating whether the mutual TLS authentication is enabled
   */
readonly enabled?: bool;

/**
   * CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges.
   */
readonly dockerBridgeCidr?: string;

/**
   * Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges.
   */
readonly infrastructureSubnetId?: string;

/**
   * Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property
   */
readonly internal?: bool;

/**
   * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges.
   */
readonly platformReservedCidr?: string;

/**
   * An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server.
   */
readonly platformReservedDnsIP?: string;

/**
   * The maximum capacity.
   */
readonly maximumCount?: number;

/**
   * The minimum capacity.
   */
readonly minimumCount?: number;

/**
   * Workload profile type for the workloads to run on.
   */
readonly workloadProfileType: string;
}

/**
 * AppManagedenvironments resource
 */
export class AppManagedenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsProps): string {
    return JSON.stringify(
        {properties: {appLogsConfiguration: {destination: "string", logAnalyticsConfiguration: {customerId: "string", sharedKey: "string"}}, customDomainConfiguration: {certificatePassword: "string", dnsSuffix: "string"}, daprAIConnectionString: "string", daprAIInstrumentationKey: "string", daprConfiguration: {}, infrastructureResourceGroup: "string", kedaConfiguration: {}, peerAuthentication: {mtls: {enabled: "${bool}"}}, vnetConfiguration: {dockerBridgeCidr: "string", infrastructureSubnetId: "string", internal: "${bool}", platformReservedCidr: "string", platformReservedDnsIP: "string"}, workloadProfiles: [{maximumCount: "${int}", minimumCount: "${int}", name: "string", workloadProfileType: "string"}], zoneRedundant: "${bool}"}, kind: "string"}
    );
  }
}
