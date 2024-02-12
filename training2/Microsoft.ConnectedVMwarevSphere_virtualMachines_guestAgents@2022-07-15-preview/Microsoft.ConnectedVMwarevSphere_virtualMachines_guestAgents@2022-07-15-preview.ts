import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesGuestagentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualMachines;

/**
   * Username / Password Credentials to provision guest agent.
   */
readonly credentials?: GuestCredential;

/**
   * HTTP Proxy configuration for the VM.
   */
readonly httpProxyConfig?: HttpProxyConfiguration;

/**
   * Gets or sets the guest agent provisioning action.
   */
readonly provisioningAction?: 'install''repair''uninstall';

/**
   * Gets or sets the password to connect with the guest.
   */
readonly password?: string;

/**
   * Gets or sets username to connect with the guest.
   */
readonly username?: string;

/**
   * Gets or sets httpsProxy url.
   */
readonly httpsProxy?: string;
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
