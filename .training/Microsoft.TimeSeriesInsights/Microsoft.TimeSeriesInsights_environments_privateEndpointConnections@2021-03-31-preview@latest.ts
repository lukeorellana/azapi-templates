import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * TimeseriesinsightsEnvironmentsPrivateendpointconnections resource
 */
export class TimeseriesinsightsEnvironmentsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments/privateEndpointConnections@2021-03-31-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
