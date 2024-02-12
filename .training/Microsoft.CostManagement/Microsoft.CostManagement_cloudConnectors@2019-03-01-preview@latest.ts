import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementCloudconnectorsProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementCloudconnectors resource
 */
export class CostmanagementCloudconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementCloudconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/cloudConnectors@2019-03-01-preview";
  }

  protected getResourceBody(props: CostmanagementCloudconnectorsProps): string {
    return JSON.stringify(
        {properties: {billingModel: "string", credentialsKey: "string", credentialsSecret: "string", defaultManagementGroupId: "string", displayName: "string", reportId: "string", subscriptionId: "string"}, kind: "string"}
    );
  }
}
