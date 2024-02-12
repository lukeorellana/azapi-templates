import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbCassandraclustersDatacentersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:cassandraClusters;

/**
   * Ldap authentication method properties. This feature is in preview.
   */
readonly authenticationMethodLdapProperties?: AuthenticationMethodLdapProperties;

/**
   * If the data center has Availability Zone support, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines.
   */
readonly availabilityZone?: bool;

/**
   * Indicates the Key Uri of the customer key to use for encryption of the backup storage account.
   */
readonly backupStorageCustomerKeyUri?: string;

/**
   * A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed.
   */
readonly base64EncodedCassandraYamlFragment?: string;

/**
   * The region this data center should be created in.
   */
readonly dataCenterLocation?: string;

/**
   * Whether the data center has been deallocated.
   */
readonly deallocated?: bool;

/**
   * Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/{subscription id}/resourceGroups/{resource group}/providers/Microsoft.Network/virtualNetworks/{virtual network}/subnets/{subnet}'.
   */
readonly delegatedSubnetId?: string;

/**
   * Number of disks attached to each node. Default is 4.
   */
readonly diskCapacity?: number;

/**
   * Disk SKU used for data centers. Default value is P30.
   */
readonly diskSku?: string;

/**
   * Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key.
   */
readonly managedDiskCustomerKeyUri?: string;

/**
   * The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster.
   */
readonly nodeCount?: number;

/**
   * Error related to resource provisioning.
   */
readonly provisionError?: CassandraError;

/**
   * The status of the resource at the time the operation was called.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2
   */
readonly sku?: string;

/**
   * Timeout for connecting to the LDAP server in miliseconds. The default is 5000 ms.
   */
readonly connectionTimeoutInMs?: number;

/**
   * Distinguished name of the object to start the recursive search of users from.
   */
readonly searchBaseDistinguishedName?: string;

/**
   * Template to use for searching. Defaults to (cn=%s) where %s will be replaced by the username used to login.
   */
readonly searchFilterTemplate?: string;

/**
   * 
   */
readonly serverCertificates?: Certificate[];

/**
   * Hostname of the LDAP server.
   */
readonly serverHostname?: string;

/**
   * Port of the LDAP server.
   */
readonly serverPort?: number;

/**
   * Distinguished name of the look up user account, who can look up user details on authentication.
   */
readonly serviceUserDistinguishedName?: string;

/**
   * Password of the look up user.
   */
readonly serviceUserPassword?: string;

/**
   * PEM formatted public key.
   */
readonly pem?: string;

/**
   * Additional information about the error.
   */
readonly additionalErrorInfo?: string;

/**
   * The code of error that occurred.
   */
readonly code?: string;

/**
   * The message of the error.
   */
readonly message?: string;

/**
   * The target resource of the error.
   */
readonly target?: string;
}

/**
 * DocumentdbCassandraclustersDatacenters resource
 */
export class DocumentdbCassandraclustersDatacenters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbCassandraclustersDatacentersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbCassandraclustersDatacentersProps): string {
    return JSON.stringify(
        {properties: {authenticationMethodLdapProperties: {connectionTimeoutInMs: "${int}", searchBaseDistinguishedName: "string", searchFilterTemplate: "string", serverCertificates: [{pem: "string"}], serverHostname: "string", serverPort: "${int}", serviceUserDistinguishedName: "string", serviceUserPassword: "string"}, availabilityZone: "${bool}", backupStorageCustomerKeyUri: "string", base64EncodedCassandraYamlFragment: "string", dataCenterLocation: "string", deallocated: "${bool}", delegatedSubnetId: "string", diskCapacity: "${int}", diskSku: "string", managedDiskCustomerKeyUri: "string", nodeCount: "${int}", provisionError: {additionalErrorInfo: "string", code: "string", message: "string", target: "string"}, provisioningState: "string", sku: "string"}}
    );
  }
}
