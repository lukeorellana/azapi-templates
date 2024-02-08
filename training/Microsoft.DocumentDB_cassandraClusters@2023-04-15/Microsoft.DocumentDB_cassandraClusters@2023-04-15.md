```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/cassandraClusters@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      authenticationMethod = "string"
      cassandraAuditLoggingEnabled = bool
      cassandraVersion = "string"
      clientCertificates = [
        {
          pem = "string"
        }
      ]
      clusterNameOverride = "string"
      deallocated = bool
      delegatedManagementSubnetId = "string"
      externalGossipCertificates = [
        {
          pem = "string"
        }
      ]
      externalSeedNodes = [
        {
          ipAddress = "string"
        }
      ]
      hoursBetweenBackups = int
      initialCassandraAdminPassword = "string"
      prometheusEndpoint = {
        ipAddress = "string"
      }
      provisionError = {
        additionalErrorInfo = "string"
        code = "string"
        message = "string"
        target = "string"
      }
      provisioningState = "string"
      repairEnabled = bool
      restoreFromBackupId = "string"
    }
  })
}

```

### cassandraClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | ManagedCassandraManagedServiceIdentity |
| properties | Properties of a managed Cassandra cluster. | ClusterResourceProperties |


### ManagedCassandraManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of the resource. | 'None''SystemAssigned' |


### ClusterResourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMethod | Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'. | 'Cassandra''Ldap''None' |
| cassandraAuditLoggingEnabled | Whether Cassandra audit logging is enabled | bool |
| cassandraVersion | Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version. | string |
| clientCertificates | List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property. | Certificate[] |
| clusterNameOverride | If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property. | string |
| deallocated | Whether the cluster and associated data centers has been deallocated. | bool |
| delegatedManagementSubnetId | Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/{subscription id}/resourceGroups/{resource group}/providers/Microsoft.Network/virtualNetworks/{virtual network}/subnets/{subnet}' | string |
| externalGossipCertificates | List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property. | Certificate[] |
| externalSeedNodes | List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes. | SeedNode[] |
| hoursBetweenBackups | (Deprecated) Number of hours to wait between taking a backup of the cluster. | int |
| initialCassandraAdminPassword | Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'. | string |
| prometheusEndpoint | Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached. | SeedNode |
| provisionError | Error related to resource provisioning. | CassandraError |
| provisioningState | The status of the resource at the time the operation was called. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |
| repairEnabled | Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs. | bool |
| restoreFromBackupId | To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup. | string |


### Certificate

| Name | Description | Value |
|-|-|-|
| pem | PEM formatted public key. | string |


### SeedNode

| Name | Description | Value |
|-|-|-|
| ipAddress | IP address of this seed node. | string |


### CassandraError

| Name | Description | Value |
|-|-|-|
| additionalErrorInfo | Additional information about the error. | string |
| code | The code of error that occurred. | string |
| message | The message of the error. | string |
| target | The target resource of the error. | string |


