import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringservicesProps extends IAzAPIBaseProps {
/**
   * The SKU that defines the type of the peering service.
   */
readonly sku?: PeeringServiceSku;

/**
   * The Log Analytics Workspace Properties
   */
readonly logAnalyticsWorkspaceProperties?: LogAnalyticsWorkspaceProperties;

/**
   * The location (state/province) of the customer.
   */
readonly peeringServiceLocation?: string;

/**
   * The name of the service provider.
   */
readonly peeringServiceProvider?: string;

/**
   * The backup peering (Microsoft/service provider) location to be used for customer traffic.
   */
readonly providerBackupPeeringLocation?: string;

/**
   * The primary peering (Microsoft/service provider) location to be used for customer traffic.
   */
readonly providerPrimaryPeeringLocation?: string;
}

/**
 * PeeringPeeringservices resource
 */
export class PeeringPeeringservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeeringservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peeringServices@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeeringservicesProps): string {
    return JSON.stringify(
        {properties: {logAnalyticsWorkspaceProperties: {}, peeringServiceLocation: "string", peeringServiceProvider: "string", providerBackupPeeringLocation: "string", providerPrimaryPeeringLocation: "string"}, sku: {name: "string"}}
    );
  }
}
