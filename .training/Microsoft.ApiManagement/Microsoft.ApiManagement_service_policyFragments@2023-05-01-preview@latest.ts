import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePolicyfragmentsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePolicyfragments resource
 */
export class ApimanagementServicePolicyfragments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePolicyfragmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/policyFragments@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePolicyfragmentsProps): string {
    return JSON.stringify(
        {properties: {description: "string", format: "string", value: "string"}}
    );
  }
}
