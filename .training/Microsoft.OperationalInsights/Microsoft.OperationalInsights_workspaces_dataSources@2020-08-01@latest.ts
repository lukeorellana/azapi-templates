import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesDatasourcesProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspacesDatasources resource
 */
export class OperationalinsightsWorkspacesDatasources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesDatasourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesDatasourcesProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
