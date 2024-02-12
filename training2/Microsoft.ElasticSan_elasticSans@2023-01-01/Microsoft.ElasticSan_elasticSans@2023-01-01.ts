import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansProps extends IAzAPIBaseProps {
/**
   * Logical zone for Elastic San resource; example: ["1"].
   */
readonly availabilityZones?: string[];

/**
   * Base size of the Elastic San appliance in TiB.
   */
readonly baseSizeTiB: number;

/**
   * Extended size of the Elastic San appliance in TiB.
   */
readonly extendedCapacitySizeTiB: number;

/**
   * Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * resource sku
   */
readonly sku: Sku;

/**
   * The sku tier.
   */
readonly tier?: 'Premium';
}

/**
 * ElasticsanElasticsans resource
 */
export class ElasticsanElasticsans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticsanElasticsansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ElasticSan/elasticSans@2023-01-01";
  }

  protected getResourceBody(props: ElasticsanElasticsansProps): string {
    return JSON.stringify(
        {properties: {availabilityZones: ["string"], baseSizeTiB: "${int}", extendedCapacitySizeTiB: "${int}", publicNetworkAccess: "string", sku: {name: "string", tier: "Premium"}}}
    );
  }
}
