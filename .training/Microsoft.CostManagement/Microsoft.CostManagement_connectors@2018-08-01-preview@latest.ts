import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementConnectorsProps extends IAzAPIBaseProps {

}

/**
 * CostmanagementConnectors resource
 */
export class CostmanagementConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/connectors@2018-08-01-preview";
  }

  protected getResourceBody(props: CostmanagementConnectorsProps): string {
    return JSON.stringify(
        {properties: {credentialsKey: "string", credentialsSecret: "string", displayName: "string", reportId: "string", status: "string"}, kind: "string"}
    );
  }
}
