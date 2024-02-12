import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesEventhubsConsumergroupsProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesEventhubsConsumergroups resource
 */
export class EventhubNamespacesEventhubsConsumergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesEventhubsConsumergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesEventhubsConsumergroupsProps): string {
    return JSON.stringify(
        {properties: {userMetadata: "string"}}
    );
  }
}
