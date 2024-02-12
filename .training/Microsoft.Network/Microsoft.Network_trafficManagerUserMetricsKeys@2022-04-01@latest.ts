import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkTrafficmanagerusermetricskeysProps extends IAzAPIBaseProps {

}

/**
 * NetworkTrafficmanagerusermetricskeys resource
 */
export class NetworkTrafficmanagerusermetricskeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkTrafficmanagerusermetricskeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/trafficManagerUserMetricsKeys@2022-04-01";
  }

  protected getResourceBody(props: NetworkTrafficmanagerusermetricskeysProps): string {
    return JSON.stringify(
        
    );
  }
}
