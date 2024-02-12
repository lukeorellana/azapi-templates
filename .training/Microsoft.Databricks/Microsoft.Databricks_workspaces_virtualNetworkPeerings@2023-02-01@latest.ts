import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksWorkspacesVirtualnetworkpeeringsProps extends IAzAPIBaseProps {

}

/**
 * DatabricksWorkspacesVirtualnetworkpeerings resource
 */
export class DatabricksWorkspacesVirtualnetworkpeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksWorkspacesVirtualnetworkpeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01";
  }

  protected getResourceBody(props: DatabricksWorkspacesVirtualnetworkpeeringsProps): string {
    return JSON.stringify(
        {properties: {allowForwardedTraffic: "${bool}", allowGatewayTransit: "${bool}", allowVirtualNetworkAccess: "${bool}", databricksAddressSpace: {addressPrefixes: ["string"]}, databricksVirtualNetwork: {id: "string"}, remoteAddressSpace: {addressPrefixes: ["string"]}, remoteVirtualNetwork: {id: "string"}, useRemoteGateways: "${bool}"}}
    );
  }
}
