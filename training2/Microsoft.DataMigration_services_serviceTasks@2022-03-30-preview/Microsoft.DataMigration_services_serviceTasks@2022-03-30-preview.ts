import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesServicetasksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:services;

/**
   * HTTP strong entity tag value. This is ignored if submitted.
   */
readonly etag?: string;

/**
   * Key value pairs of client data to attach meta data information to task
   */
readonly clientData?: object;

/**
   * Set the object type
   */
readonly taskType: Connect.MongoDbConnectToSource.MySqlConnectToSource.Oracle.SyncConnectToSource.PostgreSql.SyncConnectToSource.SqlServerConnectToSource.SqlServer.SyncConnectToTarget.AzureDbForMySqlConnectToTarget.AzureDbForPostgreSql.SyncConnectToTarget.AzureSqlDbMIConnectToTarget.AzureSqlDbMI.Sync.LRSConnectToTarget.Oracle.AzureDbForPostgreSql.SyncConnectToTarget.SqlDbConnectToTarget.SqlDb.SyncGetTDECertificates.SqlGetUserTables.AzureSqlDb.SyncGetUserTables.SqlGetUserTablesMySqlGetUserTablesOracleGetUserTablesPostgreSqlMigrate.MongoDbMigrate.MySql.AzureDbForMySqlMigrate.MySql.AzureDbForMySql.SyncMigrate.Oracle.AzureDbForPostgreSql.SyncMigrate.PostgreSql.AzureDbForPostgreSql.SyncV2Migrate.SqlServer.AzureSqlDb.SyncMigrate.SqlServer.AzureSqlDbMIMigrate.SqlServer.AzureSqlDbMI.Sync.LRSMigrate.SqlServer.SqlDbMigrate.SsisMigrateSchemaSqlServerSqlDbService.Check.OCIService.Install.OCIService.Upload.OCIValidate.MongoDbValidate.Oracle.AzureDbPostgreSql.SyncValidateMigrationInput.SqlServer.AzureSqlDbMIValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRSValidateMigrationInput.SqlServer.SqlDb.Sync;

/**
   * Task type.
   */
readonly taskType: 'Connect.MongoDb';

/**
   * Describes a connection to a MongoDB data source
   */
readonly input?: MongoDbConnectionInfo;

/**
   * Additional connection settings
   */
readonly additionalSettings?: string;

/**
   * Authentication type to use for connection
   */
readonly authentication?: 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication';

/**
   * A MongoDB connection string or blob container URL. The user name and password can be specified here or in the userName and password properties
   */
readonly connectionString: string;

/**
   * Data source
   */
readonly dataSource?: string;

/**
   * Whether to encrypt the connection
   */
readonly encryptConnection?: bool;

/**
   * 
   */
readonly enforceSSL?: bool;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * port for server
   */
readonly port?: number;

/**
   * server brand version
   */
readonly serverBrandVersion?: string;

/**
   * name of the server
   */
readonly serverName?: string;

/**
   * server version
   */
readonly serverVersion?: string;

/**
   * Whether to trust the server certificate
   */
readonly trustServerCertificate?: bool;

/**
   * Type of connection info
   */
readonly type: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Task type.
   */
readonly taskType: 'ConnectToSource.MySql';

/**
   * Task input
   */
readonly input?: ConnectToSourceMySqlTaskInput;

/**
   * Permission group for validations
   */
readonly checkPermissionsGroup?: 'Default''MigrationFromMySQLToAzureDBForMySQL''MigrationFromSqlServerToAzureDB''MigrationFromSqlServerToAzureMI''MigrationFromSqlServerToAzureVM';

/**
   * Flag for whether or not the migration is offline
   */
readonly isOfflineMigration?: bool;

/**
   * Information for connecting to MySQL source
   */
readonly sourceConnectionInfo: MySqlConnectionInfo;

/**
   * Target Platform for the migration
   */
