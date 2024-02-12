import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsConnectorsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsConnectors resource
 */
export class CustomerinsightsHubsConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/connectors@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsConnectorsProps): string {
    return JSON.stringify(
        {properties: {connectorName: "string", connectorProperties: {}, connectorType: "string", description: "string", displayName: "string", isInternal: "${bool}"}}
    );
  }
}
