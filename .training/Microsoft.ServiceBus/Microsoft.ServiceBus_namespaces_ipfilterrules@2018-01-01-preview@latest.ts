import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesIpfilterrulesProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesIpfilterrules resource
 */
export class ServicebusNamespacesIpfilterrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesIpfilterrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesIpfilterrulesProps): string {
    return JSON.stringify(
        {properties: {action: "string", filterName: "string", ipMask: "string"}}
    );
  }
}