readonly targetPlatform?: 'AzureDbForMySQL''SqlServer';

/**
   * Additional connection settings
   */
readonly additionalSettings?: string;

/**
   * Authentication type to use for connection
   */
readonly authentication?: 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication';

/**
   * Data source
   */
readonly dataSource?: string;

/**
   * Whether to encrypt the connection
   */
readonly encryptConnection?: bool;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * Port for Server
   */
readonly port: number;

/**
   * Name of the server
   */
readonly serverName: string;

/**
   * Type of connection info
   */
readonly type: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Task type.
   */
readonly taskType: 'ConnectToSource.Oracle.Sync';

/**
   * Task input
   */
readonly input?: ConnectToSourceOracleSyncTaskInput;

/**
   * Information for connecting to Oracle source
   */
readonly sourceConnectionInfo: OracleConnectionInfo;

/**
   * Authentication type to use for connection
   */
readonly authentication?: 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication';

/**
   * EZConnect or TNSName connection string.
   */
readonly dataSource: string;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * port for server
   */
readonly port?: number;

/**
   * name of the server
   */
readonly serverName?: string;

/**
   * server version
   */
readonly serverVersion?: string;

/**
   * Type of connection info
   */
readonly type: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Task type.
   */
readonly taskType: 'ConnectToSource.PostgreSql.Sync';

/**
   * Task input
   */
readonly input?: ConnectToSourcePostgreSqlSyncTaskInput;

/**
   * Connection information for source PostgreSQL server
   */
readonly sourceConnectionInfo: PostgreSqlConnectionInfo;

/**
   * Additional connection settings
   */
readonly additionalSettings?: string;

/**
   * Authentication type to use for connection
   */
readonly authentication?: 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication';

/**
   * Name of the database
   */
readonly databaseName?: string;

/**
   * Data source
   */
readonly dataSource?: string;

/**
   * Whether to encrypt the connection
   */
readonly encryptConnection?: bool;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * Port for Server
   */
readonly port: number;

/**
   * server brand version
   */
readonly serverBrandVersion?: string;

/**
   * Name of the server
   */
readonly serverName: string;

/**
   * server version
   */
readonly serverVersion?: string;

/**
   * Whether to trust the server certificate
   */
readonly trustServerCertificate?: bool;

/**
   * Type of connection info
   */
readonly type: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Task type.
   */
readonly taskType: 'ConnectToSource.SqlServer';

/**
   * Task input
   */
readonly input?: ConnectToSourceSqlServerTaskInput;

/**
   * Task id
   */
readonly taskId?: string;

/**
   * Permission group for validations
   */
readonly checkPermissionsGroup?: 'Default''MigrationFromMySQLToAzureDBForMySQL''MigrationFromSqlServerToAzureDB''MigrationFromSqlServerToAzureMI''MigrationFromSqlServerToAzureVM';

/**
   * Flag for whether to collect agent jobs from source server.
   */
readonly collectAgentJobs?: bool;

/**
   * Flag for whether to collect databases from source server.
   */
readonly collectDatabases?: bool;

/**
   * Flag for whether to collect logins from source server.
   */
readonly collectLogins?: bool;

/**
   * Flag for whether to collect TDE Certificate names from source server.
   */
readonly collectTdeCertificateInfo?: bool;

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * Connection information for Source SQL Server
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Flag for whether to validate SSIS catalog is reachable on the source server.
   */
readonly validateSsisCatalogOnly?: bool;

/**
   * Additional connection settings
   */
readonly additionalSettings?: string;

/**
   * Authentication type to use for connection
   */
readonly authentication?: 'ActiveDirectoryIntegrated''ActiveDirectoryPassword''None''SqlAuthentication''WindowsAuthentication';

/**
   * Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
   */
readonly dataSource: string;

/**
   * Whether to encrypt the connection
   */
readonly encryptConnection?: bool;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * Server platform type for connection
   */
readonly platform?: 'SqlOnPrem';

