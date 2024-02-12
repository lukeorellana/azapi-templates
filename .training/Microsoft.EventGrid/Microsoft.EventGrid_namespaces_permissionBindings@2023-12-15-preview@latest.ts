import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesPermissionbindingsProps extends IAzAPIBaseProps {

}

/**
 * EventgridNamespacesPermissionbindings resource
 */
export class EventgridNamespacesPermissionbindings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesPermissionbindingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/permissionBindings@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesPermissionbindingsProps): string {
    return JSON.stringify(
        {properties: {clientGroupName: "string", description: "string", permission: "string", topicSpaceName: "string"}}
    );
  }
}
