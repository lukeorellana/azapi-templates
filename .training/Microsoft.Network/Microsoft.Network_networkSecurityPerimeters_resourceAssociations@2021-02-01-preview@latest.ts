import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersResourceassociationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworksecurityperimetersResourceassociations resource
 */
export class NetworkNetworksecurityperimetersResourceassociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersResourceassociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersResourceassociationsProps): string {
    return JSON.stringify(
        {properties: {accessMode: "string", privateLinkResource: {id: "string"}, profile: {id: "string"}}}
    );
  }
}
