import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkBastionhostsProps extends IAzAPIBaseProps {

}

/**
 * NetworkBastionhosts resource
 */
export class NetworkBastionhosts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkBastionhostsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/bastionHosts@2023-04-01";
  }

  protected getResourceBody(props: NetworkBastionhostsProps): string {
    return JSON.stringify(
        {properties: {disableCopyPaste: "${bool}", dnsName: "string", enableFileCopy: "${bool}", enableIpConnect: "${bool}", enableKerberos: "${bool}", enableShareableLink: "${bool}", enableTunneling: "${bool}", ipConfigurations: [{id: "string", name: "string", properties: {privateIPAllocationMethod: "string", publicIPAddress: {id: "string"}, subnet: {id: "string"}}}], scaleUnits: "${int}"}, sku: {name: "string"}}
    );
  }
}
