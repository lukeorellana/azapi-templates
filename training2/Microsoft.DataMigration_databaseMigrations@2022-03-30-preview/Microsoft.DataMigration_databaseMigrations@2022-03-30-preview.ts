import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationDatabasemigrationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * 
   */
readonly kind: 'SqlDb''SqlMi''SqlVm';

/**
   * ID tracking current migration operation.
   */
readonly migrationOperationId?: string;

/**
   * Resource Id of the Migration Service.
   */
readonly migrationService?: string;

/**
   * Error message for migration provisioning failure, if any.
   */
readonly provisioningError?: string;

/**
   * Resource Id of the target resource (SQL VM or SQL Managed Instance).
   */
readonly scope?: string;

/**
   * Name of the source database.
   */
readonly sourceDatabaseName?: string;

/**
   * Source SQL Server connection details.
   */
readonly sourceSqlConnection?: SqlConnectionInformation;

/**
   * List of tables to copy.
   */
readonly tableList?: string[];

/**
   * Database collation to be used for the target database.
   */
readonly targetDatabaseCollation?: string;

/**
   * Target SQL DB connection details.
   */
readonly targetSqlConnection?: SqlConnectionInformation;

/**
   * Authentication type.
   */
readonly authentication?: string;

/**
   * Data source.
   */
readonly dataSource?: string;

/**
   * Whether to encrypt connection or not.
   */
readonly encryptConnection?: bool;

/**
   * Password to connect to source SQL.
   */
readonly password?: string;

/**
   * Whether to trust server certificate or not.
   */
readonly trustServerCertificate?: bool;

/**
   * User name to connect to source SQL.
   */
readonly userName?: string;
}

/**
 * DatamigrationDatabasemigrations resource
 */
export class DatamigrationDatabasemigrations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationDatabasemigrationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/databaseMigrations@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationDatabasemigrationsProps): string {
    return JSON.stringify(
        {properties: {kind: "string", migrationOperationId: "string", migrationService: "string", provisioningError: "string", scope: "string", sourceDatabaseName: "string", sourceSqlConnection: {authentication: "string", dataSource: "string", encryptConnection: "${bool}", password: "string", trustServerCertificate: "${bool}", userName: "string"}, tableList: ["string"], targetDatabaseCollation: "string", targetSqlConnection: {authentication: "string", dataSource: "string", encryptConnection: "${bool}", password: "string", trustServerCertificate: "${bool}", userName: "string"}}}
    );
  }
}
