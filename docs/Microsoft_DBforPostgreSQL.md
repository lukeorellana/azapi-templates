## Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      administratorLoginPassword = "string"
      citusVersion = "string"
      coordinatorEnablePublicIpAccess = bool
      coordinatorServerEdition = "string"
      coordinatorStorageQuotaInMb = int
      coordinatorVCores = int
      enableHa = bool
      enableShardsOnCoordinator = bool
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      nodeCount = int
      nodeEnablePublicIpAccess = bool
      nodeServerEdition = "string"
      nodeStorageQuotaInMb = int
      nodeVCores = int
      pointInTimeUTC = "string"
      postgresqlVersion = "string"
      preferredPrimaryZone = "string"
      sourceLocation = "string"
      sourceResourceId = "string"
    }
  })
}

```

### serverGroupsv2

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the cluster. | ClusterProperties |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| administratorLoginPassword | The password of the administrator login. Required for creation. | string |
| citusVersion | The Citus extension version on all cluster servers. | string |
| coordinatorEnablePublicIpAccess | If public access is enabled on coordinator. | bool |
| coordinatorServerEdition | The edition of a coordinator server (default: GeneralPurpose). Required for creation. | string |
| coordinatorStorageQuotaInMb | The storage of a server in MB. Required for creation. See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
| coordinatorVCores | The vCores count of a server (max: 96). Required for creation. See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
| enableHa | If high availability (HA) is enabled or not for the cluster. | bool |
| enableShardsOnCoordinator | If shards on coordinator is enabled or not for the cluster. | bool |
| maintenanceWindow | Maintenance window of a cluster. | MaintenanceWindow |
| nodeCount | Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation. | int |
| nodeEnablePublicIpAccess | If public access is enabled on worker nodes. | bool |
| nodeServerEdition | The edition of a node server (default: MemoryOptimized). | string |
| nodeStorageQuotaInMb | The storage in MB on each worker node. See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
| nodeVCores | The compute in vCores on each worker node (max: 104). See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
| pointInTimeUTC | Date and time in UTC (ISO8601 format) for cluster restore. | string |
| postgresqlVersion | The major PostgreSQL version on all cluster servers. | string |
| preferredPrimaryZone | Preferred primary availability zone (AZ) for all cluster servers. | string |
| sourceLocation | The Azure region of source cluster for read replica clusters. | string |
| sourceResourceId | The resource id of source cluster for read replica clusters. | string |


### MaintenanceWindow

| Name | Description | Value |
|-|-|-|
| customWindow | Indicates whether custom maintenance window is enabled or not. | string |
| dayOfWeek | Preferred day of the week for maintenance window. | int |
| startHour | Start hour within preferred day of the week for maintenance window. | int |
| startMinute | Start minute within the start hour for maintenance window. | int |
## Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

### serverGroupsv2/coordinatorConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | The properties of a configuration. | ServerConfigurationProperties |


### ServerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| value | Value of the configuration. | string (required) |
## Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2022-11-08"
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

### serverGroupsv2/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | The properties of a firewall rule. | FirewallRuleProperties(required) |


### FirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the cluster firewall rule. Must be IPv4 format. | string (required) |
| startIpAddress | The start IP address of the cluster firewall rule. Must be IPv4 format. | string (required) |
## Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

### serverGroupsv2/nodeConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | The properties of a configuration. | ServerConfigurationProperties |


### ServerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| value | Value of the configuration. | string (required) |
## Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2022-11-08"
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
    }
  })
}

```

### serverGroupsv2/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint resource. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

### serverGroupsv2/roles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serverGroupsv2 |
| properties | The properties of a role. | RoleProperties(required) |


### RoleProperties