/**
   * Port for Server
   */
readonly port?: number;

/**
   * Represents the ID of an HTTP resource represented by an Azure resource provider.
   */
readonly resourceId?: string;

/**
   * server brand version
   */
readonly serverBrandVersion?: string;

/**
   * name of the server
   */
readonly serverName?: string;

/**
   * server version
   */
readonly serverVersion?: string;

/**
   * Whether to trust the server certificate
   */
readonly trustServerCertificate?: bool;

/**
   * Type of connection info
   */
readonly type: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Task type.
   */
readonly taskType: 'ConnectToSource.SqlServer.Sync';

/**
   * Task input
   */
readonly input?: ConnectToSourceSqlServerTaskInput;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.AzureDbForMySql';

/**
   * Task input
   */
readonly input?: ConnectToTargetAzureDbForMySqlTaskInput;

/**
   * Flag for whether or not the migration is offline
   */
readonly isOfflineMigration?: bool;

/**
   * Connection information for source MySQL server
   */
readonly sourceConnectionInfo: MySqlConnectionInfo;

/**
   * Connection information for target Azure Database for MySQL server
   */
readonly targetConnectionInfo: MySqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.AzureDbForPostgreSql.Sync';

/**
   * Task input
   */
readonly input?: ConnectToTargetAzureDbForPostgreSqlSyncTaskInput;

/**
   * Connection information for source PostgreSQL server
   */
readonly sourceConnectionInfo: PostgreSqlConnectionInfo;

/**
   * Connection information for target Azure Database for PostgreSQL server
   */
readonly targetConnectionInfo: PostgreSqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.AzureSqlDbMI';

/**
   * Task input
   */
readonly input?: ConnectToTargetSqlMITaskInput;

/**
   * Flag for whether to collect agent jobs from target SQL MI server.
   */
readonly collectAgentJobs?: bool;

/**
   * Flag for whether to collect logins from target SQL MI server.
   */
readonly collectLogins?: bool;

/**
   * Connection information for target SQL Server
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Flag for whether to validate SSIS catalog is reachable on the target SQL MI server.
   */
readonly validateSsisCatalogOnly?: bool;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.AzureSqlDbMI.Sync.LRS';

/**
   * Task input
   */
readonly input?: ConnectToTargetSqlMISyncTaskInput;

/**
   * Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
   */
readonly azureApp: AzureActiveDirectoryApp;

/**
   * Connection information for Azure SQL Database Managed Instance
   */
readonly targetConnectionInfo: MiSqlConnectionInfo;

/**
   * Key used to authenticate to the Azure Active Directory Application
   */
readonly appKey?: string;

/**
   * Application ID of the Azure Active Directory Application
   */
readonly applicationId?: string;

/**
   * Ignore checking azure permissions on the AAD app
   */
readonly ignoreAzurePermissions?: bool;

/**
   * Tenant id of the customer
   */
readonly tenantId?: string;

/**
   * Resource id for Azure SQL database Managed instance
   */
readonly managedInstanceResourceId: string;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * Type of connection info
   */
readonly type: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync';

/**
   * Task input
   */
readonly input?: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInp...;

/**
   * Connection information for target Azure Database for PostgreSQL server
   */
readonly targetConnectionInfo: PostgreSqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.SqlDb';

/**
   * DateTime in UTC when the task was created
   */
readonly createdOn?: string;

/**
   * Task input
   */
readonly input?: ConnectToTargetSqlDbTaskInput;

/**
   * Boolean flag indicating whether to query object counts for each database on the target server
   */
readonly queryObjectCounts?: bool;

/**
   * Connection information for target SQL DB
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'ConnectToTarget.SqlDb.Sync';

/**
   * Task input
   */
readonly input?: ConnectToTargetSqlDbSyncTaskInput;

/**
   * Connection information for source SQL Server
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Connection information for target SQL DB
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'GetTDECertificates.Sql';

/**
   * Task input
   */
