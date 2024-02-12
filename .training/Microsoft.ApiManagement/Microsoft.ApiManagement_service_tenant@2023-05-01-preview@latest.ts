import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTenantProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceTenant resource
 */
export class ApimanagementServiceTenant extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTenantProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/tenant@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTenantProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", primaryKey: "string", principalId: "string", secondaryKey: "string"}}
    );
  }
}
