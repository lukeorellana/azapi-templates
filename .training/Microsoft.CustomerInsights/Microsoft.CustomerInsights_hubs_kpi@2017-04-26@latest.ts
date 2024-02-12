import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsKpiProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsKpi resource
 */
export class CustomerinsightsHubsKpi extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsKpiProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/kpi@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsKpiProps): string {
    return JSON.stringify(
        {properties: {aliases: [{aliasName: "string", expression: "string"}], calculationWindow: "string", calculationWindowFieldName: "string", description: {}, displayName: {}, entityType: "string", entityTypeName: "string", expression: "string", extracts: [{expression: "string", extractName: "string"}], filter: "string", function: "string", groupBy: ["string"], thresHolds: {increasingKpi: "${bool}", lowerLimit: "${int}", upperLimit: "${int}"}, unit: "string"}}
    );
  }
}
