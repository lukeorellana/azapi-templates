import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsLogprofilesProps extends IAzAPIBaseProps {

}

/**
 * InsightsLogprofiles resource
 */
export class InsightsLogprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsLogprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/logprofiles@2016-03-01";
  }

  protected getResourceBody(props: InsightsLogprofilesProps): string {
    return JSON.stringify(
        {properties: {categories: ["string"], locations: ["string"], retentionPolicy: {days: "${int}", enabled: "${bool}"}, serviceBusRuleId: "string", storageAccountId: "string"}}
    );
  }
}
