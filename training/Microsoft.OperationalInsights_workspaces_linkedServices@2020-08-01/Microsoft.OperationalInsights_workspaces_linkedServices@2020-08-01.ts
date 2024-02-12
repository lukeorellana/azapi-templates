import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface OperationalinsightsWorkspacesLinkedservicesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | properties | The properties of the linked service. | LinkedServiceProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | provisioningState | The provisioning state of the linked service. | 'Deleting''ProvisioningAccount''Succeeded''Updating' |
// | resourceId | The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access | string |
// | writeAccessResourceId | The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access | string |
