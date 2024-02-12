import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesInboundsecurityrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkVirtualAppliances;

/**
   * List of allowed rules.
   */
readonly rules?: InboundSecurityRules[];

/**
   * NVA port ranges to be opened up. One needs to provide specific ports.
   */
readonly destinationPortRange?: number;

/**
   * Protocol. This should be either TCP or UDP.
   */
readonly protocol?: 'TCP''UDP';

/**
   * The CIDR or source IP range. Only /30, /31 and /32 Ip ranges are allowed.
   */
readonly sourceAddressPrefix?: string;
}

/**
 * NetworkNetworkvirtualappliancesInboundsecurityrules resource
 */
export class NetworkNetworkvirtualappliancesInboundsecurityrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkvirtualappliancesInboundsecurityrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkvirtualappliancesInboundsecurityrulesProps): string {
    return JSON.stringify(
        {properties: {rules: [{destinationPortRange: "${int}", protocol: "string", sourceAddressPrefix: "string"}]}}
    );
  }
}
