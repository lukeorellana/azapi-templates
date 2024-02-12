import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersElasticpoolsProps extends IAzAPIBaseProps {
/**
   * The elastic pool SKU.The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use theCapabilities_ListByLocationREST API or the following command:Azure CLI:az sql elastic-pool list-editions -l {location} -o table
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The number of secondary replicas associated with the elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools.
   */
readonly highAvailabilityReplicaCount?: number;

/**
   * The license type to apply for this elastic pool.
   */
readonly licenseType?: 'BasePrice''LicenseIncluded';

/**
   * Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
   */
readonly maintenanceConfigurationId?: string;

/**
   * The storage limit for the database elastic pool in bytes.
   */
readonly maxSizeBytes?: number;

/**
   * Minimal capacity that serverless pool will not shrink below, if not paused
   */
readonly minCapacity?: number;

/**
   * The per database settings for the elastic pool.
   */
readonly perDatabaseSettings?: ElasticPoolPerDatabaseSettings;

/**
   * Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
   */
readonly zoneRedundant?: bool;

/**
   * The maximum capacity any one database can consume.
   */
readonly maxCapacity?: number;

/**
   * The minimum capacity all databases are guaranteed.
   */
readonly minCapacity?: number;

/**
   * Capacity of the particular SKU.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * Size of the particular SKU
   */
readonly size?: string;

/**
   * The tier or edition of the particular SKU, e.g. Basic, Premium.
   */
readonly tier?: string;
}

/**
 * SqlServersElasticpools resource
 */
export class SqlServersElasticpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersElasticpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/elasticPools@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersElasticpoolsProps): string {
    return JSON.stringify(
        {properties: {highAvailabilityReplicaCount: "${int}", licenseType: "string", maintenanceConfigurationId: "string", maxSizeBytes: "${int}", minCapacity: "${int}", perDatabaseSettings: {maxCapacity: "${int}", minCapacity: "${int}"}, zoneRedundant: "${bool}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
