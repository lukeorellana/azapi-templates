import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesConnectionsProps extends IAzAPIBaseProps {

}

/**
 * BotserviceBotservicesConnections resource
 */
export class BotserviceBotservicesConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceBotservicesConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/botServices/connections@2022-09-15";
  }

  protected getResourceBody(props: BotserviceBotservicesConnectionsProps): string {
    return JSON.stringify(
        {properties: {clientId: "string", clientSecret: "string", parameters: [{key: "string", value: "string"}], provisioningState: "string", scopes: "string", serviceProviderDisplayName: "string", serviceProviderId: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
