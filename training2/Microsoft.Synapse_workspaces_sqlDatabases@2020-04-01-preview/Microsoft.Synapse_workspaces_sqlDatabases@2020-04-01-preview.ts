import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqldatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The collation of the database.
   */
readonly collation?: string;

/**
   * Sql database data retention.
   */
readonly dataRetention?: SqlDatabaseDataRetention;

/**
   * The storage redundancy of the database.
   */
readonly storageRedundancy?: 'Geo''GeoZone''Local''Zone';

/**
   * Specifies the dropped database retention period (ISO8601 format).
   */
readonly dropRetentionPeriod?: string;

/**
   * Specifies the data retention period (ISO8601 format).
   */
readonly retentionPeriod?: string;
}

/**
 * SynapseWorkspacesSqldatabases resource
 */
export class SynapseWorkspacesSqldatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqldatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesSqldatabasesProps): string {
    return JSON.stringify(
        {properties: {collation: "string", dataRetention: {dropRetentionPeriod: "string", retentionPeriod: "string"}, storageRedundancy: "string"}}
    );
  }
}
