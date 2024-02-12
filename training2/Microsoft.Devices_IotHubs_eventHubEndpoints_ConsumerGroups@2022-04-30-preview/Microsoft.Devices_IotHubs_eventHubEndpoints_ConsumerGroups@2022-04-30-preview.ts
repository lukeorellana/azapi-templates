import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsEventhubendpointsConsumergroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: eventHubEndponumbers;
}

/**
 * DevicesIothubsEventhubendpointsConsumergroups resource
 */
export class DevicesIothubsEventhubendpointsConsumergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesIothubsEventhubendpointsConsumergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2022-04-30-preview";
  }

  protected getResourceBody(props: DevicesIothubsEventhubendpointsConsumergroupsProps): string {
    return JSON.stringify(
        {properties: {name: "string"}}
    );
  }
}
