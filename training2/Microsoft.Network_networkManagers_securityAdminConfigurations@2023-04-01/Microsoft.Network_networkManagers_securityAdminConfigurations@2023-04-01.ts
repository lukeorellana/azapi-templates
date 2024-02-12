import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityadminconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkManagers;

/**
   * Enum list of network intent policy based services.
   */
readonly applyOnNetworkIntentPolicyBasedServices?: String array containing any of:'All''AllowRulesOnly''None';

/**
   * A description of the security configuration.
   */
readonly description?: string;
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
