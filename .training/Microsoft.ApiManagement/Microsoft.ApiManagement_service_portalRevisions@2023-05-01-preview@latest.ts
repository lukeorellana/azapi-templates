import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePortalrevisionsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePortalrevisions resource
 */
export class ApimanagementServicePortalrevisions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePortalrevisionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/portalRevisions@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePortalrevisionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", isCurrent: "${bool}"}}
    );
  }
}
