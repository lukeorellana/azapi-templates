import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkBastionhostsProps extends IAzAPIBaseProps {
/**
   * The sku of this Bastion Host.
   */
readonly sku?: Sku;

/**
   * Enable/Disable Copy/Paste feature of the Bastion Host resource.
   */
readonly disableCopyPaste?: bool;

/**
   * FQDN for the endpoint on which bastion host is accessible.
   */
readonly dnsName?: string;

/**
   * Enable/Disable File Copy feature of the Bastion Host resource.
   */
readonly enableFileCopy?: bool;

/**
   * Enable/Disable IP Connect feature of the Bastion Host resource.
   */
readonly enableIpConnect?: bool;

/**
   * Enable/Disable Kerberos feature of the Bastion Host resource.
   */
readonly enableKerberos?: bool;

/**
   * Enable/Disable Shareable Link of the Bastion Host resource.
   */
readonly enableShareableLink?: bool;

/**
   * Enable/Disable Tunneling feature of the Bastion Host resource.
   */
readonly enableTunneling?: bool;

/**
   * IP configuration of the Bastion Host resource.
   */
readonly ipConfigurations?: BastionHostIPConfiguration[];

/**
   * The scale units for the Bastion Host resource.
   */
readonly scaleUnits?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Private IP allocation method.
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * Reference of the PublicIP resource.
   */
readonly publicIPAddress: SubResource;

/**
   * Reference of the subnet resource.
   */
readonly subnet: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;
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
