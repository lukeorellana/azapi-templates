## Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      availabilityZone = "string"
      backup = {
        backupRetentionDays = int
        geoRedundantBackup = "string"
      }
      createMode = "string"
      dataEncryption = {
        geoBackupKeyURI = "string"
        geoBackupUserAssignedIdentityId = "string"
        primaryKeyURI = "string"
        primaryUserAssignedIdentityId = "string"
        type = "string"
      }
      highAvailability = {
        mode = "string"
        standbyAvailabilityZone = "string"
      }
      importSourceProperties = {
        dataDirPath = "string"
        sasToken = "string"
        storageType = "AzureBlob"
        storageUrl = "string"
      }
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      network = {
        delegatedSubnetResourceId = "string"
        privateDnsZoneResourceId = "string"
        publicNetworkAccess = "string"
      }
      replicationRole = "string"
      restorePointInTime = "string"
      sourceServerResourceId = "string"
      storage = {
        autoGrow = "string"
        autoIoScaling = "string"
        iops = int
        logOnDisk = "string"
        storageSizeGB = int
      }
      version = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

### flexibleServers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU (pricing tier) of the server. | MySQLServerSku |
| identity | The cmk identity for the server. | MySQLServerIdentity |
| properties | Properties of the server. | ServerProperties |


### MySQLServerIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'UserAssigned' |
| userAssignedIdentities | Metadata of user assigned identity. | MySQLServerIdentityUserAssignedIdentities |


### MySQLServerIdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### ServerProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string |
| administratorLoginPassword | The password of the administrator login (required for server creation). | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| availabilityZone | availability Zone information of the server. | string |
| backup | Backup related properties of a server. | Backup |
| createMode | The mode to create a new MySQL server. | 'Default''GeoRestore''PointInTimeRestore''Replica' |
| dataEncryption | The Data Encryption for CMK. | DataEncryption |
| highAvailability | High availability related properties of a server. | HighAvailability |
| importSourceProperties | Source properties for import from storage. | ImportSourceProperties |
| maintenanceWindow | Maintenance window of a server. | MaintenanceWindow |
| network | Network related properties of a server. | Network |
| replicationRole | The replication role. | 'None''Replica''Source' |
| restorePointInTime | Restore point creation time (ISO8601 format), specifying the time to restore from. | string |
| sourceServerResourceId | The source MySQL server id. | string |
| storage | Storage related properties of a server. | Storage |
| version | Server version. | '5.7''8.0.21' |


### Backup

| Name | Description | Value |
|-|-|-|
| backupRetentionDays | Backup retention days for the server. | int |
| geoRedundantBackup | Whether or not geo redundant backup is enabled. | 'Disabled''Enabled' |


### DataEncryption

| Name | Description | Value |
|-|-|-|
| geoBackupKeyURI | Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup | string |
| geoBackupUserAssignedIdentityId | Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup | string |
| primaryKeyURI | Primary key uri | string |
| primaryUserAssignedIdentityId | Primary user identity resource id | string |
| type | The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk. | 'AzureKeyVault''SystemManaged' |


### HighAvailability

| Name | Description | Value |
|-|-|-|
| mode | High availability mode for a server. | 'Disabled''SameZone''ZoneRedundant' |
| standbyAvailabilityZone | Availability zone of the standby server. | string |


### ImportSourceProperties

| Name | Description | Value |
|-|-|-|
| dataDirPath | Relative path of data directory in storage. | string |
| sasToken | Sas token for accessing source storage. Read and list permissions are required for sas token. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| storageType | Storage type of import source. | 'AzureBlob' |
| storageUrl | Uri of the import source storage. | string |


### MaintenanceWindow

| Name | Description | Value |
|-|-|-|
| customWindow | indicates whether custom window is enabled or disabled | string |
| dayOfWeek | day of week for maintenance window | int |
| startHour | start hour for maintenance window | int |
| startMinute | start minute for maintenance window | int |


### Network

| Name | Description | Value |
|-|-|-|
| delegatedSubnetResourceId | Delegated subnet resource id used to setup vnet for a server. | string |
| privateDnsZoneResourceId | Private DNS zone resource id. | string |
| publicNetworkAccess | Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration. | 'Disabled''Enabled' |


### Storage

| Name | Description | Value |
|-|-|-|
| autoGrow | Enable Storage Auto Grow or not. | 'Disabled''Enabled' |
| autoIoScaling | Enable IO Auto Scaling or not. | 'Disabled''Enabled' |
| iops | Storage IOPS for a server. | int |
| logOnDisk | Enable Log On Disk or not. | 'Disabled''Enabled' |
| storageSizeGB | Max storage size allowed for a server. | int |


