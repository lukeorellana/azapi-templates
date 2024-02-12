import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebKubeenvironmentsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Extended Location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * 
   */
readonly aksResourceID?: string;

/**
   * Cluster configuration which enables the log daemon to exportapp logs to a destination. Currently only "log-analytics" issupported
   */
readonly appLogsConfiguration?: AppLogsConfiguration;

/**
   * Cluster configuration which determines the ARC clustercomponents types. Eg: Choosing between BuildService kind,FrontEnd Service ArtifactsStorageType etc.
   */
readonly arcConfiguration?: ArcConfiguration;

/**
   * Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration
   */
readonly containerAppsConfiguration?: ContainerAppsConfiguration;

/**
   * Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed
   */
readonly environmentType?: string;

/**
   * Only visible within Vnet/Subnet
   */
readonly internalLoadBalancerEnabled?: bool;

/**
   * Static IP of the KubeEnvironment
   */
readonly staticIp?: string;

/**
   * 
   */
readonly destination?: string;

/**
   * 
   */
readonly logAnalyticsConfiguration?: LogAnalyticsConfiguration;

/**
   * 
   */
readonly customerId?: string;

/**
   * 
   */
readonly sharedKey?: string;

/**
   * 
   */
readonly artifactsStorageType?: 'LocalNode''NetworkFileSystem';

/**
   * 
   */
readonly artifactStorageAccessMode?: string;

/**
   * 
   */
readonly artifactStorageClassName?: string;

/**
   * 
   */
readonly artifactStorageMountPath?: string;

/**
   * 
   */
readonly artifactStorageNodeName?: string;

/**
   * 
   */
readonly frontEndServiceConfiguration?: FrontEndConfiguration;

/**
   * 
   */
readonly kubeConfig?: string;

/**
   * 
   */
readonly kind?: 'LoadBalancer''NodePort';

/**
   * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
   */
readonly appSubnetResourceId?: string;

/**
   * Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined.
   */
readonly controlPlaneSubnetResourceId?: string;

/**
   * Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry
   */
readonly daprAIInstrumentationKey?: string;

/**
   * CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined.
   */
readonly dockerBridgeCidr?: string;

/**
   * IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges.
   */
readonly platformReservedCidr?: string;

/**
   * An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server
   */
readonly platformReservedDnsIP?: string;
}

/**
 * WebKubeenvironments resource
 */
export class WebKubeenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebKubeenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/kubeEnvironments@2022-09-01";
  }

  protected getResourceBody(props: WebKubeenvironmentsProps): string {
    return JSON.stringify(
        {properties: {aksResourceID: "string", appLogsConfiguration: {destination: "string", logAnalyticsConfiguration: {customerId: "string", sharedKey: "string"}}, arcConfiguration: {artifactsStorageType: "string", artifactStorageAccessMode: "string", artifactStorageClassName: "string", artifactStorageMountPath: "string", artifactStorageNodeName: "string", frontEndServiceConfiguration: {kind: "string"}, kubeConfig: "string"}, containerAppsConfiguration: {appSubnetResourceId: "string", controlPlaneSubnetResourceId: "string", daprAIInstrumentationKey: "string", dockerBridgeCidr: "string", platformReservedCidr: "string", platformReservedDnsIP: "string"}, environmentType: "string", internalLoadBalancerEnabled: "${bool}", staticIp: "string"}, kind: "string", extendedLocation: {name: "string"}}
    );
  }
}
