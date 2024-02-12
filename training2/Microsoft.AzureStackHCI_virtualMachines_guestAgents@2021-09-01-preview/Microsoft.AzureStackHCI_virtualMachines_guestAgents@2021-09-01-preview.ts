import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesGuestagentsProps extends IAzAPIBaseProps {
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
   * The guest agent provisioning action.
   */
readonly provisioningAction?: 'install''repair''uninstall';

/**
   * The password to connect with the guest.
   */
readonly password?: string;

/**
   * The username to connect with the guest.
   */
readonly username?: string;

/**
   * The httpsProxy url.
   */
readonly httpsProxy?: string;
}

/**
 * AzurestackhciVirtualmachinesGuestagents resource
 */
export class AzurestackhciVirtualmachinesGuestagents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualmachinesGuestagentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualmachinesGuestagentsProps): string {
    return JSON.stringify(
        {properties: {credentials: {password: "string", username: "string"}, httpProxyConfig: {httpsProxy: "string"}, provisioningAction: "string"}}
    );
  }
}
