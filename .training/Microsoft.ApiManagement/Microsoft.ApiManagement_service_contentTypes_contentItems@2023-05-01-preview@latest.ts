import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceContenttypesContentitemsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceContenttypesContentitems resource
 */
export class ApimanagementServiceContenttypesContentitems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceContenttypesContentitemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/contentTypes/contentItems@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceContenttypesContentitemsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