| Name | Description | Value |
|-|-|-|
| password | The password of the cluster role. | string (required) |
## Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      authConfig = {
        activeDirectoryAuth = "string"
        passwordAuth = "string"
        tenantId = "string"
      }
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
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      network = {
        delegatedSubnetResourceId = "string"
        privateDnsZoneArmResourceId = "string"
      }
      pointInTimeUTC = "string"
      replicationRole = "string"
      sourceServerResourceId = "string"
      storage = {
        autoGrow = "string"
        storageSizeGB = int
        tier = "string"
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
| sku | The SKU (pricing tier) of the server. | Sku |
| identity | Describes the identity of the application. | UserAssignedIdentity |
| properties | Properties of the server. | ServerProperties |


### UserAssignedIdentity

| Name | Description | Value |
|-|-|-|
| type | the types of identities associated with this resource; currently restricted to 'None and UserAssigned' | 'None''UserAssigned' (required) |
| userAssignedIdentities | represents user assigned identities map. | object |


### ServerProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string |
| administratorLoginPassword | The administrator login password (required for server creation). | string |
| authConfig | AuthConfig properties of a server. | AuthConfig |
| availabilityZone | availability zone information of the server. | string |
| backup | Backup properties of a server. | Backup |
| createMode | The mode to create a new PostgreSQL server. | 'Create''Default''GeoRestore''PointInTimeRestore''Replica''ReviveDropped''Update' |
| dataEncryption | Data encryption properties of a server. | DataEncryption |
| highAvailability | High availability properties of a server. | HighAvailability |
| maintenanceWindow | Maintenance window properties of a server. | MaintenanceWindow |
| network | Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server. | Network |
| pointInTimeUTC | Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'ReviveDropped'. | string |
| replicationRole | Replication role of the server | 'AsyncReplica''GeoAsyncReplica''None''Primary' |
| sourceServerResourceId | The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica' or 'ReviveDropped'. This property is returned only for Replica server | string |
| storage | Storage properties of a server. | Storage |
| version | PostgreSQL Server version. | '11''12''13''14''15' |


### AuthConfig

| Name | Description | Value |
|-|-|-|
| activeDirectoryAuth | If Enabled, Azure Active Directory authentication is enabled. | 'Disabled''Enabled' |
| passwordAuth | If Enabled, Password authentication is enabled. | 'Disabled''Enabled' |
| tenantId | Tenant id of the server. | string |


### Backup

| Name | Description | Value |
|-|-|-|
| backupRetentionDays | Backup retention days for the server. | int |
| geoRedundantBackup | A value indicating whether Geo-Redundant backup is enabled on the server. | 'Disabled''Enabled' |


### DataEncryption

| Name | Description | Value |
|-|-|-|
| geoBackupKeyURI | URI for the key in keyvault for data encryption for geo-backup of server. | string |
| geoBackupUserAssignedIdentityId | Resource Id for the User assigned identity to be used for data encryption for geo-backup of server. | string |
| primaryKeyURI | URI for the key in keyvault for data encryption of the primary server. | string |
| primaryUserAssignedIdentityId | Resource Id for the User assigned identity to be used for data encryption of the primary server. | string |
| type | Data encryption type to depict if it is System Managed vs Azure Key vault. | 'AzureKeyVault''SystemManaged' |


### HighAvailability

| Name | Description | Value |
|-|-|-|
| mode | The HA mode for the server. | 'Disabled''SameZone''ZoneRedundant' |
| standbyAvailabilityZone | availability zone information of the standby. | string |


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
| delegatedSubnetResourceId | Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone. | string |
| privateDnsZoneArmResourceId | Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone. | string |


### Storage

| Name | Description | Value |
|-|-|-|
| autoGrow | Flag to enable / disable Storage Auto grow for flexible server. | 'Disabled''Enabled' |
| storageSizeGB | Max storage allowed for a server. | int |
| tier | Name of storage tier for IOPS. | 'P1''P10''P15''P2''P20''P3''P30''P4''P40''P50''P6''P60''P70''P80' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3. | string (required) |
| tier | The tier of the particular SKU, e.g. Burstable. | 'Burstable''GeneralPurpose''MemoryOptimized' (required) |
## Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalName = "string"
      principalType = "string"
      tenantId = "string"
    }
  })
}

```

### flexibleServers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | Properties of the active directory administrator. | AdministratorPropertiesForAddOrAdministratorProperti... |


### AdministratorPropertiesForAddOrAdministratorProperti...

| Name | Description | Value |
|-|-|-|
| principalName | Active Directory administrator principal name. | string |
| principalType | The principal type used to represent the type of Active Directory Administrator. | 'Group''ServicePrincipal''Unknown''User' |
| tenantId | The tenantId of the Active Directory administrator. | string |
## Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview"
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

### flexibleServers/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of a configuration. | ConfigurationProperties |


### ConfigurationProperties

| Name | Description | Value |
|-|-|-|
| source | Source of the configuration. | string |
| value | Value of the configuration. | string |
## Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview"
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
## Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-03-01-preview"
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
| endIpAddress | The end IP address of the server firewall rule. Must be IPv4 format. | string (required) |
| startIpAddress | The start IP address of the server firewall rule. Must be IPv4 format. | string (required) |
## Microsoft.DBforPostgreSQL/flexibleServers/migrations@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/migrations@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cancel = "string"
      dbsToCancelMigrationOn = [
        "string"
      ]
      dbsToMigrate = [
        "string"
      ]
      dbsToTriggerCutoverOn = [
        "string"
      ]
      migrationMode = "string"
      migrationWindowEndTimeInUtc = "string"
      migrationWindowStartTimeInUtc = "string"
      overwriteDbsInTarget = "string"
      secretParameters = {
        adminCredentials = {
          sourceServerPassword = "string"
          targetServerPassword = "string"
        }
        sourceServerUsername = "string"
        targetServerUsername = "string"
      }
      setupLogicalReplicationOnSourceDbIfNeeded = "string"
      sourceDbServerFullyQualifiedDomainName = "string"
      sourceDbServerResourceId = "string"
      startDataMigration = "string"
      targetDbServerFullyQualifiedDomainName = "string"
      triggerCutover = "string"
    }
  })
}

```

