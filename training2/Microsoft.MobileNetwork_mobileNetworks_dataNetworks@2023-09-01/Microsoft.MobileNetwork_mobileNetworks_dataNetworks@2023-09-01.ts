import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksDatanetworksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mobileNetworks;

/**
   * An optional description for this data network.
   */
readonly description?: string;
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
