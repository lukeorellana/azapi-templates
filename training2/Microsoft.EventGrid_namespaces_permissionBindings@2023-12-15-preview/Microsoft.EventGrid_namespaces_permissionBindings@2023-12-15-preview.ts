import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesPermissionbindingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * The name of the client group resource that the permission is bound to.The client group needs to be a resource under the same namespace the permission binding is a part of.
   */
readonly clientGroupName?: string;

/**
   * Description for the Permission Binding resource.
   */
readonly description?: string;

/**
   * The allowed permission.
   */
readonly permission?: 'Publisher''Subscriber';

/**
   * The name of the Topic Space resource that the permission is bound to.The Topic space needs to be a resource under the same namespace the permission binding is a part of.
   */
readonly topicSpaceName?: string;
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
