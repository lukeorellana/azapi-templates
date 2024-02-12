import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceDocumentationsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceDocumentations resource
 */
export class ApimanagementServiceDocumentations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceDocumentationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/documentations@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceDocumentationsProps): string {
    return JSON.stringify(
        {properties: {content: "string", title: "string"}}
    );
  }
}