readonly input?: GetTdeCertificatesSqlTaskInput;

/**
   * Backup file share information for file share to be used for temporarily storing files.
   */
readonly backupFileShare: FileShare;

/**
   * Connection information for SQL Server
   */
readonly connectionInfo: SqlConnectionInfo;

/**
   * List containing certificate names and corresponding password to use for encrypting the exported certificate.
   */
readonly selectedCertificates: SelectedCertificateInput[];

/**
   * Password credential used to connect to the share location.
   */
readonly password?: string;

/**
   * The folder path for this share.
   */
readonly path: string;

/**
   * User name credential to connect to the share location
   */
readonly userName?: string;

/**
   * Name of certificate to be exported.
   */
readonly certificateName: string;

/**
   * Password to use for encrypting the exported certificate.
   */
readonly password: string;

/**
   * Task type.
   */
readonly taskType: 'GetUserTables.AzureSqlDb.Sync';

/**
   * Task input
   */
readonly input?: GetUserTablesSqlSyncTaskInput;

/**
   * List of source database names to collect tables for
   */
readonly selectedSourceDatabases: string[];

/**
   * List of target database names to collect tables for
   */
readonly selectedTargetDatabases: string[];

/**
   * Connection information for SQL Server
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Connection information for SQL DB
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'GetUserTables.Sql';

/**
   * Task input
   */
readonly input?: GetUserTablesSqlTaskInput;

/**
   * Task id
   */
readonly taskId?: string;

/**
   * Connection information for SQL Server
   */
readonly connectionInfo: SqlConnectionInfo;

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * List of database names to collect tables for
   */
readonly selectedDatabases: string[];

/**
   * Task type.
   */
readonly taskType: 'GetUserTablesMySql';

/**
   * Task input
   */
readonly input?: GetUserTablesMySqlTaskInput;

/**
   * Connection information for SQL Server
   */
readonly connectionInfo: MySqlConnectionInfo;

/**
   * List of database names to collect tables for
   */
readonly selectedDatabases: string[];

/**
   * Task type.
   */
readonly taskType: 'GetUserTablesOracle';

/**
   * Task input
   */
readonly input?: GetUserTablesOracleTaskInput;

/**
   * Information for connecting to Oracle source
   */
readonly connectionInfo: OracleConnectionInfo;

/**
   * List of Oracle schemas for which to collect tables
   */
readonly selectedSchemas: string[];

/**
   * Task type.
   */
readonly taskType: 'GetUserTablesPostgreSql';

/**
   * Task input
   */
readonly input?: GetUserTablesPostgreSqlTaskInput;

/**
   * Information for connecting to PostgreSQL source
   */
readonly connectionInfo: PostgreSqlConnectionInfo;

/**
   * List of PostgreSQL databases for which to collect tables
   */
readonly selectedDatabases: string[];

/**
   * Task type.
   */
readonly taskType: 'Migrate.MongoDb';

/**
   * Describes how a MongoDB data migration should be performed
   */
readonly input?: MongoDbMigrationSettings;

/**
   * The RU limit on a CosmosDB target that collections will be temporarily increased to (if lower) during the initial copy of a migration, from 10,000 to 1,000,000, or 0 to use the default boost (which is generally the maximum), or null to not boost the RUs. This setting has no effect on non-CosmosDB targets.
   */
readonly boostRUs?: number;

/**
   * The databases on the source cluster to migrate to the target. The keys are the names of the databases.
   */
readonly databases: object;

/**
   * Describes how changes will be replicated from the source to the target. The default is OneTime.
   */
readonly replication?: 'Continuous''Disabled''OneTime';

/**
   * Settings used to connect to the source cluster
   */
readonly source: MongoDbConnectionInfo;

/**
   * Settings used to connect to the target cluster
   */
readonly target: MongoDbConnectionInfo;

/**
   * Settings used to limit the resource usage of the migration
   */
readonly throttling?: MongoDbThrottlingSettings;

