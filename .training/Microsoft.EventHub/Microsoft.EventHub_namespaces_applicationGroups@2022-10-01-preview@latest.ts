import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesApplicationgroupsProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesApplicationgroups resource
 */
export class EventhubNamespacesApplicationgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesApplicationgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesApplicationgroupsProps): string {
    return JSON.stringify(
        {properties: {clientAppGroupIdentifier: "string", isEnabled: "${bool}", policies: [{name: "string", type: "string"}]}}
    );
  }
}
