import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesLinkedservicesProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspacesLinkedservices resource
 */
export class OperationalinsightsWorkspacesLinkedservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesLinkedservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesLinkedservicesProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "string", resourceId: "string", writeAccessResourceId: "string"}}
    );
  }
}
