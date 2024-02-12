import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDatacollectionendpointsProps extends IAzAPIBaseProps {

}

/**
 * InsightsDatacollectionendpoints resource
 */
export class InsightsDatacollectionendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDatacollectionendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/dataCollectionEndpoints@2022-06-01";
  }

  protected getResourceBody(props: InsightsDatacollectionendpointsProps): string {
    return JSON.stringify(
        {properties: {configurationAccess: {}, description: "string", immutableId: "string", logsIngestion: {}, metricsIngestion: {}, networkAcls: {publicNetworkAccess: "string"}}, kind: "string"}
    );
  }
}
