import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceContenttypesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceContenttypes resource
 */
export class ApimanagementServiceContenttypes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceContenttypesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/contentTypes@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceContenttypesProps): string {
    return JSON.stringify(
        {properties: {description: "string", id: "string", name: "string", version: "string"}}
    );
  }
}
