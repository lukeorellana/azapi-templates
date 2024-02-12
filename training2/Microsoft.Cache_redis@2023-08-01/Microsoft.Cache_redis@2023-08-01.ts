import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The identity of the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * A list of availability zones denoting where the resource needs to come from.
   */
readonly zones?: string[];

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Specifies whether the non-ssl Redis server port (6379) is enabled.
   */
readonly enableNonSslPort?: bool;

/**
   * Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
   */
readonly minimumTlsVersion?: '1.0''1.1''1.2';

/**
   * Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
   */
readonly redisConfiguration?: RedisCommonPropertiesRedisConfiguration;

/**
   * Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'.
   */
readonly redisVersion?: string;

/**
   * The number of replicas to be created per primary.
   */
readonly replicasPerMaster?: number;

/**
   * The number of replicas to be created per primary.
   */
readonly replicasPerPrimary?: number;

/**
   * The number of shards to be created on a Premium Cluster Cache.
   */
readonly shardCount?: number;

/**
   * The SKU of the Redis cache to deploy.
   */
readonly sku: Sku;

/**
   * Static IP address. Optionally, may be specified when deploying a Redis cache inside an existing Azure Virtual Network; auto assigned by default.
   */
readonly staticIP?: stringConstranumbers:Pattern =^\d+\.\d+\.\d+\.\d+$;

/**
   * The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network,ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
   */
readonly subnetId?: stringConstranumbers:Pattern =^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork;

/**
   * A dictionary of tenant settings
   */
readonly tenantSettings?: RedisCommonPropertiesTenantSettings;

/**
   * Optional: Specifies the update channel for the monthly Redis updates your Redis Cache will receive. Caches using 'Preview' update channel get latest Redis updates at least 4 weeks ahead of 'Stable' channel caches. Default value is 'Stable'.
   */
readonly updateChannel?: 'Preview''Stable';

/**
   * Specifies whether AAD based authentication has been enabled or disabled for the cache
   */
readonly aad-enabled?: string;

/**
   * Specifies whether the aof backup is enabled
   */
readonly aof-backup-enabled?: string;

/**
   * First storage account connection string
   */
readonly aof-storage-connection-string-0?: string;

/**
   * Second storage account connection string
   */
readonly aof-storage-connection-string-1?: string;

/**
   * Specifies whether the authentication is disabled. Setting this property is highly discouraged from security point of view.
   */
readonly authnotrequired?: string;

/**
   * Value in megabytes reserved for fragmentation per shard
   */
readonly maxfragmentationmemory-reserved?: string;

/**
   * Value in megabytes reserved for non-cache usage per shard e.g. failover.
   */
readonly maxmemory-delta?: string;

/**
   * The eviction strategy used when your data won't fit within its memory limit.
   */
readonly maxmemory-policy?: string;

/**
   * Value in megabytes reserved for non-cache usage per shard e.g. failover.
   */
readonly maxmemory-reserved?: string;

/**
   * Preferred auth method to communicate to storage account used for data persistence, specify SAS or ManagedIdentity, default value is SAS
   */
readonly preferred-data-persistence-auth-method?: string;

/**
   * Specifies whether the rdb backup is enabled
   */
readonly rdb-backup-enabled?: string;

/**
   * Specifies the frequency for creating rdb backup in minutes. Valid values: (15, 30, 60, 360, 720, 1440)
   */
readonly rdb-backup-frequency?: string;

/**
   * Specifies the maximum number of snapshots for rdb backup
   */
readonly rdb-backup-max-snapshot-count?: string;

/**
   * The storage account connection string for storing rdb file
   */
readonly rdb-storage-connection-string?: string;

/**
   * SubscriptionId of the storage account for persistence (aof/rdb) using ManagedIdentity.
   */
readonly storage-subscription-id?: string;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
   */
readonly capacity: number;

/**
   * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
   */
readonly family: 'C''P';

/**
   * 
   */
readonly {customized property}?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