/**
   * The maximum number of work items (e.g. collection copies) that will be processed in parallel
   */
readonly maxParallelism?: number;

/**
   * The percentage of CPU time that the migrator will try to avoid using, from 0 to 100
   */
readonly minFreeCpu?: number;

/**
   * The number of megabytes of RAM that the migrator will try to avoid using
   */
readonly minFreeMemoryMb?: number;

/**
   * Task type.
   */
readonly taskType: 'Migrate.MySql.AzureDbForMySql';

/**
   * Task input
   */
readonly input?: MigrateMySqlAzureDbForMySqlOfflineTaskInput;

/**
   * whether the task can be cloned or not
   */
readonly isCloneable?: bool;

/**
   * Task id
   */
readonly taskId?: string;

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * Optional parameters for fine tuning the data transfer rate during migration
   */
readonly optionalAgentSettings?: object;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateMySqlAzureDbForMySqlOfflineDatabaseInput[];

/**
   * Connection information for source MySQL
   */
readonly sourceConnectionInfo: MySqlConnectionInfo;

/**
   * Parameter to specify when the migration started
   */
readonly startedOn?: string;

/**
   * Connection information for target Azure Database for MySQL
   */
readonly targetConnectionInfo: MySqlConnectionInfo;

/**
   * Mapping of source to target tables
   */
readonly tableMap?: object;

/**
   * Name of target database. Note: Target database will be truncated before starting migration.
   */
readonly targetDatabaseName?: string;

/**
   * Task type.
   */
readonly taskType: 'Migrate.MySql.AzureDbForMySql.Sync';

/**
   * Task input
   */
readonly input?: MigrateMySqlAzureDbForMySqlSyncTaskInput;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateMySqlAzureDbForMySqlSyncDatabaseInput[];

/**
   * Connection information for source MySQL
   */
readonly sourceConnectionInfo: MySqlConnectionInfo;

/**
   * Connection information for target Azure Database for MySQL
   */
readonly targetConnectionInfo: MySqlConnectionInfo;

/**
   * Migration settings which tune the migration behavior
   */
readonly migrationSetting?: object;

/**
   * Source settings to tune source endpoint migration behavior
   */
readonly sourceSetting?: object;

/**
   * Mapping of source to target tables
   */
readonly tableMap?: object;

/**
   * Name of target database. Note: Target database will be truncated before starting migration.
   */
readonly targetDatabaseName?: string;

/**
   * Target settings to tune target endpoint migration behavior
   */
readonly targetSetting?: object;

/**
   * Task type.
   */
readonly taskType: 'Migrate.Oracle.AzureDbForPostgreSql.Sync';

/**
   * Task input
   */
readonly input?: MigrateOracleAzureDbPostgreSqlSyncTaskInput;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateOracleAzureDbPostgreSqlSyncDatabaseInput[];

/**
   * Connection information for source Oracle
   */
readonly sourceConnectionInfo: OracleConnectionInfo;

/**
   * Connection information for target Azure Database for PostgreSQL
   */
readonly targetConnectionInfo: PostgreSqlConnectionInfo;

/**
   * How to handle object name casing: either Preserve or ToLower
   */
readonly caseManipulation?: string;

/**
   * Migration settings which tune the migration behavior
   */
readonly migrationSetting?: object;

/**
   * Name of the source schema
   */
readonly schemaName?: string;

/**
   * Source settings to tune source endpoint migration behavior
   */
readonly sourceSetting?: object;

/**
   * Mapping of source to target tables
   */
readonly tableMap?: object;

/**
   * Name of target database. Note: Target database will be truncated before starting migration.
   */
readonly targetDatabaseName?: string;

/**
   * Target settings to tune target endpoint migration behavior
   */
readonly targetSetting?: object;

/**
   * Task type.
   */
readonly taskType: 'Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2';

/**
   * DateTime in UTC when the task was created
   */
readonly createdOn?: string;

