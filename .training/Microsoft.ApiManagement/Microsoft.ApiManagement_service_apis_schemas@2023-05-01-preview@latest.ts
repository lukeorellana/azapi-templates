import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisSchemasProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisSchemas resource
 */
export class ApimanagementServiceApisSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/schemas@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisSchemasProps): string {
    return JSON.stringify(
        {properties: {contentType: "string", document: {value: "string"}}}
    );
  }
}
