import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsGlobalreachconnectionsProps extends IAzAPIBaseProps {

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
