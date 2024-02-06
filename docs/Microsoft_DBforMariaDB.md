## Microsoft.DBforMariaDB/servers@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers@2018-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
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
| properties | Properties of the server. | ServerPropertiesForCreateOrServerProperties(required) |


### ServerPropertiesForCreateOrServerProperties

| Name | Description | Value |
|-|-|-|
| minimalTlsVersion | Enforce a minimal Tls version for the server. | 'TLS1_0''TLS1_1''TLS1_2''TLSEnforcementDisabled' |
| publicNetworkAccess | Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| sslEnforcement | Enable ssl enforcement or not when connect to server. | 'Disabled''Enabled' |
| storageProfile | Storage profile of a server. | StorageProfile |
| version | Server version. | '10.2''10.3' |
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
## Microsoft.DBforMariaDB/servers/configurations@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/configurations@2018-06-01"
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
## Microsoft.DBforMariaDB/servers/databases@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/databases@2018-06-01"
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
## Microsoft.DBforMariaDB/servers/firewallRules@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/firewallRules@2018-06-01"
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
## Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01"
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
## Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01"
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
## Microsoft.DBforMariaDB/servers/virtualNetworkRules@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/virtualNetworkRules@2018-06-01"
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
