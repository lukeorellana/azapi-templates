import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProjectsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:services;

/**
   * HTTP strong entity tag value. This is ignored if submitted.
   */
readonly etag?: string;

/**
   * Field that defines the Azure active directory application info, used to connect to the target Azure resource
   */
readonly azureAuthenticationInfo?: AzureActiveDirectoryApp;

/**
   * List of DatabaseInfo
   */
readonly databasesInfo?: DatabaseInfo[];

/**
   * Information for connecting to source
   */
readonly sourceConnectionInfo?: ConnectionInfo;

/**
   * Source platform for the project
   */
readonly sourcePlatform: 'MongoDb''MySQL''PostgreSql''SQL''Unknown';

/**
   * Information for connecting to target
   */
readonly targetConnectionInfo?: ConnectionInfo;

/**
   * Target platform for the project
   */
readonly targetPlatform: 'AzureDbForMySql''AzureDbForPostgreSql''MongoDb''SQLDB''SQLMI''Unknown';

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
   * Name of the database
   */
readonly sourceDatabaseName: string;

/**
   * Password credential.
   */
readonly password?: string;

/**
   * User name
   */
readonly userName?: string;

/**
   * Set the object type
   */
readonly type: MiSqlConnectionInfoMongoDbConnectionInfoMySqlConnectionInfoOracleConnectionInfoPostgreSqlConnectionInfoSqlConnectionInfo;

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
}

/**
 * DatamigrationServicesProjects resource
 */
export class DatamigrationServicesProjects extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesProjectsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services/projects@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesProjectsProps): string {
    return JSON.stringify(
        {properties: {azureAuthenticationInfo: {appKey: "string", applicationId: "string", ignoreAzurePermissions: "${bool}", tenantId: "string"}, databasesInfo: [{sourceDatabaseName: "string"}], sourceConnectionInfo: {password: "string", userName: "string", type: "string"}, sourcePlatform: "string", targetConnectionInfo: {password: "string", userName: "string", type: "string"}, targetPlatform: "string"}, etag: "string"}
    );
  }
}
