import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesChannelsProps extends IAzAPIBaseProps {

}

/**
 * BotserviceBotservicesChannels resource
 */
export class BotserviceBotservicesChannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceBotservicesChannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/botServices/channels@2022-09-15";
  }

  protected getResourceBody(props: BotserviceBotservicesChannelsProps): string {
    return JSON.stringify(
        {properties: {etag: "string", location: "string", channelName: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
