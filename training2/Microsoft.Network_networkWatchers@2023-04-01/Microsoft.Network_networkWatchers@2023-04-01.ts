import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkwatchers resource
 */
export class NetworkNetworkwatchers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkwatchersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkWatchers@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkwatchersProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
