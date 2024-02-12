import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsDevopsProps extends IAzAPIBaseProps {

}

/**
 * SecuritySecurityconnectorsDevops resource
 */
export class SecuritySecurityconnectorsDevops extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsDevopsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors/devops@2023-09-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsDevopsProps): string {
    return JSON.stringify(
        {properties: {authorization: {code: "string"}, autoDiscovery: "string", provisioningState: "string", topLevelInventoryList: ["string"]}}
    );
  }
}
