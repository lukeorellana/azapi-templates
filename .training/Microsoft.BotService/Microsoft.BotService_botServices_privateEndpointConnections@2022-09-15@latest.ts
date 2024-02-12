import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * BotserviceBotservicesPrivateendpointconnections resource
 */
export class BotserviceBotservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceBotservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/botServices/privateEndpointConnections@2022-09-15";
  }

  protected getResourceBody(props: BotserviceBotservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
