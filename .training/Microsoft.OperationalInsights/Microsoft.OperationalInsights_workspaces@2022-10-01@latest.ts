import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesProps extends IAzAPIBaseProps {

}

/**
 * OperationalinsightsWorkspaces resource
 */
export class OperationalinsightsWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces@2022-10-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesProps): string {
    return JSON.stringify(
        {properties: {defaultDataCollectionRuleResourceId: "string", features: {clusterResourceId: "string", disableLocalAuth: "${bool}", enableDataExport: "${bool}", enableLogAccessUsingOnlyResourcePermissions: "${bool}", immediatePurgeDataOn30Days: "${bool}"}, forceCmkForQuery: "${bool}", publicNetworkAccessForIngestion: "string", publicNetworkAccessForQuery: "string", retentionInDays: "${int}", sku: {capacityReservationLevel: "${int}", name: "string"}, workspaceCapping: {dailyQuotaGb: "${int}"}}, etag: "string"}
    );
  }
}
