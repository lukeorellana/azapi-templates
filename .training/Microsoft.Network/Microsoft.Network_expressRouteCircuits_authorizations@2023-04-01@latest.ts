import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecircuitsAuthorizationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkExpressroutecircuitsAuthorizations resource
 */
export class NetworkExpressroutecircuitsAuthorizations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecircuitsAuthorizationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecircuitsAuthorizationsProps): string {
    return JSON.stringify(
        {properties: {authorizationKey: "string", authorizationUseStatus: "string"}}
    );
  }
}
