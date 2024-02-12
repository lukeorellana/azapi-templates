import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplistenersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlVirtualMachineGroups;

/**
   * Availability Group configuration.
   */
readonly availabilityGroupConfiguration?: AgConfiguration;

/**
   * Name of the availability group.
   */
readonly availabilityGroupName?: string;

/**
   * Create a default availability group if it does not exist.
   */
readonly createDefaultAvailabilityGroupIfNotExist?: bool;

/**
   * List of load balancer configurations for an availability group listener.
   */
readonly loadBalancerConfigurations?: LoadBalancerConfiguration[];

/**
   * List of multi subnet IP configurations for an AG listener.
   */
readonly multiSubnetIpConfigurations?: MultiSubnetIpConfiguration[];

/**
   * Listener port.
   */
readonly port?: number;

/**
   * Replica configurations.
   */
readonly replicas?: AgReplica[];

/**
   * Replica commit mode in availability group.
   */
readonly commit?: 'ASYNCHRONOUS_COMMIT''SYNCHRONOUS_COMMIT';

/**
   * Replica failover mode in availability group.
   */
readonly failover?: 'AUTOMATIC''MANUAL';

/**
   * Replica readable secondary mode in availability group.
   */
readonly readableSecondary?: 'ALL''NO''READ_ONLY';

/**
   * Replica Role in availability group.
   */
readonly role?: 'PRIMARY''SECONDARY';

/**
   * Sql VirtualMachine Instance Id.
   */
readonly sqlVirtualMachineInstanceId?: string;

/**
   * Resource id of the load balancer.
   */
readonly loadBalancerResourceId?: string;

/**
   * Private IP address.
   */
readonly privateIpAddress?: PrivateIPAddress;

/**
   * Probe port.
   */
readonly probePort?: number;

/**
   * Resource id of the public IP.
   */
readonly publicIpAddressResourceId?: string;

/**
   * List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener.
   */
readonly sqlVirtualMachineInstances?: string[];

/**
   * Private IP address bound to the availability group listener.
   */
readonly ipAddress?: string;

/**
   * Subnet used to include private IP.
   */
readonly subnetResourceId?: string;

/**
   * Private IP address.
   */
readonly privateIpAddress: PrivateIPAddress;

/**
   * SQL virtual machine instance resource id that are enrolled into the availability group listener.
   */
readonly sqlVirtualMachineInstance: string;
}

/**
 * SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplisteners resource
 */
export class SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplisteners extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplistenersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2022-08-01-preview";
  }

  protected getResourceBody(props: SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplistenersProps): string {
    return JSON.stringify(
        {properties: {availabilityGroupConfiguration: {replicas: [{commit: "string", failover: "string", readableSecondary: "string", role: "string", sqlVirtualMachineInstanceId: "string"}]}, availabilityGroupName: "string", createDefaultAvailabilityGroupIfNotExist: "${bool}", loadBalancerConfigurations: [{loadBalancerResourceId: "string", privateIpAddress: {ipAddress: "string", subnetResourceId: "string"}, probePort: "${int}", publicIpAddressResourceId: "string", sqlVirtualMachineInstances: ["string"]}], multiSubnetIpConfigurations: [{privateIpAddress: {ipAddress: "string", subnetResourceId: "string"}, sqlVirtualMachineInstance: "string"}], port: "${int}"}}
    );
  }
}
