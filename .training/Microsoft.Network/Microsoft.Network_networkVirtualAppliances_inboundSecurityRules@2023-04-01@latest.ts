import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesInboundsecurityrulesProps extends IAzAPIBaseProps {

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
