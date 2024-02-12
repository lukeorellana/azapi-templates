import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsAlertrulesProps extends IAzAPIBaseProps {

}

/**
 * InsightsAlertrules resource
 */
export class InsightsAlertrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsAlertrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/alertrules@2016-03-01";
  }

  protected getResourceBody(props: InsightsAlertrulesProps): string {
    return JSON.stringify(
        {properties: {action: {"odata.type": "string"}, actions: [{"odata.type": "string"}], condition: {dataSource: {legacyResourceId: "string", metricNamespace: "string", resourceLocation: "string", resourceUri: "string", "odata.type": "string"}, "odata.type": "string"}, description: "string", isEnabled: "${bool}", name: "string", provisioningState: "string"}}
    );
  }
}
