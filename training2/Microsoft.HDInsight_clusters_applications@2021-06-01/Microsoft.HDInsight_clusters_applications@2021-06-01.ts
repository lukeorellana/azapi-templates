import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HdinsightClustersApplicationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * The ETag for the application
   */
readonly etag?: string;

/**
   * The application type.
   */
readonly applicationType?: string;

/**
   * The list of roles in the cluster.
   */
readonly computeProfile?: ComputeProfile;

/**
   * The list of errors.
   */
readonly errors?: Errors[];

/**
   * The list of application HTTPS endpoints.
   */
readonly httpsEndpoints?: ApplicationGetHttpsEndponumber[];

/**
   * The list of install script actions.
   */
readonly installScriptActions?: RuntimeScriptAction[];

/**
   * The private link configurations.
   */
readonly privateLinkConfigurations?: PrivateLinkConfiguration[];

/**
   * The list of application SSH endpoints.
   */
readonly sshEndpoints?: ApplicationGetEndponumber[];

/**
   * The list of uninstall script actions.
   */
readonly uninstallScriptActions?: RuntimeScriptAction[];

/**
   * The list of roles in the cluster.
   */
readonly roles?: Role[];

/**
   * The autoscale configurations.
   */
readonly autoscale?: Autoscale;

/**
   * The data disks groups for the role.
   */
readonly dataDisksGroups?: DataDisksGroups[];

/**
   * Indicates whether encrypt the data disks.
   */
readonly encryptDataDisks?: bool;

/**
   * The hardware profile.
   */
readonly hardwareProfile?: HardwareProfile;

/**
   * The minimum instance count of the cluster.
   */
readonly minInstanceCount?: number;

/**
   * The operating system profile.
   */
readonly osProfile?: OsProfile;

/**
   * The list of script actions on the role.
   */
readonly scriptActions?: ScriptAction[];

/**
   * The instance count of the cluster.
   */
readonly targetInstanceCount?: number;

/**
   * The virtual network profile.
   */
readonly virtualNetworkProfile?: VirtualNetworkProfile;

/**
   * The name of the virtual machine group.
   */
readonly VMGroupName?: string;

/**
   * Parameters for load-based autoscale
   */
readonly capacity?: AutoscaleCapacity;

/**
   * Parameters for schedule-based autoscale
   */
readonly recurrence?: AutoscaleRecurrence;

/**
   * The maximum instance count of the cluster
   */
readonly maxInstanceCount?: number;

/**
   * The minimum instance count of the cluster
   */
readonly minInstanceCount?: number;

/**
   * Array of schedule-based autoscale rules
   */
readonly schedule?: AutoscaleSchedule[];

/**
   * The time zone for the autoscale schedule times
   */
readonly timeZone?: string;

/**
   * Days of the week for a schedule-based autoscale rule
   */
readonly days?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Time and capacity for a schedule-based autoscale rule
   */
readonly timeAndCapacity?: AutoscaleTimeAndCapacity;

/**
   * The maximum instance count of the cluster
   */
readonly maxInstanceCount?: number;

/**
   * The minimum instance count of the cluster
   */
readonly minInstanceCount?: number;

/**
   * 24-hour time in the form xx:xx
   */
readonly time?: string;

/**
   * The number of disks per node.
   */
readonly disksPerNode?: number;

/**
   * The size of the VM
   */
readonly vmSize?: string;

/**
   * The Linux OS profile.
   */
readonly linuxOperatingSystemProfile?: LinuxOperatingSystemProfile;

/**
   * The password.
   */
readonly password?: string;

/**
   * The SSH profile.
   */
readonly sshProfile?: SshProfile;

/**
   * The username.
   */
readonly username?: string;

/**
   * The list of SSH public keys.
   */
readonly publicKeys?: SshPublicKey[];

/**
   * The certificate for SSH.
   */
readonly certificateData?: string;

/**
   * The parameters for the script provided.
   */
