import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsClustersProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsClusters resource
 */
export class OperationalinsightsClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/clusters@2021-06-01";
  }

  protected getResourceBody(props: OperationalinsightsClustersProps): string {
    return JSON.stringify(
        {properties: {associatedWorkspaces: [{}], billingType: "string", capacityReservationProperties: {}, isAvailabilityZonesEnabled: "${bool}", isDoubleEncryptionEnabled: "${bool}", keyVaultProperties: {keyName: "string", keyRsaSize: "${int}", keyVaultUri: "string", keyVersion: "string"}}, sku: {capacity: "${int}", name: "CapacityReservation"}}
    );
  }
}
