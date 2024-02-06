## Microsoft.DataMigration/databaseMigrations@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/databaseMigrations@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      kind = "string"
      migrationOperationId = "string"
      migrationService = "string"
      provisioningError = "string"
      scope = "string"
      sourceDatabaseName = "string"
      sourceSqlConnection = {
        authentication = "string"
        dataSource = "string"
        encryptConnection = bool
        password = "string"
        trustServerCertificate = bool
        userName = "string"
      }
      tableList = [
        "string"
      ]
      targetDatabaseCollation = "string"
      targetSqlConnection = {
        authentication = "string"
        dataSource = "string"
        encryptConnection = bool
        password = "string"
        trustServerCertificate = bool
        userName = "string"
      }
    }
  })
}

```

### databaseMigrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Database Migration Resource properties for SQL database. | DatabaseMigrationPropertiesSqlDb |


### DatabaseMigrationPropertiesSqlDb

| Name | Description | Value |
|-|-|-|
| kind |  | 'SqlDb''SqlMi''SqlVm' (required) |
| migrationOperationId | ID tracking current migration operation. | string |
| migrationService | Resource Id of the Migration Service. | string |
| provisioningError | Error message for migration provisioning failure, if any. | string |
| scope | Resource Id of the target resource (SQL VM or SQL Managed Instance). | string |
| sourceDatabaseName | Name of the source database. | string |
| sourceSqlConnection | Source SQL Server connection details. | SqlConnectionInformation |
| tableList | List of tables to copy. | string[] |
| targetDatabaseCollation | Database collation to be used for the target database. | string |
| targetSqlConnection | Target SQL DB connection details. | SqlConnectionInformation |


### SqlConnectionInformation

| Name | Description | Value |
|-|-|-|
| authentication | Authentication type. | string |
| dataSource | Data source. | string |
| encryptConnection | Whether to encrypt connection or not. | bool |
| password | Password to connect to source SQL. | string |
| trustServerCertificate | Whether to trust server certificate or not. | bool |
| userName | User name to connect to source SQL. | string |
## Microsoft.DataMigration/services@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoStopDelay = "string"
      deleteResourcesOnStop = bool
      publicKey = "string"
      virtualNicId = "string"
      virtualSubnetId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### services

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-62Valid characters:Alphanumerics, hyphens, periods, and underscores.Start with alphanumeric. |
| location |  | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| sku | Service SKU | ServiceSku |
| kind | The resource kind. Only 'vm' (the default) is supported. | string |
| etag | HTTP strong entity tag value. Ignored if submitted | string |
| properties | Custom service properties | DataMigrationServiceProperties |


### DataMigrationServiceProperties

| Name | Description | Value |
|-|-|-|
| autoStopDelay | The time delay before the service is auto-stopped when idle. | string |
| deleteResourcesOnStop | Whether service resources should be deleted when stopped. (Turned on by default) | bool |
| publicKey | The public key of the service, used to encrypt secrets sent to the service | string |
| virtualNicId | The ID of the Microsoft.Network/networkInterfaces resource which the service have | string |
| virtualSubnetId | The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined | string |


### ServiceSku

| Name | Description | Value |
|-|-|-|
| capacity | The capacity of the SKU, if it supports scaling | int |
| family | The SKU family, used when the service has multiple performance classes within a tier, such as 'A', 'D', etc. for virtual machines | string |
| name | The unique name of the SKU, such as 'P3' | string |
| size | The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. 'A1' for virtual machines | string |
| tier | The tier of the SKU, such as 'Basic', 'General Purpose', or 'Business Critical' | string |
## Microsoft.DataMigration/services/projects@2022-03-30-preview

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
## Microsoft.DataMigration/services/projects/files@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects/files@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extension = "string"
      filePath = "string"
      mediaType = "string"
    }
    etag = "string"
  })
}

```

### services/projects/files

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| etag | HTTP strong entity tag value. This is ignored if submitted. | string |
| properties | Custom file properties | ProjectFileProperties |


### ProjectFileProperties

| Name | Description | Value |
|-|-|-|
| extension | Optional File extension. If submitted it should not have a leading period and must match the extension from filePath. | string |
| filePath | Relative path of this file resource. This property can be set when creating or updating the file resource. | string |
| mediaType | File content type. This property can be modified to reflect the file content type. | string |
## Microsoft.DataMigration/services/projects/tasks@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects/tasks@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientData = {}
      taskType = "string"
      // For remaining properties, see ProjectTaskProperties objects
    }
    etag = "string"
  })
}

