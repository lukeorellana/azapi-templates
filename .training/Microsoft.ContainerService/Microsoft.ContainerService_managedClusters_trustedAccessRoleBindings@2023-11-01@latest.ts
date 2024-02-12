import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersTrustedaccessrolebindingsProps extends IAzAPIBaseProps {

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
