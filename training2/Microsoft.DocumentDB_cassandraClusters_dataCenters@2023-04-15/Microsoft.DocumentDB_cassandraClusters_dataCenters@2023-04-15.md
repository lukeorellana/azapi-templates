```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationMethodLdapProperties = {
        connectionTimeoutInMs = int
        searchBaseDistinguishedName = "string"
        searchFilterTemplate = "string"
        serverCertificates = [
          {
            pem = "string"
          }
        ]
        serverHostname = "string"
        serverPort = int
        serviceUserDistinguishedName = "string"
        serviceUserPassword = "string"
      }
      availabilityZone = bool
      backupStorageCustomerKeyUri = "string"
      base64EncodedCassandraYamlFragment = "string"
      dataCenterLocation = "string"
      deallocated = bool
      delegatedSubnetId = "string"
      diskCapacity = int
      diskSku = "string"
      managedDiskCustomerKeyUri = "string"
      nodeCount = int
      provisionError = {
        additionalErrorInfo = "string"
        code = "string"
        message = "string"
        target = "string"
      }
      provisioningState = "string"
      sku = "string"
    }
  })
}

```

### cassandraClusters/dataCenters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cassandraClusters |
| properties | Properties of a managed Cassandra data center. | DataCenterResourceProperties |


### DataCenterResourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMethodLdapProperties | Ldap authentication method properties. This feature is in preview. | AuthenticationMethodLdapProperties |
| availabilityZone | If the data center has Availability Zone support, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines. | bool |
| backupStorageCustomerKeyUri | Indicates the Key Uri of the customer key to use for encryption of the backup storage account. | string |
| base64EncodedCassandraYamlFragment | A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed. | string |
| dataCenterLocation | The region this data center should be created in. | string |
| deallocated | Whether the data center has been deallocated. | bool |
| delegatedSubnetId | Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/{subscription id}/resourceGroups/{resource group}/providers/Microsoft.Network/virtualNetworks/{virtual network}/subnets/{subnet}'. | string |
| diskCapacity | Number of disks attached to each node. Default is 4. | int |
| diskSku | Disk SKU used for data centers. Default value is P30. | string |
| managedDiskCustomerKeyUri | Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key. | string |
| nodeCount | The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster. | int |
| provisionError | Error related to resource provisioning. | CassandraError |
| provisioningState | The status of the resource at the time the operation was called. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |
| sku | Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2 | string |


### AuthenticationMethodLdapProperties

| Name | Description | Value |
|-|-|-|
| connectionTimeoutInMs | Timeout for connecting to the LDAP server in miliseconds. The default is 5000 ms. | int |
| searchBaseDistinguishedName | Distinguished name of the object to start the recursive search of users from. | string |
| searchFilterTemplate | Template to use for searching. Defaults to (cn=%s) where %s will be replaced by the username used to login. | string |
| serverCertificates |  | Certificate[] |
| serverHostname | Hostname of the LDAP server. | string |
| serverPort | Port of the LDAP server. | int |
| serviceUserDistinguishedName | Distinguished name of the look up user account, who can look up user details on authentication. | string |
| serviceUserPassword | Password of the look up user. | string |


### Certificate

| Name | Description | Value |
|-|-|-|
| pem | PEM formatted public key. | string |


### CassandraError

| Name | Description | Value |
|-|-|-|
| additionalErrorInfo | Additional information about the error. | string |
| code | The code of error that occurred. | string |
| message | The message of the error. | string |
| target | The target resource of the error. | string |


