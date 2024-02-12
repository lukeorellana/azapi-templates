import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringservicesProps extends IAzAPIBaseProps {

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
