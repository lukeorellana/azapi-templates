import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersProps extends IAzAPIBaseProps {
/**
   * The cluster API server profile.
   */
readonly apiserverProfile?: APIServerProfile;

/**
   * The cluster profile.
   */
readonly clusterProfile?: ClusterProfile;

/**
   * The console profile.
   */
readonly consoleProfile?: ConsoleProfile;

/**
   * The cluster ingress profiles.
   */
readonly ingressProfiles?: IngressProfile[];

/**
   * The cluster master profile.
   */
readonly masterProfile?: MasterProfile;

/**
   * The cluster network profile.
   */
readonly networkProfile?: NetworkProfile;

/**
   * The cluster provisioning state.
   */
readonly provisioningState?: 'AdminUpdating''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * The cluster service principal profile.
   */
readonly servicePrincipalProfile?: ServicePrincipalProfile;

/**
   * The cluster worker profiles.
   */
readonly workerProfiles?: WorkerProfile[];

/**
   * The IP of the cluster API server.
   */
readonly ip?: string;

/**
   * The URL to access the cluster API server.
   */
readonly url?: string;

/**
   * API server visibility.
   */
readonly visibility?: 'Private''Public';

/**
   * The domain for the cluster.
   */
readonly domain?: string;

/**
   * If FIPS validated crypto modules are used
   */
readonly fipsValidatedModules?: 'Disabled''Enabled';

/**
   * The pull secret for the cluster.
   */
readonly pullSecret?: string;

/**
   * The ID of the cluster resource group.
   */
readonly resourceGroupId?: string;

/**
   * The version of the cluster.
   */
readonly version?: string;

/**
   * The URL to access the cluster console.
   */
readonly url?: string;

/**
   * The IP of the ingress.
   */
readonly ip?: string;

/**
   * Ingress visibility.
   */
readonly visibility?: 'Private''Public';

/**
   * The resource ID of an associated DiskEncryptionSet, if applicable.
   */
readonly diskEncryptionSetId?: string;

/**
   * Whether master virtual machines are encrypted at host.
   */
readonly encryptionAtHost?: 'Disabled''Enabled';

/**
   * The Azure resource ID of the master subnet.
   */
readonly subnetId?: string;

/**
   * The size of the master VMs.
   */
readonly vmSize?: string;

/**
   * The cluster load balancer profile.
   */
readonly loadBalancerProfile?: LoadBalancerProfile;

/**
   * The OutboundType used for egress traffic.
   */
readonly outboundType?: 'Loadbalancer''UserDefinedRouting';

/**
   * The CIDR used for OpenShift/Kubernetes Pods.
   */
readonly podCidr?: string;

/**
   * The CIDR used for OpenShift/Kubernetes Services.
   */
readonly serviceCidr?: string;

/**
   * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 1024.
   */
readonly allocatedOutboundPorts?: number;

/**
   * The desired managed outbound IPs for the cluster public load balancer.
   */
readonly managedOutboundIps?: ManagedOutboundIPs;

/**
   * The desired outbound IP Prefix resources for the cluster load balancer.
   */
readonly outboundIpPrefixes?: OutboundIPPrefix[];

/**
   * The desired outbound IP resources for the cluster load balancer.
   */
readonly outboundIps?: OutboundIP[];

/**
   * Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1.
   */
readonly count?: number;

/**
   * The fully qualified Azure resource id of an IP Prefix resource.
   */
readonly id?: string;

/**
   * The fully qualified Azure resource id of the IP address resource.
   */
readonly id?: string;

/**
   * The client ID used for the cluster.
   */
readonly clientId?: string;

/**
   * The client secret used for the cluster.
   */
readonly clientSecret?: string;

/**
   * The number of worker VMs.
   */
readonly count?: number;

/**
   * The resource ID of an associated DiskEncryptionSet, if applicable.
   */
readonly diskEncryptionSetId?: string;

/**
   * The disk size of the worker VMs.
   */
readonly diskSizeGB?: number;

/**
   * Whether master virtual machines are encrypted at host.
   */
readonly encryptionAtHost?: 'Disabled''Enabled';

/**
   * The Azure resource ID of the worker subnet.
   */
readonly subnetId?: string;

/**
   * The size of the worker VMs.
   */
readonly vmSize?: string;
}

/**
 * RedhatopenshiftOpenshiftclusters resource
 */
export class RedhatopenshiftOpenshiftclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RedhatopenshiftOpenshiftclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RedHatOpenShift/openShiftClusters@2023-07-01-preview";
  }

  protected getResourceBody(props: RedhatopenshiftOpenshiftclustersProps): string {
    return JSON.stringify(
        {properties: {apiserverProfile: {ip: "string", url: "string", visibility: "string"}, clusterProfile: {domain: "string", fipsValidatedModules: "string", pullSecret: "string", resourceGroupId: "string", version: "string"}, consoleProfile: {url: "string"}, ingressProfiles: [{ip: "string", name: "string", visibility: "string"}], masterProfile: {diskEncryptionSetId: "string", encryptionAtHost: "string", subnetId: "string", vmSize: "string"}, networkProfile: {loadBalancerProfile: {allocatedOutboundPorts: "${int}", managedOutboundIps: {count: "${int}"}, outboundIpPrefixes: [{id: "string"}], outboundIps: [{id: "string"}]}, outboundType: "string", podCidr: "string", serviceCidr: "string"}, provisioningState: "string", servicePrincipalProfile: {clientId: "string", clientSecret: "string"}, workerProfiles: [{count: "${int}", diskEncryptionSetId: "string", diskSizeGB: "${int}", encryptionAtHost: "string", name: "string", subnetId: "string", vmSize: "string"}]}}
    );
  }
}
