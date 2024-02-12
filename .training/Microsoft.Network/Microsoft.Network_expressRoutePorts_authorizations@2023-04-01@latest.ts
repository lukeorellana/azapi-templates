import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressrouteportsAuthorizationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkExpressrouteportsAuthorizations resource
 */
export class NetworkExpressrouteportsAuthorizations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressrouteportsAuthorizationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRoutePorts/authorizations@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressrouteportsAuthorizationsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
