import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksSitesProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkMobilenetworksSites resource
 */
export class MobilenetworkMobilenetworksSites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkMobilenetworksSitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/mobileNetworks/sites@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkMobilenetworksSitesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
