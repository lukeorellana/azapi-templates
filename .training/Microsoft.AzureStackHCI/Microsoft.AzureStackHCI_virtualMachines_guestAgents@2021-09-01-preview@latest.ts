import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesGuestagentsProps extends IAzAPIBaseProps {

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
