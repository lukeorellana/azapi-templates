import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDscpconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkDscpconfigurations resource
 */
export class NetworkDscpconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDscpconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dscpConfigurations@2023-04-01";
  }

  protected getResourceBody(props: NetworkDscpconfigurationsProps): string {
    return JSON.stringify(
        {properties: {destinationIpRanges: [{endIP: "string", startIP: "string"}], destinationPortRanges: [{end: "${int}", start: "${int}"}], markings: ["${int}"], protocol: "string", qosDefinitionCollection: [{destinationIpRanges: [{endIP: "string", startIP: "string"}], destinationPortRanges: [{end: "${int}", start: "${int}"}], markings: ["${int}"], protocol: "string", sourceIpRanges: [{endIP: "string", startIP: "string"}], sourcePortRanges: [{end: "${int}", start: "${int}"}]}], sourceIpRanges: [{endIP: "string", startIP: "string"}], sourcePortRanges: [{end: "${int}", start: "${int}"}]}}
    );
  }
}
