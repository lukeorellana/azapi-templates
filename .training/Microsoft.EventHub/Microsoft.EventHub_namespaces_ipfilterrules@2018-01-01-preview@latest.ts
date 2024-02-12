import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesIpfilterrulesProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesIpfilterrules resource
 */
export class EventhubNamespacesIpfilterrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesIpfilterrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesIpfilterrulesProps): string {
    return JSON.stringify(
        {properties: {action: "string", filterName: "string", ipMask: "string"}}
    );
  }
}
