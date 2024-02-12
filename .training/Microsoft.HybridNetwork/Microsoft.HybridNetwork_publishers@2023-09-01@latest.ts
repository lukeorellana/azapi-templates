import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkPublishers resource
 */
export class HybridnetworkPublishers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersProps): string {
    return JSON.stringify(
        {properties: {scope: "string"}}
    );
  }
}
