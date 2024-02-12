import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabplansProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabplans resource
 */
export class LabservicesLabplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labPlans@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabplansProps): string {
    return JSON.stringify(
        {properties: {allowedRegions: ["string"], defaultAutoShutdownProfile: {disconnectDelay: "string", idleDelay: "string", noConnectDelay: "string", shutdownOnDisconnect: "string", shutdownOnIdle: "string", shutdownWhenNotConnected: "string"}, defaultConnectionProfile: {clientRdpAccess: "string", clientSshAccess: "string", webRdpAccess: "string", webSshAccess: "string"}, defaultNetworkProfile: {subnetId: "string"}, linkedLmsInstance: "string", sharedGalleryId: "string", supportInfo: {email: "string", instructions: "string", phone: "string", url: "string"}}}
    );
  }
}
