import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceSubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceSubscriptions resource
 */
export class ApimanagementServiceSubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceSubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/subscriptions@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceSubscriptionsProps): string {
    return JSON.stringify(
        {properties: {allowTracing: "${bool}", displayName: "string", ownerId: "string", primaryKey: "string", scope: "string", secondaryKey: "string", state: "string"}}
    );
  }
}