### MySQLServerSku

| Name | Description | Value |
|-|-|-|
| name | The name of the sku, e.g. Standard_D32s_v3. | string (required) |
| tier | The tier of the particular SKU, e.g. GeneralPurpose. | 'Burstable''GeneralPurpose''MemoryOptimized' (required) |
## Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      identityResourceId = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### flexibleServers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ActiveDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of an administrator. | AdministratorProperties |


### AdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' |
| identityResourceId | The resource id of the identity used for AAD Authentication. | string |
| login | Login name of the server administrator. | string |
| sid | SID (object ID) of the server administrator. | string |
| tenantId | Tenant ID of the administrator. | string |
## Microsoft.DBforMySQL/flexibleServers/backups@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/backups@2023-06-30"
  name = "string"
  parent_id = "string"
}

```

### flexibleServers/backups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
## Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      currentValue = "string"
      source = "string"
      value = "string"
    }
  })
}

```

### flexibleServers/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of a configuration. | ConfigurationProperties |


### ConfigurationProperties

| Name | Description | Value |
|-|-|-|
| currentValue | Current value of the configuration. | string |
| source | Source of the configuration. | 'system-default''user-override' |
| value | Value of the configuration. | string |
## Microsoft.DBforMySQL/flexibleServers/databases@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/databases@2023-06-30"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      charset = "string"
      collation = "string"
    }
  })
}

```

### flexibleServers/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of a database. | DatabaseProperties |


### DatabaseProperties

| Name | Description | Value |
|-|-|-|
| charset | The charset of the database. | string |
| collation | The collation of the database. | string |
## Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-30"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

### flexibleServers/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of a firewall rule. | FirewallRuleProperties(required) |


### FirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the server firewall rule. Must be IPv4 format. | string (required)Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$ |
| startIpAddress | The start IP address of the server firewall rule. Must be IPv4 format. | string (required)Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$ |
## Microsoft.DBforMySQL/flexibleServers/privateEndpointConnections@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/privateEndpointConnections@2023-06-30"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### flexibleServers/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint resource. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |
| provisioningState | The provisioning state of the private endpoint connection resource. | 'Creating''Deleting''Failed''Succeeded' |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.DBforMySQL/servers@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers@2017-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      infrastructureEncryption = "string"
      minimalTlsVersion = "string"
      publicNetworkAccess = "string"
      sslEnforcement = "string"
      storageProfile = {
        backupRetentionDays = int
        geoRedundantBackup = "string"
        storageAutogrow = "string"
        storageMB = int
      }
      version = "string"
      createMode = "string"
      // For remaining properties, see ServerPropertiesForCreateOrServerProperties objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Lowercase letters, hyphens and numbers.Can't start or end with hyphen.Resource name must be unique across Azure. |
| location | The location the resource resides in. | string (required) |
| tags | Application-specific metadata in the form of key-value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU (pricing tier) of the server. | Sku |
| identity | The Azure Active Directory identity of the server. | ResourceIdentity |
| properties | Properties of the server. | ServerPropertiesForCreateOrServerProperties(required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'SystemAssigned' |


### ServerPropertiesForCreateOrServerProperties

| Name | Description | Value |
|-|-|-|
| infrastructureEncryption | Status showing whether the server enabled infrastructure encryption. | 'Disabled''Enabled' |
| minimalTlsVersion | Enforce a minimal Tls version for the server. | 'TLS1_0''TLS1_1''TLS1_2''TLSEnforcementDisabled' |
| publicNetworkAccess | Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| sslEnforcement | Enable ssl enforcement or not when connect to server. | 'Disabled''Enabled' |
| storageProfile | Storage profile of a server. | StorageProfile |
| version | Server version. | '5.6''5.7''8.0' |
| createMode | Set the object type | DefaultGeoRestorePointInTimeRestoreReplica(required) |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| backupRetentionDays | Backup retention days for the server. | int |
| geoRedundantBackup | Enable Geo-redundant or not for server backup. | 'Disabled''Enabled' |
| storageAutogrow | Enable Storage Auto Grow. | 'Disabled''Enabled' |
| storageMB | Max storage allowed for a server. | int |


### ServerPropertiesForDefaultCreate

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'Default' (required) |
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). The login name is required when updating password. | string (required) |
| administratorLoginPassword | The password of the administrator login. | string (required)Constraints:Sensitive value. Pass in as a secure parameter. |


### ServerPropertiesForGeoRestore

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'GeoRestore' (required) |
| sourceServerId | The source server id to restore from. | string (required) |


### ServerPropertiesForRestore

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'PointInTimeRestore' (required) |
| restorePointInTime | Restore point creation time (ISO8601 format), specifying the time to restore from. | string (required) |
| sourceServerId | The source server id to restore from. | string (required) |


### ServerPropertiesForReplica

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'Replica' (required) |
| sourceServerId | The primary server id to create replica from. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The scale up/out capacity, representing server's compute units. | intConstraints:Min value = 0 |
| family | The family of hardware. | string |
| name | The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8. | string (required) |
| size | The size code, to be interpreted by resource as appropriate. | string |
| tier | The tier of the particular SKU, e.g. Basic. | 'Basic''GeneralPurpose''MemoryOptimized' |
## Microsoft.DBforMySQL/servers/administrators@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/administrators@2017-12-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### servers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'activeDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Properties of the server AAD administrator. | ServerAdministratorProperties |


### ServerAdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | The type of administrator. | 'ActiveDirectory' (required) |
| login | The server administrator login account name. | string (required) |
| sid | The server administrator Sid (Secure ID). | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| tenantId | The server Active Directory Administrator tenant id. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
## Microsoft.DBforMySQL/servers/configurations@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/configurations@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      source = "string"
      value = "string"
    }
  })
}

```

