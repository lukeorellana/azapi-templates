import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsProps extends IAzAPIBaseProps {

}

/**
 * WebHostingenvironments resource
 */
export class WebHostingenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsProps): string {
    return JSON.stringify(
        {properties: {clusterSettings: [{name: "string", value: "string"}], customDnsSuffixConfiguration: {kind: "string", properties: {certificateUrl: "string", dnsSuffix: "string", keyVaultReferenceIdentity: "string"}}, dedicatedHostCount: "${int}", dnsSuffix: "string", frontEndScaleFactor: "${int}", internalLoadBalancingMode: "string", ipsslAddressCount: "${int}", multiSize: "string", networkingConfiguration: {kind: "string", properties: {allowNewPrivateEndpointConnections: "${bool}", ftpEnabled: "${bool}", inboundIpAddressOverride: "string", remoteDebugEnabled: "${bool}"}}, upgradePreference: "string", userWhitelistedIpRanges: ["string"], virtualNetwork: {id: "string", subnet: "string"}, zoneRedundant: "${bool}"}, kind: "string"}
    );
  }
}
