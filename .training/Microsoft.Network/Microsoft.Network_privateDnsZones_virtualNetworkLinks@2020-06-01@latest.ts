import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivatednszonesVirtualnetworklinksProps extends IAzAPIBaseProps {

}

/**
 * NetworkPrivatednszonesVirtualnetworklinks resource
 */
export class NetworkPrivatednszonesVirtualnetworklinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivatednszonesVirtualnetworklinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01";
  }

  protected getResourceBody(props: NetworkPrivatednszonesVirtualnetworklinksProps): string {
    return JSON.stringify(
        {properties: {registrationEnabled: "${bool}", virtualNetwork: {id: "string"}}, etag: "string"}
    );
  }
}
