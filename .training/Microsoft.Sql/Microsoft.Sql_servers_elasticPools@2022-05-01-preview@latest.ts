import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersElasticpoolsProps extends IAzAPIBaseProps {

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
