import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNatgatewaysProps extends IAzAPIBaseProps {
/**
   * The nat gateway SKU.
   */
readonly sku?: NatGatewaySku;

/**
   * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
   */
readonly zones?: string[];

/**
   * The idle timeout of the nat gateway.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * An array of public ip addresses associated with the nat gateway resource.
   */
readonly publicIpAddresses?: SubResource[];

/**
   * An array of public ip prefixes associated with the nat gateway resource.
   */
readonly publicIpPrefixes?: SubResource[];

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkNatgateways resource
 */
export class NetworkNatgateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNatgatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/natGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkNatgatewaysProps): string {
    return JSON.stringify(
        {properties: {idleTimeoutInMinutes: "${int}", publicIpAddresses: [{id: "string"}], publicIpPrefixes: [{id: "string"}]}, zones: ["string"], sku: {name: "Standard"}}
    );
  }
}