/**
   * Task input
   */
readonly input?: MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput;

/**
   * whether the task can be cloned or not
   */
readonly isCloneable?: bool;

/**
   * task id
   */
readonly taskId?: string;

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInp...[];

/**
   * Connection information for source PostgreSQL
   */
readonly sourceConnectionInfo: PostgreSqlConnectionInfo;

/**
   * Connection information for target Azure Database for PostgreSQL
   */
readonly targetConnectionInfo: PostgreSqlConnectionInfo;

/**
   * Migration settings which tune the migration behavior
   */
readonly migrationSetting?: object;

/**
   * Tables selected for migration
   */
readonly selectedTables?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTab...[];

/**
   * Source settings to tune source endpoint migration behavior
   */
readonly sourceSetting?: object;

/**
   * Name of target database. Note: Target database will be truncated before starting migration.
   */
readonly targetDatabaseName?: string;

/**
   * Target settings to tune target endpoint migration behavior
   */
readonly targetSetting?: object;

/**
   * Task type.
   */
readonly taskType: 'Migrate.SqlServer.AzureSqlDb.Sync';

/**
   * Task input
   */
readonly input?: MigrateSqlServerSqlDbSyncTaskInput;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInput[];

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Validation options
   */
readonly validationOptions?: MigrationValidationOptions;

/**
   * Unique identifier for database
   */
readonly id?: string;

/**
   * Migration settings which tune the migration behavior
   */
readonly migrationSetting?: object;

/**
   * Schema name to be migrated
   */
readonly schemaName?: string;

/**
   * Source settings to tune source endpoint migration behavior
   */
readonly sourceSetting?: object;

/**
   * Mapping of source to target tables
   */
readonly tableMap?: object;

/**
   * Target database name
   */
readonly targetDatabaseName?: string;

/**
   * Target settings to tune target endpoint migration behavior
   */
readonly targetSetting?: object;

/**
   * Allows to perform a checksum based data integrity validation between source and target for the selected database / tables .
   */
readonly enableDataIntegrityValidation?: bool;

/**
   * Allows to perform a quick and intelligent query analysis by retrieving queries from the source database and executes them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries.
   */
readonly enableQueryAnalysisValidation?: bool;

/**
   * Allows to compare the schema information between source and target.
   */
readonly enableSchemaValidation?: bool;

/**
   * Task type.
   */
readonly taskType: 'Migrate.SqlServer.AzureSqlDbMI';

/**
   * DateTime in UTC when the task was created
   */
readonly createdOn?: string;

/**
   * Task input
   */
readonly input?: MigrateSqlServerSqlMITaskInput;

/**
   * whether the task can be cloned or not
   */
readonly isCloneable?: bool;

/**
   * parent task id
   */
readonly parentTaskId?: string;

/**
   * task id
   */
readonly taskId?: string;

/**
   * Azure Active Directory domain name in the format of 'contoso.com' for federated Azure AD or 'contoso.onmicrosoft.com' for managed domain, required if and only if Windows logins are selected
   */
readonly aadDomainName?: string;

/**
   * SAS URI of Azure Storage Account Container to be used for storing backup files.
   */
readonly backupBlobShare: BlobShare;

/**
   * Backup file share information for all selected databases.
   */
readonly backupFileShare?: FileShare;

/**
   * Backup Mode to specify whether to use existing backup or create new backup. If using existing backups, backup file paths are required to be provided in selectedDatabases.
   */
readonly backupMode?: 'CreateBackup''ExistingBackup';

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * Agent Jobs to migrate.
   */
readonly selectedAgentJobs?: string[];

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];

/**
   * Logins to migrate.
   */
readonly selectedLogins?: string[];

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Date and time relative to UTC when the migration was started on
   */
readonly startedOn?: string;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * SAS URI of Azure Storage Account Container.
   */
readonly sasUri?: string;

/**
   * The list of backup files to be used in case of existing backups.
   */
