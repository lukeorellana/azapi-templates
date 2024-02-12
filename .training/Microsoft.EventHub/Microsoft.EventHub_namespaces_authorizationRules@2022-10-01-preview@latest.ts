import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesAuthorizationrules resource
 */
export class EventhubNamespacesAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/authorizationRules@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
