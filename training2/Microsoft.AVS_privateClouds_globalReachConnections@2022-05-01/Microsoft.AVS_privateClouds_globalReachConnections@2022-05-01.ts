import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsGlobalreachconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateClouds;

/**
   * Authorization key from the peer express route used for the global reach connection
   */
readonly authorizationKey?: string;

/**
   * The ID of the Private Cloud's ExpressRoute Circuit that is participating in the global reach connection
   */
readonly expressRouteId?: string;

/**
   * Identifier of the ExpressRoute Circuit to peer with in the global reach connection
   */
readonly peerExpressRouteCircuit?: string;
}

/**
 * AvsPrivatecloudsGlobalreachconnections resource
 */
export class AvsPrivatecloudsGlobalreachconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsGlobalreachconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsGlobalreachconnectionsProps): string {
    return JSON.stringify(
        {properties: {authorizationKey: "string", expressRouteId: "string", peerExpressRouteCircuit: "string"}}
    );
  }
}