```

### services/projects/tasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| etag | HTTP strong entity tag value. This is ignored if submitted. | string |
| properties | Custom task properties | ProjectTaskProperties |


### ProjectTaskProperties

| Name | Description | Value |
|-|-|-|
| clientData | Key value pairs of client data to attach meta data information to task | object |
| taskType | Set the object type | Connect.MongoDbConnectToSource.MySqlConnectToSource.Oracle.SyncConnectToSource.PostgreSql.SyncConnectToSource.SqlServerConnectToSource.SqlServer.SyncConnectToTarget.AzureDbForMySqlConnectToTarget.AzureDbForPostgreSql.SyncConnectToTarget.AzureSqlDbMIConnectToTarget.AzureSqlDbMI.Sync.LRSConnectToTarget.Oracle.AzureDbForPostgreSql.SyncConnectToTarget.SqlDbConnectToTarget.SqlDb.SyncGetTDECertificates.SqlGetUserTables.AzureSqlDb.SyncGetUserTables.SqlGetUserTablesMySqlGetUserTablesOracleGetUserTablesPostgreSqlMigrate.MongoDbMigrate.MySql.AzureDbForMySqlMigrate.MySql.AzureDbForMySql.SyncMigrate.Oracle.AzureDbForPostgreSql.SyncMigrate.PostgreSql.AzureDbForPostgreSql.SyncV2Migrate.SqlServer.AzureSqlDb.SyncMigrate.SqlServer.AzureSqlDbMIMigrate.SqlServer.AzureSqlDbMI.Sync.LRSMigrate.SqlServer.SqlDbMigrate.SsisMigrateSchemaSqlServerSqlDbService.Check.OCIService.Install.OCIService.Upload.OCIValidate.MongoDbValidate.Oracle.AzureDbPostgreSql.SyncValidateMigrationInput.SqlServer.AzureSqlDbMIValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRSValidateMigrationInput.SqlServer.SqlDb.Sync(required) |


### ConnectToMongoDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Connect.MongoDb' (required) |
| input | Describes a connection to a MongoDB data source | MongoDbConnectionInfo |


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


### ConnectToSourceMySqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.MySql' (required) |
| input | Task input | ConnectToSourceMySqlTaskInput |


### ConnectToSourceMySqlTaskInput

| Name | Description | Value |
|-|-|-|
| checkPermissionsGroup | Permission group for validations | 'Default''MigrationFromMySQLToAzureDBForMySQL''MigrationFromSqlServerToAzureDB''MigrationFromSqlServerToAzureMI''MigrationFromSqlServerToAzureVM' |
| isOfflineMigration | Flag for whether or not the migration is offline | bool |
| sourceConnectionInfo | Information for connecting to MySQL source | MySqlConnectionInfo(required) |
| targetPlatform | Target Platform for the migration | 'AzureDbForMySQL''SqlServer' |


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


### ConnectToSourceOracleSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.Oracle.Sync' (required) |
| input | Task input | ConnectToSourceOracleSyncTaskInput |


### ConnectToSourceOracleSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Information for connecting to Oracle source | OracleConnectionInfo(required) |


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


### ConnectToSourcePostgreSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.PostgreSql.Sync' (required) |
| input | Task input | ConnectToSourcePostgreSqlSyncTaskInput |


### ConnectToSourcePostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Connection information for source PostgreSQL server | PostgreSqlConnectionInfo(required) |


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


### ConnectToSourceSqlServerTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.SqlServer' (required) |
| input | Task input | ConnectToSourceSqlServerTaskInput |
| taskId | Task id | string |


### ConnectToSourceSqlServerTaskInput

| Name | Description | Value |
|-|-|-|
| checkPermissionsGroup | Permission group for validations | 'Default''MigrationFromMySQLToAzureDBForMySQL''MigrationFromSqlServerToAzureDB''MigrationFromSqlServerToAzureMI''MigrationFromSqlServerToAzureVM' |
| collectAgentJobs | Flag for whether to collect agent jobs from source server. | bool |
| collectDatabases | Flag for whether to collect databases from source server. | bool |
| collectLogins | Flag for whether to collect logins from source server. | bool |
| collectTdeCertificateInfo | Flag for whether to collect TDE Certificate names from source server. | bool |
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| sourceConnectionInfo | Connection information for Source SQL Server | SqlConnectionInfo(required) |
| validateSsisCatalogOnly | Flag for whether to validate SSIS catalog is reachable on the source server. | bool |


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


### ConnectToSourceSqlServerSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.SqlServer.Sync' (required) |
| input | Task input | ConnectToSourceSqlServerTaskInput |


### ConnectToTargetAzureDbForMySqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureDbForMySql' (required) |
| input | Task input | ConnectToTargetAzureDbForMySqlTaskInput |


### ConnectToTargetAzureDbForMySqlTaskInput

| Name | Description | Value |
|-|-|-|
| isOfflineMigration | Flag for whether or not the migration is offline | bool |
| sourceConnectionInfo | Connection information for source MySQL server | MySqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for MySQL server | MySqlConnectionInfo(required) |


### ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertie...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureDbForPostgreSql.Sync' (required) |
| input | Task input | ConnectToTargetAzureDbForPostgreSqlSyncTaskInput |


### ConnectToTargetAzureDbForPostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Connection information for source PostgreSQL server | PostgreSqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL server | PostgreSqlConnectionInfo(required) |


### ConnectToTargetSqlMITaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureSqlDbMI' (required) |
| input | Task input | ConnectToTargetSqlMITaskInput |


### ConnectToTargetSqlMITaskInput

| Name | Description | Value |
|-|-|-|
| collectAgentJobs | Flag for whether to collect agent jobs from target SQL MI server. | bool |
| collectLogins | Flag for whether to collect logins from target SQL MI server. | bool |
| targetConnectionInfo | Connection information for target SQL Server | SqlConnectionInfo(required) |
| validateSsisCatalogOnly | Flag for whether to validate SSIS catalog is reachable on the target SQL MI server. | bool |


### ConnectToTargetSqlMISyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (required) |
| input | Task input | ConnectToTargetSqlMISyncTaskInput |


### ConnectToTargetSqlMISyncTaskInput

| Name | Description | Value |
|-|-|-|
| azureApp | Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account | AzureActiveDirectoryApp(required) |
| targetConnectionInfo | Connection information for Azure SQL Database Managed Instance | MiSqlConnectionInfo(required) |


### AzureActiveDirectoryApp

| Name | Description | Value |
|-|-|-|
| appKey | Key used to authenticate to the Azure Active Directory Application | string |
| applicationId | Application ID of the Azure Active Directory Application | string |
| ignoreAzurePermissions | Ignore checking azure permissions on the AAD app | bool |
| tenantId | Tenant id of the customer | string |


### MiSqlConnectionInfo

| Name | Description | Value |
|-|-|-|
| managedInstanceResourceId | Resource id for Azure SQL database Managed instance | string (required) |
| password | Password credential. | string |
| type | Type of connection info | string (required) |
| userName | User name | string |


### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPro...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (required) |
| input | Task input | ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInp... |


### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInp...

| Name | Description | Value |
|-|-|-|
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL server | PostgreSqlConnectionInfo(required) |


### ConnectToTargetSqlDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.SqlDb' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | ConnectToTargetSqlDbTaskInput |


### ConnectToTargetSqlDbTaskInput

| Name | Description | Value |
|-|-|-|
| queryObjectCounts | Boolean flag indicating whether to query object counts for each database on the target server | bool |
| targetConnectionInfo | Connection information for target SQL DB | SqlConnectionInfo(required) |


### ConnectToTargetSqlDbSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.SqlDb.Sync' (required) |
| input | Task input | ConnectToTargetSqlDbSyncTaskInput |


### ConnectToTargetSqlDbSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Connection information for source SQL Server | SqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target SQL DB | SqlConnectionInfo(required) |


### GetTdeCertificatesSqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetTDECertificates.Sql' (required) |
| input | Task input | GetTdeCertificatesSqlTaskInput |


### GetTdeCertificatesSqlTaskInput

| Name | Description | Value |
|-|-|-|
| backupFileShare | Backup file share information for file share to be used for temporarily storing files. | FileShare(required) |
| connectionInfo | Connection information for SQL Server | SqlConnectionInfo(required) |
| selectedCertificates | List containing certificate names and corresponding password to use for encrypting the exported certificate. | SelectedCertificateInput[] (required) |


### FileShare

| Name | Description | Value |
|-|-|-|
| password | Password credential used to connect to the share location. | string |
| path | The folder path for this share. | string (required) |
| userName | User name credential to connect to the share location | string |


### SelectedCertificateInput

| Name | Description | Value |
|-|-|-|
| certificateName | Name of certificate to be exported. | string (required) |
| password | Password to use for encrypting the exported certificate. | string (required) |


### GetUserTablesSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTables.AzureSqlDb.Sync' (required) |
| input | Task input | GetUserTablesSqlSyncTaskInput |


### GetUserTablesSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedSourceDatabases | List of source database names to collect tables for | string[] (required) |
| selectedTargetDatabases | List of target database names to collect tables for | string[] (required) |
| sourceConnectionInfo | Connection information for SQL Server | SqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for SQL DB | SqlConnectionInfo(required) |


### GetUserTablesSqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTables.Sql' (required) |
| input | Task input | GetUserTablesSqlTaskInput |
| taskId | Task id | string |


### GetUserTablesSqlTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Connection information for SQL Server | SqlConnectionInfo(required) |
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | List of database names to collect tables for | string[] (required) |


### GetUserTablesMySqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTablesMySql' (required) |
| input | Task input | GetUserTablesMySqlTaskInput |


### GetUserTablesMySqlTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Connection information for SQL Server | MySqlConnectionInfo(required) |
| selectedDatabases | List of database names to collect tables for | string[] (required) |


### GetUserTablesOracleTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTablesOracle' (required) |
| input | Task input | GetUserTablesOracleTaskInput |


### GetUserTablesOracleTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Information for connecting to Oracle source | OracleConnectionInfo(required) |
| selectedSchemas | List of Oracle schemas for which to collect tables | string[] (required) |


### GetUserTablesPostgreSqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTablesPostgreSql' (required) |
| input | Task input | GetUserTablesPostgreSqlTaskInput |


### GetUserTablesPostgreSqlTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Information for connecting to PostgreSQL source | PostgreSqlConnectionInfo(required) |
| selectedDatabases | List of PostgreSQL databases for which to collect tables | string[] (required) |


### MigrateMongoDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.MongoDb' (required) |
| input | Describes how a MongoDB data migration should be performed | MongoDbMigrationSettings |


### MongoDbMigrationSettings

| Name | Description | Value |
|-|-|-|
| boostRUs | The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets. | int |
| databases | The databases on the source cluster to migrate to the target. The keys are the names of the databases. | object (required) |
| replication | Describes how changes will be replicated from the source to the target. The default is OneTime. | 'Continuous''Disabled''OneTime' |
| source | Settings used to connect to the source cluster | MongoDbConnectionInfo(required) |
| target | Settings used to connect to the target cluster | MongoDbConnectionInfo(required) |
| throttling | Settings used to limit the resource usage of the migration | MongoDbThrottlingSettings |


### MongoDbThrottlingSettings

| Name | Description | Value |
|-|-|-|
| maxParallelism | The maximum number of work items (e.g. collection copies) that will be processed in parallel | int |
| minFreeCpu | The percentage of CPU time that the migrator will try to avoid using, from 0 to 100 | int |
| minFreeMemoryMb | The number of megabytes of RAM that the migrator will try to avoid using | int |


### MigrateMySqlAzureDbForMySqlOfflineTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.MySql.AzureDbForMySql' (required) |
| input | Task input | MigrateMySqlAzureDbForMySqlOfflineTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | Task id | string |


### MigrateMySqlAzureDbForMySqlOfflineTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| optionalAgentSettings | Optional parameters for fine tuning the data transfer rate during migration | object |
| selectedDatabases | Databases to migrate | MigrateMySqlAzureDbForMySqlOfflineDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source MySQL | MySqlConnectionInfo(required) |
| startedOn | Parameter to specify when the migration started | string |
| targetConnectionInfo | Connection information for target Azure Database for MySQL | MySqlConnectionInfo(required) |


### MigrateMySqlAzureDbForMySqlOfflineDatabaseInput

| Name | Description | Value |
|-|-|-|
| name | Name of the database | string |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |


### MigrateMySqlAzureDbForMySqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.MySql.AzureDbForMySql.Sync' (required) |
| input | Task input | MigrateMySqlAzureDbForMySqlSyncTaskInput |


### MigrateMySqlAzureDbForMySqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateMySqlAzureDbForMySqlSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source MySQL | MySqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for MySQL | MySqlConnectionInfo(required) |


### MigrateMySqlAzureDbForMySqlSyncDatabaseInput

| Name | Description | Value |
|-|-|-|
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of the database | string |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigrateOracleAzureDbForPostgreSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (required) |
| input | Task input | MigrateOracleAzureDbPostgreSqlSyncTaskInput |


### MigrateOracleAzureDbPostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateOracleAzureDbPostgreSqlSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source Oracle | OracleConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL | PostgreSqlConnectionInfo(required) |


### MigrateOracleAzureDbPostgreSqlSyncDatabaseInput

| Name | Description | Value |
|-|-|-|
| caseManipulation | How to handle object name casing: either Preserve or ToLower | string |
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of the migration pipeline | string |
| schemaName | Name of the source schema | string |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropert...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | task id | string |


### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | Databases to migrate | MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInp...[] (required) |
| sourceConnectionInfo | Connection information for source PostgreSQL | PostgreSqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL | PostgreSqlConnectionInfo(required) |


### MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInp...

| Name | Description | Value |
|-|-|-|
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of the database | string |
| selectedTables | Tables selected for migration | MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTab...[] |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTab...

| Name | Description | Value |
|-|-|-|
| name | Name of the table to migrate | string |


### MigrateSqlServerSqlDbSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.AzureSqlDb.Sync' (required) |
| input | Task input | MigrateSqlServerSqlDbSyncTaskInput |


### MigrateSqlServerSqlDbSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlDbSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |
| validationOptions | Validation options | MigrationValidationOptions |


### MigrateSqlServerSqlDbSyncDatabaseInput

| Name | Description | Value |
|-|-|-|
| id | Unique identifier for database | string |
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of database | string |
| schemaName | Schema name to be migrated | string |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Target database name | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigrationValidationOptions

| Name | Description | Value |
|-|-|-|
| enableDataIntegrityValidation | Allows to perform a checksum based data integrity validation between source and target for the selected database / tables . | bool |
| enableQueryAnalysisValidation | Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries. | bool |
| enableSchemaValidation | Allows to compare the schema information between source and target. | bool |


### MigrateSqlServerSqlMITaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.AzureSqlDbMI' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSqlServerSqlMITaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| parentTaskId | parent task id | string |
| taskId | task id | string |


### MigrateSqlServerSqlMITaskInput

| Name | Description | Value |
|-|-|-|
| aadDomainName | Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected | string |
| backupBlobShare | SAS URI of Azure Storage Account Container to be used for storing backup files. | BlobShare(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| backupMode | Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases. | 'CreateBackup''ExistingBackup' |
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedAgentJobs | Agent Jobs to migrate. | string[] |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| selectedLogins | Logins to migrate. | string[] |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| startedOn | Date and time relative to UTC when the migration was started on | string |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### BlobShare

| Name | Description | Value |
|-|-|-|
| sasUri | SAS URI of Azure Storage Account Container. | string |


### MigrateSqlServerSqlMIDatabaseInput

| Name | Description | Value |
|-|-|-|
| backupFilePaths | The list of backup files to be used in case of existing backups. | string[] |
| backupFileShare | Backup file share information for backing up this database. | FileShare |
| id | id of the database | string |
| name | Name of the database | string (required) |
| restoreDatabaseName | Name of the database at destination | string (required) |


### MigrateSqlServerSqlMISyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSqlServerSqlMISyncTaskInput |


### MigrateSqlServerSqlMISyncTaskInput

| Name | Description | Value |
|-|-|-|
| azureApp | Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account | AzureActiveDirectoryApp(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| numberOfParallelDatabaseMigrations | Number of database migrations to start in parallel | int |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source SQL Server | SqlConnectionInfo(required) |
| storageResourceId | Fully qualified resourceId of storage | string (required) |
| targetConnectionInfo | Connection information for Azure SQL Database Managed Instance | MiSqlConnectionInfo(required) |


### MigrateSqlServerSqlDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.SqlDb' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSqlServerSqlDbTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | task id | string |


### MigrateSqlServerSqlDbTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlDbDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| startedOn | Date and time relative to UTC when the migration was started on | string |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |
| validationOptions | Options for enabling various post migration validations. Available options,1.) Data Integrity Check: Performs a checksum based comparison on source and target tables after the migration to ensure the correctness of the data.2.) Schema Validation: Performs a thorough schema comparison between the source and target tables and provides a list of differences between the source and target database, 3.) Query Analysis: Executes a set of queries picked up automatically either from the Query Plan Cache or Query Store and execute them and compares the execution time between the source and target database. | MigrationValidationOptions |


### MigrateSqlServerSqlDbDatabaseInput

| Name | Description | Value |
|-|-|-|
| id | id of the database | string |
| name | Name of the database | string |
| schemaSetting | Settings selected for DB schema migration. | For Bicep, you can use theany()function. |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |


### MigrateSsisTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.Ssis' (required) |
| input | Task input | MigrateSsisTaskInput |


### MigrateSsisTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| ssisMigrationInfo | SSIS package migration information. | SsisMigrationInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### SsisMigrationInfo

| Name | Description | Value |
|-|-|-|
| environmentOverwriteOption | The overwrite option for the SSIS environment migration | 'Ignore''Overwrite' |
| projectOverwriteOption | The overwrite option for the SSIS project migration | 'Ignore''Overwrite' |
| ssisStoreType | The SSIS store type of source, only SSIS catalog is supported now in DMS | 'SsisCatalog' |


### MigrateSchemaSqlServerSqlDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'MigrateSchemaSqlServerSqlDb' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSchemaSqlServerSqlDbTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | Task id | string |


### MigrateSchemaSqlServerSqlDbTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | Databases to migrate | MigrateSchemaSqlServerSqlDbDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| startedOn | Migration start time | string |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### MigrateSchemaSqlServerSqlDbDatabaseInput

| Name | Description | Value |
|-|-|-|
| id | Id of the source database | string |
| name | Name of source database | string |
| schemaSetting | Database schema migration settings | SchemaMigrationSetting |
| targetDatabaseName | Name of target database | string |


### SchemaMigrationSetting

| Name | Description | Value |
|-|-|-|
| fileId | Resource Identifier of a file resource containing the uploaded schema file | string |
| fileName | Name of the file resource containing the uploaded schema file | string |
| schemaOption | Option on how to migrate the schema | 'ExtractFromSource''None''UseStorageFile' |


### CheckOCIDriverTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Service.Check.OCI' (required) |
| input | Input for the service task to check for OCI drivers. | CheckOCIDriverTaskInput |


### CheckOCIDriverTaskInput

| Name | Description | Value |
|-|-|-|
| serverVersion | Version of the source server to check against.  Optional. | string |


### InstallOCIDriverTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Service.Install.OCI' (required) |
| input | Input for the service task to install an OCI driver. | InstallOCIDriverTaskInput |


### InstallOCIDriverTaskInput

| Name | Description | Value |
|-|-|-|
| driverPackageName | Name of the uploaded driver package to install. | string |


### UploadOCIDriverTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Service.Upload.OCI' (required) |
| input | Input for the service task to upload an OCI driver. | UploadOCIDriverTaskInput |


### UploadOCIDriverTaskInput

| Name | Description | Value |
|-|-|-|
| driverShare | File share information for the OCI driver archive. | FileShare |


### ValidateMongoDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Validate.MongoDb' (required) |
| input | Describes how a MongoDB data migration should be performed | MongoDbMigrationSettings |


### ValidateOracleAzureDbForPostgreSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Validate.Oracle.AzureDbPostgreSql.Sync' (required) |
| input | Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations | MigrateOracleAzureDbPostgreSqlSyncTaskInput |


### ValidateMigrationInputSqlServerSqlMITaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (required) |
| input | Task input | ValidateMigrationInputSqlServerSqlMITaskInput |


### ValidateMigrationInputSqlServerSqlMITaskInput

| Name | Description | Value |
|-|-|-|
| backupBlobShare | SAS URI of Azure Storage Account Container to be used for storing backup files. | BlobShare(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| backupMode | Backup Mode to specify whether to use existing backup or create new backup. | 'CreateBackup''ExistingBackup' |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| selectedLogins | Logins to migrate | string[] |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### ValidateMigrationInputSqlServerSqlMISyncTaskProperti...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (required) |
| input | Task input | ValidateMigrationInputSqlServerSqlMISyncTaskInput |


### ValidateMigrationInputSqlServerSqlMISyncTaskInput

| Name | Description | Value |
|-|-|-|
| azureApp | Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account | AzureActiveDirectoryApp(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source SQL Server | SqlConnectionInfo(required) |
| storageResourceId | Fully qualified resourceId of storage | string (required) |
| targetConnectionInfo | Connection information for Azure SQL Database Managed Instance | MiSqlConnectionInfo(required) |


### ValidateMigrationInputSqlServerSqlDbSyncTaskProperti...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (required) |
| input | Task input | ValidateSyncMigrationInputSqlServerTaskInput |


### ValidateSyncMigrationInputSqlServerTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlDbSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source SQL server | SqlConnectionInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |
## Microsoft.DataMigration/services/serviceTasks@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/serviceTasks@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientData = {}
      taskType = "string"
      // For remaining properties, see ProjectTaskProperties objects
    }
    etag = "string"
  })
}

```

