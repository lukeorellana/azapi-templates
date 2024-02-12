import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersTrustedaccessrolebindingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedClusters;

/**
   * A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'.
   */
readonly roles: string[];

/**
   * The ARM resource ID of source resource that trusted access is configured for.
   */
readonly sourceResourceId: string;
}

/**
 * ContainerserviceManagedclustersTrustedaccessrolebindings resource
 */
export class ContainerserviceManagedclustersTrustedaccessrolebindings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceManagedclustersTrustedaccessrolebindingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings@2023-11-01";
  }

  protected getResourceBody(props: ContainerserviceManagedclustersTrustedaccessrolebindingsProps): string {
    return JSON.stringify(
        {properties: {roles: ["string"], sourceResourceId: "string"}}
    );
  }
}
