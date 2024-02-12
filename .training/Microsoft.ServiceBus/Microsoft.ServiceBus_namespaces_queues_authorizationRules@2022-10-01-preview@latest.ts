import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesQueuesAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesQueuesAuthorizationrules resource
 */
export class ServicebusNamespacesQueuesAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesQueuesAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/queues/authorizationRules@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesQueuesAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
