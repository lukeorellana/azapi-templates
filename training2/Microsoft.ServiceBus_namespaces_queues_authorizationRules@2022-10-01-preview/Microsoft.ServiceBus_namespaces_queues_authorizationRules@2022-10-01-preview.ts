import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesQueuesAuthorizationrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:queues;

/**
   * The rights associated with the rule.
   */
readonly rights: String array containing any of:'Listen''Manage''Send';
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
