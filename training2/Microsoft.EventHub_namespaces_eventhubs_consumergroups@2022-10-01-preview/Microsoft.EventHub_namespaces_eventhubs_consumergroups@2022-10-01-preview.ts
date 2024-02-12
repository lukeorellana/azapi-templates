import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesEventhubsConsumergroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:eventhubs;

/**
   * User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
   */
readonly userMetadata?: string;
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
