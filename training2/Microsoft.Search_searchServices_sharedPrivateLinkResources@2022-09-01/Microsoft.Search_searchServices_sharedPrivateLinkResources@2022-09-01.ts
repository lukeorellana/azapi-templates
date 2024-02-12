import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SearchSearchservicesSharedprivatelinkresourcesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:searchServices;

/**
   * The group id from the provider of resource the shared private link resource is for.
   */
readonly groupId?: string;

/**
   * The resource id of the resource the shared private link resource is for.
   */
readonly privateLinkResourceId?: string;

/**
   * The provisioning state of the shared private link resource. Can be Updating, Deleting, Failed, Succeeded or Incomplete.
   */
readonly provisioningState?: 'Deleting''Failed''Incomplete''Succeeded''Updating';

/**
   * The request message for requesting approval of the shared private link resource.
   */
readonly requestMessage?: string;

/**
   * Optional. Can be used to specify the Azure Resource Manager location of the resource to which a shared private link is to be created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
   */
readonly resourceRegion?: string;

/**
   * Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * SearchSearchservicesSharedprivatelinkresources resource
 */
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
