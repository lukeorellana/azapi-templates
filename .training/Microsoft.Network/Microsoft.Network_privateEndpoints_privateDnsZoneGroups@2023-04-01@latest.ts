import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivateendpointsPrivatednszonegroupsProps extends IAzAPIBaseProps {

}

/**
 * NetworkPrivateendpointsPrivatednszonegroups resource
 */
export class NetworkPrivateendpointsPrivatednszonegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivateendpointsPrivatednszonegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkPrivateendpointsPrivatednszonegroupsProps): string {
    return JSON.stringify(
        {properties: {privateDnsZoneConfigs: [{name: "string", properties: {privateDnsZoneId: "string"}}]}}
    );
  }
}
