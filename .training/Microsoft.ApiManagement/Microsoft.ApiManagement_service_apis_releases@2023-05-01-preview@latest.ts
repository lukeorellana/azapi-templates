import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisReleasesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisReleases resource
 */
export class ApimanagementServiceApisReleases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisReleasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/releases@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisReleasesProps): string {
    return JSON.stringify(
        {properties: {apiId: "string", notes: "string"}}
    );
  }
}
