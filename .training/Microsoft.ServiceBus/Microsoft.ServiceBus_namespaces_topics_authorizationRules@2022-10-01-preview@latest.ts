import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesTopicsAuthorizationrules resource
 */
export class ServicebusNamespacesTopicsAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesTopicsAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/topics/authorizationRules@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesTopicsAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
