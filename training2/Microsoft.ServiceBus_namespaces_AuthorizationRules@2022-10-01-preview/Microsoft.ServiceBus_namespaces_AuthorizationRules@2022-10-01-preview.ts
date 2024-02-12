import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesAuthorizationrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * The rights associated with the rule.
   */
readonly rights: String array containing any of:'Listen''Manage''Send';
}

/**
 * ServicebusNamespacesAuthorizationrules resource
 */
export class ServicebusNamespacesAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/AuthorizationRules@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
