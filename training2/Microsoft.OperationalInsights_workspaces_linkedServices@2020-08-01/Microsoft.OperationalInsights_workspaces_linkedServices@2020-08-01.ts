import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesLinkedservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The provisioning state of the linked service.
   */
readonly provisioningState?: 'Deleting''ProvisioningAccount''Succeeded''Updating';

/**
   * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
   */
readonly resourceId?: string;

/**
   * The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access
   */
readonly writeAccessResourceId?: string;
}

/**
 * OperationalinsightsWorkspacesLinkedservices resource
 */
export class OperationalinsightsWorkspacesLinkedservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesLinkedservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesLinkedservicesProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "string", resourceId: "string", writeAccessResourceId: "string"}}
    );
  }
}
