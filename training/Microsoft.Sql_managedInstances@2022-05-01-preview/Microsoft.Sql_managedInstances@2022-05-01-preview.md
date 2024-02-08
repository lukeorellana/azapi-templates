```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      administrators = {
        administratorType = "ActiveDirectory"
        azureADOnlyAuthentication = bool
        login = "string"
        principalType = "string"
        sid = "string"
        tenantId = "string"
      }
      collation = "string"
      dnsZonePartner = "string"
      instancePoolId = "string"
      keyId = "string"
      licenseType = "string"
      maintenanceConfigurationId = "string"
      managedInstanceCreateMode = "string"
      minimalTlsVersion = "string"
      primaryUserAssignedIdentityId = "string"
      proxyOverride = "string"
      publicDataEndpointEnabled = bool
      requestedBackupStorageRedundancy = "string"
      restorePointInTime = "string"
      servicePrincipal = {
        type = "string"
      }
      sourceManagedInstanceId = "string"
      storageSizeInGB = int
      subnetId = "string"
      timezoneId = "string"
      vCores = int
      zoneRedundant = bool
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

### managedInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH | Sku |
| identity | The Azure Active Directory identity of the managed instance. | ResourceIdentity |
| properties | Resource properties. | ManagedInstanceProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The resource ids of the user assigned identities to use | object |


### ManagedInstanceProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). | string |
| administratorLoginPassword | The administrator login password (required for managed instance creation). | string |
| administrators | The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used. | ManagedInstanceExternalAdministrator |
| collation | Collation of the managed instance. | string |
| dnsZonePartner | The resource id of another managed instance whose DNS zone this managed instance will share after creation. | string |
| instancePoolId | The Id of the instance pool this managed server belongs to. | string |
| keyId | A CMK URI of the key to use for encryption. | string |
| licenseType | The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). | 'BasePrice''LicenseIncluded' |
| maintenanceConfigurationId | Specifies maintenance configuration id to apply to this managed instance. | string |
| managedInstanceCreateMode | Specifies the mode of database creation.Default: Regular instance creation.Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified. | 'Default''PointInTimeRestore' |
| minimalTlsVersion | Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2' | string |
| primaryUserAssignedIdentityId | The resource id of a user assigned identity to be used by default. | string |
| proxyOverride | Connection type used for connecting to the instance. | 'Default''Proxy''Redirect' |
| publicDataEndpointEnabled | Whether or not the public data endpoint is enabled. | bool |
| requestedBackupStorageRedundancy | The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage) | 'Geo''GeoZone''Local''Zone' |
| restorePointInTime | Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | string |
| servicePrincipal | The managed instance's service principal. | ServicePrincipal |
| sourceManagedInstanceId | The resource identifier of the source managed instance associated with create operation of this instance. | string |
| storageSizeInGB | Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores. | int |
| subnetId | Subnet resource ID for the managed instance. | string |
| timezoneId | Id of the timezone. Allowed values are timezones supported by Windows.Windows keeps details on supported timezones, including the id, in registry underKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time". | string |
| vCores | The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. | int |
| zoneRedundant | Whether or not the multi-az is enabled. | bool |


### ManagedInstanceExternalAdministrator

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' |
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool |
| login | Login name of the server administrator. | string |
| principalType | Principal Type of the sever administrator. | 'Application''Group''User' |
| sid | SID (object ID) of the server administrator. | string |
| tenantId | Tenant ID of the administrator. | string |


### ServicePrincipal

| Name | Description | Value |
|-|-|-|
| type | Service principal type. | 'None''SystemAssigned' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |


