import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversMigrationsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlFlexibleserversMigrations resource
 */
export class DbforpostgresqlFlexibleserversMigrations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversMigrationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/migrations@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversMigrationsProps): string {
    return JSON.stringify(
        {properties: {cancel: "string", dbsToCancelMigrationOn: ["string"], dbsToMigrate: ["string"], dbsToTriggerCutoverOn: ["string"], migrationMode: "string", migrationWindowEndTimeInUtc: "string", migrationWindowStartTimeInUtc: "string", overwriteDbsInTarget: "string", secretParameters: {adminCredentials: {sourceServerPassword: "string", targetServerPassword: "string"}, sourceServerUsername: "string", targetServerUsername: "string"}, setupLogicalReplicationOnSourceDbIfNeeded: "string", sourceDbServerFullyQualifiedDomainName: "string", sourceDbServerResourceId: "string", startDataMigration: "string", targetDbServerFullyQualifiedDomainName: "string", triggerCutover: "string"}}
    );
  }
}
