import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityadminconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersSecurityadminconfigurations resource
 */
export class NetworkNetworkmanagersSecurityadminconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityadminconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityadminconfigurationsProps): string {
    return JSON.stringify(
        {properties: {applyOnNetworkIntentPolicyBasedServices: ["string"], description: "string"}}
    );
  }
}
