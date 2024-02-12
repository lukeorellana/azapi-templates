import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationDatabasemigrationsProps extends IAzAPIBaseProps {

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
