import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SearchSearchservicesSharedprivatelinkresourcesProps extends IAzAPIBaseProps {

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
