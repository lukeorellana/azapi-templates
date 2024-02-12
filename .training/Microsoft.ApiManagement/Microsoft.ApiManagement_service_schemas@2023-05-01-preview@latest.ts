import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceSchemasProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceSchemas resource
 */
export class ApimanagementServiceSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/schemas@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceSchemasProps): string {
    return JSON.stringify(
        {properties: {description: "string", schemaType: "string"}}
    );
  }
}
