import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsEventhubendpointsConsumergroupsProps extends IAzAPIBaseProps {

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
