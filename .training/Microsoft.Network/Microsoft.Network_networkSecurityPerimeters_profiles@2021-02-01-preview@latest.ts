import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersProfilesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworksecurityperimetersProfiles resource
 */
export class NetworkNetworksecurityperimetersProfiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersProfilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersProfilesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
