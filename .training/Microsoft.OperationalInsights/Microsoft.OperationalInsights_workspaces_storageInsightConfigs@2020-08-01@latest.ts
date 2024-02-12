import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesStorageinsightconfigsProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspacesStorageinsightconfigs resource
 */
export class OperationalinsightsWorkspacesStorageinsightconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesStorageinsightconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesStorageinsightconfigsProps): string {
    return JSON.stringify(
        {properties: {containers: ["string"], storageAccount: {id: "string", key: "string"}, tables: ["string"]}, eTag: "string"}
    );
  }
}
