import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkMobilenetworks resource
 */
export class MobilenetworkMobilenetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkMobilenetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/mobileNetworks@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkMobilenetworksProps): string {
    return JSON.stringify(
        {properties: {publicLandMobileNetworkIdentifier: {mcc: "string", mnc: "string"}}}
    );
  }
}
