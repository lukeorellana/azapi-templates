import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksSlicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mobileNetworks;

/**
   * An optional description for this network slice.
   */
readonly description?: string;

/**
   * Single-network slice selection assistance information (S-NSSAI). Unique at the scope of a mobile network.
   */
readonly snssai: Snssai;

/**
   * Slice differentiator (SD).
   */
readonly sd?: stringConstranumbers:Pattern =^[A-Fa-f0-9]{6}$;

/**
   * Slice/service type (SST).
   */
readonly sst: number Constranumbers:Min value = 0Max value = 255;
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
