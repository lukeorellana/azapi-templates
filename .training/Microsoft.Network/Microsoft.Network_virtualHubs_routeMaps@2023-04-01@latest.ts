import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsRoutemapsProps extends IAzAPIBaseProps {

}

/**
 * NetworkVirtualhubsRoutemaps resource
 */
export class NetworkVirtualhubsRoutemaps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsRoutemapsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/routeMaps@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsRoutemapsProps): string {
    return JSON.stringify(
        {properties: {associatedInboundConnections: ["string"], associatedOutboundConnections: ["string"], rules: [{actions: [{parameters: [{asPath: ["string"], community: ["string"], routePrefix: ["string"]}], type: "string"}], matchCriteria: [{asPath: ["string"], community: ["string"], matchCondition: "string", routePrefix: ["string"]}], name: "string", nextStepIfMatched: "string"}]}}
    );
  }
}