readonly backupFilePaths?: string[];

/**
   * Backup file share information for backing up this database.
   */
readonly backupFileShare?: FileShare;

/**
   * id of the database
   */
readonly id?: string;

/**
   * Name of the database at destination
   */
readonly restoreDatabaseName: string;

/**
   * Task type.
   */
readonly taskType: 'Migrate.SqlServer.AzureSqlDbMI.Sync.LRS';

/**
   * DateTime in UTC when the task was created
   */
readonly createdOn?: string;

/**
   * Task input
   */
readonly input?: MigrateSqlServerSqlMISyncTaskInput;

/**
   * Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
   */
readonly azureApp: AzureActiveDirectoryApp;

/**
   * Backup file share information for all selected databases.
   */
readonly backupFileShare?: FileShare;

/**
   * Number of database migrations to start in parallel
   */
readonly numberOfParallelDatabaseMigrations?: number;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];

/**
   * Connection information for source SQL Server
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Fully qualified resourceId of storage
   */
readonly storageResourceId: string;

/**
   * Connection information for Azure SQL Database Managed Instance
   */
readonly targetConnectionInfo: MiSqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'Migrate.SqlServer.SqlDb';

/**
   * DateTime in UTC when the task was created
   */
readonly createdOn?: string;

/**
   * Task input
   */
readonly input?: MigrateSqlServerSqlDbTaskInput;

/**
   * whether the task can be cloned or not
   */
readonly isCloneable?: bool;

/**
   * task id
   */
readonly taskId?: string;

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Date and time relative to UTC when the migration was started on
   */
readonly startedOn?: string;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Options for enabling various post migration validations. Available options,1.) Data Integrity Check: Performs a checksum based comparison on source and target tables after the migration to ensure the correctness of the data.2.) Schema Validation: Performs a thorough schema comparison between the source and target tables and provides a list of differences between the source and target database, 3.) Query Analysis: Executes a set of queries picked up automatically either from the Query Plan Cache or Query Store and execute them and compares the execution time between the source and target database.
   */
readonly validationOptions?: MigrationValidationOptions;

/**
   * id of the database
   */
readonly id?: string;

/**
   * Settings selected for DB schema migration.
   */
readonly schemaSetting?: For Bicep, you can use theany()function.;

/**
   * Mapping of source to target tables
   */
readonly tableMap?: object;

/**
   * Name of target database. Note: Target database will be truncated before starting migration.
   */
readonly targetDatabaseName?: string;

/**
   * Task type.
   */
readonly taskType: 'Migrate.Ssis';

/**
   * Task input
   */
readonly input?: MigrateSsisTaskInput;

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * SSIS package migration information.
   */
readonly ssisMigrationInfo: SsisMigrationInfo;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * The overwrite option for the SSIS environment migration
   */
readonly environmentOverwriteOption?: 'Ignore''Overwrite';

/**
   * The overwrite option for the SSIS project migration
   */
readonly projectOverwriteOption?: 'Ignore''Overwrite';

/**
   * The SSIS store type of source, only SSIS catalog is supported now in DMS
   */
readonly ssisStoreType?: 'SsisCatalog';

/**
   * Task type.
   */
readonly taskType: 'MigrateSchemaSqlServerSqlDb';

/**
   * DateTime in UTC when the task was created
   */
readonly createdOn?: string;

/**
   * Task input
   */
readonly input?: MigrateSchemaSqlServerSqlDbTaskInput;

/**
   * whether the task can be cloned or not
   */
readonly isCloneable?: bool;

/**
   * Task id
   */
readonly taskId?: string;

/**
   * encrypted key for secure fields
   */
readonly encryptedKeyForSecureFields?: string;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSchemaSqlServerSqlDbDatabaseInput[];

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Migration start time
   */
readonly startedOn?: string;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Id of the source database
   */
readonly id?: string;

/**
   * Database schema migration settings
   */
readonly schemaSetting?: SchemaMigrationSetting;

