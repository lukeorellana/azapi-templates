import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkMobilenetworksProps extends IAzAPIBaseProps {
/**
   * The unique public land mobile network identifier for the network. This is made up of the mobile country code and mobile network code, as defined inhttps://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.
   */
readonly publicLandMobileNetworkIdentifier: PlmnId;

/**
   * Mobile country code (MCC).
   */
readonly mcc: string Constranumbers:Pattern =^\d{3}$;

/**
   * Mobile network code (MNC).
   */
readonly mnc: string Constranumbers:Pattern =^\d{2,3}$;
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