### services/serviceTasks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| etag | HTTP strong entity tag value. This is ignored if submitted. | string |
| properties | Custom task properties | ProjectTaskProperties |


### ProjectTaskProperties

| Name | Description | Value |
|-|-|-|
| clientData | Key value pairs of client data to attach meta data information to task | object |
| taskType | Set the object type | Connect.MongoDbConnectToSource.MySqlConnectToSource.Oracle.SyncConnectToSource.PostgreSql.SyncConnectToSource.SqlServerConnectToSource.SqlServer.SyncConnectToTarget.AzureDbForMySqlConnectToTarget.AzureDbForPostgreSql.SyncConnectToTarget.AzureSqlDbMIConnectToTarget.AzureSqlDbMI.Sync.LRSConnectToTarget.Oracle.AzureDbForPostgreSql.SyncConnectToTarget.SqlDbConnectToTarget.SqlDb.SyncGetTDECertificates.SqlGetUserTables.AzureSqlDb.SyncGetUserTables.SqlGetUserTablesMySqlGetUserTablesOracleGetUserTablesPostgreSqlMigrate.MongoDbMigrate.MySql.AzureDbForMySqlMigrate.MySql.AzureDbForMySql.SyncMigrate.Oracle.AzureDbForPostgreSql.SyncMigrate.PostgreSql.AzureDbForPostgreSql.SyncV2Migrate.SqlServer.AzureSqlDb.SyncMigrate.SqlServer.AzureSqlDbMIMigrate.SqlServer.AzureSqlDbMI.Sync.LRSMigrate.SqlServer.SqlDbMigrate.SsisMigrateSchemaSqlServerSqlDbService.Check.OCIService.Install.OCIService.Upload.OCIValidate.MongoDbValidate.Oracle.AzureDbPostgreSql.SyncValidateMigrationInput.SqlServer.AzureSqlDbMIValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRSValidateMigrationInput.SqlServer.SqlDb.Sync(required) |


### ConnectToMongoDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Connect.MongoDb' (required) |
| input | Describes a connection to a MongoDB data source | MongoDbConnectionInfo |


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


### ConnectToSourceMySqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.MySql' (required) |
| input | Task input | ConnectToSourceMySqlTaskInput |


### ConnectToSourceMySqlTaskInput

| Name | Description | Value |
|-|-|-|
| checkPermissionsGroup | Permission group for validations | 'Default''MigrationFromMySQLToAzureDBForMySQL''MigrationFromSqlServerToAzureDB''MigrationFromSqlServerToAzureMI''MigrationFromSqlServerToAzureVM' |
| isOfflineMigration | Flag for whether or not the migration is offline | bool |
| sourceConnectionInfo | Information for connecting to MySQL source | MySqlConnectionInfo(required) |
| targetPlatform | Target Platform for the migration | 'AzureDbForMySQL''SqlServer' |


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


### ConnectToSourceOracleSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.Oracle.Sync' (required) |
| input | Task input | ConnectToSourceOracleSyncTaskInput |


### ConnectToSourceOracleSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Information for connecting to Oracle source | OracleConnectionInfo(required) |


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


### ConnectToSourcePostgreSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.PostgreSql.Sync' (required) |
| input | Task input | ConnectToSourcePostgreSqlSyncTaskInput |


### ConnectToSourcePostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Connection information for source PostgreSQL server | PostgreSqlConnectionInfo(required) |


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


### ConnectToSourceSqlServerTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.SqlServer' (required) |
| input | Task input | ConnectToSourceSqlServerTaskInput |
| taskId | Task id | string |


### ConnectToSourceSqlServerTaskInput

| Name | Description | Value |
|-|-|-|
| checkPermissionsGroup | Permission group for validations | 'Default''MigrationFromMySQLToAzureDBForMySQL''MigrationFromSqlServerToAzureDB''MigrationFromSqlServerToAzureMI''MigrationFromSqlServerToAzureVM' |
| collectAgentJobs | Flag for whether to collect agent jobs from source server. | bool |
| collectDatabases | Flag for whether to collect databases from source server. | bool |
| collectLogins | Flag for whether to collect logins from source server. | bool |
| collectTdeCertificateInfo | Flag for whether to collect TDE Certificate names from source server. | bool |
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| sourceConnectionInfo | Connection information for Source SQL Server | SqlConnectionInfo(required) |
| validateSsisCatalogOnly | Flag for whether to validate SSIS catalog is reachable on the source server. | bool |


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


### ConnectToSourceSqlServerSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToSource.SqlServer.Sync' (required) |
| input | Task input | ConnectToSourceSqlServerTaskInput |


### ConnectToTargetAzureDbForMySqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureDbForMySql' (required) |
| input | Task input | ConnectToTargetAzureDbForMySqlTaskInput |


### ConnectToTargetAzureDbForMySqlTaskInput

| Name | Description | Value |
|-|-|-|
| isOfflineMigration | Flag for whether or not the migration is offline | bool |
| sourceConnectionInfo | Connection information for source MySQL server | MySqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for MySQL server | MySqlConnectionInfo(required) |


### ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertie...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureDbForPostgreSql.Sync' (required) |
| input | Task input | ConnectToTargetAzureDbForPostgreSqlSyncTaskInput |


### ConnectToTargetAzureDbForPostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Connection information for source PostgreSQL server | PostgreSqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL server | PostgreSqlConnectionInfo(required) |


### ConnectToTargetSqlMITaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureSqlDbMI' (required) |
| input | Task input | ConnectToTargetSqlMITaskInput |


### ConnectToTargetSqlMITaskInput

| Name | Description | Value |
|-|-|-|
| collectAgentJobs | Flag for whether to collect agent jobs from target SQL MI server. | bool |
| collectLogins | Flag for whether to collect logins from target SQL MI server. | bool |
| targetConnectionInfo | Connection information for target SQL Server | SqlConnectionInfo(required) |
| validateSsisCatalogOnly | Flag for whether to validate SSIS catalog is reachable on the target SQL MI server. | bool |


### ConnectToTargetSqlMISyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.AzureSqlDbMI.Sync.LRS' (required) |
| input | Task input | ConnectToTargetSqlMISyncTaskInput |


### ConnectToTargetSqlMISyncTaskInput

| Name | Description | Value |
|-|-|-|
| azureApp | Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account | AzureActiveDirectoryApp(required) |
| targetConnectionInfo | Connection information for Azure SQL Database Managed Instance | MiSqlConnectionInfo(required) |


### AzureActiveDirectoryApp

| Name | Description | Value |
|-|-|-|
| appKey | Key used to authenticate to the Azure Active Directory Application | string |
| applicationId | Application ID of the Azure Active Directory Application | string |
| ignoreAzurePermissions | Ignore checking azure permissions on the AAD app | bool |
| tenantId | Tenant id of the customer | string |


### MiSqlConnectionInfo

| Name | Description | Value |
|-|-|-|
| managedInstanceResourceId | Resource id for Azure SQL database Managed instance | string (required) |
| password | Password credential. | string |
| type | Type of connection info | string (required) |
| userName | User name | string |


### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskPro...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync' (required) |
| input | Task input | ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInp... |


### ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInp...

| Name | Description | Value |
|-|-|-|
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL server | PostgreSqlConnectionInfo(required) |


### ConnectToTargetSqlDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.SqlDb' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | ConnectToTargetSqlDbTaskInput |


### ConnectToTargetSqlDbTaskInput

| Name | Description | Value |
|-|-|-|
| queryObjectCounts | Boolean flag indicating whether to query object counts for each database on the target server | bool |
| targetConnectionInfo | Connection information for target SQL DB | SqlConnectionInfo(required) |


### ConnectToTargetSqlDbSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ConnectToTarget.SqlDb.Sync' (required) |
| input | Task input | ConnectToTargetSqlDbSyncTaskInput |


### ConnectToTargetSqlDbSyncTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Connection information for source SQL Server | SqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target SQL DB | SqlConnectionInfo(required) |


### GetTdeCertificatesSqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetTDECertificates.Sql' (required) |
| input | Task input | GetTdeCertificatesSqlTaskInput |


### GetTdeCertificatesSqlTaskInput

| Name | Description | Value |
|-|-|-|
| backupFileShare | Backup file share information for file share to be used for temporarily storing files. | FileShare(required) |
| connectionInfo | Connection information for SQL Server | SqlConnectionInfo(required) |
| selectedCertificates | List containing certificate names and corresponding password to use for encrypting the exported certificate. | SelectedCertificateInput[] (required) |


### FileShare

| Name | Description | Value |
|-|-|-|
| password | Password credential used to connect to the share location. | string |
| path | The folder path for this share. | string (required) |
| userName | User name credential to connect to the share location | string |


### SelectedCertificateInput

| Name | Description | Value |
|-|-|-|
| certificateName | Name of certificate to be exported. | string (required) |
| password | Password to use for encrypting the exported certificate. | string (required) |


### GetUserTablesSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTables.AzureSqlDb.Sync' (required) |
| input | Task input | GetUserTablesSqlSyncTaskInput |


### GetUserTablesSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedSourceDatabases | List of source database names to collect tables for | string[] (required) |
| selectedTargetDatabases | List of target database names to collect tables for | string[] (required) |
| sourceConnectionInfo | Connection information for SQL Server | SqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for SQL DB | SqlConnectionInfo(required) |


### GetUserTablesSqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTables.Sql' (required) |
| input | Task input | GetUserTablesSqlTaskInput |
| taskId | Task id | string |


### GetUserTablesSqlTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Connection information for SQL Server | SqlConnectionInfo(required) |
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | List of database names to collect tables for | string[] (required) |


### GetUserTablesMySqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTablesMySql' (required) |
| input | Task input | GetUserTablesMySqlTaskInput |


### GetUserTablesMySqlTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Connection information for SQL Server | MySqlConnectionInfo(required) |
| selectedDatabases | List of database names to collect tables for | string[] (required) |


### GetUserTablesOracleTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTablesOracle' (required) |
| input | Task input | GetUserTablesOracleTaskInput |


### GetUserTablesOracleTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Information for connecting to Oracle source | OracleConnectionInfo(required) |
| selectedSchemas | List of Oracle schemas for which to collect tables | string[] (required) |


### GetUserTablesPostgreSqlTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'GetUserTablesPostgreSql' (required) |
| input | Task input | GetUserTablesPostgreSqlTaskInput |


### GetUserTablesPostgreSqlTaskInput

| Name | Description | Value |
|-|-|-|
| connectionInfo | Information for connecting to PostgreSQL source | PostgreSqlConnectionInfo(required) |
| selectedDatabases | List of PostgreSQL databases for which to collect tables | string[] (required) |


### MigrateMongoDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.MongoDb' (required) |
| input | Describes how a MongoDB data migration should be performed | MongoDbMigrationSettings |


### MongoDbMigrationSettings

| Name | Description | Value |
|-|-|-|
| boostRUs | The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets. | int |
| databases | The databases on the source cluster to migrate to the target. The keys are the names of the databases. | object (required) |
| replication | Describes how changes will be replicated from the source to the target. The default is OneTime. | 'Continuous''Disabled''OneTime' |
| source | Settings used to connect to the source cluster | MongoDbConnectionInfo(required) |
| target | Settings used to connect to the target cluster | MongoDbConnectionInfo(required) |
| throttling | Settings used to limit the resource usage of the migration | MongoDbThrottlingSettings |


