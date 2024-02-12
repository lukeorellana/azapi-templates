import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkCustomipprefixesProps extends IAzAPIBaseProps {

}

/**
 * NetworkCustomipprefixes resource
 */
export class NetworkCustomipprefixes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkCustomipprefixesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/customIpPrefixes@2023-04-01";
  }

  protected getResourceBody(props: NetworkCustomipprefixesProps): string {
    return JSON.stringify(
        {properties: {asn: "string", authorizationMessage: "string", cidr: "string", commissionedState: "string", customIpPrefixParent: {id: "string"}, expressRouteAdvertise: "${bool}", geo: "string", noInternetAdvertise: "${bool}", prefixType: "string", signedMessage: "string"}, zones: ["string"], extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