/**
   * Name of target database
   */
readonly targetDatabaseName?: string;

/**
   * Resource Identifier of a file resource containing the uploaded schema file
   */
readonly fileId?: string;

/**
   * Name of the file resource containing the uploaded schema file
   */
readonly fileName?: string;

/**
   * Option on how to migrate the schema
   */
readonly schemaOption?: 'ExtractFromSource''None''UseStorageFile';

/**
   * Task type.
   */
readonly taskType: 'Service.Check.OCI';

/**
   * Input for the service task to check for OCI drivers.
   */
readonly input?: CheckOCIDriverTaskInput;

/**
   * Version of the source server to check against.  Optional.
   */
readonly serverVersion?: string;

/**
   * Task type.
   */
readonly taskType: 'Service.Install.OCI';

/**
   * Input for the service task to install an OCI driver.
   */
readonly input?: InstallOCIDriverTaskInput;

/**
   * Name of the uploaded driver package to install.
   */
readonly driverPackageName?: string;

/**
   * Task type.
   */
readonly taskType: 'Service.Upload.OCI';

/**
   * Input for the service task to upload an OCI driver.
   */
readonly input?: UploadOCIDriverTaskInput;

/**
   * File share information for the OCI driver archive.
   */
readonly driverShare?: FileShare;

/**
   * Task type.
   */
readonly taskType: 'Validate.MongoDb';

/**
   * Describes how a MongoDB data migration should be performed
   */
readonly input?: MongoDbMigrationSettings;

/**
   * Task type.
   */
readonly taskType: 'Validate.Oracle.AzureDbPostgreSql.Sync';

/**
   * Input for the task that migrates Oracle databases to Azure Database for PostgreSQL for online migrations
   */
readonly input?: MigrateOracleAzureDbPostgreSqlSyncTaskInput;

/**
   * Task type.
   */
readonly taskType: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI';

/**
   * Task input
   */
readonly input?: ValidateMigrationInputSqlServerSqlMITaskInput;

/**
   * SAS URI of Azure Storage Account Container to be used for storing backup files.
   */
readonly backupBlobShare: BlobShare;

/**
   * Backup file share information for all selected databases.
   */
readonly backupFileShare?: FileShare;

/**
   * Backup Mode to specify whether to use existing backup or create new backup.
   */
readonly backupMode?: 'CreateBackup''ExistingBackup';

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];

/**
   * Logins to migrate
   */
readonly selectedLogins?: string[];

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS';

/**
   * Task input
   */
readonly input?: ValidateMigrationInputSqlServerSqlMISyncTaskInput;

/**
   * Azure Active Directory Application the DMS instance will use to connect to the target instance of Azure SQL Database Managed Instance and the Azure Storage Account
   */
readonly azureApp: AzureActiveDirectoryApp;

/**
   * Backup file share information for all selected databases.
   */
readonly backupFileShare?: FileShare;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];

/**
   * Connection information for source SQL Server
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Fully qualified resourceId of storage
   */
readonly storageResourceId: string;

/**
   * Connection information for Azure SQL Database Managed Instance
   */
readonly targetConnectionInfo: MiSqlConnectionInfo;

/**
   * Task type.
   */
readonly taskType: 'ValidateMigrationInput.SqlServer.SqlDb.Sync';

/**
   * Task input
   */
readonly input?: ValidateSyncMigrationInputSqlServerTaskInput;

/**
   * Databases to migrate
   */
readonly selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInput[];

/**
   * Information for connecting to source SQL server
   */
readonly sourceConnectionInfo: SqlConnectionInfo;

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo: SqlConnectionInfo;
}

/**
 * DatamigrationServicesServicetasks resource
 */
export class DatamigrationServicesServicetasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesServicetasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services/serviceTasks@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesServicetasksProps): string {
    return JSON.stringify(
        {properties: {clientData: {}, taskType: "string"}, etag: "string"}
    );
  }
}
