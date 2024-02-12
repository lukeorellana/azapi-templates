import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsVirtualnetworksProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsVirtualnetworks resource
 */
export class DevtestlabLabsVirtualnetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsVirtualnetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsVirtualnetworksProps): string {
    return JSON.stringify(
        {properties: {allowedSubnets: [{allowPublicIp: "string", labSubnetName: "string", resourceId: "string"}], description: "string", externalProviderResourceId: "string", subnetOverrides: [{labSubnetName: "string", resourceId: "string", sharedPublicIpAddressConfiguration: {allowedPorts: [{backendPort: "${int}", transportProtocol: "string"}]}, useInVmCreationPermission: "string", usePublicIpAddressPermission: "string", virtualNetworkPoolName: "string"}]}}
    );
  }
}