### MongoDbThrottlingSettings

| Name | Description | Value |
|-|-|-|
| maxParallelism | The maximum number of work items (e.g. collection copies) that will be processed in parallel | int |
| minFreeCpu | The percentage of CPU time that the migrator will try to avoid using, from 0 to 100 | int |
| minFreeMemoryMb | The number of megabytes of RAM that the migrator will try to avoid using | int |


### MigrateMySqlAzureDbForMySqlOfflineTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.MySql.AzureDbForMySql' (required) |
| input | Task input | MigrateMySqlAzureDbForMySqlOfflineTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | Task id | string |


### MigrateMySqlAzureDbForMySqlOfflineTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| optionalAgentSettings | Optional parameters for fine tuning the data transfer rate during migration | object |
| selectedDatabases | Databases to migrate | MigrateMySqlAzureDbForMySqlOfflineDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source MySQL | MySqlConnectionInfo(required) |
| startedOn | Parameter to specify when the migration started | string |
| targetConnectionInfo | Connection information for target Azure Database for MySQL | MySqlConnectionInfo(required) |


### MigrateMySqlAzureDbForMySqlOfflineDatabaseInput

| Name | Description | Value |
|-|-|-|
| name | Name of the database | string |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |


### MigrateMySqlAzureDbForMySqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.MySql.AzureDbForMySql.Sync' (required) |
| input | Task input | MigrateMySqlAzureDbForMySqlSyncTaskInput |


### MigrateMySqlAzureDbForMySqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateMySqlAzureDbForMySqlSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source MySQL | MySqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for MySQL | MySqlConnectionInfo(required) |


### MigrateMySqlAzureDbForMySqlSyncDatabaseInput

| Name | Description | Value |
|-|-|-|
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of the database | string |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigrateOracleAzureDbForPostgreSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.Oracle.AzureDbForPostgreSql.Sync' (required) |
| input | Task input | MigrateOracleAzureDbPostgreSqlSyncTaskInput |


### MigrateOracleAzureDbPostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateOracleAzureDbPostgreSqlSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source Oracle | OracleConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL | PostgreSqlConnectionInfo(required) |


### MigrateOracleAzureDbPostgreSqlSyncDatabaseInput

| Name | Description | Value |
|-|-|-|
| caseManipulation | How to handle object name casing: either Preserve or ToLower | string |
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of the migration pipeline | string |
| schemaName | Name of the source schema | string |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropert...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | task id | string |


### MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | Databases to migrate | MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInp...[] (required) |
| sourceConnectionInfo | Connection information for source PostgreSQL | PostgreSqlConnectionInfo(required) |
| targetConnectionInfo | Connection information for target Azure Database for PostgreSQL | PostgreSqlConnectionInfo(required) |


### MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInp...

| Name | Description | Value |
|-|-|-|
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of the database | string |
| selectedTables | Tables selected for migration | MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTab...[] |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTab...

| Name | Description | Value |
|-|-|-|
| name | Name of the table to migrate | string |


### MigrateSqlServerSqlDbSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.AzureSqlDb.Sync' (required) |
| input | Task input | MigrateSqlServerSqlDbSyncTaskInput |


### MigrateSqlServerSqlDbSyncTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlDbSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |
| validationOptions | Validation options | MigrationValidationOptions |


### MigrateSqlServerSqlDbSyncDatabaseInput

| Name | Description | Value |
|-|-|-|
| id | Unique identifier for database | string |
| migrationSetting | Migration settings which tune the migration behavior | object |
| name | Name of database | string |
| schemaName | Schema name to be migrated | string |
| sourceSetting | Source settings to tune source endpoint migration behavior | object |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Target database name | string |
| targetSetting | Target settings to tune target endpoint migration behavior | object |


### MigrationValidationOptions

| Name | Description | Value |
|-|-|-|
| enableDataIntegrityValidation | Allows to perform a checksum based data integrity validation between source and target for the selected database / tables . | bool |
| enableQueryAnalysisValidation | Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries. | bool |
| enableSchemaValidation | Allows to compare the schema information between source and target. | bool |


### MigrateSqlServerSqlMITaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.AzureSqlDbMI' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSqlServerSqlMITaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| parentTaskId | parent task id | string |
| taskId | task id | string |


### MigrateSqlServerSqlMITaskInput

| Name | Description | Value |
|-|-|-|
| aadDomainName | Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected | string |
| backupBlobShare | SAS URI of Azure Storage Account Container to be used for storing backup files. | BlobShare(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| backupMode | Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases. | 'CreateBackup''ExistingBackup' |
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedAgentJobs | Agent Jobs to migrate. | string[] |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| selectedLogins | Logins to migrate. | string[] |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| startedOn | Date and time relative to UTC when the migration was started on | string |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### BlobShare

| Name | Description | Value |
|-|-|-|
| sasUri | SAS URI of Azure Storage Account Container. | string |


### MigrateSqlServerSqlMIDatabaseInput

| Name | Description | Value |
|-|-|-|
| backupFilePaths | The list of backup files to be used in case of existing backups. | string[] |
| backupFileShare | Backup file share information for backing up this database. | FileShare |
| id | id of the database | string |
| name | Name of the database | string (required) |
| restoreDatabaseName | Name of the database at destination | string (required) |


### MigrateSqlServerSqlMISyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSqlServerSqlMISyncTaskInput |


### MigrateSqlServerSqlMISyncTaskInput

| Name | Description | Value |
|-|-|-|
| azureApp | Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account | AzureActiveDirectoryApp(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| numberOfParallelDatabaseMigrations | Number of database migrations to start in parallel | int |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source SQL Server | SqlConnectionInfo(required) |
| storageResourceId | Fully qualified resourceId of storage | string (required) |
| targetConnectionInfo | Connection information for Azure SQL Database Managed Instance | MiSqlConnectionInfo(required) |


### MigrateSqlServerSqlDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.SqlServer.SqlDb' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSqlServerSqlDbTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | task id | string |


### MigrateSqlServerSqlDbTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlDbDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| startedOn | Date and time relative to UTC when the migration was started on | string |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |
| validationOptions | Options for enabling various post migration validations. Available options,1.) Data Integrity Check: Performs a checksum based comparison on source and target tables after the migration to ensure the correctness of the data.2.) Schema Validation: Performs a thorough schema comparison between the source and target tables and provides a list of differences between the source and target database, 3.) Query Analysis: Executes a set of queries picked up automatically either from the Query Plan Cache or Query Store and execute them and compares the execution time between the source and target database. | MigrationValidationOptions |