### flexibleServers/migrations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | Migration resource properties. | MigrationResourceProperties |


### MigrationResourceProperties

| Name | Description | Value |
|-|-|-|
| cancel | To trigger cancel for entire migration we need to send this flag as True | 'False''True' |
| dbsToCancelMigrationOn | When you want to trigger cancel for specific databases send cancel flag as True and database names in this array | string[] |
| dbsToMigrate | Number of databases to migrate | string[] |
| dbsToTriggerCutoverOn | When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array | string[] |
| migrationMode | There are two types of migration modes Online and Offline | 'Offline''Online' |
| migrationWindowEndTimeInUtc | End time in UTC for migration window | string |
| migrationWindowStartTimeInUtc | Start time in UTC for migration window | string |
| overwriteDbsInTarget | Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists. | 'False''True' |
| secretParameters | Migration secret parameters | MigrationSecretParameters |
| setupLogicalReplicationOnSourceDbIfNeeded | Indicates whether to setup LogicalReplicationOnSourceDb, if needed | 'False''True' |
| sourceDbServerFullyQualifiedDomainName | Source server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection | string |
| sourceDbServerResourceId | ResourceId of the source database server | string |
| startDataMigration | Indicates whether the data migration should start right away | 'False''True' |
| targetDbServerFullyQualifiedDomainName | Target server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection | string |
| triggerCutover | To trigger cutover for entire migration we need to send this flag as True | 'False''True' |


### MigrationSecretParameters

| Name | Description | Value |
|-|-|-|
| adminCredentials | Admin credentials for source and target servers | AdminCredentials(required) |
| sourceServerUsername | Gets or sets the username for the source server. This user need not be an admin. | string |
| targetServerUsername | Gets or sets the username for the target server. This user need not be an admin. | string |


### AdminCredentials

| Name | Description | Value |
|-|-|-|
| sourceServerPassword | Password for source server. | string (required) |
| targetServerPassword | Password for target server. | string (required) |
## Microsoft.DBforPostgreSQL/servers@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers@2017-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
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
| version | Server version. | '10''10.0''10.2''11''9.5''9.6' |
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
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string (required) |
| administratorLoginPassword | The password of the administrator login. | string (required) |


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
| capacity | The scale up/out capacity, representing server's compute units. | int |
| family | The family of hardware. | string |
| name | The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8. | string (required) |
| size | The size code, to be interpreted by resource as appropriate. | string |
| tier | The tier of the particular SKU, e.g. Basic. | 'Basic''GeneralPurpose''MemoryOptimized' |
## Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01"
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
| sid | The server administrator Sid (Secure ID). | string (required) |
| tenantId | The server Active Directory Administrator tenant id. | string (required) |
## Microsoft.DBforPostgreSQL/servers/configurations@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/configurations@2017-12-01"
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
## Microsoft.DBforPostgreSQL/servers/databases@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/databases@2017-12-01"
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
## Microsoft.DBforPostgreSQL/servers/firewallRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/firewallRules@2017-12-01"
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
| endIpAddress | The end IP address of the server firewall rule. Must be IPv4 format. | string (required) |
| startIpAddress | The start IP address of the server firewall rule. Must be IPv4 format. | string (required) |
## Microsoft.DBforPostgreSQL/servers/keys@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/keys@2020-01-01"
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
## Microsoft.DBforPostgreSQL/servers/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/privateEndpointConnections@2018-06-01"
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
## Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01"
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
## Microsoft.DBforPostgreSQL/servers/virtualNetworkRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules@2017-12-01"
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
