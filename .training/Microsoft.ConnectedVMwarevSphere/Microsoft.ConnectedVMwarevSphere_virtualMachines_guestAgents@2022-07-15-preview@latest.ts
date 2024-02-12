import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesGuestagentsProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereVirtualmachinesGuestagents resource
 */
export class ConnectedvmwarevsphereVirtualmachinesGuestagents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVirtualmachinesGuestagentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVirtualmachinesGuestagentsProps): string {
    return JSON.stringify(
        {properties: {credentials: {password: "string", username: "string"}, httpProxyConfig: {httpsProxy: "string"}, provisioningAction: "string"}}
    );
  }
}
