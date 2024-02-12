import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesEventhubsAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesEventhubsAuthorizationrules resource
 */
export class EventhubNamespacesEventhubsAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesEventhubsAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesEventhubsAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
