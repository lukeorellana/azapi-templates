import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersProps extends IAzAPIBaseProps {
/**
   * A description of the network security perimeter.
   */
readonly description?: string;

/**
   * A friendly name for the network security perimeter.
   */
readonly displayName?: string;
}

/**
 * NetworkNetworksecurityperimeters resource
 */
export class NetworkNetworksecurityperimeters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string"}}
    );
  }
}
