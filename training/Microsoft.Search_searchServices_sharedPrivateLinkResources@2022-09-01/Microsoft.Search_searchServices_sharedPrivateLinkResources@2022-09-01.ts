import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SearchSearchservicesSharedprivatelinkresourcesProps extends IAzAPIBaseProps {

}

export class SearchSearchservicesSharedprivatelinkresources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SearchSearchservicesSharedprivatelinkresourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Search/searchServices/sharedPrivateLinkResources@2022-09-01";
  }

  protected getResourceBody(props: SearchSearchservicesSharedprivatelinkresourcesProps): string {
    return JSON.stringify(
      {properties: {groupId: "string", privateLinkResourceId: "string", provisioningState: "string", requestMessage: "string", resourceRegion: "string", status: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:searchServices |
// | properties | Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service. | SharedPrivateLinkResourceProperties |

// | Name | Description | Value |
// |-|-|-|
// | groupId | The group id from the provider of resource the shared private link resource is for. | string |
// | privateLinkResourceId | The resource id of the resource the shared private link resource is for. | string |
// | provisioningState | The provisioning state of the shared private link resource. Can be Updating, Deleting, Failed, Succeeded or Incomplete. | 'Deleting''Failed''Incomplete''Succeeded''Updating' |
// | requestMessage | The request message for requesting approval of the shared private link resource. | string |
// | resourceRegion | Optional. Can be used to specify the Azure Resource Manager location of the resource to which a shared private link is to be created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service). | string |
// | status | Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected. | 'Approved''Disconnected''Pending''Rejected' |
