import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPublicipprefixesProps extends IAzAPIBaseProps {

}

/**
 * NetworkPublicipprefixes resource
 */
export class NetworkPublicipprefixes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPublicipprefixesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/publicIPPrefixes@2023-04-01";
  }

  protected getResourceBody(props: NetworkPublicipprefixesProps): string {
    return JSON.stringify(
        {properties: {customIPPrefix: {id: "string"}, ipTags: [{ipTagType: "string", tag: "string"}], natGateway: {id: "string", location: "string", properties: {idleTimeoutInMinutes: "${int}", publicIpAddresses: [{id: "string"}], publicIpPrefixes: [{id: "string"}]}, sku: {name: "Standard"}, tags: {}, zones: ["string"]}, prefixLength: "${int}", publicIPAddressVersion: "string"}, zones: ["string"], sku: {name: "Standard", tier: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
