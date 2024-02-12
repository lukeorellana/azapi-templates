import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersAttacheddatabaseconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * The resource id of the cluster where the databases you would like to attach reside.
   */
readonly clusterResourceId: string;

/**
   * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
   */
readonly databaseName: string;

/**
   * Overrides the original database name. Relevant only when attaching to a specific database.
   */
readonly databaseNameOverride?: string;

/**
   * Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster.
   */
readonly databaseNamePrefix?: string;

/**
   * The default principals modification kind
   */
readonly defaultPrincipalsModificationKind: 'None''Replace''Union';

/**
   * Table level sharing specifications
   */
readonly tableLevelSharingProperties?: TableLevelSharingProperties;

/**
   * List of external tables to exclude from the follower database
   */
readonly externalTablesToExclude?: string[];

/**
   * List of external tables to include in the follower database
   */
readonly externalTablesToInclude?: string[];

/**
   * List of functions to exclude from the follower database
   */
readonly functionsToExclude?: string[];

/**
   * List of functions to include in the follower database
   */
readonly functionsToInclude?: string[];

/**
   * List of materialized views to exclude from the follower database
   */
readonly materializedViewsToExclude?: string[];

/**
   * List of materialized views to include in the follower database
   */
readonly materializedViewsToInclude?: string[];

/**
   * List of tables to exclude from the follower database
   */
readonly tablesToExclude?: string[];

/**
   * List of tables to include in the follower database
   */
readonly tablesToInclude?: string[];
}

/**
 * KustoClustersAttacheddatabaseconfigurations resource
 */
export class KustoClustersAttacheddatabaseconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersAttacheddatabaseconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersAttacheddatabaseconfigurationsProps): string {
    return JSON.stringify(
        {properties: {clusterResourceId: "string", databaseName: "string", databaseNameOverride: "string", databaseNamePrefix: "string", defaultPrincipalsModificationKind: "string", tableLevelSharingProperties: {externalTablesToExclude: ["string"], externalTablesToInclude: ["string"], functionsToExclude: ["string"], functionsToInclude: ["string"], materializedViewsToExclude: ["string"], materializedViewsToInclude: ["string"], tablesToExclude: ["string"], tablesToInclude: ["string"]}}}
    );
  }
}
