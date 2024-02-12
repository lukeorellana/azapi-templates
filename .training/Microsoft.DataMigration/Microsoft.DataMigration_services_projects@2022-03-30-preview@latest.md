```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      azureAuthenticationInfo = {
        appKey = "string"
        applicationId = "string"
        ignoreAzurePermissions = bool
        tenantId = "string"
      }
      databasesInfo = [
        {
          sourceDatabaseName = "string"
        }
      ]
      sourceConnectionInfo = {
        password = "string"
        userName = "string"
        type = "string"
        // For remaining properties, see ConnectionInfo objects
      }
      sourcePlatform = "string"
      targetConnectionInfo = {
        password = "string"
        userName = "string"
        type = "string"
        // For remaining properties, see ConnectionInfo objects
      }
      targetPlatform = "string"
    }
    etag = "string"
  })
}

```

### services/projects

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 2-57Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with alphanumeric. |
| location |  | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| etag | HTTP strong entity tag value. This is ignored if submitted. | string |
| properties | Project properties | ProjectProperties |


### ProjectProperties

| Name | Description | Value |
|-|-|-|
| azureAuthenticationInfo | Field that defines the Azure active directory application info, used to connect to the target Azure resource | AzureActiveDirectoryApp |
| databasesInfo | List of DatabaseInfo | DatabaseInfo[] |
| sourceConnectionInfo | Information for connecting to source | ConnectionInfo |
| sourcePlatform | Source platform for the project | 'MongoDb''MySQL''PostgreSql''SQL''Unknown' (required) |
| targetConnectionInfo | Information for connecting to target | ConnectionInfo |
| targetPlatform | Target platform for the project | 'AzureDbForMySql''AzureDbForPostgreSql''MongoDb''SQLDB''SQLMI''Unknown' (required) |


### AzureActiveDirectoryApp

| Name | Description | Value |
|-|-|-|
| appKey | Key used to authenticate to the Azure Active Directory Application | string |
| applicationId | Application ID of the Azure Active Directory Application | string |
| ignoreAzurePermissions | Ignore checking azure permissions on the AAD app | bool |
| tenantId | Tenant id of the customer | string |


### DatabaseInfo

| Name | Description | Value |
|-|-|-|
| sourceDatabaseName | Name of the database | string (required) |


### ConnectionInfo

| Name | Description | Value |
|-|-|-|
| password | Password credential. | string |
| userName | User name | string |
| type | Set the object type | MiSqlConnectionInfoMongoDbConnectionInfoMySqlConnectionInfoOracleConnectionInfoPostgreSqlConnectionInfoSqlConnectionInfo(required) |


### MiSqlConnectionInfo

| Name | Description | Value |
|-|-|-|
| managedInstanceResourceId | Resource id for Azure SQL database Managed instance | string (required) |
| password | Password credential. | string |
| type | Type of connection info | string (required) |
| userName | User name | string |


### MongoDbConnectionInfo

| Name | Description | Value |
|-|-|-|
| additionalSettings | Additional connection settings | string |
| authentication | Authentication type to use for connection | 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication' |
| connectionString | A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties | string (required) |
| dataSource | Data source | string |
| encryptConnection | Whether to encrypt the connection | bool |
| enforceSSL |  | bool |
| password | Password credential. | string |
| port | port for server | int |
| serverBrandVersion | server brand version | string |
| serverName | name of the server | string |
| serverVersion | server version | string |
| trustServerCertificate | Whether to trust the server certificate | bool |
| type | Type of connection info | string (required) |
| userName | User name | string |


### MySqlConnectionInfo

| Name | Description | Value |
|-|-|-|
| additionalSettings | Additional connection settings | string |
| authentication | Authentication type to use for connection | 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication' |
| dataSource | Data source | string |
| encryptConnection | Whether to encrypt the connection | bool |
| password | Password credential. | string |
| port | Port for Server | int (required) |
| serverName | Name of the server | string (required) |
| type | Type of connection info | string (required) |
| userName | User name | string |


### OracleConnectionInfo

| Name | Description | Value |
|-|-|-|
| authentication | Authentication type to use for connection | 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication' |
| dataSource | EZConnect or TNSName connection string. | string (required) |
| password | Password credential. | string |
| port | port for server | int |
| serverName | name of the server | string |
| serverVersion | server version | string |
| type | Type of connection info | string (required) |
| userName | User name | string |


### PostgreSqlConnectionInfo

| Name | Description | Value |
|-|-|-|
| additionalSettings | Additional connection settings | string |
| authentication | Authentication type to use for connection | 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication' |
| databaseName | Name of the database | string |
| dataSource | Data source | string |
| encryptConnection | Whether to encrypt the connection | bool |
| password | Password credential. | string |
| port | Port for Server | int (required) |
| serverBrandVersion | server brand version | string |
| serverName | Name of the server | string (required) |
| serverVersion | server version | string |
| trustServerCertificate | Whether to trust the server certificate | bool |
| type | Type of connection info | string (required) |
| userName | User name | string |


### SqlConnectionInfo

| Name | Description | Value |
|-|-|-|
| additionalSettings | Additional connection settings | string |
| authentication | Authentication type to use for connection | 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication' |
| dataSource | Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber | string (required) |
| encryptConnection | Whether to encrypt the connection | bool |
| password | Password credential. | string |
| platform | Server platform type for connection | 'SqlOnPrem' |
| port | Port for Server | int |
| resourceId | Represents the ID of an HTTP resource represented by an Azure resource provider. | string |
| serverBrandVersion | server brand version | string |
| serverName | name of the server | string |
| serverVersion | server version | string |
| trustServerCertificate | Whether to trust the server certificate | bool |
| type | Type of connection info | string (required) |
| userName | User name | string |


