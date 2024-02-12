import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivatednszonesProps extends IAzAPIBaseProps {

}

/**
 * NetworkPrivatednszones resource
 */
export class NetworkPrivatednszones extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivatednszonesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateDnsZones@2020-06-01";
  }

  protected getResourceBody(props: NetworkPrivatednszonesProps): string {
    return JSON.stringify(
        {properties: {}, etag: "string"}
    );
  }
}