### servers/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | The properties of a configuration. | ConfigurationProperties |


### ConfigurationProperties

| Name | Description | Value |
|-|-|-|
| source | Source of the configuration. | string |
| value | Value of the configuration. | string |
## Microsoft.DBforMySQL/servers/databases@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/databases@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      charset = "string"
      collation = "string"
    }
  })
}

```

### servers/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Alphanumerics and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | The properties of a database. | DatabaseProperties |


### DatabaseProperties

| Name | Description | Value |
|-|-|-|
| charset | The charset of the database. | string |
| collation | The collation of the database. | string |
## Microsoft.DBforMySQL/servers/firewallRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/firewallRules@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

### servers/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | The properties of a firewall rule. | FirewallRuleProperties(required) |


### FirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the server firewall rule. Must be IPv4 format. | string (required)Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$ |
| startIpAddress | The start IP address of the server firewall rule. Must be IPv4 format. | string (required)Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$ |
## Microsoft.DBforMySQL/servers/keys@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/keys@2020-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "AzureKeyVault"
      uri = "string"
    }
  })
}

```

### servers/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Properties of the ServerKey Resource. | ServerKeyProperties |


### ServerKeyProperties

| Name | Description | Value |
|-|-|-|
| serverKeyType | The key type like 'AzureKeyVault'. | 'AzureKeyVault' (required) |
| uri | The URI of the key. | string |
## Microsoft.DBforMySQL/servers/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/privateEndpointConnections@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### servers/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Private endpoint which the connection belongs to. | PrivateEndpointProperty |
| privateLinkServiceConnectionState | Connection state of the private endpoint connection. | PrivateLinkServiceConnectionStateProperty |


### PrivateEndpointProperty

| Name | Description | Value |
|-|-|-|
| id | Resource id of the private endpoint. | string |


### PrivateLinkServiceConnectionStateProperty

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string (required) |
| status | The private link service connection status. | string (required) |
## Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/securityAlertPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | SecurityAlertPolicyProperties |


### SecurityAlertPolicyProperties

| Name | Description | Value |
|-|-|-|
| disabledAlerts | Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly | string[] |
| emailAccountAdmins | Specifies that the alert is sent to the account administrators. | bool |
| emailAddresses | Specifies an array of e-mail addresses to which the alert is sent. | string[] |
| retentionDays | Specifies the number of days to keep in the Threat Detection audit logs. | int |
| state | Specifies the state of the policy, whether it is enabled or disabled. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the Threat Detection audit storage account. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. | string |
## Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      ignoreMissingVnetServiceEndpoint = bool
      virtualNetworkSubnetId = "string"
    }
  })
}

```

### servers/virtualNetworkRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | VirtualNetworkRuleProperties |


### VirtualNetworkRuleProperties

| Name | Description | Value |
|-|-|-|
| ignoreMissingVnetServiceEndpoint | Create firewall rule before the virtual network has vnet service endpoint enabled. | bool |
| virtualNetworkSubnetId | The ARM resource id of the virtual network subnet. | string (required) |
