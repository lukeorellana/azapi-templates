import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversMigrationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * To trigger cancel for entire migration we need to send this flag as True
   */
readonly cancel?: 'False''True';

/**
   * When you want to trigger cancel for specific databases send cancel flag as True and database names in this array
   */
readonly dbsToCancelMigrationOn?: string[];

/**
   * Number of databases to migrate
   */
readonly dbsToMigrate?: string[];

/**
   * When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array
   */
readonly dbsToTriggerCutoverOn?: string[];

/**
   * There are two types of migration modes Online and Offline
   */
readonly migrationMode?: 'Offline''Online';

/**
   * End time in UTC for migration window
   */
readonly migrationWindowEndTimeInUtc?: string;

/**
   * Start time in UTC for migration window
   */
readonly migrationWindowStartTimeInUtc?: string;

/**
   * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
   */
readonly overwriteDbsInTarget?: 'False''True';

/**
   * Migration secret parameters
   */
readonly secretParameters?: MigrationSecretParameters;

/**
   * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
   */
readonly setupLogicalReplicationOnSourceDbIfNeeded?: 'False''True';

/**
   * Source server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
   */
readonly sourceDbServerFullyQualifiedDomainName?: string;

/**
   * ResourceId of the source database server
   */
readonly sourceDbServerResourceId?: string;

/**
   * Indicates whether the data migration should start right away
   */
readonly startDataMigration?: 'False''True';

/**
   * Target server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection
   */
readonly targetDbServerFullyQualifiedDomainName?: string;

/**
   * To trigger cutover for entire migration we need to send this flag as True
   */
readonly triggerCutover?: 'False''True';

/**
   * Admin credentials for source and target servers
   */
readonly adminCredentials: AdminCredentials;

/**
   * Gets or sets the username for the source server. This user need not be an admin.
   */
readonly sourceServerUsername?: string;

/**
   * Gets or sets the username for the target server. This user need not be an admin.
   */
readonly targetServerUsername?: string;

/**
   * Password for source server.
   */
readonly sourceServerPassword: string;

/**
   * Password for target server.
   */
readonly targetServerPassword: string;
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
