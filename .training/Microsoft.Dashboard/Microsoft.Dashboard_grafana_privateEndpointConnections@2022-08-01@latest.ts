import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DashboardGrafanaPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DashboardGrafanaPrivateendpointconnections resource
 */
export class DashboardGrafanaPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DashboardGrafanaPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Dashboard/grafana/privateEndpointConnections@2022-08-01";
  }

  protected getResourceBody(props: DashboardGrafanaPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
