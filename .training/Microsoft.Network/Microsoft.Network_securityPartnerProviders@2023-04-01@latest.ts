import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkSecuritypartnerprovidersProps extends IAzAPIBaseProps {

}

/**
 * NetworkSecuritypartnerproviders resource
 */
export class NetworkSecuritypartnerproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkSecuritypartnerprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/securityPartnerProviders@2023-04-01";
  }

  protected getResourceBody(props: NetworkSecuritypartnerprovidersProps): string {
    return JSON.stringify(
        {properties: {securityProviderName: "string", virtualHub: {id: "string"}}}
    );
  }
}
