import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressrouteportsAuthorizationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:expressRoutePorts;
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
