import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesProvisioningservicesProps extends IAzAPIBaseProps {

}

/**
 * DevicesProvisioningservices resource
 */
export class DevicesProvisioningservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesProvisioningservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/provisioningServices@2022-12-12";
  }

  protected getResourceBody(props: DevicesProvisioningservicesProps): string {
    return JSON.stringify(
        {properties: {allocationPolicy: "string", authorizationPolicies: [{keyName: "string", primaryKey: "string", rights: "string", secondaryKey: "string"}], enableDataResidency: "${bool}", iotHubs: [{allocationWeight: "${int}", applyAllocationPolicy: "${bool}", connectionString: "string", location: "string"}], ipFilterRules: [{action: "string", filterName: "string", ipMask: "string", target: "string"}], portalOperationsHostName: "string", privateEndpointConnections: [{properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}], provisioningState: "string", publicNetworkAccess: "string", state: "string"}, resourcegroup: "string", subscriptionid: "string", sku: {capacity: "${int}", name: "S1"}, etag: "string"}
    );
  }
}
