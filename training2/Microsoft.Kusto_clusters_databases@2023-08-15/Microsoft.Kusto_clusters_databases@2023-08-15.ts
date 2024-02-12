import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: ReadOnlyFollowingReadWrite;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

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
   * KeyVault properties for the database encryption.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The time the data should be kept before it stops being accessible to queries in TimeSpan.
   */
readonly softDeletePeriod?: string;

/**
   * The name of the key vault key.
   */
readonly keyName?: string;

/**
   * The Uri of the key vault.
   */
readonly keyVaultUri?: string;

/**
   * The version of the key vault key.
   */
readonly keyVersion?: string;

/**
   * The user assigned identity (ARM resource id) that has access to the key.
   */
readonly userIdentity?: string;
}

/**
 * KustoClustersDatabases resource
 */
export class KustoClustersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