readonly parameters: string;

/**
   * The URI to the script.
   */
readonly uri: string;

/**
   * The ID of the virtual network.
   */
readonly id?: string;

/**
   * The name of the subnet.
   */
readonly subnet?: string;

/**
   * The error code.
   */
readonly code?: string;

/**
   * The error message.
   */
readonly message?: string;

/**
   * The list of access modes for the application.
   */
readonly accessModes?: string[];

/**
   * The destination port to connect to.
   */
readonly destinationPort?: number;

/**
   * The value indicates whether to disable GatewayAuth.
   */
readonly disableGatewayAuth?: bool;

/**
   * The private ip address of the endpoint.
   */
readonly privateIPAddress?: string;

/**
   * The subdomain suffix of the application.
   */
readonly subDomainSuffix?: string;

/**
   * The parameters for the script
   */
readonly parameters?: string;

/**
   * The list of roles where script will be executed.
   */
readonly roles: string[];

/**
   * The URI to the script.
   */
readonly uri: string;

/**
   * The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'.
   */
readonly groupId: string;

/**
   * The IP configurations for the private link service.
   */
readonly ipConfigurations: IPConfiguration[];

/**
   * Indicates whether this IP configuration is primary for the corresponding NIC.
   */
readonly primary?: bool;

/**
   * The IP address.
   */
readonly privateIPAddress?: string;

/**
   * The method that private IP address is allocated.
   */
readonly privateIPAllocationMethod?: 'dynamic''static';

/**
   * The subnet resource id.
   */
readonly subnet?: ResourceId;

/**
   * The azure resource id.
   */
readonly id?: string;

/**
   * The destination port to connect to.
   */
readonly destinationPort?: number;

/**
   * The private ip address of the endpoint.
   */
readonly privateIPAddress?: string;

/**
   * The public port to connect to.
   */
readonly publicPort?: number;
}

/**
 * HdinsightClustersApplications resource
 */
export class HdinsightClustersApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HdinsightClustersApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HDInsight/clusters/applications@2021-06-01";
  }

  protected getResourceBody(props: HdinsightClustersApplicationsProps): string {
    return JSON.stringify(
        {properties: {applicationType: "string", computeProfile: {roles: [{autoscale: {capacity: {maxInstanceCount: "${int}", minInstanceCount: "${int}"}, recurrence: {schedule: [{days: ["string"], timeAndCapacity: {maxInstanceCount: "${int}", minInstanceCount: "${int}", time: "string"}}], timeZone: "string"}}, dataDisksGroups: [{disksPerNode: "${int}"}], encryptDataDisks: "${bool}", hardwareProfile: {vmSize: "string"}, minInstanceCount: "${int}", name: "string", osProfile: {linuxOperatingSystemProfile: {password: "string", sshProfile: {publicKeys: [{certificateData: "string"}]}, username: "string"}}, scriptActions: [{name: "string", parameters: "string", uri: "string"}], targetInstanceCount: "${int}", virtualNetworkProfile: {id: "string", subnet: "string"}, VMGroupName: "string"}]}, errors: [{code: "string", message: "string"}], httpsEndpoints: [{accessModes: ["string"], destinationPort: "${int}", disableGatewayAuth: "${bool}", privateIPAddress: "string", subDomainSuffix: "string"}], installScriptActions: [{name: "string", parameters: "string", roles: ["string"], uri: "string"}], privateLinkConfigurations: [{name: "string", properties: {groupId: "string", ipConfigurations: [{name: "string", properties: {primary: "${bool}", privateIPAddress: "string", privateIPAllocationMethod: "string", subnet: {id: "string"}}}]}}], sshEndpoints: [{destinationPort: "${int}", location: "string", privateIPAddress: "string", publicPort: "${int}"}], uninstallScriptActions: [{name: "string", parameters: "string", roles: ["string"], uri: "string"}]}, etag: "string"}
    );
  }
}
