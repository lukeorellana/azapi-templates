import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisenterpriseDatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:redisEnterprise;

/**
   * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
   */
readonly clientProtocol?: 'Encrypted''Planumberext';

/**
   * Clustering policy - default is OSSCluster. Specified at create time.
   */
readonly clusteringPolicy?: 'EnterpriseCluster''OSSCluster';

/**
   * Redis eviction policy - default is VolatileLRU
   */
readonly evictionPolicy?: 'AllKeysLFU''AllKeysLRU''AllKeysRandom''NoEviction''VolatileLFU''VolatileLRU''VolatileRandom''VolatileTTL';

/**
   * Optional set of properties to configure geo replication for this database.
   */
readonly geoReplication?: DatabasePropertiesGeoReplication;

/**
   * Optional set of redis modules to enable in this database - modules can only be added at creation time.
   */
readonly modules?: Module[];

/**
   * Persistence settings
   */
readonly persistence?: Persistence;

/**
   * TCP port of the database endpoint. Specified at create time. Defaults to an available port.
   */
readonly port?: number;

/**
   * Name for the group of linked database resources
   */
readonly groupNickname?: string;

/**
   * List of database resources to link with this database
   */
readonly linkedDatabases?: LinkedDatabase[];

/**
   * Resource ID of a database resource to link with this database.
   */
readonly id?: string;

/**
   * Configuration options for the module, e.g. 'ERROR_RATE 0.01 INITIAL_SIZE 400'.
   */
readonly args?: string;

/**
   * Sets whether AOF is enabled.
   */
readonly aofEnabled?: bool;

/**
   * Sets the frequency at which data is written to disk.
   */
readonly aofFrequency?: '1s''always';

/**
   * Sets whether RDB is enabled.
   */
readonly rdbEnabled?: bool;

/**
   * Sets the frequency at which a snapshot of the database is created.
   */
readonly rdbFrequency?: '12h''1h''6h';
}

/**
 * CacheRedisenterpriseDatabases resource
 */
export class CacheRedisenterpriseDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisenterpriseDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redisEnterprise/databases@2023-11-01";
  }

  protected getResourceBody(props: CacheRedisenterpriseDatabasesProps): string {
    return JSON.stringify(
        {properties: {clientProtocol: "string", clusteringPolicy: "string", evictionPolicy: "string", geoReplication: {groupNickname: "string", linkedDatabases: [{id: "string"}]}, modules: [{args: "string", name: "string"}], persistence: {aofEnabled: "${bool}", aofFrequency: "string", rdbEnabled: "${bool}", rdbFrequency: "string"}, port: "${int}"}}
    );
  }
}
