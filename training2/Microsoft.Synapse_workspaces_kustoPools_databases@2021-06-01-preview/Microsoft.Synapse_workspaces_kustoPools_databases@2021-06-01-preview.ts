import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsDatabasesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: ReadOnlyFollowingReadWrite;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:kustoPools;

/**
   * Kind of the database
   */
readonly kind: 'ReadOnlyFollowing';

/**
   * Kind of the database
   */
readonly kind: 'ReadWrite';

/**
   * The time the data should be kept in cache for fast queries in TimeSpan.
   */
readonly hotCachePeriod?: string;

/**
   * The time the data should be kept before it stops being accessible to queries in TimeSpan.
   */
readonly softDeletePeriod?: string;
}

/**
 * SynapseWorkspacesKustopoolsDatabases resource
 */
export class SynapseWorkspacesKustopoolsDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/databases@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsDatabasesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
