import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisResolversProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisResolvers resource
 */
export class ApimanagementServiceApisResolvers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisResolversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/resolvers@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisResolversProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", path: "string"}}
    );
  }
}
