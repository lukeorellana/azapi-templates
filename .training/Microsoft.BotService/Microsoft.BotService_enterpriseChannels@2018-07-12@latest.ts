import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceEnterprisechannelsProps extends IAzAPIBaseProps {

}

/**
 * BotserviceEnterprisechannels resource
 */
export class BotserviceEnterprisechannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceEnterprisechannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/enterpriseChannels@2018-07-12";
  }

  protected getResourceBody(props: BotserviceEnterprisechannelsProps): string {
    return JSON.stringify(
        {properties: {nodes: [{azureLocation: "string", azureSku: "string", name: "string", state: "string"}], state: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
