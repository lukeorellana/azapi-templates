import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePortalsettingsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePortalsettings resource
 */
export class ApimanagementServicePortalsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePortalsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/portalsettings@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePortalsettingsProps): string {
    return JSON.stringify(
        {properties: {subscriptions: {enabled: "${bool}"}, url: "string", userRegistration: {enabled: "${bool}"}, validationKey: "string"}}
    );
  }
}
