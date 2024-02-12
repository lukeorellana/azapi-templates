import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityuserconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkManagers;

/**
   * Flag if need to delete existing network security groups.
   */
readonly deleteExistingNSGs?: 'False''True';

/**
   * A description of the security user configuration.
   */
readonly description?: string;
}

/**
 * NetworkNetworkmanagersSecurityuserconfigurations resource
 */
export class NetworkNetworkmanagersSecurityuserconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityuserconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityuserconfigurationsProps): string {
    return JSON.stringify(
        {properties: {deleteExistingNSGs: "string", description: "string"}}
    );
  }
}
