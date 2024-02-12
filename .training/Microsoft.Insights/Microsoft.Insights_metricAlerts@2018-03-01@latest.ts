import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsMetricalertsProps extends IAzAPIBaseProps {

}

/**
 * InsightsMetricalerts resource
 */
export class InsightsMetricalerts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsMetricalertsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/metricAlerts@2018-03-01";
  }

  protected getResourceBody(props: InsightsMetricalertsProps): string {
    return JSON.stringify(
        {properties: {actions: [{actionGroupId: "string", webHookProperties: {}}], autoMitigate: "${bool}", criteria: {"odata.type": "string"}, description: "string", enabled: "${bool}", evaluationFrequency: "string", scopes: ["string"], severity: "${int}", targetResourceRegion: "string", targetResourceType: "string", windowSize: "string"}}
    );
  }
}
