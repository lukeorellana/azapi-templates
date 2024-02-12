import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApisSchemasProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesApisSchemas resource
 */
export class ApimanagementServiceWorkspacesApisSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesApisSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/apis/schemas@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesApisSchemasProps): string {
    return JSON.stringify(
        {properties: {contentType: "string", document: {value: "string"}}}
    );
  }
}
