import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkVendorsProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkVendors resource
 */
export class HybridnetworkVendors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkVendorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/vendors@2022-01-01-preview";
  }

  protected getResourceBody(props: HybridnetworkVendorsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
