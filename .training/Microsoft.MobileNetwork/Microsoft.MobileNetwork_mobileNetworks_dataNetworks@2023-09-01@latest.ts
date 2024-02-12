import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksDatanetworksProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkMobilenetworksDatanetworks resource
 */
export class MobilenetworkMobilenetworksDatanetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkMobilenetworksDatanetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkMobilenetworksDatanetworksProps): string {
    return JSON.stringify(
        {properties: {description: "string"}}
    );
  }
}
