import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsComponentsProps extends IAzAPIBaseProps {

}

/**
 * InsightsComponents resource
 */
export class InsightsComponents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsComponentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/components@2020-02-02";
  }

  protected getResourceBody(props: InsightsComponentsProps): string {
    return JSON.stringify(
        {properties: {Application_Type: "string", DisableIpMasking: "${bool}", DisableLocalAuth: "${bool}", Flow_Type: "Bluefield", ForceCustomerStorageForProfiler: "${bool}", HockeyAppId: "string", ImmediatePurgeDataOn30Days: "${bool}", IngestionMode: "string", publicNetworkAccessForIngestion: "string", publicNetworkAccessForQuery: "string", Request_Source: "rest", RetentionInDays: "${int}", SamplingPercentage: "decimal-as-string", WorkspaceResourceId: "string"}, kind: "string", etag: "string"}
    );
  }
}
