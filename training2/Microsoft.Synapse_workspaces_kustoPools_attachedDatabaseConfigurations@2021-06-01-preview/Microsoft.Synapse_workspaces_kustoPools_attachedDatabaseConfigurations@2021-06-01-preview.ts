import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsAttacheddatabaseconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:kustoPools;

/**
   * The resource id of the kusto pool where the databases you would like to attach reside.
   */
readonly clusterResourceId: string;

/**
   * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
   */
readonly databaseName: string;

/**
   * The default principals modification kind
   */
readonly defaultPrincipalsModificationKind: 'None''Replace''Union';

/**
   * Table level sharing specifications
   */
readonly tableLevelSharingProperties?: TableLevelSharingProperties;

/**
   * List of external tables exclude from the follower database
   */
readonly externalTablesToExclude?: string[];

/**
   * List of external tables to include in the follower database
   */
readonly externalTablesToInclude?: string[];

/**
   * List of materialized views exclude from the follower database
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
 * SynapseWorkspacesKustopoolsAttacheddatabaseconfigurations resource
 */
export class SynapseWorkspacesKustopoolsAttacheddatabaseconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsAttacheddatabaseconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsAttacheddatabaseconfigurationsProps): string {
    return JSON.stringify(
        {properties: {clusterResourceId: "string", databaseName: "string", defaultPrincipalsModificationKind: "string", tableLevelSharingProperties: {externalTablesToExclude: ["string"], externalTablesToInclude: ["string"], materializedViewsToExclude: ["string"], materializedViewsToInclude: ["string"], tablesToExclude: ["string"], tablesToInclude: ["string"]}}}
    );
  }
}
