import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTemplatesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceTemplates resource
 */
export class ApimanagementServiceTemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/templates@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTemplatesProps): string {
    return JSON.stringify(
        {properties: {body: "string", description: "string", parameters: [{description: "string", name: "string", title: "string"}], subject: "string", title: "string"}}
    );
  }
}
