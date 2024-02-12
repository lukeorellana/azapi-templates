import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksSlicesProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkMobilenetworksSlices resource
 */
export class MobilenetworkMobilenetworksSlices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkMobilenetworksSlicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/mobileNetworks/slices@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkMobilenetworksSlicesProps): string {
    return JSON.stringify(
        {properties: {description: "string", snssai: {sd: "string", sst: "${int}"}}}
    );
  }
}
