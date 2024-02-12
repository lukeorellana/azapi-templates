import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkNetworkfunctionsProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkNetworkfunctions resource
 */
export class HybridnetworkNetworkfunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkNetworkfunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/networkFunctions@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkNetworkfunctionsProps): string {
    return JSON.stringify(
        {properties: {allowSoftwareUpdate: "${bool}", networkFunctionDefinitionVersionResourceReference: {idType: "string"}, nfviId: "string", nfviType: "string", roleOverrideValues: ["string"], configurationType: "string"}, etag: "string"}
    );
  }
}
