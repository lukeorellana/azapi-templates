import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterNetworkconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DevcenterNetworkconnections resource
 */
export class DevcenterNetworkconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterNetworkconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/networkConnections@2023-04-01";
  }

  protected getResourceBody(props: DevcenterNetworkconnectionsProps): string {
    return JSON.stringify(
        {properties: {domainJoinType: "string", domainName: "string", domainPassword: "string", domainUsername: "string", networkingResourceGroupName: "string", organizationUnit: "string", subnetId: "string"}}
    );
  }
}
