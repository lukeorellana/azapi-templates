import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkSitesProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkSites resource
 */
export class HybridnetworkSites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkSitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/sites@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkSitesProps): string {
    return JSON.stringify(
        {properties: {nfvis: [{name: "string", nfviType: "string"}]}}
    );
  }
}
