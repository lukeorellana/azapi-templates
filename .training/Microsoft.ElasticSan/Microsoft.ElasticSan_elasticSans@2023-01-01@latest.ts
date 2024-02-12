import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansProps extends IAzAPIBaseProps {

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
