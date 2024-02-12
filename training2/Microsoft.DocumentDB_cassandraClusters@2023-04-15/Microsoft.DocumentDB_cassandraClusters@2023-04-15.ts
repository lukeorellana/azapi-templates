import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbCassandraclustersProps extends IAzAPIBaseProps {
/**
   * Identity for the resource.
   */
readonly identity?: ManagedCassandraManagedServiceIdentity;

/**
   * The type of the resource.
   */
readonly type?: 'None''SystemAssigned';

/**
   * Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'.
   */
readonly authenticationMethod?: 'Cassandra''Ldap''None';

/**
   * Whether Cassandra audit logging is enabled
   */
readonly cassandraAuditLoggingEnabled?: bool;

/**
   * Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version.
   */
readonly cassandraVersion?: string;

/**
   * List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property.
   */
readonly clientCertificates?: Certificate[];

/**
   * If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property.
   */
readonly clusterNameOverride?: string;

/**
   * Whether the cluster and associated data centers has been deallocated.
   */
readonly deallocated?: bool;

/**
   * Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/{subscription id}/resourceGroups/{resource group}/providers/Microsoft.Network/virtualNetworks/{virtual network}/subnets/{subnet}'
   */
readonly delegatedManagementSubnetId?: string;

/**
   * List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property.
   */
readonly externalGossipCertificates?: Certificate[];

/**
   * List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes.
   */
readonly externalSeedNodes?: SeedNode[];

/**
   * (Deprecated) Number of hours to wait between taking a backup of the cluster.
   */
readonly hoursBetweenBackups?: number;

/**
   * Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'.
   */
readonly initialCassandraAdminPassword?: string;

/**
   * Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached.
   */
readonly prometheusEndpoint?: SeedNode;

/**
   * Error related to resource provisioning.
   */
readonly provisionError?: CassandraError;

/**
   * The status of the resource at the time the operation was called.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs.
   */
readonly repairEnabled?: bool;

/**
   * To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup.
   */
readonly restoreFromBackupId?: string;

/**
   * PEM formatted public key.
   */
readonly pem?: string;

/**
   * IP address of this seed node.
   */
readonly ipAddress?: string;

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
 * DocumentdbCassandraclusters resource
 */
export class DocumentdbCassandraclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbCassandraclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/cassandraClusters@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbCassandraclustersProps): string {
    return JSON.stringify(
        {properties: {authenticationMethod: "string", cassandraAuditLoggingEnabled: "${bool}", cassandraVersion: "string", clientCertificates: [{pem: "string"}], clusterNameOverride: "string", deallocated: "${bool}", delegatedManagementSubnetId: "string", externalGossipCertificates: [{pem: "string"}], externalSeedNodes: [{ipAddress: "string"}], hoursBetweenBackups: "${int}", initialCassandraAdminPassword: "string", prometheusEndpoint: {ipAddress: "string"}, provisionError: {additionalErrorInfo: "string", code: "string", message: "string", target: "string"}, provisioningState: "string", repairEnabled: "${bool}", restoreFromBackupId: "string"}}
    );
  }
}
