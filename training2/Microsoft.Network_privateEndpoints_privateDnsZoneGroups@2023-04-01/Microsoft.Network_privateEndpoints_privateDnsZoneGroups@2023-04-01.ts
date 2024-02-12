import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivateendpointsPrivatednszonegroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateEndponumbers;

/**
   * A collection of private dns zone configurations of the private dns zone group.
   */
readonly privateDnsZoneConfigs?: PrivateDnsZoneConfig[];

/**
   * The resource id of the private dns zone.
   */
readonly privateDnsZoneId?: string;
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