### MigrateSqlServerSqlDbDatabaseInput

| Name | Description | Value |
|-|-|-|
| id | id of the database | string |
| name | Name of the database | string |
| schemaSetting | Settings selected for DB schema migration. | For Bicep, you can use theany()function. |
| tableMap | Mapping of source to target tables | object |
| targetDatabaseName | Name of target database. Note: Target database will be truncated before starting migration. | string |


### MigrateSsisTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Migrate.Ssis' (required) |
| input | Task input | MigrateSsisTaskInput |


### MigrateSsisTaskInput

| Name | Description | Value |
|-|-|-|
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| ssisMigrationInfo | SSIS package migration information. | SsisMigrationInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### SsisMigrationInfo

| Name | Description | Value |
|-|-|-|
| environmentOverwriteOption | The overwrite option for the SSIS environment migration | 'Ignore''Overwrite' |
| projectOverwriteOption | The overwrite option for the SSIS project migration | 'Ignore''Overwrite' |
| ssisStoreType | The SSIS store type of source, only SSIS catalog is supported now in DMS | 'SsisCatalog' |


### MigrateSchemaSqlServerSqlDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'MigrateSchemaSqlServerSqlDb' (required) |
| createdOn | DateTime in UTC when the task was created | string |
| input | Task input | MigrateSchemaSqlServerSqlDbTaskInput |
| isCloneable | whether the task can be cloned or not | bool |
| taskId | Task id | string |


### MigrateSchemaSqlServerSqlDbTaskInput

| Name | Description | Value |
|-|-|-|
| encryptedKeyForSecureFields | encrypted key for secure fields | string |
| selectedDatabases | Databases to migrate | MigrateSchemaSqlServerSqlDbDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| startedOn | Migration start time | string |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### MigrateSchemaSqlServerSqlDbDatabaseInput

| Name | Description | Value |
|-|-|-|
| id | Id of the source database | string |
| name | Name of source database | string |
| schemaSetting | Database schema migration settings | SchemaMigrationSetting |
| targetDatabaseName | Name of target database | string |


### SchemaMigrationSetting

| Name | Description | Value |
|-|-|-|
| fileId | Resource Identifier of a file resource containing the uploaded schema file | string |
| fileName | Name of the file resource containing the uploaded schema file | string |
| schemaOption | Option on how to migrate the schema | 'ExtractFromSource''None''UseStorageFile' |


### CheckOCIDriverTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Service.Check.OCI' (required) |
| input | Input for the service task to check for OCI drivers. | CheckOCIDriverTaskInput |


### CheckOCIDriverTaskInput

| Name | Description | Value |
|-|-|-|
| serverVersion | Version of the source server to check against.  Optional. | string |


### InstallOCIDriverTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Service.Install.OCI' (required) |
| input | Input for the service task to install an OCI driver. | InstallOCIDriverTaskInput |


### InstallOCIDriverTaskInput

| Name | Description | Value |
|-|-|-|
| driverPackageName | Name of the uploaded driver package to install. | string |


### UploadOCIDriverTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Service.Upload.OCI' (required) |
| input | Input for the service task to upload an OCI driver. | UploadOCIDriverTaskInput |


### UploadOCIDriverTaskInput

| Name | Description | Value |
|-|-|-|
| driverShare | File share information for the OCI driver archive. | FileShare |


### ValidateMongoDbTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Validate.MongoDb' (required) |
| input | Describes how a MongoDB data migration should be performed | MongoDbMigrationSettings |


### ValidateOracleAzureDbForPostgreSqlSyncTaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'Validate.Oracle.AzureDbPostgreSql.Sync' (required) |
| input | Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations | MigrateOracleAzureDbPostgreSqlSyncTaskInput |


### ValidateMigrationInputSqlServerSqlMITaskProperties

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ValidateMigrationInput.SqlServer.AzureSqlDbMI' (required) |
| input | Task input | ValidateMigrationInputSqlServerSqlMITaskInput |


### ValidateMigrationInputSqlServerSqlMITaskInput

| Name | Description | Value |
|-|-|-|
| backupBlobShare | SAS URI of Azure Storage Account Container to be used for storing backup files. | BlobShare(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| backupMode | Backup Mode to specify whether to use existing backup or create new backup. | 'CreateBackup''ExistingBackup' |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| selectedLogins | Logins to migrate | string[] |
| sourceConnectionInfo | Information for connecting to source | SqlConnectionInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |


### ValidateMigrationInputSqlServerSqlMISyncTaskProperti...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS' (required) |
| input | Task input | ValidateMigrationInputSqlServerSqlMISyncTaskInput |


### ValidateMigrationInputSqlServerSqlMISyncTaskInput

| Name | Description | Value |
|-|-|-|
| azureApp | Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account | AzureActiveDirectoryApp(required) |
| backupFileShare | Backup file share information for all selected databases. | FileShare |
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlMIDatabaseInput[] (required) |
| sourceConnectionInfo | Connection information for source SQL Server | SqlConnectionInfo(required) |
| storageResourceId | Fully qualified resourceId of storage | string (required) |
| targetConnectionInfo | Connection information for Azure SQL Database Managed Instance | MiSqlConnectionInfo(required) |


### ValidateMigrationInputSqlServerSqlDbSyncTaskProperti...

| Name | Description | Value |
|-|-|-|
| taskType | Task type. | 'ValidateMigrationInput.SqlServer.SqlDb.Sync' (required) |
| input | Task input | ValidateSyncMigrationInputSqlServerTaskInput |


### ValidateSyncMigrationInputSqlServerTaskInput

| Name | Description | Value |
|-|-|-|
| selectedDatabases | Databases to migrate | MigrateSqlServerSqlDbSyncDatabaseInput[] (required) |
| sourceConnectionInfo | Information for connecting to source SQL server | SqlConnectionInfo(required) |
| targetConnectionInfo | Information for connecting to target | SqlConnectionInfo(required) |
## Microsoft.DataMigration/sqlMigrationServices@2022-03-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/sqlMigrationServices@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### sqlMigrationServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location |  | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| properties | The SQL Migration Service properties. | SqlMigrationServiceProperties |
