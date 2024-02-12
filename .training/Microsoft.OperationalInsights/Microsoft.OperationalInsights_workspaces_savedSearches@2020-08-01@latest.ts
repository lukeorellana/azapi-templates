import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesSavedsearchesProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspacesSavedsearches resource
 */
export class OperationalinsightsWorkspacesSavedsearches extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesSavedsearchesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesSavedsearchesProps): string {
    return JSON.stringify(
        {properties: {category: "string", displayName: "string", functionAlias: "string", functionParameters: "string", query: "string", tags: [{name: "string", value: "string"}], version: "${int}"}, etag: "string"}
    );
  }
}
