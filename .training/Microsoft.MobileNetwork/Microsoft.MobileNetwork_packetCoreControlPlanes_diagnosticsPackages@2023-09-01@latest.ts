import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesDiagnosticspackagesProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkPacketcorecontrolplanesDiagnosticspackages resource
 */
export class MobilenetworkPacketcorecontrolplanesDiagnosticspackages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkPacketcorecontrolplanesDiagnosticspackagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkPacketcorecontrolplanesDiagnosticspackagesProps): string {
    return JSON.stringify(
        
    );
  }
}
