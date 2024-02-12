import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesIpfilterrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * The IP Filter Action
   */
readonly action?: 'Accept''Reject';

/**
   * IP Filter name
   */
readonly filterName?: string;

/**
   * IP Mask
   */
readonly ipMask?: string;
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
